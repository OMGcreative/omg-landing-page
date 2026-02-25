import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "motion/react";

const points = [
  {
    title: "Don't blend in. It's all about standing out.",
    content:
      "If your brand looks and sounds like everyone else, you aren't a leader; you're a commodity. Warning signs: Tired logos, \"safe\" copy, and prospects who only want to talk about price.",
    statValue: 7,
    statSuffix: " Seconds",
    statLabel: "to make a first impression",
  },
  {
    title: "Your brand no longer reflects who you are.",
    content:
      'Your business has evolved, but your visuals are stuck in the past. If you feel a "disconnect" when sending a prospect to your site, your brand is anchor-dragging your ambition.',
    statValue: 77,
    statSuffix: "%",
    statLabel: "of brands fail at rebranding",
  },
  {
    title: "Growth feels heavier than it should.",
    content:
      "Marketing feels inefficient, sales cycles are dragging, and trust takes too much effort to build. A refreshed brand aligns perception with value, making growth feel natural, not forced.",
    statValue: 65,
    statSuffix: "%",
    statLabel: "of revenue comes from returning customers",
  },
];

function AnimatedStat({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      });
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className="text-4xl font-display font-bold text-accent">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}

export function PainPoints() {
  return (
    <section className="py-32 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="sticky top-32 self-start">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Simple Test:
            </h2>
            <p className="text-2xl text-secondary font-light">
              If your brand doesn't make you proud—or confident sending people
              to it—it's time for a change.
            </p>
          </div>

          <div className="space-y-12">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                className="p-8 rounded-3xl bg-background border border-white/5 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6 pb-6 border-b border-white/5">
                  <div className="flex-shrink-0">
                    <AnimatedStat
                      value={point.statValue}
                      suffix={point.statSuffix}
                    />
                    <div className="text-xs uppercase tracking-wider text-secondary mt-1">
                      {point.statLabel}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                <p className="text-secondary leading-relaxed">
                  {point.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

