import { motion } from "framer-motion";

const services = [
  {
    title: "Tilt‑Up Panels",
    description:
      "Engineered tilt‑up solutions with precise placements, tight tolerances, and dependable schedules.",
    image: "/IMG_9605.jpg",
  },
  {
    title: "Structural Concrete",
    description:
      "Foundations, elevated slabs, and structural packages for commercial and industrial builds.",
    image: "/IMG_9603.jpg",
  },
  {
    title: "Flatwork & Slabs",
    description:
      "High‑performance slabs and industrial flatwork designed for durability and smooth finishes.",
    image: "/IMG_9602.jpg",
  },
  {
    title: "Pre‑Con & Consulting",
    description:
      "Budgeting, mix design support, constructability reviews, and phased scheduling guidance.",
    image: "/IMG_9597.jpg",
  },
];

const tankFoundationImages: string[] = [
  "/IMG_9610.jpg",
  "/IMG_9609.jpg",
  "/IMG_9608.jpg",
  "/IMG_9607.jpg",
  "/IMG_9606.jpg",
  "/IMG_9605.jpg",
  "/IMG_9603.jpg",
  "/IMG_9602.jpg",
];

const buildoutImages: string[] = [
  "/IMG_9564.jpg",
  "/IMG_9565.jpg",
  "/IMG_9566.jpg",
  "/IMG_9567.jpg",
  "/IMG_9568.jpg",
  "/IMG_9569.jpg",
  "/IMG_9570.jpg",
  "/IMG_9571.jpg",
  "/IMG_9572.jpg",
];

const placementImages: string[] = [
  "/IMG_9578.jpg",
  "/IMG_9577.jpg",
  "/IMG_9576.jpg",
  "/IMG_9575.jpg",
];

const wallImages: string[] = [
  "/IMG_9586.jpg",
  "/IMG_9585.jpg",
  "/IMG_9584.jpg",
  "/IMG_9583.jpg",
  "/IMG_9582.jpg",
  "/IMG_9581.jpg",
  "/IMG_9580.jpg",
  "/IMG_9579.jpg",
];

const slabImages: string[] = [
  "/IMG_9590.jpg",
  "/IMG_9589.jpg",
  "/IMG_9588.jpg",
  "/IMG_9587.jpg",
];

const residentialImages: string[] = [
  "/IMG_9595.jpg",
  "/IMG_9594.jpg",
  "/IMG_9593.jpg",
  "/IMG_9592.jpg",
  "/IMG_9591.jpg",
];

const civilImages: string[] = [
  "/IMG_9600.jpg",
  "/IMG_9599.jpg",
  "/IMG_9598.jpg",
  "/IMG_9597.jpg",
  "/IMG_9596.jpg",
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
              className="group relative overflow-hidden bg-concrete-dark"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 order-2 lg:order-1">
            {tankFoundationImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden bg-concrete-dark"
              >
                <img
                  src={image}
                  alt="Industrial water tank foundation work"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-36 md:h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-concrete-dark/15 group-hover:bg-concrete-dark/25 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-secondary-foreground">
              Industrial Water Tank Foundations
            </h3>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Our team has successfully completed 10 reinforced concrete foundations for
              industrial water storage tanks on projects performed for major industrial clients.
              These foundations required precise layout, reinforcement placement, anchor bolt
              installation, and high-strength concrete placements to support large steel tank
              structures.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Typical tank foundation systems included reinforced circular slab foundations and
              ring wall foundations designed to distribute heavy loads while maintaining strict
              elevation and alignment tolerances. Our crews performed formwork installation, rebar
              placement, anchor bolt coordination, and concrete placement to ensure the tanks could
              be safely erected and properly supported.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              These projects required close coordination with tank installers, engineers, and
              general contractors to ensure foundation accuracy and structural performance.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-secondary-foreground">
              Additions, Renovations & Tenant Build-Out Concrete
            </h3>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Our team regularly performs concrete work for building additions, renovations, and
              tenant build-outs in commercial and industrial facilities. These projects often
              require selective demolition, saw-cutting, removal and replacement of existing slabs,
              and new concrete placements tied into existing structures.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              We coordinate closely with general contractors and other trades to ensure accurate
              layout, proper reinforcement installation, and seamless integration with existing
              foundations and slabs. Our crews are experienced working in active facilities where
              precision, cleanliness, and schedule coordination are critical.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 order-2 lg:order-2">
            {buildoutImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden bg-concrete-dark"
              >
                <img
                  src={image}
                  alt="Additions, renovations, and tenant build-out concrete"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-36 md:h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-concrete-dark/15 group-hover:bg-concrete-dark/25 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 order-2 lg:order-1">
            {placementImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden bg-concrete-dark"
              >
                <img
                  src={image}
                  alt="Concrete placement and finishing"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-36 md:h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-concrete-dark/15 group-hover:bg-concrete-dark/25 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-secondary-foreground">
              Concrete Placement & Finishing
            </h3>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Our crews specialize in professional concrete placement and finishing for commercial
              and industrial projects. We work closely with contractors, pump operators, and
              inspectors to ensure proper placement, consolidation, and finishing of structural and
              flatwork concrete.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Our experience includes slabs on grade, elevated slabs, foundations, equipment pads,
              and structural pours requiring precise finishing tolerances. From screeding and
              floating to final finishing, our team focuses on delivering durable, high-quality
              concrete surfaces that meet project specifications and schedule demands.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-secondary-foreground">
              Cast-in-Place Structural Walls
            </h3>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              We provide formwork, reinforcement installation, and concrete placement for
              cast-in-place structural walls on commercial and industrial projects. Our crews are
              experienced in constructing reinforced concrete walls for foundations, retaining
              systems, structural cores, and equipment enclosures.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              From layout and formwork setup to concrete placement and stripping, we focus on
              maintaining proper alignment, wall tolerances, and structural integrity. Our team
              works closely with general contractors and inspectors to ensure all reinforcement,
              embeds, and formwork systems meet project specifications and safety standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 order-2 lg:order-2">
            {wallImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden bg-concrete-dark"
              >
                <img
                  src={image}
                  alt="Cast-in-place structural wall construction"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-36 md:h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-concrete-dark/15 group-hover:bg-concrete-dark/25 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 order-2 lg:order-1">
            {slabImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden bg-concrete-dark"
              >
                <img
                  src={image}
                  alt="Slab construction and finishing"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-36 md:h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-concrete-dark/15 group-hover:bg-concrete-dark/25 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-secondary-foreground">
              Slab Construction (Slab on Grade & Slab on Metal Deck)
            </h3>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Our team performs reinforced concrete slab construction for commercial and
              industrial projects, including slab on grade and slab on metal deck systems. Our
              work includes formwork installation, reinforcement placement, vapor barriers, slab
              edge turn-downs, and precise concrete placement and finishing.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              We regularly construct interior building slabs, structural slabs on metal deck,
              equipment pads, and slab extensions tied into existing foundations. Our crews
              maintain strict elevation tolerances and coordinate closely with general contractors
              and other trades to ensure slabs are ready for structural framing, equipment
              installation, and final floor finishes.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-secondary-foreground">
              Residential & Small Project Concrete
            </h3>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              In addition to our commercial and industrial work, our team also performs
              residential and small-scale concrete projects when scheduling allows. These
              projects allow us to keep our crews active while continuing to deliver the same
              level of craftsmanship and attention to detail we bring to larger commercial work.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Typical scopes include residential slabs, driveways, patios, sidewalks, basement
              foundation walls, equipment pads, and concrete removal and replacement. Our crews
              are experienced with forming, reinforcement installation, and concrete placement
              for small structural and flatwork applications.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Regardless of project size, our team approaches every project with professionalism,
              quality workmanship, and a commitment to delivering durable concrete solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 order-2 lg:order-2">
            {residentialImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden bg-concrete-dark"
              >
                <img
                  src={image}
                  alt="Residential and small project concrete"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-36 md:h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-concrete-dark/15 group-hover:bg-concrete-dark/25 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 order-2 lg:order-1">
            {civilImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden bg-concrete-dark"
              >
                <img
                  src={image}
                  alt="Civil and site concrete work"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-36 md:h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-concrete-dark/15 group-hover:bg-concrete-dark/25 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-secondary-foreground">
              Civil & Site Concrete
            </h3>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Our crews perform a wide range of civil and exterior concrete work for commercial
              developments and site improvement projects. This includes sidewalks, equipment pads,
              dumpster pads, bollard foundations, exterior slabs, and other miscellaneous site
              concrete installations.
            </p>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              We coordinate with site contractors, surveyors, and general contractors to ensure
              proper layout, grading alignment, and durable concrete placement that meets project
              specifications and long-term performance requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
