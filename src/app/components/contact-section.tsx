import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { AnimateOnScroll } from "./animate-on-scroll";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 via-background/70 to-transparent">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimateOnScroll animation="fade-right" delay={100}>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="mt-2"
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          </AnimateOnScroll>

          {/* Contact Information */}
          <AnimateOnScroll animation="fade-left" delay={200}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Email</h4>
                      <p className="text-muted-foreground">info@xervelab.online</p>
                      <p className="text-muted-foreground">sales@xervelab.online</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Phone</h4>
                      <p className="text-muted-foreground">(+63) 948-942-3043</p>
                      <p className="text-muted-foreground">Mon-Fri, 9am-6pm PHT</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">Office</h4>
                      <p className="text-muted-foreground">
                        San Vicente Bamban<br />
                        Tarlac, Philippines
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/xervelab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10"
                  >
                    <span className="text-lg">f</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Map */}
            <Card className="overflow-hidden">
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15341.84!2d120.5453!3d15.3234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c1e2a8b5c8f3%3A0x4b3b5e5e5e5e5e5e!2sSan%20Vicente%2C%20Bamban%2C%20Tarlac%2C%20Philippines!5e0!3m2!1sen!2sph!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XerveLab Office Location - San Vicente, Bamban, Tarlac, Philippines"
                ></iframe>
              </div>
            </Card>
          </div>
          </AnimateOnScroll>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <AnimateOnScroll animation="fade-up">
          <h3 className="text-2xl text-center mb-8">Frequently Asked Questions</h3>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What are your business hours?",
                a: "We're available Monday to Friday, 9am-6pm EST. Our support team responds within 24 hours.",
              },
              {
                q: "Do you offer custom solutions?",
                a: "Yes! We provide custom enterprise solutions tailored to your specific needs. Contact our sales team for more information.",
              },
              {
                q: "What's your refund policy?",
                a: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your purchase, no questions asked.",
              },
              {
                q: "How can I schedule a demo?",
                a: "You can schedule a demo by clicking the 'Watch Demo' button or contacting our sales team directly.",
              },
            ].map((faq, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
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
