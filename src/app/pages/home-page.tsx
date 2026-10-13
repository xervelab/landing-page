import {
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CircleCheck,
  Code2,
  Megaphone,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";
import { AnimateOnScroll } from "../components/animate-on-scroll";
import { ServiceCard } from "../components/cards/service-card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { SharedCta } from "../components/shared/shared-cta";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { usePageSeo } from "../components/shared/use-page-seo";

export function HomePage() {
  usePageSeo({
    title: "XerveLab | Build. Grow. Scale.",
    description:
      "XerveLab provides digital services, marketing execution, and remote staffing support for businesses building and scaling online.",
    canonicalUrl: "https://xervelab.online/#/",
    ogTitle: "XerveLab | Build. Grow. Scale.",
    ogDescription:
      "Build your digital team and grow your business with digital solutions, marketing, and remote professionals.",
    ogUrl: "https://xervelab.online/#/",
    twitterTitle: "XerveLab | Build. Grow. Scale.",
    twitterDescription:
      "Digital services, marketing, and remote talent designed for business growth.",
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
      ],
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "XerveLab",
        url: "https://xervelab.online/",
        logo: "https://xervelab.online/images/xl-logo.png",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "XerveLab",
        url: "https://xervelab.online/",
      },
    ],
  });

  const teamExamples = [
    {
      title: "Marketing Team",
      roles: ["Social Media Manager", "Graphic Designer", "Video Editor", "SEO Specialist"],
    },
    {
      title: "Development Team",
      roles: ["Frontend Developer", "Backend Developer", "WordPress Developer", "QA Specialist"],
    },
    {
      title: "Business Support Team",
      roles: ["Virtual Assistant", "Customer Support", "Appointment Setter", "Administrative Assistant"],
    },
  ];

  const popularRoles = [
    "Developer",
    "Virtual Assistant",
    "SEO Specialist",
    "Social Media Manager",
    "Graphic Designer",
    "Video Editor",
    "Customer Support",
    "E-commerce Specialist",
  ];

  const processSteps = [
    "Tell Us What You Need",
    "We Find the Right People",
    "Meet Your Candidates",
    "Start Working",
    "Scale When Ready",
  ];

  return (
    <>
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <AnimateOnScroll animation="fade-up">
                <Badge variant="secondary" className="mb-5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary shadow-sm shadow-primary/10">
                  Build. Grow. Scale.
                </Badge>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={80}>
                <h1 className="max-w-4xl bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-4xl text-transparent sm:text-5xl lg:text-6xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                  Build Your Digital Team. Grow Your Business.
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={160}>
                <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                  XerveLab provides digital services, social media solutions, and skilled remote professionals to help businesses build, operate, and scale online.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={240}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="gap-2">
                    <a href="#/get-started">
                      Build My Team <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="#/services">Explore Services</a>
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <a href="#/services" className="hover:text-primary">Services</a>
                  <a href="#/staffing" className="hover:text-primary">Remote Staffing</a>
                  <a href="#/marketing" className="hover:text-primary">Marketing</a>
                  <a href="#/digital-solutions" className="hover:text-primary">Digital Solutions</a>
                  <a href="#/team" className="hover:text-primary">Team</a>
                  <a href="#/case-studies" className="hover:text-primary">Case Studies</a>
                  <a href="#/get-started" className="hover:text-primary">Get Started</a>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="fade-left" delay={220}>
              <div className="rounded-2xl border border-primary/15 bg-card/85 backdrop-blur-sm p-6 shadow-xl shadow-primary/10">
                <h2 className="text-2xl mb-4">XerveLab Positioning</h2>
                <p className="text-muted-foreground">
                  Digital solutions, marketing, and remote talent for businesses ready to grow.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg border border-border bg-background/80 p-3 text-center">BUILD</div>
                  <div className="rounded-lg border border-border bg-background/80 p-3 text-center">GROW</div>
                  <div className="rounded-lg border border-border bg-background/80 p-3 text-center">SCALE</div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section id="pillars" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                One Partner. Three Ways to Grow.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ServiceCard
              icon={Building2}
              title="BUILD"
              description="Digital Solutions"
              items={["Websites", "E-commerce", "Software", "SEO", "AEO/GEO", "Automation", "Technical Support"]}
              href="#/digital-solutions"
            />
            <ServiceCard
              icon={Megaphone}
              title="GROW"
              description="Marketing & Social"
              items={["Social Media", "Content", "SEO", "Advertising", "Lead Generation", "Digital Marketing"]}
              href="#/marketing"
            />
            <ServiceCard
              icon={Users}
              title="SCALE"
              description="Remote Staffing"
              items={["Skilled Filipino Professionals", "Dedicated Remote Teams"]}
              href="#/staffing"
            />
          </div>
        </div>
      </section>

      <section id="build-team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-500/5 via-background/70 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                Need More Than One Freelancer? Build a Team.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Combine specialists into a dedicated team designed around your goals, workflow, and growth stage.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {teamExamples.map((team, index) => (
              <AnimateOnScroll key={team.title} animation="fade-up" delay={index * 90}>
                <Card className="border-border/70 bg-card/90 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl mb-4">{team.title}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {team.roles.map((role) => (
                        <li key={role} className="flex items-start gap-2">
                          <CircleCheck className="h-4 w-4 text-primary mt-0.5" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" className="gap-2">
              <a href="#/get-started">
                Build My Team <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="popular-roles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                Popular Roles
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {popularRoles.map((role, index) => (
              <AnimateOnScroll key={role} animation="fade-up" delay={index * 60}>
                <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <h3 className="text-base sm:text-lg">{role}</h3>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-500/5 via-background/70 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                How It Works
              </h2>
            </div>
          </AnimateOnScroll>

          <ol className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <AnimateOnScroll key={step} animation="fade-up" delay={index * 70}>
                <Card className="h-full border-border/70 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-sm text-primary mb-3">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="text-lg leading-tight">{step}</h3>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose a single service path or combine service categories based on your current growth stage.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ServiceCard
              icon={Code2}
              title="Digital Solutions"
              description="Build and improve your digital platforms."
              items={["Websites", "E-commerce", "Web Apps", "Automation", "Technical Support"]}
              href="#/digital-solutions"
            />
            <ServiceCard
              icon={MessageCircle}
              title="Marketing & Social"
              description="Grow visibility and demand with strategic marketing execution."
              items={["Social Media", "Content Creation", "Paid Advertising", "Lead Generation", "Reporting"]}
              href="#/marketing"
            />
            <ServiceCard
              icon={BriefcaseBusiness}
              title="Remote Staffing"
              description="Scale delivery with flexible role-based remote talent."
              items={["Developers", "Virtual Assistants", "SEO Specialists", "Customer Support", "Designers"]}
              href="#/staffing"
            />
          </div>
        </div>
      </section>

      <section id="team-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 via-background/70 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                Meet the People Behind XerveLab
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We currently publish delivery functions while complete individual public profiles are being prepared.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3">Strategy & Client Success</h3>
                <p className="text-sm text-muted-foreground">
                  Coordinates project discovery, communication, and delivery alignment from kickoff to ongoing support.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3">Build & Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Handles digital build work including websites, applications, technical SEO, and platform support.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3">Growth & Talent Operations</h3>
                <p className="text-sm text-muted-foreground">
                  Supports marketing execution and staffing operations for scalable, role-based remote teams.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline">
              <a href="#/team">Meet Our Team</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                Portfolio & Case Studies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Featured project currently published. Additional case studies are being migrated incrementally.
              </p>
            </div>
          </AnimateOnScroll>

          <Card className="overflow-hidden border-border/70 bg-card/90 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative min-h-72">
                <ImageWithFallback
                  src="/images/projects/san-vicente-bis.png"
                  alt="San Vicente BIS project interface preview"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-3">San Vicente BIS</h3>
                <p className="text-muted-foreground mb-5">
                  A modern information system for Barangay San Vicente managing residents, issuing certificates, and tracking incidents.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <a href="https://san-vicente-bis.vercel.app/" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#/portfolio">See Portfolio</a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section id="why-xervelab" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-500/5 via-background/70 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
                Why XerveLab
              </h2>
            </div>
          </AnimateOnScroll>

          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
              "Filipino talent",
              "Technical expertise",
              "Flexible teams",
              "Digital marketing expertise",
              "Scalable services",
              "Managed services",
            ].map((item, index) => (
              <AnimateOnScroll key={item} animation="fade-up" delay={index * 70}>
                <li className="rounded-lg border border-border bg-card/90 p-5 text-foreground flex items-center gap-3">
                  <Search className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <section id="final-cta" className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Ready to Build Your Digital Team?"
            description="Share your goals and we will propose a practical Build, Grow, and Scale plan aligned to your business stage."
            primaryLabel="Get Started"
          />
        </div>
      </section>
    </>
  );
}
