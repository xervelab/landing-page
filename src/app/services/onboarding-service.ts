export type ServiceNeed =
  | "Website"
  | "Marketing"
  | "Social Media"
  | "SEO"
  | "Remote Staff"
  | "E-commerce"
  | "IT Support"
  | "Multiple Services";

export type TeamSize =
  | "1 professional"
  | "2-3 professionals"
  | "4-10 professionals"
  | "10+ professionals"
  | "Not sure";

export type RoleNeeded =
  | "Developer"
  | "Virtual Assistant"
  | "Designer"
  | "SEO"
  | "Social Media"
  | "Video Editor"
  | "Customer Support"
  | "Sales"
  | "Other";

export type PreferredContactMethod = "Email" | "Phone" | "WhatsApp";

export type OnboardingFormData = {
  serviceNeeds: ServiceNeed[];
  teamSize: TeamSize | "";
  rolesNeeded: RoleNeeded[];
  company: string;
  website: string;
  industry: string;
  country: string;
  businessSize: string;
  budget: string;
  timeline: string;
  description: string;
  name: string;
  businessEmail: string;
  phone: string;
  preferredContactMethod: PreferredContactMethod | "";
  selectedPlan: string;
};

export type OnboardingPayload = OnboardingFormData & {
  source: "landing-page";
  submittedAt: string;
};

export type OnboardingServiceResult = {
  requestId: string;
  mode: "api" | "local";
};

export class OnboardingServiceError extends Error {
  code: "validation" | "network" | "api" | "unknown" | "spam" | "duplicate";

  constructor(code: OnboardingServiceError["code"], message: string) {
    super(message);
    this.code = code;
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const websitePattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function stripDangerousCharacters(value: string) {
  return value.replace(/[<>`]/g, "").replace(/[\u0000-\u001F\u007F]/g, "");
}

function sanitizeText(value: string) {
  return stripDangerousCharacters(normalizeWhitespace(value));
}

function sanitizeLongText(value: string) {
  return stripDangerousCharacters(value).replace(/\s{2,}/g, " ").trim();
}

export function sanitizeOnboardingFormData(data: OnboardingFormData): OnboardingFormData {
  return {
    ...data,
    company: sanitizeText(data.company),
    website: sanitizeText(data.website),
    industry: sanitizeText(data.industry),
    country: sanitizeText(data.country),
    businessSize: sanitizeText(data.businessSize),
    budget: sanitizeText(data.budget),
    timeline: sanitizeText(data.timeline),
    description: sanitizeLongText(data.description),
    name: sanitizeText(data.name),
    businessEmail: sanitizeText(data.businessEmail).toLowerCase(),
    phone: sanitizeText(data.phone),
    selectedPlan: sanitizeText(data.selectedPlan),
    serviceNeeds: data.serviceNeeds.map((value) => sanitizeText(value) as ServiceNeed),
    rolesNeeded: data.rolesNeeded.map((value) => sanitizeText(value) as RoleNeeded),
  };
}

export function validateOnboardingFormData(data: OnboardingFormData) {
  const errors: Partial<Record<keyof OnboardingFormData, string>> = {};

  if (!data.serviceNeeds.length) {
    errors.serviceNeeds = "Select at least one service.";
  }

  if (!data.teamSize) {
    errors.teamSize = "Choose the team size you need.";
  }

  if (!data.rolesNeeded.length) {
    errors.rolesNeeded = "Select at least one role.";
  }

  if (!data.company) {
    errors.company = "Company is required.";
  }

  if (!data.website) {
    errors.website = "Website is required.";
  } else if (!websitePattern.test(data.website)) {
    errors.website = "Enter a valid website URL or domain.";
  }

  if (!data.industry) {
    errors.industry = "Industry is required.";
  }

  if (!data.country) {
    errors.country = "Country is required.";
  }

  if (!data.businessSize) {
    errors.businessSize = "Business size is required.";
  }

  if (!data.budget) {
    errors.budget = "Budget is required.";
  }

  if (!data.timeline) {
    errors.timeline = "Timeline is required.";
  }

  if (!data.description || data.description.length < 20) {
    errors.description = "Project description must be at least 20 characters.";
  }

  if (!data.name) {
    errors.name = "Name is required.";
  }

  if (!data.businessEmail) {
    errors.businessEmail = "Business email is required.";
  } else if (!emailPattern.test(data.businessEmail)) {
    errors.businessEmail = "Enter a valid business email.";
  }

  if (!data.preferredContactMethod) {
    errors.preferredContactMethod = "Select a preferred contact method.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

function buildPayload(data: OnboardingFormData): OnboardingPayload {
  return {
    ...data,
    source: "landing-page",
    submittedAt: new Date().toISOString(),
  };
}

function getSimulationMode() {
  if (typeof window === "undefined") {
    return "none";
  }

  return window.localStorage.getItem("xervelab:onboarding:simulate") || "none";
}

async function submitViaApi(endpoint: string, payload: OnboardingPayload) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new OnboardingServiceError(
        "api",
        `Request failed with status ${response.status}. Please try again.`,
      );
    }

    let requestId = crypto.randomUUID();

    try {
      const parsed = (await response.json()) as { requestId?: string };
      if (parsed.requestId) {
        requestId = parsed.requestId;
      }
    } catch {
      // Response body can be empty; keep generated request id.
    }

    return {
      requestId,
      mode: "api" as const,
    };
  } catch (error) {
    if (error instanceof OnboardingServiceError) {
      throw error;
    }

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new OnboardingServiceError(
        "network",
        "Request timed out. Please check your connection and retry.",
      );
    }

    throw new OnboardingServiceError(
      "network",
      "Network error while submitting your request. Please try again.",
    );
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function submitViaLocalFallback(payload: OnboardingPayload) {
  const key = "xervelab:onboarding:local-submissions";
  const existing = window.localStorage.getItem(key);
  const parsed = existing ? (JSON.parse(existing) as OnboardingPayload[]) : [];
  parsed.push(payload);
  window.localStorage.setItem(key, JSON.stringify(parsed));

  await new Promise((resolve) => window.setTimeout(resolve, 700));

  return {
    requestId: crypto.randomUUID(),
    mode: "local" as const,
  };
}

export async function submitOnboardingRequest(data: OnboardingFormData): Promise<OnboardingServiceResult> {
  const sanitized = sanitizeOnboardingFormData(data);
  const validation = validateOnboardingFormData(sanitized);

  if (!validation.isValid) {
    throw new OnboardingServiceError(
      "validation",
      "Please complete all required fields before submitting.",
    );
  }

  if (!navigator.onLine) {
    throw new OnboardingServiceError(
      "network",
      "You appear to be offline. Reconnect and try again.",
    );
  }

  const simulationMode = getSimulationMode();
  if (simulationMode === "api-failure") {
    throw new OnboardingServiceError("api", "Simulated API failure for QA testing.");
  }
  if (simulationMode === "network-failure") {
    throw new OnboardingServiceError("network", "Simulated network failure for QA testing.");
  }

  const payload = buildPayload(sanitized);
  const endpoint = import.meta.env.VITE_ONBOARDING_API_URL?.trim();

  if (endpoint) {
    return submitViaApi(endpoint, payload);
  }

  return submitViaLocalFallback(payload);
}
