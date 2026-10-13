import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import {
  companyNavigationLinks,
  mobileNavigationGroups,
  primaryNavigationLinks,
  solutionsNavigationLinks,
} from "../navigation";
import { AppPath } from "../routes";

type NavbarProps = {
  currentPath: AppPath;
};

export function Navbar({ currentPath }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const normalizedCurrentPath = useMemo(() => {
    return currentPath === "/" ? "#/" : `#${currentPath}`;
  }, [currentPath]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onEscape);
    };
  }, [isMenuOpen]);

  const linkClasses = (href: string) => {
    const isActive = normalizedCurrentPath === href;

    return [
      "text-sm transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
    ].join(" ");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-primary/10 bg-[linear-gradient(to_right,rgba(255,255,255,0.78),rgba(255,255,255,0.65),rgba(255,255,255,0.78))] backdrop-blur-md dark:bg-[linear-gradient(to_right,rgba(10,10,10,0.82),rgba(15,23,42,0.72),rgba(10,10,10,0.82))]" aria-label="Primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16 py-2">
          <div className="flex-shrink-0">
            <a href="#/" className="font-bold text-xl">
              <img src="/images/xervelab-logo.svg" alt="XerveLab Logo" className="h-8 w-auto drop-shadow-[0_0_0.5px_black]" />
            </a>
          </div>

          <div className="hidden lg:flex flex-wrap justify-end items-center gap-x-6 gap-y-1 max-w-4xl">
            <div className="flex items-center gap-1">
              {primaryNavigationLinks.map((link) => (
                <a key={link.name} href={link.href} className={linkClasses(link.href)}>
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1 lg:border-l border-border lg:pl-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground px-2">Solutions</span>
              {solutionsNavigationLinks.map((link) => (
                <a key={link.name} href={link.href} className={linkClasses(link.href)}>
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1 lg:border-l border-border lg:pl-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground px-2">Company</span>
              {companyNavigationLinks.map((link) => (
                <a key={link.name} href={link.href} className={linkClasses(link.href)}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:pl-4">
            <ThemeToggle />
            <Button asChild>
              <a href="#/get-started">Get Started</a>
            </Button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-5" role="dialog" aria-label="Mobile navigation">
            {mobileNavigationGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{group.title}</p>
                <div className="space-y-1">
                  {group.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={[
                        "block px-3 py-2 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        normalizedCurrentPath === link.href
                          ? "text-foreground bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent",
                      ].join(" ")}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-2 flex gap-2">
              <Button asChild className="flex-1">
                <a href="#/get-started" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
