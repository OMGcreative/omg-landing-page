import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, useAnimationControls } from "motion/react";
import { logos } from "../imports/svg-logos";

const IDLE_TIMEOUT_MS = 3 * 60 * 1000; // 3 minutes

function useIdleTimer(timeout: number) {
  const [isIdle, setIsIdle] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const resetTimer = useCallback(() => {
    setIsIdle(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsIdle(true), timeout);
  }, [timeout]);

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "touchstart", "click"];
    events.forEach((e) => window.addEventListener(e, resetTimer, { passive: true }));
    resetTimer(); // start the timer on mount

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimer));
      clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  return isIdle;
}

const marqueeTransition = {
  repeat: Infinity,
  ease: "linear" as const,
  duration: 40,
};

export const Partners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "100px" });
  const isIdle = useIdleTimer(IDLE_TIMEOUT_MS);
  const controls = useAnimationControls();

  const shouldAnimate = isInView && !isIdle;

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({ x: [0, "-100%"], transition: marqueeTransition });
    } else {
      controls.stop();
    }
  }, [shouldAnimate, controls]);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-surface overflow-hidden border-y border-white/5"
    >
      <div className="mx-auto px-4 mb-10">
        <h2 className="text-center text-sm font-semibold tracking-wider text-secondary uppercase">
          Trusted by our partners
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex relative w-full overflow-hidden container mx-auto mask-image-gradient">
        <div
          className="pointer-events-none absolute inset-0 z-10 w-full"
          style={{
            background:
              "linear-gradient(to right, var(--color-surface) 0%, transparent 15%, transparent 85%, var(--color-surface) 100%)",
          }}
        />

        <motion.div
          className="flex whitespace-nowrap min-w-max shrink-0 items-center justify-around"
          animate={controls}
        >
          {logos.map((Logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="mx-12 lg:mx-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Logo />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex whitespace-nowrap min-w-max shrink-0 items-center justify-around"
          animate={controls}
          aria-hidden="true"
        >
          {logos.map((Logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="mx-12 lg:mx-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Logo />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

