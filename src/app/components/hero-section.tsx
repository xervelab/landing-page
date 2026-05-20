import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { CountUp } from "./count-up";
import { AnimateOnScroll } from "./animate-on-scroll";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-300 dark:bg-sky-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-6000" />

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-400/20 rotate-45 animate-float animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-sky-500/40 rounded-full animate-float animation-delay-4000" />
        <div className="absolute top-2/3 right-1/4 w-5 h-5 border-2 border-blue-400/30 rounded-full animate-float animation-delay-6000" />
        <div className="absolute top-1/2 left-1/6 w-8 h-8 border border-indigo-400/20 rotate-12 animate-float animation-delay-3000" />
        <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-cyan-500/25 rounded-sm rotate-45 animate-float animation-delay-5000" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <AnimateOnScroll animation="fade-down" duration={500}>
              <div className="inline-block mb-4 px-4 py-2 bg-accent rounded-full">
                <span className="text-sm">🚀 New features available now</span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
                Transform Your Business with Our Solutions
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Empower your team with cutting-edge tools and services designed to
                streamline your workflow and boost productivity.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Play className="h-4 w-4" /> Watch Demo
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
                <div>
                  <div className="font-bold text-3xl">
                    <CountUp end={10} suffix="k+" recount />
                  </div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="font-bold text-3xl">
                    <CountUp end={4.9} decimals={1} suffix="/5" recount />
                  </div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
                <div>
                  <div className="font-bold text-3xl">
                    <CountUp end={99.9} decimals={1} suffix="%" recount />
                  </div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right content - Animated visual (hidden on mobile) */}
          <AnimateOnScroll animation="fade-left" delay={200} duration={800} className="hidden lg:block">
            <div className="relative flex items-center justify-center">
              {/* Main orb */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border border-blue-400/15 animate-spin-slow-reverse" />
                <div className="absolute inset-8 rounded-full border border-dashed border-sky-400/10 animate-spin-slow" />

                {/* Center glow */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-500/30 via-blue-400/10 to-transparent animate-pulse-slow" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-sky-400/20 to-indigo-400/20 backdrop-blur-sm animate-pulse-slow animation-delay-2000" />

                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                </div>
                <div className="absolute inset-0 animate-spin-slow-reverse">
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-sky-400/70 rounded-full" />
                </div>
                <div className="absolute inset-4 animate-spin-slow animation-delay-4000">
                  <div className="absolute top-2 right-8 w-2.5 h-2.5 bg-indigo-400 rounded-full" />
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg hidden lg:block animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Task Completed</div>
                    <div className="text-xs text-muted-foreground">2 mins ago</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg hidden lg:block animate-float animation-delay-3000">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-500">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Performance</div>
                    <div className="text-xs text-muted-foreground">99.9% uptime</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-background/80 backdrop-blur-md border border-border rounded-lg p-3 shadow-lg hidden lg:block animate-float animation-delay-5000">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <span className="text-purple-500 text-sm">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold text-xs">Deployed</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
