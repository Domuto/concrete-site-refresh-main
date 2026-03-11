import Logo from "@/components/Logo";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} MNM Concrete Constructors. All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/mnmconcreteconstructors?igsh=aDJzaHVuaGY1bnFq&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary-foreground/40 hover:text-primary transition-colors text-sm"
          >
            <InstagramIcon />
            <span>@mnmconcreteconstructors</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
