import { FormEvent, useRef, useState } from "react";
import { CircleAlert, LoaderCircle } from "lucide-react";
import { JobDetail } from "../components/sections/job-detail";
import { PageHero } from "../components/sections/page-hero";
import { SharedCta } from "../components/shared/shared-cta";
import { usePageSeo } from "../components/shared/use-page-seo";
import { getOpenJobBySlug } from "../data/job-openings";
import {
  CareerApplicationData,
  CareerApplicationError,
  submitCareerApplication,
  validateCareerApplication,
} from "../services/career-application-service";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

type CareerDetailPageProps = {
  slug: string;
};

const minimumApplyMs = 3000;

export function CareerDetailPage({ slug }: CareerDetailPageProps) {
  const job = getOpenJobBySlug(slug);

  const [formData, setFormData] = useState<CareerApplicationData>({
    jobId: job?.id || "",
    jobSlug: slug,
    name: "",
    businessEmail: "",
    portfolioUrl: "",
    coverLetter: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof CareerApplicationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const startedAtRef = useRef(Date.now());

  const notFoundTitle = "Career Opportunity Not Found | XerveLab";
  const notFoundDescription =
    "This career role is not currently available. Return to the careers listing to view open opportunities.";

  usePageSeo({
    title: job ? `${job.title} | Careers | XerveLab` : notFoundTitle,
    description: job ? job.description : notFoundDescription,
    canonicalUrl: `https://xervelab.online/#/careers/${slug}`,
    ogTitle: job ? `${job.title} | Careers | XerveLab` : notFoundTitle,
    ogDescription: job ? job.description : notFoundDescription,
    ogUrl: `https://xervelab.online/#/careers/${slug}`,
    twitterTitle: job ? `${job.title} | Careers | XerveLab` : notFoundTitle,
    twitterDescription: job ? job.description : notFoundDescription,
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
          name: "Careers",
          item: "https://xervelab.online/#/careers",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: job ? job.title : "Career Detail",
          item: `https://xervelab.online/#/careers/${slug}`,
        },
      ],
    },
  });

  if (!job) {
    return (
      <>
        <PageHero
          eyebrow="Work With XerveLab"
          title="Career Opportunity Not Found"
          description="This role is not currently available. Please return to the careers page for active opportunities."
        />
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SharedCta
              title="Explore open roles"
              description="Browse active opportunities and apply to roles that match your experience."
              primaryLabel="Back to Careers"
              primaryHref="#/careers"
            />
          </div>
        </section>
      </>
    );
  }

  const updateField = <K extends keyof CareerApplicationData>(key: K, value: CareerApplicationData[K]) => {
    setFormData((current) => ({
      ...current,
      [key]: value,
      jobId: job.id,
      jobSlug: job.slug,
    }));
    setFieldErrors((current) => ({
      ...current,
      [key]: undefined,
    }));
    setSubmissionError(null);
  };

  const handleApply = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypot.trim()) {
      setSubmissionError("Application blocked due to spam validation.");
      return;
    }

    if (Date.now() - startedAtRef.current < minimumApplyMs) {
      setSubmissionError("Please review your application details before submitting.");
      return;
    }

    const payload: CareerApplicationData = {
      ...formData,
      jobId: job.id,
      jobSlug: job.slug,
    };

    const validation = validateCareerApplication(payload);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmissionSuccess(null);

    try {
      const result = await submitCareerApplication(payload);
      setSubmissionSuccess(`Application submitted. Request ID: ${result.requestId} (${result.mode})`);
      setFormData({
        jobId: job.id,
        jobSlug: job.slug,
        name: "",
        businessEmail: "",
        portfolioUrl: "",
        coverLetter: "",
      });
      setHoneypot("");
      startedAtRef.current = Date.now();
    } catch (error) {
      if (error instanceof CareerApplicationError) {
        setSubmissionError(error.message);
      } else {
        setSubmissionError("Unexpected error submitting application.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <a href="#/careers" className="text-sm text-primary hover:underline">
            Back to careers
          </a>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <JobDetail job={job} />
        </div>
      </section>

      <section id="apply" className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="border-border/70 bg-card/90">
            <CardContent className="p-6 sm:p-8 space-y-5">
              <div>
                <h2 className="text-2xl">Apply for this role</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Submit your application details. Private applicant information is handled only for recruitment processing and is not displayed publicly.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleApply}>
                <div className="hidden" aria-hidden>
                  <label htmlFor="career-company-url">Do not fill this field</label>
                  <input
                    id="career-company-url"
                    name="careerCompanyUrl"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="career-name" className="text-sm font-medium">Name</label>
                    <Input
                      id="career-name"
                      value={formData.name}
                      onChange={(event) => updateField("name", event.target.value)}
                    />
                    {fieldErrors.name ? <p className="text-sm text-red-500">{fieldErrors.name}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="career-email" className="text-sm font-medium">Business email</label>
                    <Input
                      id="career-email"
                      type="email"
                      value={formData.businessEmail}
                      onChange={(event) => updateField("businessEmail", event.target.value)}
                    />
                    {fieldErrors.businessEmail ? (
                      <p className="text-sm text-red-500">{fieldErrors.businessEmail}</p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="career-portfolio" className="text-sm font-medium">Portfolio URL (optional)</label>
                  <Input
                    id="career-portfolio"
                    value={formData.portfolioUrl}
                    onChange={(event) => updateField("portfolioUrl", event.target.value)}
                    placeholder="https://portfolio.example"
                  />
                  {fieldErrors.portfolioUrl ? (
                    <p className="text-sm text-red-500">{fieldErrors.portfolioUrl}</p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="career-cover-letter" className="text-sm font-medium">Application summary</label>
                  <Textarea
                    id="career-cover-letter"
                    value={formData.coverLetter}
                    onChange={(event) => updateField("coverLetter", event.target.value)}
                    placeholder="Share your relevant experience and why you fit this role."
                    className="min-h-32"
                  />
                  {fieldErrors.coverLetter ? (
                    <p className="text-sm text-red-500">{fieldErrors.coverLetter}</p>
                  ) : null}
                </div>

                {submissionError ? (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300 flex items-start gap-2">
                    <CircleAlert className="h-4 w-4 mt-0.5" />
                    <span>{submissionError}</span>
                  </div>
                ) : null}

                {submissionSuccess ? (
                  <div className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm text-primary">
                    {submissionSuccess}
                  </div>
                ) : null}

                <Button type="submit" disabled={isSubmitting} className="gap-2">
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Submitting application...
                    </>
                  ) : (
                    "Submit application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
