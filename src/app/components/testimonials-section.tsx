import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AnimateOnScroll } from "./animate-on-scroll";
import { CountUp } from "./count-up";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "This platform has transformed the way we work. The productivity gains have been incredible, and our team loves using it every day.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at StartupXYZ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "Outstanding support and features. We've tried many solutions, but this one truly stands out. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder of DesignStudio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "The best investment we've made for our business. The ROI was visible within the first month. Absolutely worth it!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "CTO at Innovation Labs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      content: "Seamless integration with our existing tools. The API is well-documented and the platform is incredibly reliable.",
      rating: 5,
    },
    {
      name: "Jessica Taylor",
      role: "Marketing Director at Growth Co",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      content: "Our conversion rates improved by 40% after implementing this solution. The analytics features are top-notch!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Operations Lead at Enterprise Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "Excellent platform with amazing customer service. They really care about their customers' success.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground/20 mb-4" />
                <p className="text-muted-foreground mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Social Proof */}
        <AnimateOnScroll animation="fade-up">
        <div className="bg-card rounded-lg p-8 border border-border">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={4.9} decimals={1} suffix="/5" recount />
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={10} suffix="K+" recount />
              </div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={5} suffix="K+" recount />
              </div>
              <div className="text-sm text-muted-foreground">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={98} suffix="%" recount />
              </div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        </AnimateOnScroll>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Gijey's Diner", "TechCorp", "InnovateX", "Global Solutions"].map((company) => (
              <div key={company} className="font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
