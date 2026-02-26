import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="65" fill="none" viewBox="0 0 27 65"><path fill="#fff" d="M20.86 21.591H5.837c-1.12.06-2.003-.837-2.062-1.914L3.008 5.026c-.06-.539.059-1.017.412-1.436a2.04 2.04 0 0 1 1.414-.598h16.97c.47 0 1 .18 1.355.479q.53.628.53 1.435l-.766 14.652c0 1.136-.884 1.973-2.003 1.973 0 .12-.06.12-.06.06M4.835 4.487c-.118 0-.236.06-.353.12-.06.12-.06.24-.06.359l.767 14.592c0 .598.471.598.648.598H20.86c.353.06.648-.18.648-.538v-.06l.766-14.592c0-.12-.06-.3-.118-.419 0 0-.118-.06-.354-.06zm15.025 36.84H6.837c-1.119.059-2.062-.838-2.12-1.974L3.95 24.76a1.72 1.72 0 0 1 .472-1.376c.412-.359.884-.598 1.414-.598H20.86c.47-.06 1.001.18 1.355.538q.53.628.53 1.436l-.766 14.592c0 1.136-.884 1.973-2.003 1.973zM5.836 24.221c-.118 0-.236.06-.354.12 0 0-.059.12-.059.359l.766 14.592c0 .598.472.598.648.598h13.08c.354.06.649-.18.649-.538v-.06l.766-14.592c0-.12-.059-.3-.118-.419-.118-.06-.236-.06-.353-.06zm7.483 36.84c-5.067 0-9.133-4.187-9.133-9.33s4.124-9.27 9.192-9.27c5.067 0 9.132 4.187 9.132 9.27 0 5.203-4.065 9.33-9.191 9.33q.088 0 0 0m0-17.104c-4.243 0-7.719 3.528-7.66 7.894 0 4.306 3.476 7.834 7.778 7.774 4.242 0 7.66-3.528 7.66-7.834s-3.477-7.834-7.778-7.834m0 12.32c-2.416 0-4.42-1.974-4.42-4.486s1.945-4.485 4.42-4.485c1.237 0 2.474.538 3.3 1.495.294.299.294.717 0 1.016-.295.24-.767.24-1.002-.06a3.06 3.06 0 0 0-2.298-1.016c-1.65 0-2.946 1.375-2.946 2.99 0 1.675 1.355 2.99 2.946 2.99.766 0 1.532-.299 2.12-.897a3.07 3.07 0 0 0 .767-1.435h-1.768c-.412 0-.707-.3-.707-.718s.295-.717.707-.717h2.593c.412 0 .707.299.707.717a4.51 4.51 0 0 1-1.296 3.17c-.766.957-1.886 1.435-3.123 1.435m0-39.471c-2.416 0-4.42-2.033-4.42-4.485s2.004-4.486 4.42-4.486 4.419 2.034 4.419 4.486-1.945 4.485-4.42 4.485m0-7.476c-1.65 0-2.946 1.376-2.946 2.99s1.355 2.99 2.946 2.99c1.59 0 2.946-1.375 2.946-2.99.059-1.674-1.296-2.99-2.946-2.99m0 27.091a.72.72 0 0 1-.648-.418L10.373 31.1v4.664c0 .42-.295.718-.707.718-.413 0-.707-.299-.707-.718V28.23c0-.418.294-.717.707-.717h.176c.295 0 .53.179.649.418l2.828 6.16 2.828-6.1a.72.72 0 0 1 .648-.419h.177c.412 0 .707.3.707.718v7.475c0 .42-.295.718-.707.718-.413 0-.707-.299-.707-.718V31.04l-2.298 4.964c-.059.239-.295.418-.648.418"/></svg>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          <Link to="/" className="hover:text-primary transition-colors">
            Brand
          </Link>
          <Link to="/update-your-digital" className="hover:text-primary transition-colors">
            Digital
          </Link>
          {/* <a href="#" className="hover:text-primary transition-colors">
            What We Do
          </a> */}
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
          {/* <button className="md:hidden p-2 text-primary">
            <Menu className="w-6 h-6" />
          </button> */}
        </motion.div>
      </div>
    </nav>
  );
}
