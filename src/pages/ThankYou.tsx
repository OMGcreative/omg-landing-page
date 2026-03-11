/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useDocumentHead } from "../hooks/useDocumentHead";
import { Link } from "react-router-dom";

export function ThankYou() {
  useDocumentHead({
    title: "Thank You — OMG! Creative",
    description: "Thank you for getting in touch with us. We'll be in contact shortly.",
    canonical: "https://omgcreative.com.au/thank-you/",
    ogUrl: "https://omgcreative.com.au/thank-you/",
  });

  return (
    <main className="min-h-screen flex items-center justify-center bg-accent relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-xl mx-auto px-6 text-center relative z-10"
      >
        <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-8 border border-black/10">
          <CheckCircle className="w-12 h-12 text-black" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
          Thank you!
        </h1>
        
        <p className="text-xl text-black/80 mb-12 font-medium">
          We've received your details and have saved your preferences. Our team will be in touch shortly with your free audit.
        </p>

        <Link
          to="/"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-black/90 transition-colors text-lg uppercase tracking-wider"
        >
          Return Home
          <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-2" />
        </Link>
      </motion.div>
    </main>
  );
}
