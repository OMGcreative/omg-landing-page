import { motion } from "motion/react";
import { ContactForm } from "./ContactForm";

export function CTA() {
  return (
    <section id="contact" className="py-32 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
            Let's fix the friction.
          </h2>
          <p className="text-xl md:text-2xl text-black/80 mb-12 font-medium">
            Give us 30 seconds. We'll give you a clear roadmap to a digital
            presence that actually converts.
          </p>

          <ContactForm formType="brand" />
        </motion.div>
      </div>
    </section>
  );
}

