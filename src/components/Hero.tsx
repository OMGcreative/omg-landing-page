import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#f97316_0%,transparent_40%)] opacity-20 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              Update Your Brand
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
          >
            You built a great business.
            <br />
            <span className="text-secondary">Now increase your growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed font-light"
          >
            Most businesses hit a ceiling because of one (or more) of three
            things: Brand, Digital, or Connection. Let's find out which one is
            holding you back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-orange-600 transition-colors text-lg"
            >
              Get Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface text-primary font-medium rounded-full hover:bg-surface-hover border border-white/5 transition-colors text-lg"
            >
              Explore The 3 Pillars
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
