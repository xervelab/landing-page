import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type GetStartedPageProps = {
  selectedPlan?: string;
};

const availablePlans = ["Starter", "Professional", "Enterprise"] as const;

export function GetStartedPage({ selectedPlan }: GetStartedPageProps) {
  const normalizedPlan = useMemo(() => {
    const matchedPlan = availablePlans.find(
      (plan) => plan.toLowerCase() === selectedPlan?.toLowerCase(),
    );

    return matchedPlan ?? "Professional";
  }, [selectedPlan]);

  const [plan, setPlan] = useState<(typeof availablePlans)[number]>(normalizedPlan);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    {
      icon: Sparkles,
      title: "Tell us what you need",
      accent: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
      iconColor: "text-fuchsia-500",
      description:
        "Share your goals, timeline, and the type of product or service you want to launch.",
    },
    {
      icon: Users,
      title: "Get a tailored kickoff plan",
      accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
      iconColor: "text-cyan-500",
      description:
        "We review your request and prepare a clear onboarding path built around your requirements.",
    },
    {
      icon: Rocket,
      title: "Launch with confidence",
      accent: "from-amber-500/20 via-orange-500/10 to-transparent",
      iconColor: "text-amber-500",
      description:
        "Move from idea to execution with a focused team, practical milestones, and fast support.",
    },
  ];

  const highlights = [
    "Fast onboarding in less than 24 hours",
    "Dedicated support from day one",
    "Flexible plans for startups and teams",
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
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
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/xervelab-logo.svg"
              alt="XerveLab Logo"
              className="h-8 w-auto drop-shadow-[0_0_0.5px_black]"
            />
          </a>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost">
              <a href="#contact">Talk to sales</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#home" className="gap-2">
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
              Let&apos;s kick off your next project
            </Badge>
            <h1 className="max-w-3xl bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-4xl text-transparent sm:text-5xl lg:text-6xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
              Start with a setup built for your team and your goals.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Choose a plan, share a few details, and we&apos;ll help you move from idea to execution with a clear next step.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-gradient-to-r from-card via-card to-primary/5 px-4 py-2 text-sm text-muted-foreground shadow-sm shadow-primary/5"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <Card key={step.title} className="relative overflow-hidden border-border/70 bg-card/85 backdrop-blur-sm">
                    <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${step.accent}`} />
                    <CardHeader className="gap-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-background/80 shadow-sm ${step.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="overflow-hidden border-border/70 bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur-sm">
            <div className="h-2 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">Project intake form</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Selected plan: <span className="font-medium text-foreground">{plan}</span>
                  </p>
                </div>
                <div className="rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-3 text-primary shadow-sm shadow-primary/10">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-violet-500/5 p-6">
                  <div className="flex items-center gap-3 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                    <h2 className="text-xl">Thanks, you&apos;re all set.</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Your request has been captured for the <span className="font-medium text-foreground">{plan}</span> plan. The next step is a quick discovery call so the team can map out scope, timing, and priorities.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4 text-primary" />
                    Expect a response within one business day.
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                      <a href="#contact">Continue to contact section</a>
                    </Button>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Edit details
                    </Button>
                  </div>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="text-sm font-medium">
                        Full name
                      </label>
                      <Input id="full-name" name="fullName" placeholder="Jane Doe" required className="border-primary/15 bg-background/80 focus-visible:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="work-email" className="text-sm font-medium">
                        Work email
                      </label>
                      <Input id="work-email" name="email" type="email" placeholder="jane@company.com" required className="border-primary/15 bg-background/80 focus-visible:border-primary" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="company-name" className="text-sm font-medium">
                        Company
                      </label>
                      <Input id="company-name" name="company" placeholder="XerveLab" required className="border-primary/15 bg-background/80 focus-visible:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-sm font-medium">
                        Target timeline
                      </label>
                      <Input id="timeline" name="timeline" placeholder="2-4 weeks" required className="border-primary/15 bg-background/80 focus-visible:border-primary" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Plan</p>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {availablePlans.map((availablePlan) => {
                        const isActive = plan === availablePlan;

                        return (
                          <button
                            key={availablePlan}
                            type="button"
                            onClick={() => setPlan(availablePlan)}
                            className={`rounded-xl border p-4 text-left transition-colors ${
                              isActive
                                ? "border-primary/40 bg-gradient-to-br from-primary/15 via-cyan-500/10 to-violet-500/10 text-foreground shadow-md shadow-primary/10"
                                : "border-border bg-background/80 hover:border-primary/40 hover:bg-accent/40"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="font-medium">{availablePlan}</div>
                              {isActive ? <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.7)]" /> : null}
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {availablePlan === "Starter"
                                ? "Best for individual founders and early tests."
                                : availablePlan === "Professional"
                                  ? "Ideal for growing teams that need speed."
                                  : "Built for large deployments and custom needs."}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project-details" className="text-sm font-medium">
                      Project details
                    </label>
                    <Textarea
                      id="project-details"
                      name="details"
                      placeholder="Tell us about your goals, users, current blockers, and what success looks like."
                      className="min-h-32 border-primary/15 bg-background/80 focus-visible:border-primary"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                      No commitment required. This form is only used to prepare your kickoff.
                    </p>
                    <Button type="submit" size="lg" className="gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-400">
                      Submit request <ArrowRight className="h-4 w-4" />
                    </Button>
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