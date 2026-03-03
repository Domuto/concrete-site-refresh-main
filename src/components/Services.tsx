import { motion } from "framer-motion";
import tiltupImg from "@/assets/tiltup.jpg";
import structuralImg from "@/assets/structural.jpg";
import amcreteImg from "@/assets/amcrete-floor.jpg";
import consultingImg from "@/assets/consulting.jpg";

const services = [
  {
    title: "Tilt‑Up Panels",
    description:
      "Engineered tilt‑up solutions with precise placements, tight tolerances, and dependable schedules.",
    image: tiltupImg,
  },
  {
    title: "Structural Concrete",
    description:
      "Foundations, elevated slabs, and structural packages for commercial and industrial builds.",
    image: structuralImg,
  },
  {
    title: "Flatwork & Slabs",
    description:
      "High‑performance slabs and industrial flatwork designed for durability and smooth finishes.",
    image: amcreteImg,
  },
  {
    title: "Pre‑Con & Consulting",
    description:
      "Budgeting, mix design support, constructability reviews, and phased scheduling guidance.",
    image: consultingImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="h-1 w-16 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-secondary-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-secondary-foreground/60 max-w-2xl mx-auto">
            Industrial and commercial concrete services delivered with precision and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-concrete-dark/70 group-hover:bg-concrete-dark/80 transition-colors duration-300" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-secondary-foreground tracking-wide">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-secondary-foreground/70 text-sm max-w-md leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-block font-heading text-xs tracking-widest uppercase text-primary group-hover:translate-x-2 transition-transform">
                    Learn More →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
