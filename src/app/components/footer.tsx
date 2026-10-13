import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { footerColumns } from "../navigation";
import { AppPath } from "../routes";

type FooterProps = {
  currentPath: AppPath;
};

export function Footer({ currentPath }: FooterProps) {
  const isHome = currentPath === "/";
  const blogHref = isHome ? "#blog" : "#/";
  const faqHref = isHome ? "#contact" : "#/contact";

  return (
    <footer className="border-t border-primary/10 bg-gradient-to-b from-background/70 via-background/85 to-primary/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-xl mb-4">XerveLab</div>
            <p className="text-sm text-muted-foreground mb-4">
              Building the future of work, one feature at a time.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/xerve-lab"
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/xervelab"
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/xervelab"
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@xervelab"
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={
                        link.name === "Blog Section"
                          ? blogHref
                          : link.name === "FAQ Section"
                            ? faqHref
                            : link.href
                      }
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 XerveLab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
