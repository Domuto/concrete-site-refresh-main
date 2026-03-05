import { motion } from "framer-motion";

const Owner = () => {
  return (
    <section id="owner" className="py-24 bg-background">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/IMG_9601.jpg"
            alt="Nathaniel Peralta on a jobsite"
            className="w-full h-[420px] object-cover shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="h-1 w-16 bg-primary mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Owner
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <div>
              <p className="font-heading text-2xl uppercase tracking-wide text-foreground">
                Nathaniel Peralta
              </p>
              <p className="mt-2 text-primary font-heading text-sm tracking-widest uppercase">
                Project Manager | Co-Owner
              </p>
            </div>
            <p>
              Nathaniel oversees estimating, project coordination, and client communication for
              the company. With hands-on experience in structural concrete, slab construction,
              industrial foundations, and commercial concrete projects, he works closely with
              general contractors to ensure accurate proposals and smooth project execution.
            </p>
            <p>
              His background in both field operations and project management allows him to bridge
              the gap between planning and on-site production.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Owner;
