import { motion } from "motion/react";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          OMG<span className="text-accent">!</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          <a href="#" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            What We Do
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
          >
            Free Brand Audit
          </a>
          <button className="md:hidden p-2 text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </nav>
  );
}
