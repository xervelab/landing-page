import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Clock3,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  OnboardingFormData,
  OnboardingServiceError,
  PreferredContactMethod,
  RoleNeeded,
  ServiceNeed,
  TeamSize,
  sanitizeOnboardingFormData,
  submitOnboardingRequest,
  validateOnboardingFormData,
} from "../services/onboarding-service";
import { usePageSeo } from "./shared/use-page-seo";

type GetStartedPageProps = {
  selectedPlan?: string;
};

const availablePlans = ["Starter", "Professional", "Enterprise"] as const;
const stepCount = 6;
const draftStorageKey = "xervelab:onboarding:draft";
const sessionSubmissionKey = "xervelab:onboarding:last-submission";
const minimumCompletionMs = 5000;

const serviceOptions: ServiceNeed[] = [
  "Website",
  "Marketing",
  "Social Media",
  "SEO",
  "Remote Staff",
  "E-commerce",
  "IT Support",
  "Multiple Services",
];

const teamSizeOptions: TeamSize[] = [
  "1 professional",
  "2-3 professionals",
  "4-10 professionals",
  "10+ professionals",
  "Not sure",
];

const roleOptions: RoleNeeded[] = [
  "Developer",
  "Virtual Assistant",
  "Designer",
  "SEO",
  "Social Media",
  "Video Editor",
  "Customer Support",
  "Sales",
  "Other",
];

const preferredContactOptions: PreferredContactMethod[] = ["Email", "Phone", "WhatsApp"];

function createInitialFormState(selectedPlan: string): OnboardingFormData {
  return {
    serviceNeeds: [],
    teamSize: "",
    rolesNeeded: [],
    company: "",
    website: "",
    industry: "",
    country: "",
    businessSize: "",
    budget: "",
    timeline: "",
    description: "",
    name: "",
    businessEmail: "",
    phone: "",
    preferredContactMethod: "",
    selectedPlan,
  };
}

function hashSubmissionPayload(data: OnboardingFormData) {
  const source = JSON.stringify(data);
  let hash = 0;

  for (let index = 0; index < source.length; index += 1) {
    hash = (hash << 5) - hash + source.charCodeAt(index);
    hash |= 0;
  }

  return String(hash);
}

export function GetStartedPage({ selectedPlan }: GetStartedPageProps) {
  const normalizedPlan = useMemo(() => {
    const matchedPlan = availablePlans.find(
      (plan) => plan.toLowerCase() === selectedPlan?.toLowerCase(),
    );

    return matchedPlan ?? "Professional";
  }, [selectedPlan]);

  const [formData, setFormData] = useState<OnboardingFormData>(() =>
    createInitialFormState(normalizedPlan),
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<"api" | "local" | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof OnboardingFormData, string>>>({});
  const [successRequestId, setSuccessRequestId] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const formStartedAtRef = useRef(Date.now());

  const progressPercentage = Math.round((currentStep / stepCount) * 100);

  usePageSeo({
    title: "Get Started | XerveLab",
    description:
      "Start your XerveLab onboarding process with a structured multi-step intake for services, staffing, timeline, and project requirements.",
    canonicalUrl: "https://xervelab.online/#/get-started",
    ogTitle: "Get Started | XerveLab",
    ogDescription:
      "Submit your project requirements through a guided onboarding flow.",
    ogUrl: "https://xervelab.online/#/get-started",
    twitterTitle: "Get Started | XerveLab",
    twitterDescription:
      "Use our onboarding flow to get matched with the right XerveLab service model.",
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://xervelab.online/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Get Started",
          item: "https://xervelab.online/#/get-started",
        },
      ],
    },
  });

  useEffect(() => {
    try {
      const draft = window.localStorage.getItem(draftStorageKey);
      if (!draft) {
        return;
      }

      const parsed = JSON.parse(draft) as Partial<OnboardingFormData>;
      setFormData((current) => ({
        ...current,
        ...parsed,
        selectedPlan: current.selectedPlan,
      }));
    } catch {
      window.localStorage.removeItem(draftStorageKey);
    }
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.localStorage.setItem(draftStorageKey, JSON.stringify(formData));
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [formData]);

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      selectedPlan: normalizedPlan,
    }));
  }, [normalizedPlan]);

  const updateField = <K extends keyof OnboardingFormData>(field: K, value: OnboardingFormData[K]) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
    setFieldErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
    setSubmissionError(null);
  };

  const toggleListValue = (field: "serviceNeeds" | "rolesNeeded", value: string) => {
    setFormData((current) => {
      const existing = current[field] as string[];
      const next = existing.includes(value)
        ? existing.filter((item) => item !== value)
        : [...existing, value];

      return {
        ...current,
        [field]: next,
      };
    });

    setFieldErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
    setSubmissionError(null);
  };

  const validateStep = (step: number) => {
    const sanitized = sanitizeOnboardingFormData(formData);
    const validation = validateOnboardingFormData(sanitized);
    const errors: Partial<Record<keyof OnboardingFormData, string>> = {};

    const fieldsPerStep: Record<number, Array<keyof OnboardingFormData>> = {
      1: ["serviceNeeds"],
      2: ["teamSize"],
      3: ["rolesNeeded"],
      4: ["company", "website", "industry", "country", "businessSize"],
      5: ["budget", "timeline", "description"],
      6: ["name", "businessEmail", "preferredContactMethod"],
    };

    fieldsPerStep[step].forEach((field) => {
      const error = validation.errors[field];
      if (error) {
        errors[field] = error;
      }
    });

    setFieldErrors((current) => ({
      ...current,
      ...errors,
    }));

    return Object.keys(errors).length === 0;
  };

  const goNextStep = () => {
    if (!validateStep(currentStep)) {
      return;
    }

    setCurrentStep((previous) => Math.min(previous + 1, stepCount));
  };

  const goPreviousStep = () => {
    setCurrentStep((previous) => Math.max(previous - 1, 1));
  };

  const handleFinalSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    if (honeypot.trim()) {
      setSubmissionError("Submission blocked due to spam validation.");
      return;
    }

    if (Date.now() - formStartedAtRef.current < minimumCompletionMs) {
      setSubmissionError("Please review your details before submitting.");
      return;
    }

    const sanitized = sanitizeOnboardingFormData(formData);
    const fingerprint = hashSubmissionPayload(sanitized);
    const lastSubmission = window.sessionStorage.getItem(sessionSubmissionKey);
    if (lastSubmission === fingerprint) {
      setSubmissionError("This request appears to be a duplicate submission.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const result = await submitOnboardingRequest(sanitized);
      setSubmissionMode(result.mode);
      setSuccessRequestId(result.requestId);
      setIsSubmitted(true);
      window.localStorage.removeItem(draftStorageKey);
      window.sessionStorage.setItem(sessionSubmissionKey, fingerprint);
    } catch (error) {
      if (error instanceof OnboardingServiceError) {
        setSubmissionError(error.message);
      } else {
        setSubmissionError("Unexpected error. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(createInitialFormState(normalizedPlan));
    setCurrentStep(1);
    setFieldErrors({});
    setSubmissionError(null);
    setIsSubmitted(false);
    setSuccessRequestId("");
    setSubmissionMode(null);
    setHoneypot("");
    formStartedAtRef.current = Date.now();
    window.localStorage.removeItem(draftStorageKey);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%)] bg-background text-foreground">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-5rem] top-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#/" className="flex items-center gap-3">
            <img
              src="/images/xervelab-logo.svg"
              alt="XerveLab Logo"
              className="h-8 w-auto drop-shadow-[0_0_0.5px_black]"
            />
          </a>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost">
              <a href="#/contact">Talk to sales</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge variant="secondary" className="mb-5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary shadow-sm shadow-primary/10">
              Client onboarding
            </Badge>
            <h1 className="max-w-3xl bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-4xl text-transparent sm:text-5xl lg:text-6xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
              Start your project with a structured intake that qualifies your requirements.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Complete six steps so our team can recommend the right services, talent model, budget fit, and launch timeline.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Progress saves automatically in this browser",
                "Spam-protected submission flow",
                "Built for lead qualification and routing",
              ].map((highlight) => (
                <div
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-gradient-to-r from-card via-card to-primary/5 px-4 py-2 text-sm text-muted-foreground shadow-sm shadow-primary/5"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                "1. Service scope",
                "2. Team size",
                "3. Roles needed",
                "4. Business info",
                "5. Requirements",
                "6. Contact",
              ].map((label, index) => (
                <Card key={label} className="border-border/70 bg-card/85 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center justify-between">
                      <span>{label}</span>
                      <span className="text-xs text-muted-foreground">Step {index + 1}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-border/70 bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur-sm">
            <div className="h-2 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">Client onboarding form</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Selected plan: <span className="font-medium text-foreground">{formData.selectedPlan}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Step {currentStep} of {stepCount}
                  </p>
                </div>
                <div className="rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-3 text-primary shadow-sm shadow-primary/10">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 transition-all"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{progressPercentage}% complete</p>
              </div>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-violet-500/5 p-6">
                  <div className="flex items-center gap-3 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                    <h2 className="text-xl">Submission received</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Your onboarding request has been captured for the <span className="font-medium text-foreground">{formData.selectedPlan}</span> plan. We will review your requirements and respond with next steps.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4 text-primary" />
                    Request ID: {successRequestId || "pending"} | Delivery mode: {submissionMode || "pending"}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                      <a href="#/contact">Continue to contact section</a>
                    </Button>
                    <Button variant="outline" onClick={resetForm}>
                      Start another request
                    </Button>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFinalSubmit}>
                  <div className="hidden" aria-hidden>
                    <label htmlFor="website-confirmation">Leave this field empty</label>
                    <input
                      id="website-confirmation"
                      name="websiteConfirmation"
                      value={honeypot}
                      onChange={(event) => setHoneypot(event.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {currentStep === 1 ? (
                    <div className="space-y-3">
                      <h2 className="text-lg">Step 1: What do you need?</h2>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {serviceOptions.map((option) => {
                          const checked = formData.serviceNeeds.includes(option);
                          return (
                            <label
                              key={option}
                              className={`cursor-pointer rounded-xl border p-3 text-sm transition-colors ${
                                checked
                                  ? "border-primary/40 bg-primary/10"
                                  : "border-border bg-background/80 hover:border-primary/30"
                              }`}
                            >
                              <input
                                type="checkbox"
                                className="mr-2"
                                checked={checked}
                                onChange={() => toggleListValue("serviceNeeds", option)}
                              />
                              {option}
                            </label>
                          );
                        })}
                      </div>
                      {fieldErrors.serviceNeeds ? (
                        <p className="text-sm text-red-500">{fieldErrors.serviceNeeds}</p>
                      ) : null}
                    </div>
                  ) : null}

                  {currentStep === 2 ? (
                    <div className="space-y-3">
                      <h2 className="text-lg">Step 2: What type of team do you need?</h2>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {teamSizeOptions.map((option) => {
                          const active = formData.teamSize === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => updateField("teamSize", option)}
                              className={`rounded-xl border p-3 text-left text-sm transition-colors ${
                                active
                                  ? "border-primary/40 bg-primary/10"
                                  : "border-border bg-background/80 hover:border-primary/30"
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                      {fieldErrors.teamSize ? (
                        <p className="text-sm text-red-500">{fieldErrors.teamSize}</p>
                      ) : null}
                    </div>
                  ) : null}

                  {currentStep === 3 ? (
                    <div className="space-y-3">
                      <h2 className="text-lg">Step 3: Roles needed</h2>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {roleOptions.map((option) => {
                          const checked = formData.rolesNeeded.includes(option);
                          return (
                            <label
                              key={option}
                              className={`cursor-pointer rounded-xl border p-3 text-sm transition-colors ${
                                checked
                                  ? "border-primary/40 bg-primary/10"
                                  : "border-border bg-background/80 hover:border-primary/30"
                              }`}
                            >
                              <input
                                type="checkbox"
                                className="mr-2"
                                checked={checked}
                                onChange={() => toggleListValue("rolesNeeded", option)}
                              />
                              {option}
                            </label>
                          );
                        })}
                      </div>
                      {fieldErrors.rolesNeeded ? (
                        <p className="text-sm text-red-500">{fieldErrors.rolesNeeded}</p>
                      ) : null}
                    </div>
                  ) : null}

                  {currentStep === 4 ? (
                    <div className="space-y-4">
                      <h2 className="text-lg">Step 4: Business information</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium">Company</label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(event) => updateField("company", event.target.value)}
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.company ? <p className="text-sm text-red-500">{fieldErrors.company}</p> : null}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="website" className="text-sm font-medium">Website</label>
                          <Input
                            id="website"
                            value={formData.website}
                            onChange={(event) => updateField("website", event.target.value)}
                            placeholder="https://example.com"
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.website ? <p className="text-sm text-red-500">{fieldErrors.website}</p> : null}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="industry" className="text-sm font-medium">Industry</label>
                          <Input
                            id="industry"
                            value={formData.industry}
                            onChange={(event) => updateField("industry", event.target.value)}
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.industry ? <p className="text-sm text-red-500">{fieldErrors.industry}</p> : null}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="country" className="text-sm font-medium">Country</label>
                          <Input
                            id="country"
                            value={formData.country}
                            onChange={(event) => updateField("country", event.target.value)}
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.country ? <p className="text-sm text-red-500">{fieldErrors.country}</p> : null}
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label htmlFor="business-size" className="text-sm font-medium">Business size</label>
                          <Input
                            id="business-size"
                            value={formData.businessSize}
                            onChange={(event) => updateField("businessSize", event.target.value)}
                            placeholder="e.g., 1-10, 11-50, 51-200"
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.businessSize ? <p className="text-sm text-red-500">{fieldErrors.businessSize}</p> : null}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {currentStep === 5 ? (
                    <div className="space-y-4">
                      <h2 className="text-lg">Step 5: Project requirements</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="budget" className="text-sm font-medium">Budget</label>
                          <Input
                            id="budget"
                            value={formData.budget}
                            onChange={(event) => updateField("budget", event.target.value)}
                            placeholder="e.g., USD 2,000-5,000 / month"
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.budget ? <p className="text-sm text-red-500">{fieldErrors.budget}</p> : null}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="timeline" className="text-sm font-medium">Timeline</label>
                          <Input
                            id="timeline"
                            value={formData.timeline}
                            onChange={(event) => updateField("timeline", event.target.value)}
                            placeholder="e.g., Start within 2 weeks"
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.timeline ? <p className="text-sm text-red-500">{fieldErrors.timeline}</p> : null}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium">Description</label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(event) => updateField("description", event.target.value)}
                          className="min-h-32 border-primary/15 bg-background/80 focus-visible:border-primary"
                          placeholder="Describe goals, context, current blockers, and expected outcomes."
                        />
                        {fieldErrors.description ? <p className="text-sm text-red-500">{fieldErrors.description}</p> : null}
                      </div>
                    </div>
                  ) : null}

                  {currentStep === 6 ? (
                    <div className="space-y-4">
                      <h2 className="text-lg">Step 6: Contact</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
                          <Input
                            id="contact-name"
                            value={formData.name}
                            onChange={(event) => updateField("name", event.target.value)}
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.name ? <p className="text-sm text-red-500">{fieldErrors.name}</p> : null}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="business-email" className="text-sm font-medium">Business email</label>
                          <Input
                            id="business-email"
                            type="email"
                            value={formData.businessEmail}
                            onChange={(event) => updateField("businessEmail", event.target.value)}
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                          {fieldErrors.businessEmail ? (
                            <p className="text-sm text-red-500">{fieldErrors.businessEmail}</p>
                          ) : null}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(event) => updateField("phone", event.target.value)}
                            className="border-primary/15 bg-background/80 focus-visible:border-primary"
                          />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-sm font-medium">Preferred contact method</label>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {preferredContactOptions.map((option) => {
                              const active = formData.preferredContactMethod === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => updateField("preferredContactMethod", option)}
                                  className={`rounded-xl border p-3 text-sm transition-colors ${
                                    active
                                      ? "border-primary/40 bg-primary/10"
                                      : "border-border bg-background/80 hover:border-primary/30"
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })}
                          </div>
                          {fieldErrors.preferredContactMethod ? (
                            <p className="text-sm text-red-500">{fieldErrors.preferredContactMethod}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {submissionError ? (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300 flex items-start gap-2">
                      <CircleAlert className="h-4 w-4 mt-0.5" />
                      <span>{submissionError}</span>
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                      We use this information only for project qualification and response handling.
                    </p>
                    <div className="flex items-center gap-2">
                      <Button type="button" variant="outline" onClick={goPreviousStep} disabled={currentStep === 1 || isSubmitting}>
                        Back
                      </Button>
                      {currentStep < stepCount ? (
                        <Button
                          type="button"
                          onClick={goNextStep}
                          className="gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-400"
                        >
                          Next <ArrowRight className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-400"
                        >
                          {isSubmitting ? (
                            <>
                              <LoaderCircle className="h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit request <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}