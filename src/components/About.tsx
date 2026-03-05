import { motion } from "framer-motion";
import aboutImg from "@/assets/about-concrete.jpg";

const About = () => {
  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={aboutImg}
            alt="Polished concrete floor in warehouse"
            className="w-full h-[400px] object-cover shadow-2xl"
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
            Our Story
          </h2>
          <div className="mt-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We are a concrete construction team specializing in retaining walls, structural
              foundations, slab-on-grade, slab-on-metal deck, turned-down slabs, footings,
              flatwork, civil concrete scopes, and place-and-finish services. Retaining walls and
              structural foundation work are among our core specialties.
            </p>
            <p>
              Our team is led by three business partners: Martín Covarrubias Sr., Martín
              Covarrubias Jr., and Nate Peralta, who collectively provide field leadership,
              project coordination, and direct oversight on every project.
            </p>
            <p>
              The partnership was formed through years of working in the concrete industry and
              recognizing the value of building a stronger team. Each partner previously operated
              independently—Martín Covarrubias Sr. and Martín Covarrubias Jr. through F&W Concrete,
              and Nathaniel Peralta through Gambit Concrete—but shared the same vision: combining
              field experience, leadership, and operational coordination to build a company capable
              of delivering larger and more complex projects.
            </p>
            <p>
              Martín Covarrubias Sr. and Martín Covarrubias Jr. serve as jobsite superintendents and
              hands-on field leaders, managing daily operations, crew productivity, and quality
              control. Both are actively involved in layout and field execution to ensure accuracy
              from start to finish.
            </p>
            <p>
              Nathan Peralta serves as Project Manager and primary point of contact, coordinating
              communication, scheduling, estimating support, and administrative operations to
              maintain clear alignment with the contractor throughout the project.
            </p>
            <p>
              Our workforce consists of experienced personnel supported by office coordination to
              ensure responsive communication and efficient project execution. We perform our own
              layout using professional-grade equipment and maintain the tools and resources
              necessary to operate multiple crews and mobilize efficiently when required.
            </p>
            <p>
              We take pride in delivering dependable, high-quality concrete work while maintaining
              strong communication and schedule coordination on every project. We welcome the
              opportunity to support your current or upcoming work, and references can be provided
              upon request.
            </p>
          </div>
          <a
            href="#services"
            className="inline-block mt-8 font-heading text-sm tracking-widest uppercase text-primary border-b-2 border-primary pb-1 hover:text-primary/80 hover:border-primary/80 transition-colors"
          >
            Our Services →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
