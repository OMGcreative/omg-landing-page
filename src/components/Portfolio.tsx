import { motion } from "motion/react";
import praemiumThumb from "../imports/img/praemium_thumb.jpg";
import samsungThumb from "../imports/img/SAMSUNG_case_study_thumb.jpg";
import lugcarrieThumb from "../imports/img/lugcarrie_thumb.jpg";
import didiThumb from "../imports/img/DiDi_Rideshare_feature_thumb.jpg";

const projects = [
  {
    name: "Praemium",
    category: "Brand Transformation",
    image: praemiumThumb,
    url: "https://omgcreative.com.au/projects/praemium/",
  },
  {
    name: "Samsung Defence",
    category: "Creative AI",    
    image: samsungThumb,
    url: "https://omgcreative.com.au/projects/samsung-defence/",
  },
  {
    name: "Lug+Carrie",
    category: "Digital Experience",
    image: lugcarrieThumb,
    url: "https://omgcreative.com.au/projects/lug-carrie/",
  },
  {
    name: "DiDi",
    category: "Brand Campaign",
    image: didiThumb,
    url: "https://omgcreative.com.au/projects/didi/",
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
            href="https://omgcreative.com.au/projects/"
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
              className="group"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
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
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
