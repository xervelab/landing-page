import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimateOnScroll } from "./animate-on-scroll";

export function BlogSection() {
  const posts = [
    {
      title: "10 Tips to Boost Your Team's Productivity",
      excerpt: "Learn proven strategies to help your team work smarter, not harder, and achieve better results.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      category: "Productivity",
      date: "Feb 20, 2026",
      readTime: "5 min read",
      author: "Sarah Johnson",
    },
    {
      title: "The Future of Remote Work in 2026",
      excerpt: "Explore the latest trends and technologies shaping the future of remote and hybrid work environments.",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
      category: "Trends",
      date: "Feb 18, 2026",
      readTime: "7 min read",
      author: "Michael Chen",
    },
    {
      title: "How to Scale Your SaaS Business",
      excerpt: "A comprehensive guide to scaling your SaaS business from startup to enterprise level.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Business",
      date: "Feb 15, 2026",
      readTime: "10 min read",
      author: "Emily Rodriguez",
    },
    {
      title: "Security Best Practices for 2026",
      excerpt: "Essential security measures every business should implement to protect their data and customers.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      category: "Security",
      date: "Feb 12, 2026",
      readTime: "6 min read",
      author: "David Kim",
    },
    {
      title: "AI and Machine Learning in Business",
      excerpt: "Discover how AI and ML are transforming business operations and creating new opportunities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      category: "Technology",
      date: "Feb 10, 2026",
      readTime: "8 min read",
      author: "Jessica Taylor",
    },
    {
      title: "Customer Success Stories That Inspire",
      excerpt: "Real stories from customers who transformed their businesses with the right tools and strategies.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      category: "Case Study",
      date: "Feb 8, 2026",
      readTime: "4 min read",
      author: "James Wilson",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and best practices
          </p>
        </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    By {post.author}
                  </span>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 p-8 text-primary-foreground shadow-xl shadow-blue-500/15 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-6 opacity-90">
              Get the latest articles, updates, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-foreground bg-background"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-xs mt-4 opacity-75">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
