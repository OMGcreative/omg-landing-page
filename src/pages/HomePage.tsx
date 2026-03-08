import { Link } from "react-router-dom";
import { useDocumentHead } from "../hooks/useDocumentHead";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  useDocumentHead({
    title: "Choose Your Path — OMG! Creative",
    description: "Are you ready to update your brand or update your digital presence?",
    canonical: "https://omgcreative.com.au/",
    ogUrl: "https://omgcreative.com.au/",
  });

  return (
    <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#f97316_0%,transparent_50%)] opacity-15 blur-[120px]" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Where should we start?</h1>
          <p className="text-xl text-secondary">Choose the path that best fits your business goals today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link to="/update-your-brand" className="group flex flex-col p-8 md:p-12 rounded-3xl bg-surface border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1">
            <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">Update Your Brand</h2>
            <p className="text-secondary mb-12 flex-1 leading-relaxed text-lg">
              You look like everyone else, so you're stuck in a price war. We build brand strategies that ensure you don't just participate in your category—you lead it.
            </p>
            <div className="inline-flex items-center justify-between w-full border-t border-white/5 pt-6 group-hover:border-accent/20 transition-colors">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                Explore Brand
              </span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-primary group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link to="/update-your-digital" className="group flex flex-col p-8 md:p-12 rounded-3xl bg-surface border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1">
            <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">Update Your Digital</h2>
            <p className="text-secondary mb-12 flex-1 leading-relaxed text-lg">
              Tired websites actively stop you from getting business. We build high-performance digital assets that stop the leaks and start converting your traffic.
            </p>
            <div className="inline-flex items-center justify-between w-full border-t border-white/5 pt-6 group-hover:border-accent/20 transition-colors">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                Explore Digital
              </span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-primary group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
