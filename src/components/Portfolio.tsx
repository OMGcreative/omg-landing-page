import { motion } from "motion/react";

const projects = [
  {
    name: "Praemium",
    category: "Brand Transformation",
    image: "https://picsum.photos/seed/praemium/800/600?blur=2",
  },
  {
    name: "Samsung Defence",
    category: "Creative AI",
    image: "https://picsum.photos/seed/samsung/800/600?blur=2",
  },
  {
    name: "Lug+Carrie",
    category: "Digital Experience",
    image: "https://picsum.photos/seed/lugcarrie/800/600?blur=2",
  },
  {
    name: "Samsung",
    category: "Brand Campaign",
    image: "https://picsum.photos/seed/samsung2/800/600?blur=2",
  },
];

export function Portfolio() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Brands We've Helped
            </h2>
            <p className="text-xl text-secondary">
              Digital assets that lead, perform, and drive growth.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors"
          >
            View All Projects &rarr;
          </a>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-surface">
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-secondary">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
