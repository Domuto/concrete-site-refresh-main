import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Industrial concrete construction site"
          className="w-full h-full object-cover"
        />
        {/* Diagonal overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 8% / 0.92) 0%, hsl(0 0% 8% / 0.7) 50%, hsl(0 0% 8% / 0.3) 100%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-primary mb-8"
          />
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] text-secondary-foreground tracking-tight">
            MNM<br />
            Concrete<br />
            <span className="text-primary">Constructors</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-secondary-foreground/70 font-body max-w-lg">
            A concrete construction company delivering retaining walls, foundations,
            slabs, and civil scopes with hands‑on leadership, disciplined schedules,
            and consistent quality.
          </p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 mt-10 bg-primary text-primary-foreground font-heading text-lg tracking-widest uppercase px-10 py-4 hover:bg-primary/90 transition-colors group"
          >
            Request a Quote
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
