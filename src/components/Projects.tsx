import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="h-1 w-16 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Our Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            MNM Concrete Constructors thrives on complex builds. Our approach
            pairs experienced crews with disciplined planning to deliver clean
            results across a wide range of projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden group"
        >
          <img
            src="/IMG_9609.jpg"
            alt="Commercial construction project"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-concrete-dark/80 via-concrete-dark/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase text-secondary-foreground">
              Featured Projects
            </h3>
            <p className="mt-2 text-secondary-foreground/70 max-w-lg">
              Our objective is simple: consistent quality and dependable delivery
              that builds long‑term partnerships.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Structural Foundations",
              image: "/IMG_9608.jpg",
            },
            {
              title: "Tilt‑Up Panels",
              image: "/IMG_9607.jpg",
            },
            {
              title: "Industrial Flatwork",
              image: "/IMG_9606.jpg",
            },
          ].map((project) => (
            <div key={project.title} className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-concrete-dark/80 via-concrete-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="font-heading text-lg uppercase tracking-wide text-secondary-foreground">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
