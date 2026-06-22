import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { AnimateOnScroll } from "./animate-on-scroll";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals and small projects",
      accent: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
      iconColor: "text-fuchsia-500",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "1 GB storage",
        "Community access",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing teams and businesses",
      accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
      iconColor: "text-cyan-500",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50 GB storage",
        "Team collaboration",
        "Custom integrations",
        "API access",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      accent: "from-amber-500/20 via-orange-500/10 to-transparent",
      iconColor: "text-amber-500",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom contracts",
        "Advanced security",
        "SLA guarantee",
        "On-premise option",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-500/5 via-background/65 to-transparent">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
            <Card
              className={`relative border-border/70 bg-card/90 backdrop-blur-sm ${
                plan.highlighted
                  ? "border-primary/50 shadow-xl shadow-primary/10 scale-105"
                  : ""
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${plan.accent}`} />
              <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full mb-6"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <a
                    className={plan.highlighted ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white hover:from-cyan-400 hover:via-blue-500 hover:to-violet-400" : ""}
                    href={plan.name === "Enterprise" ? "#/get-started?plan=Enterprise" : `#/get-started?plan=${encodeURIComponent(plan.name)}`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </a>
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className={`h-5 w-5 ${plan.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl text-center mb-8">
            Compare All Features
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 border-b border-border">Feature</th>
                  <th className="text-center p-4 border-b border-border">Starter</th>
                  <th className="text-center p-4 border-b border-border">Professional</th>
                  <th className="text-center p-4 border-b border-border">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Projects", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Storage", starter: "1 GB", pro: "50 GB", enterprise: "Unlimited" },
                  { feature: "Team Members", starter: "1", pro: "10", enterprise: "Unlimited" },
                  { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
                  { feature: "Support", starter: "Email", pro: "Priority", enterprise: "24/7 Phone" },
                  { feature: "API Access", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "Custom Integrations", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "SLA", starter: "✗", pro: "✗", enterprise: "✓" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.starter}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.pro}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
