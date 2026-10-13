export type CareerApplicationData = {
  jobId: string;
  jobSlug: string;
  name: string;
  businessEmail: string;
  portfolioUrl: string;
  coverLetter: string;
};

type CareerApplicationPayload = CareerApplicationData & {
  submittedAt: string;
  source: "careers-page";
};

export type CareerApplicationResult = {
  requestId: string;
  mode: "api" | "local";
};

export class CareerApplicationError extends Error {
  code: "validation" | "network" | "api" | "spam";

  constructor(code: CareerApplicationError["code"], message: string) {
    super(message);
    this.code = code;
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

function sanitize(value: string) {
  return value
    .replace(/[<>`]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function sanitizeCareerApplication(data: CareerApplicationData): CareerApplicationData {
  return {
    ...data,
    name: sanitize(data.name),
    businessEmail: sanitize(data.businessEmail).toLowerCase(),
    portfolioUrl: sanitize(data.portfolioUrl),
    coverLetter: sanitize(data.coverLetter),
  };
}

export function validateCareerApplication(data: CareerApplicationData) {
  const errors: Partial<Record<keyof CareerApplicationData, string>> = {};

  if (!data.name) {
    errors.name = "Name is required.";
  }

  if (!data.businessEmail) {
    errors.businessEmail = "Business email is required.";
  } else if (!emailPattern.test(data.businessEmail)) {
    errors.businessEmail = "Enter a valid business email.";
  }

  if (data.portfolioUrl && !urlPattern.test(data.portfolioUrl)) {
    errors.portfolioUrl = "Portfolio URL is invalid.";
  }

  if (!data.coverLetter || data.coverLetter.length < 40) {
    errors.coverLetter = "Cover letter must be at least 40 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

async function submitViaApi(endpoint: string, payload: CareerApplicationPayload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new CareerApplicationError("api", `Submission failed with status ${response.status}.`);
  }

  let requestId = crypto.randomUUID();

  try {
    const parsed = (await response.json()) as { requestId?: string };
    if (parsed.requestId) {
      requestId = parsed.requestId;
    }
  } catch {
    // Ignore parse errors for empty API responses.
  }

  return {
    requestId,
    mode: "api" as const,
  };
}

async function submitViaLocal(payload: CareerApplicationPayload) {
  const key = "xervelab:careers:applications";
  const existing = window.localStorage.getItem(key);
  const parsed = existing ? (JSON.parse(existing) as CareerApplicationPayload[]) : [];
  parsed.push(payload);
  window.localStorage.setItem(key, JSON.stringify(parsed));

  await new Promise((resolve) => window.setTimeout(resolve, 500));

  return {
    requestId: crypto.randomUUID(),
    mode: "local" as const,
  };
}

export async function submitCareerApplication(
  data: CareerApplicationData,
): Promise<CareerApplicationResult> {
  const sanitized = sanitizeCareerApplication(data);
  const validation = validateCareerApplication(sanitized);

  if (!validation.isValid) {
    throw new CareerApplicationError("validation", "Please complete the required fields.");
  }

  if (!navigator.onLine) {
    throw new CareerApplicationError("network", "You appear to be offline. Please try again later.");
  }

  const payload: CareerApplicationPayload = {
    ...sanitized,
    submittedAt: new Date().toISOString(),
    source: "careers-page",
  };

  const endpoint = import.meta.env.VITE_CAREERS_APPLICATION_API_URL?.trim();

  try {
    if (endpoint) {
      return await submitViaApi(endpoint, payload);
    }

    return await submitViaLocal(payload);
  } catch (error) {
    if (error instanceof CareerApplicationError) {
      throw error;
    }

    throw new CareerApplicationError(
      "network",
      "Network error while submitting application. Please retry.",
    );
  }
}
