import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-accent rounded-full">
              <span className="text-sm">🚀 New features available now</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Transform Your Business with Our Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Empower your team with cutting-edge tools and services designed to
              streamline your workflow and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" /> Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div>
                <div className="font-bold text-3xl">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="font-bold text-3xl">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div>
                <div className="font-bold text-3xl">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-lg hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Task Completed</div>
                  <div className="text-xs text-muted-foreground">2 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
