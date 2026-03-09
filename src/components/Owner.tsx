import { motion } from "framer-motion";

const Owner = () => {
  return (
    <section id="owner" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="h-1 w-16 bg-primary mb-6" />
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
          Owners
        </h2>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border/60 bg-background/60 shadow-lg overflow-hidden"
          >
            <img
              src="/sr.png"
              alt="Martín Covarrubias Sr. on a jobsite"
              className="w-full h-[320px] object-cover"
            />
            <div className="p-8 space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <p className="font-heading text-2xl uppercase tracking-wide text-foreground">
                  Martín Covarrubias Sr.
                </p>
                <p className="mt-2 text-primary font-heading text-sm tracking-widest uppercase">
                  Field Superintendent | Co-Owner
                </p>
              </div>
              <p>
                Martín Covarrubias Sr. brings over 15 years of hands-on experience in the concrete
                construction industry, having worked in the field since approximately 2008. Throughout
                his career, he has developed extensive knowledge in structural foundations, slab-on-grade
                construction, footings, and commercial flatwork.
              </p>
              <p>
                Known for his strong work ethic and practical leadership on the jobsite, Martín Sr.
                plays a critical role in overseeing field operations, ensuring quality workmanship, and
                maintaining production schedules. His experience allows him to identify potential issues
                early and guide crews toward efficient, high-quality execution.
              </p>
              <p>
                As a founding partner of the company established in 2021, Martín Sr. provides the
                experience and steady leadership that keeps projects moving smoothly from layout to final
                finish.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border/60 bg-background/60 shadow-lg overflow-hidden"
          >
            <img
              src="/IMG_9601.jpg"
              alt="Nathaniel Peralta on a jobsite"
              className="w-full h-[320px] object-cover"
            />
            <div className="p-8 space-y-4 text-muted-foreground leading-relaxed">
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
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border/60 bg-background/60 shadow-lg overflow-hidden"
          >
            <img
              src="/jr.png"
              alt="Martín Covarrubias Jr. on a jobsite"
              className="w-full h-[320px] object-cover"
            />
            <div className="p-8 space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <p className="font-heading text-2xl uppercase tracking-wide text-foreground">
                  Martín Covarrubias Jr.
                </p>
                <p className="mt-2 text-primary font-heading text-sm tracking-widest uppercase">
                  Field Superintendent | Co-Owner
                </p>
              </div>
              <p>
                Martín Covarrubias Jr. has been working in the concrete industry since approximately 2012
                and has built a strong reputation as a skilled field leader with deep knowledge of
                day-to-day concrete operations.
              </p>
              <p>
                With experience across a wide range of scopes including foundations, slab construction,
                and commercial flatwork, Martín Jr. plays an active role in coordinating crews, managing
                production, and maintaining jobsite efficiency. His hands-on approach ensures that projects
                are executed with precision, attention to detail, and strong communication between the field
                and project leadership.
              </p>
              <p>
                After years of experience working in the trade, Martín Jr. partnered with his father to
                establish their company in 2021, combining generational knowledge with a modern, team-driven
                approach to concrete construction.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Owner;
