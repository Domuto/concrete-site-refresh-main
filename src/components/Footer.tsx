import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-concrete-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo className="scale-90" />

          <div className="flex items-center gap-8">
            {["Projects", "Services", "Safety", "Contact", "Story"].map((link) => (
              <a
                key={link}
                href={`#${link === "Story" ? "story" : link.toLowerCase()}`}
                className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/50 hover:text-primary transition-colors"
              >
                {link === "Contact" ? "Contact Info" : link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} MNM Concrete Constructors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
