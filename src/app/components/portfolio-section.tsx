import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimateOnScroll } from "./animate-on-scroll";
import { CountUp } from "./count-up";

export function PortfolioSection() {
  const projects = [
    {
      title: "San Vicente BIS",
      category: "Web Development",
      description: "A modern information system for Barangay San Vicente managing residents, issuing certificates, tracking incidents, and serving the community efficiently.",
      image: "images/projects/san-vicente-bis.png",
      tags: ["React", "Laravel", "MySQL"],
      results: "+150% conversion rate",
      link: "https://san-vicente-bis.vercel.app/",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "Secure and user-friendly banking application",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      tags: ["React Native", "TypeScript", "AWS"],
      results: "500K+ downloads",
      link: "https://san-vicente-bis.vercel.app/",
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Analytics",
      description: "Real-time analytics powered by machine learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Python", "TensorFlow", "React"],
      results: "40% faster insights",
      link: "https://san-vicente-bis.vercel.app/",
    },
    {
      title: "Social Media Platform",
      category: "Web Development",
      description: "Connect and share with a growing community",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      tags: ["Vue.js", "GraphQL", "PostgreSQL"],
      results: "1M+ active users",
      link: "https://san-vicente-bis.vercel.app/",
    },
    {
      title: "Healthcare Management",
      category: "Enterprise",
      description: "Streamline patient care and hospital operations",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      tags: ["Angular", "Java", "Oracle"],
      results: "85% efficiency boost",
      link: "https://san-vicente-bis.vercel.app/",
    },
    {
      title: "EdTech Learning Portal",
      category: "Education",
      description: "Interactive learning platform for students",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      tags: ["Next.js", "Prisma", "Stripe"],
      results: "50K+ students",
      link: "https://san-vicente-bis.vercel.app/",
    },
  ];

  const categories = ["All", "Web Development", "Mobile App", "Data Analytics", "Enterprise", "Education"];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and case studies
          </p>
        </div>
        </AnimateOnScroll>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="mx-auto grid h-auto w-full max-w-3xl grid-cols-2 gap-2 rounded-2xl p-2 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="h-auto min-h-10 whitespace-normal px-3 py-2 text-center text-xs leading-tight sm:text-sm"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project, index) => (
                    <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                    <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge>{project.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">
                            {project.results}
                          </span>
                          <Button variant="ghost" size="sm">
                            <a href={project.link} className="inline-flex items-center gap-2 justify-between" target="_blank" rel="noopener noreferrer">
                              View details <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    </AnimateOnScroll>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimateOnScroll animation="zoom-in" delay={0}>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={200} suffix="+" recount />
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
          <AnimateOnScroll animation="zoom-in" delay={100}>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={98} suffix="%" recount />
                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
          <AnimateOnScroll animation="zoom-in" delay={200}>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={50} suffix="+" recount />
                </div>
                <div className="text-sm text-muted-foreground">Industry Awards</div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
          <AnimateOnScroll animation="zoom-in" delay={300}>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={24} suffix="/7" recount />
                </div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
