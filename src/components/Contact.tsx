import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-1 w-16 bg-primary mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-secondary-foreground">
            Contact Info
          </h2>
          <p className="mt-6 text-secondary-foreground/60 text-lg leading-relaxed">
            Ready to get started? Contact MNM Concrete Constructors and let our
            team help bring your vision to life with industry‑leading concrete
            solutions.
          </p>
          <div className="mt-10 space-y-6 text-secondary-foreground/70">
            <div>
              <span className="font-heading text-xs tracking-widest uppercase text-primary">
                Location
              </span>
              <p className="mt-1">Atlanta Metro • Serving the Southeast</p>
            </div>
            <div>
              <span className="font-heading text-xs tracking-widest uppercase text-primary">
                Inquiry Email
              </span>
              <p className="mt-1">mnmconcreteconstructors@gmail.com</p>
              <p className="mt-1">El email de la companie es Mnmconcreteconstructors@gmail.com</p>
            </div>
            <div>
              <span className="font-heading text-xs tracking-widest uppercase text-primary">
                Contacts
              </span>
              <div className="mt-3 space-y-4">
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider text-secondary-foreground">
                    Martín Covarrubias Sr.
                  </p>
                  <p className="mt-1">Senior Superintendent | Co-Owner</p>
                  <p className="mt-1">Phone: (404) 449-4960</p>
                  <p className="mt-1">Email: Mnmconcreteconstructors@gmail.com</p>
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider text-secondary-foreground">
                    Martín Covarrubias Jr.
                  </p>
                  <p className="mt-1">Field Superintendent | Co-Owner</p>
                  <p className="mt-1">Phone: (678) 500-4911</p>
                  <p className="mt-1">Email: Mnmconcreteconstructors@gmail.com</p>
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wider text-secondary-foreground">
                    Nate Carranza
                  </p>
                  <p className="mt-1">Project Manager | Co-Owner</p>
                  <p className="mt-1">Phone: +1 (678) 216-8077</p>
                  <p className="mt-1">Email: Mnmconcreteconstructors@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <span className="font-heading text-xs tracking-widest uppercase text-primary">
                Serving
              </span>
              <p className="mt-1">Commercial & Industrial Clients</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div>
            <label className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/60 block mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-concrete-dark/50 border border-secondary-foreground/10 text-secondary-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/60 block mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-concrete-dark/50 border border-secondary-foreground/10 text-secondary-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/60 block mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full bg-concrete-dark/50 border border-secondary-foreground/10 text-secondary-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/60 block mb-2">
              Message *
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className="w-full bg-concrete-dark/50 border border-secondary-foreground/10 text-secondary-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase px-10 py-4 hover:bg-primary/90 transition-colors group"
          >
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
