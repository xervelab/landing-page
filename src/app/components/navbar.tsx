import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ThemeToggle } from "./theme-toggle";
import {
  companyNavigationLinks,
  mobileNavigationGroups,
  type NavLink,
  primaryNavigationLinks,
} from "../navigation";
import { AppPath } from "../routes";

type NavbarProps = {
  currentPath: AppPath;
};

type HoverDropdownProps = {
  label: string;
  links: NavLink[];
  currentHref: string;
};

function HoverDropdown({ label, links, currentHref }: HoverDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasActiveLink = links.some((link) => link.href === currentHref);

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
      closeTimeout.current = null;
    }, 150);
  };

  useEffect(() => cancelClose, []);

  return (
    // Non-modal so opening the menu doesn't lock body scroll (which hides the scrollbar and shifts layout).
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          onMouseEnter={() => {
            cancelClose();
            setIsOpen(true);
          }}
          onMouseLeave={scheduleClose}
          onPointerDown={(event) => {
            // Hover already opens the menu for mouse users; prevent click from toggling it closed.
            if (event.pointerType === "mouse") {
              event.preventDefault();
            }
          }}
          className={[
            "relative h-auto gap-1 rounded-md px-2 py-1 text-sm hover:bg-transparent dark:hover:bg-transparent",
            "after:absolute after:inset-x-2 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:transition-opacity",
            hasActiveLink
              ? "font-medium text-foreground after:opacity-100"
              : "font-normal text-muted-foreground hover:text-foreground after:opacity-0",
          ].join(" ")}
        >
          {label}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        {links.map((link) => {
          const isActive = link.href === currentHref;

          return (
            <DropdownMenuItem key={link.name} asChild>
              <a
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "relative cursor-pointer font-medium text-foreground before:absolute before:inset-y-1.5 before:left-0 before:w-0.5 before:rounded-full before:bg-primary"
                    : "cursor-pointer"
                }
              >
                {link.name}
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
      "relative text-sm transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "after:absolute after:inset-x-2 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:transition-opacity",
      isActive
        ? "font-medium text-foreground after:opacity-100"
        : "text-muted-foreground hover:text-foreground after:opacity-0",
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
              <HoverDropdown label="Company" links={companyNavigationLinks} currentHref={normalizedCurrentPath} />
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
