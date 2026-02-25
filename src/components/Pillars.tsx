import { motion } from "motion/react";
import { Palette, Globe, Users } from "lucide-react";

const pillars = [
  {
    icon: Palette,
    title: "Brand",
    description: "You look like everyone else, so you're stuck in a price war.",
    action: "Stop Blending In",
    color: "from-orange-500/20 to-transparent",
  },
  {
    icon: Globe,
    title: "Digital",
    description:
      "Your website is a graveyard, not a high-performance salesperson.",
    action: "Begin Performing",
    color: "from-blue-500/20 to-transparent",
  },
  {
    icon: Users,
    title: "Connection",
    description:
      "You're talking at customers, not with them. Letting your brand down.",
    action: "Start Connecting",
    color: "from-emerald-500/20 to-transparent",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We stop the sameness.
          </h2>
          <p className="text-xl text-secondary max-w-2xl">
            Things we can do to make your brand shout. If you have a great
            product or service, you probably ask yourself: "Why isn't my
            business growing?" It's usually always 1 or more of 3 things.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-surface border border-white/5 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-secondary mb-8 leading-relaxed min-h-[80px]">
                  {pillar.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-accent group-hover:text-white transition-colors"
                >
                  {pillar.action} &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
