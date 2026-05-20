import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about who we are and what drives us forward
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team working together"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
        </div>

        {/* Values */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl mb-8">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💡", title: "Innovation", desc: "Always pushing boundaries" },
              { icon: "🤝", title: "Integrity", desc: "Honest and transparent" },
              { icon: "🎯", title: "Excellence", desc: "Quality in everything" },
              { icon: "❤️", title: "Customer First", desc: "Your success is ours" },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
