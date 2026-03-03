import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
          <div className="mt-10 space-y-4 text-secondary-foreground/70">
            <div>
              <span className="font-heading text-xs tracking-widest uppercase text-primary">
                Location
              </span>
              <p className="mt-1">Atlanta Metro • Serving the Southeast</p>
            </div>
            <div>
              <span className="font-heading text-xs tracking-widest uppercase text-primary">
                Phone
              </span>
              <p className="mt-1">(555) 018‑2244</p>
            </div>
            <div>
              <span className="font-heading text-xs tracking-widest uppercase text-primary">
                Email
              </span>
              <p className="mt-1">estimating@mnmconcrete.com</p>
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
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          <div>
            <label className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/60 block mb-2">
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-concrete-dark/50 border border-secondary-foreground/10 text-secondary-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/60 block mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-concrete-dark/50 border border-secondary-foreground/10 text-secondary-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/60 block mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-concrete-dark/50 border border-secondary-foreground/10 text-secondary-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-heading text-xs tracking-widest uppercase text-secondary-foreground/60 block mb-2">
              Message *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
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
