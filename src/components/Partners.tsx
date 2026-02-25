import { motion } from "motion/react";
import { logos } from "../imports/svg-logos";

export const Partners = () => {
  return (
    <section className="py-16 bg-surface overflow-hidden border-y border-white/5">
      <div className="mx-auto px-4 mb-10">
        <h2 className="text-center text-sm font-semibold tracking-wider text-secondary uppercase">
          Trusted by our partners
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex relative w-full overflow-hidden container mx-auto mask-image-gradient">
        {/* 
          Using motion mask-image for fading the edges using tailwind arbitrary values manually (or just standard tailwind)
        */}
        <div 
          className="pointer-events-none absolute inset-0 z-10 w-full"
          style={{ background: 'linear-gradient(to right, var(--color-surface) 0%, transparent 15%, transparent 85%, var(--color-surface) 100%)' }}
        />
        
        <motion.div
          className="flex whitespace-nowrap min-w-max shrink-0 items-center justify-around"
          animate={{ x: [0, "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {logos.map((Logo, index) => (
            <div key={`logo-1-${index}`} className="mx-12 lg:mx-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Logo />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex whitespace-nowrap min-w-max shrink-0 items-center justify-around"
          animate={{ x: [0, "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          aria-hidden="true"
        >
          {logos.map((Logo, index) => (
            <div key={`logo-2-${index}`} className="mx-12 lg:mx-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Logo />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
