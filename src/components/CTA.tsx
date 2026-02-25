import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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

          <form className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-black/10 border border-black/10 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-6 py-4 rounded-xl bg-black/10 border border-black/10 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Website URL"
                className="w-full px-6 py-4 rounded-xl bg-black/10 border border-black/10 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-black/90 transition-colors text-lg mt-4">
              Get Free Brand Audit
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-black/60 text-center mt-4">
              By submitting, you agree to our Privacy Policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
