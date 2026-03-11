import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Safety", href: "#safety" },
  { label: "Contact Info", href: "#contact" },
  { label: "Our Story", href: "#story" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-sm tracking-widest uppercase text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-secondary-foreground/20 p-2 text-secondary-foreground/80 hover:text-primary hover:border-primary transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1">
            <span className={`h-0.5 w-6 bg-current transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 w-6 bg-current transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden bg-secondary overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-lg tracking-widest uppercase text-secondary-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
