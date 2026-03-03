type LogoProps = {
  className?: string;
  withText?: boolean;
};

const Logo = ({ className = "", withText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="6" y="4" width="10" height="36" rx="2" fill="hsl(var(--primary))" transform="skewX(-12)" />
        <rect x="20" y="4" width="10" height="36" rx="2" fill="hsl(var(--secondary))" transform="skewX(-12)" />
      </svg>

      {withText && (
        <div className="leading-tight">
          <div className="font-heading text-2xl font-bold tracking-wider text-secondary-foreground">
            MNM
          </div>
          <div className="text-[10px] font-heading tracking-[0.35em] uppercase text-secondary-foreground/70">
            Concrete Constructors
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
