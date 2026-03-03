import { motion } from "framer-motion";
import safetyImg from "@/assets/structural.jpg";

const safetyPoints = [
  "Daily jobsite briefings and hazard assessments",
  "OSHA‑aligned protocols and documented compliance",
  "Certified equipment operators and trained crews",
  "Clear site logistics to protect people and schedules",
];

const Safety = () => {
  return (
    <section id="safety" className="py-24 bg-background">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="h-1 w-16 bg-primary mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Safety First
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At MNM, safety is a core part of every pour, lift, and finish. We keep
            crews protected and projects moving with disciplined site processes
            and constant communication.
          </p>
          <ul className="mt-8 space-y-3 text-muted-foreground">
            {safetyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={safetyImg}
            alt="Concrete crew on a construction site"
            className="w-full h-[420px] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Safety;
