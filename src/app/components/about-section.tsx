import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimateOnScroll } from "./animate-on-scroll";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background/60 to-transparent">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn more about who we are and what drives us forward
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimateOnScroll animation="fade-right" delay={100}>
          <div>
            <h3 className="text-2xl sm:text-3xl mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              Xerve Lab, established in 2025, is a technology solutions and outsourcing provider offering software development and IT services for global clients.
              We support businesses by delivering cost-effective development services, including web applications, system maintenance, UI/UX design, and backend integration.
            </p>
            <p className="text-muted-foreground mb-4">
              Our goal is to provide reliable remote development support while maintaining quality, efficiency, and clear communication throughout every project lifecycle.
            </p>
            <p className="text-muted-foreground">
              We operate as an extension of our clients’ teams, ensuring productivity and long-term collaboration.
            </p>
          </div>          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" delay={200}>          <div className="rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team working together"
              className="w-full h-auto"
            />
          </div>
          </AnimateOnScroll>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimateOnScroll animation="fade-up" delay={100}>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To empower businesses and individuals with innovative solutions that
                drive growth, efficiency, and success. We strive to make technology
                work for you, not the other way around.
              </p>
            </CardContent>
          </Card>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To become the world's most trusted platform for digital transformation,
                helping millions of users achieve their goals through cutting-edge
                technology and exceptional service.
              </p>
            </CardContent>
          </Card>
          </AnimateOnScroll>
        </div>

        {/* Values */}
        <div className="text-center">
          <AnimateOnScroll animation="fade-up">
            <h3 className="text-2xl sm:text-3xl mb-8">Our Values</h3>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💡", title: "Innovation", desc: "Always pushing boundaries" },
              { icon: "🤝", title: "Integrity", desc: "Honest and transparent" },
              { icon: "🎯", title: "Excellence", desc: "Quality in everything" },
              { icon: "❤️", title: "Customer First", desc: "Your success is ours" },
            ].map((value, index) => (
              <AnimateOnScroll key={index} animation="zoom-in" delay={index * 100}>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
