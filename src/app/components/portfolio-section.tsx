import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce solution with advanced features",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      tags: ["React", "Node.js", "MongoDB"],
      results: "+150% conversion rate",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "Secure and user-friendly banking application",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      tags: ["React Native", "TypeScript", "AWS"],
      results: "500K+ downloads",
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Analytics",
      description: "Real-time analytics powered by machine learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Python", "TensorFlow", "React"],
      results: "40% faster insights",
    },
    {
      title: "Social Media Platform",
      category: "Web Development",
      description: "Connect and share with a growing community",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      tags: ["Vue.js", "GraphQL", "PostgreSQL"],
      results: "1M+ active users",
    },
    {
      title: "Healthcare Management",
      category: "Enterprise",
      description: "Streamline patient care and hospital operations",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      tags: ["Angular", "Java", "Oracle"],
      results: "85% efficiency boost",
    },
    {
      title: "EdTech Learning Portal",
      category: "Education",
      description: "Interactive learning platform for students",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      tags: ["Next.js", "Prisma", "Stripe"],
      results: "50K+ students",
    },
  ];

  const categories = ["All", "Web Development", "Mobile App", "Data Analytics", "Enterprise", "Education"];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and case studies
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
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
                    <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
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
                          <Button variant="ghost" size="sm" className="gap-2">
                            View Case Study <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "200+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Industry Awards" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
