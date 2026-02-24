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

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Safe",
      description: "Enterprise-grade security to protect your data and privacy."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team in real-time."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Get insights with powerful analytics and reporting tools."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Access your work anytime, anywhere with 99.9% uptime."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Ready",
      description: "Fully responsive design works perfectly on all devices."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Storage",
      description: "Store and access your files securely in the cloud."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Privacy",
      description: "Your data belongs to you. We never sell or share it."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Premium Support",
      description: "Get help from our expert support team whenever you need it."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed, all in one place
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">All Features</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="why">Why Us</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
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
