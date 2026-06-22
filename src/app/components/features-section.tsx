import { 
  Zap, 
  Shield, 
  Users, 
  BarChart, 
  Clock, 
  Smartphone,
  Cloud,
  Lock,
  Headphones
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AnimateOnScroll } from "./animate-on-scroll";

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      accent: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
      iconColor: "text-fuchsia-500",
      description: "Experience blazing fast performance with our optimized infrastructure."
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
      iconColor: "text-cyan-500",
      description: "Enterprise-grade security to protect your data and privacy."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      accent: "from-amber-500/20 via-orange-500/10 to-transparent",
      iconColor: "text-amber-500",
      description: "Work seamlessly with your team in real-time."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
      iconColor: "text-emerald-500",
      description: "Get insights with powerful analytics and reporting tools."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      accent: "from-rose-500/20 via-pink-500/10 to-transparent",
      iconColor: "text-rose-500",
      description: "Access your work anytime, anywhere with 99.9% uptime."
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      accent: "from-indigo-500/20 via-blue-500/10 to-transparent",
      iconColor: "text-indigo-500",
      description: "Fully responsive design works perfectly on all devices."
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
      iconColor: "text-sky-500",
      description: "Store and access your files securely in the cloud."
    },
    {
      icon: Lock,
      title: "Data Privacy",
      accent: "from-violet-500/20 via-purple-500/10 to-transparent",
      iconColor: "text-violet-500",
      description: "Your data belongs to you. We never sell or share it."
    },
    {
      icon: Headphones,
      title: "Premium Support",
      accent: "from-lime-500/20 via-green-500/10 to-transparent",
      iconColor: "text-lime-500",
      description: "Get help from our expert support team whenever you need it."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed, all in one place
          </p>
        </div>
        </AnimateOnScroll>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">All Features</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="why">Why Us</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <Card className="relative overflow-hidden border-border/70 bg-card/85 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${feature.accent}`} />
                  <CardContent className="p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-sm ${feature.iconColor}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-4">Boost Productivity</h3>
                  <p className="text-muted-foreground mb-4">
                    Save hours every week with our automation tools and streamlined
                    workflows. Focus on what matters most while we handle the rest.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Automate repetitive tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Smart workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Time-saving templates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-4">Scale with Confidence</h3>
                  <p className="text-muted-foreground mb-4">
                    Grow your business without worrying about infrastructure.
                    Our platform scales automatically to meet your needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Auto-scaling infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Unlimited storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Enterprise-ready</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="why" className="mt-12">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-center">Why Choose Us?</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2">🏆 Industry Leader</h4>
                      <p className="text-muted-foreground">
                        Trusted by over 10,000 companies worldwide, we're the go-to
                        solution for businesses of all sizes.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2">💰 Best Value</h4>
                      <p className="text-muted-foreground">
                        Get more features for less. Our pricing is transparent and
                        competitive, with no hidden fees.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2">🚀 Constant Innovation</h4>
                      <p className="text-muted-foreground">
                        We ship new features every week, always staying ahead of the
                        curve with the latest technology.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2">🤝 Dedicated Support</h4>
                      <p className="text-muted-foreground">
                        Our team is here to help you succeed. Get expert support
                        whenever you need it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
