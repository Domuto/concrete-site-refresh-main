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
              We are a concrete construction team specializing in retaining walls,
              structural foundations, slab-on-grade, slab-on-metal deck, turned-down
              slabs, footings, flatwork, civil scopes, and place-and-finish services.
              Retaining walls and structural foundations are core specialties.
            </p>
            <p>
              The company is led by three business partners: Martín Covarrubias Sr.,
              Martín Covarrubias Jr., and Nate Carranza. Martín Covarrubias Sr. and
              Martín Covarrubias Jr. serve as jobsite superintendents and hands-on
              field leaders overseeing daily operations, layout, productivity, and
              quality control. Nate Carranza serves as Project Manager and primary
              point of contact, coordinating communication, scheduling, estimating
              support, and administrative operations.
            </p>
            <p>
              Our workforce is experienced and supported by office coordination to
              keep communication responsive and execution efficient. We perform our
              own layout with professional-grade equipment and maintain the tools
              and resources to operate multiple crews and mobilize quickly.
            </p>
            <p>
              We take pride in dependable, high-quality work with strong
              communication and schedule coordination. We welcome the opportunity
              to support your current or upcoming projects, and references are
              available upon request.
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
