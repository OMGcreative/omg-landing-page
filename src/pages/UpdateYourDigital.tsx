/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, type FormEvent, type FocusEvent, type ChangeEvent } from "react";
import { motion, useMotionValue, useTransform, useInView, useScroll, animate } from "motion/react";
import { ArrowRight, ChevronDown, CheckCircle, ShieldAlert, Smartphone, TrendingUp, Palette, Globe, Users } from "lucide-react";
import { Partners } from "../components/Partners";

/* ─── Animated counter ─── */
function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(mv, value, { duration: 1.5, ease: [0.22, 1, 0.36, 1] });
    } else {
      mv.set(0);
    }
  }, [isInView, mv, value]);

  return (
    <div ref={ref} className="inline-flex items-baseline gap-1">
      <motion.span
        className="data-rounded text-7xl md:text-[7rem] font-bold leading-none tracking-tighter text-accent"
        style={{ minWidth: "1ch", display: "inline-block", textAlign: "left", fontVariantNumeric: "tabular-nums", transition: "all 0.3s ease-in-out" }}
      >
        {rounded}
      </motion.span>
      <span className="data-detail text-7xl md:text-[7rem] font-bold leading-none tracking-tighter text-accent">%</span>
      <span className="data-suffix text-2xl md:text-3xl font-semibold text-secondary ml-2">{suffix}</span>
    </div>
  );
}

/* ─── Deep-dive wrapper with parallax line art ─── */
function DeepDiveWrapper({ deepDives }: { deepDives: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax: paths move at ~30% of scroll speed
  const svgY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  // Circles move faster (50%) for depth separation
  const circlesY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111 0%, #181818 50%, #111 100%)",
      }}
    >
      {/* ─── Parallax line art (right side, behind rows) ─── */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-1/2 h-full pointer-events-none"
        style={{ y: svgY, scale: 1.5 }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 1800"
          className="w-full h-full absolute top-0 right-0"
          preserveAspectRatio="xMaxYMid slice"
        >
          {/* Flowing curves */}
          {Array.from({ length: 25 }).map((_, j) => (
            <path
              key={`curve-${j}`}
              d={`M${300 + j * 12},0 C${400 + j * 8},${200 + j * 30} ${200 - j * 5},${500 + j * 25} ${350 + j * 6},${900 + j * 15} S${150 - j * 4},${1300 + j * 20} ${300 + j * 10},1800`}
              fill="none"
              stroke="#f97316"
              strokeWidth={0.5 + j * 0.04}
              opacity={0.15 + j * 0.03}
            />
          ))}
        </svg>
      </motion.div>

      {/* ─── Floating accent circles (independent parallax, on top of paths) ─── */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-1/2 h-full pointer-events-none z-[5]"
        style={{ y: circlesY, scale: 1.5 }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 1800"
          className="w-full h-full absolute top-0 right-0"
          preserveAspectRatio="xMaxYMid slice"
        >
          <circle cx="380" cy="180" r="4" fill="#f97316" opacity="0.5" />
          <circle cx="320" cy="450" r="7" fill="#f97316" opacity="0.4" />
          <circle cx="400" cy="700" r="5" fill="#f97316" opacity="0.35" />
          <circle cx="260" cy="950" r="8" fill="#f97316" opacity="0.45" />
          <circle cx="350" cy="1200" r="4" fill="#f97316" opacity="0.3" />
          <circle cx="410" cy="1400" r="6" fill="#f97316" opacity="0.4" />
          <circle cx="300" cy="1650" r="5" fill="#f97316" opacity="0.35" />
        </svg>
      </motion.div>

      {/* ─── Stacked rows ─── */}
      <div 
        className="relative z-10"
        style={{backgroundColor: '#0606066e'}}
      >
        {deepDives.map((dd: any, i: number) => (
          <div
            key={dd.heading}
            className="w-full py-10 md:py-14"
            style={{
              // borderTop: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none"           
            }}
          >
            <div 
              className="max-w-7xl mx-auto px-6"
              
            >
              <div className="lg:w-1/2 w-full space-y-4">
                {/* ── Part 1: Header (transparent) ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1.0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-8 md:p-10"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-accent/80 mb-3 block">
                    {dd.label}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    {dd.heading}
                  </h2>
                  <p className="text-base text-secondary leading-relaxed">{dd.body}</p>
                </motion.div>

                {/* ── Part 2: Stat + Details (dark bg) ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1.0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#020202]/50 backdrop-blur-sm rounded-2xl p-8 md:p-10"
                >
                  <div className="mb-8">
                    <AnimatedStat value={dd.statValue} suffix={dd.statSuffix} />
                  </div>

                  <div className="space-y-4 text-secondary text-sm leading-relaxed">
                    <p>
                      <strong className="text-primary">The Red Flags:</strong> {dd.redFlags}
                    </p>
                    <p>
                      <strong className="text-primary">The Verdict:</strong> {dd.verdict}
                    </p>
                    {dd.extra?.map((txt: string, k: number) => (
                      <p key={k} className="text-secondary/70 text-xs leading-relaxed">{txt}</p>
                    ))}
                  </div>

                  <motion.a
                    href="#audit"
                    whileHover={{ x: 4 }}
                    className="group inline-flex items-center gap-2 mt-6 text-base font-bold text-primary hover:text-accent transition-colors"
                  >
                    {dd.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-4" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Floating form input (reusable) ─── */
function FloatingInput({
  label,
  name,
  type = "text",
  id,
  options,
  required,
  validationMessage,
}: {
  label: string;
  name: string;
  type?: string;
  id: string;
  options?: string[];
  required?: boolean;
  validationMessage?: string;
}) {
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  function validate(value: string) {
    if (required && !value.trim()) return validationMessage || `${label} is required`;
    if (value.trim() && type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
    if (value.trim() && type === "url" && !/^https?:\/\/.+\..+/.test(value)) return "Please enter a valid URL (e.g. https://example.com)";
    if (value.trim() && type === "tel" && !/^[\d\s\-+().]{7,}$/.test(value)) return "Please enter a valid phone number";
    return "";
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    setTouched(true);
    setError(validate(e.target.value));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (touched) setError(validate(e.target.value));
  }

  const showError = touched && error;

  if (options) {
    return (
      <div>
        <div className="relative">
          <select
            id={id}
            name={name}
            defaultValue=""
            required={required}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`peer w-full px-4 pt-6 pb-3 bg-white/5 border border-white/10 rounded-xl text-primary focus:outline-none focus:border-accent appearance-none transition-colors ${
              showError ? "border-red-500 focus:border-red-500" : ""
            }`}
          >
            <option value="" disabled hidden />
            {options.map((opt) => (
              <option key={opt} value={opt} className="bg-surface text-primary">
                {opt}
              </option>
            ))}
          </select>
          <label
            htmlFor={id}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/70 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-accent peer-[:not([value=''])]:top-2 peer-[:not([value=''])]:translate-y-0 peer-[:not([value=''])]:scale-75 peer-[:not([value=''])]:text-accent"
          >
            {label}
          </label>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/50 pointer-events-none" />
        </div>
        {showError && <p className="text-xs text-red-400 mt-1 ml-1">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder=" "
          className={`peer w-full px-4 pt-6 pb-3 bg-white/5 border border-white/10 rounded-xl text-primary focus:outline-none focus:border-accent placeholder-transparent transition-colors ${
            showError ? "border-red-500 focus:border-red-500" : ""
          }`}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/70 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-accent"
        >
          {label}
        </label>
      </div>
      {showError && <p className="text-xs text-red-400 mt-1 ml-1">{error}</p>}
    </div>
  );
}

/* ─── Pain‑point card data ─── */
const painPoints = [
  {
    num: "#1",
    icon: ShieldAlert,
    title: "The Trust Gap",
    description:
      "A dated website signals a stagnant business. First impressions happen in milliseconds. They see you. They see your competition. If you're behind, you lose.",
    action: "Get the trust back",
    color: "from-orange-500/20",
  },
  {
    num: "#2",
    icon: Smartphone,
    title: "The Mobile Leak",
    description:
      "Up to 90% of traffic from digital marketing is usually mobile. A poor mobile User Experience will frustrate your customers.",
    action: "Start Performing",
    color: "from-blue-500/20",
  },
  {
    num: "#3",
    icon: TrendingUp,
    title: "The Conversion Void",
    description:
      "High traffic means nothing if your inbox is empty and bounce rates are sky-high.",
    action: "Close the deal",
    color: "from-emerald-500/20",
  },
];

/* ─── Pillar data ─── */
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
    description: "Your website is a graveyard, not a high-performance salesperson.",
    action: "Begin Performing",
    color: "from-blue-500/20 to-transparent",
  },
  {
    icon: Users,
    title: "Connection",
    description: "You're talking at customers, not with them.",
    action: "Start Connecting",
    color: "from-emerald-500/20 to-transparent",
  },
];

/* ─── Deep-dive stat sections ─── */
const deepDives = [
  {
    label: "Letting your brand down",
    heading: "Your website looks dated (and customers feel it instantly)",
    body: "If your website hasn't had a meaningful update in 3+ years, it shows. First impressions happen in milliseconds.",
    statValue: 93,
    statSuffix: "search first",
    redFlags:
      'Generic stock imagery, "templated" layouts that look like your competitors, and a design that no longer matches the quality of your actual work.',
    verdict:
      "A dated website signals a stagnant business. Trust is your first sale; don't lose it at the homepage.",
    cta: "Update your website",
  },
  {
    label: "You Must Be Mobile First",
    heading: "It doesn't work beautifully on mobile",
    body: "With nearly 90% of search and social traffic coming from mobile, a \"desktop-first\" website is a liability.",
    statValue: 90,
    statSuffix: "mobile",
    redFlags:
      "If users have to pinch, zoom, or wait more than 3 seconds for a page to load, they leave.",
    verdict:
      "If your website isn't guiding users toward a clear next step, it's a cost center, not a growth tool.",
    cta: "Start Growing",
  },
  {
    label: "Traffic Should Equal Business",
    heading: "It's not converting traffic into action",
    body: "High traffic means nothing if your inbox is empty.",
    statValue: 75,
    statSuffix: "bounce rate",
    redFlags:
      '75% of visitors found your website irrelevant! Unclear calls to action, and a confusing "path to purchase."',
    verdict:
      "If your website isn't guiding users toward a clear next step, it's a cost center, not a growth tool.",
    cta: "Convert Now",
    extra: [
      "1-2% for lead generation often signals a problem with the offer, the trust signals, or the ease of the process.",
      'In Google Analytics 4, "Bounce Rate" is being replaced/inverted by "Engagement Rate." A bounce is now simply a session that was not engaged.',
      "What it tells you: A very high bounce rate (e.g., over 70-80% for non-blogs) usually means the landing page content is irrelevant to the ad/link that brought them there, the design is outdated/untrustworthy, or the page loads too slowly.",
    ],
  },
];

/* ─── Formspree endpoint ─── */
const FORMSPREE_URL = "https://formspree.io/f/mbdawnrj";

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════ */
export function UpdateYourDigital() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid") as HTMLElement | null;
      firstInvalid?.focus();
      firstInvalid?.blur();
      form.querySelectorAll(":invalid").forEach((el) => {
        (el as HTMLElement).focus();
        (el as HTMLElement).blur();
      });
      firstInvalid?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setFormError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFormError("Something went wrong. Please try again.");
    }
  }

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#f97316_0%,transparent_50%)] opacity-15 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              Update Your Digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8 max-w-5xl"
          >
            Stop Losing Customers
            <br />
            <span className="text-secondary">to an outdated Digital Presence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed font-light"
          >
            Tired websites actively stop you getting business and sales. If your website is more than 3 years old, we need to chat. We build digital assets that drive growth. Let's get you sorted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#audit"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-orange-600 transition-colors text-lg"
            >
              Audit my performance
              <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-4" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface text-primary font-medium rounded-full hover:bg-surface-hover border border-white/5 transition-colors text-lg"
            >
              Explore The 3 Pillars
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <Partners />

      {/* ─── PAIN POINT CARDS ─── */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Reality Check</h2>
            <p className="text-xl text-secondary">Three signs you've outgrown your current website</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.25 }}
                className="group relative p-8 rounded-3xl bg-surface border border-white/5 overflow-hidden flex flex-col"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                      <p.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-2xl font-bold text-accent">{p.num}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                  <p className="text-secondary leading-relaxed mb-8">{p.description}</p>
                </div>

                <a
                  href="#audit"
                  className="relative z-10 group/link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent group-hover:text-white transition-colors"
                >
                  {p.action}
                  <span className="inline-block transition-transform duration-300 ease-out group-hover/link:translate-x-4">&rarr;</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Radial glow at bottom of pain points */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_50%_100%,#f97316_0%,transparent_60%)] opacity-10 blur-[100px] pointer-events-none" />
      </section>

      {/* ─── DEEP DIVE STAT SECTIONS (with parallax line art) ─── */}
      <DeepDiveWrapper deepDives={deepDives} />

      {/* ─── DELIBERATELY DIFFERENT SOLUTION / PILLARS ─── */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 block">
              The "Deliberately Different" Solution
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              You don't need a new "logo." You&nbsp;need a unique brand strategy.
            </h2>
            <p className="text-xl text-secondary leading-relaxed">
              We help our clients define what is possible for their brand.  A Deliberately Different brand strategy and creative approach will ensure you not only get noticed but also lead your marketing category. Your brand isn't a logo—it's what your customers remember and say about you. If you are not growing, your business is seen a a commodity in your marketing category. It's time to change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.25 }}
                className="group relative p-8 rounded-3xl bg-surface border border-white/5 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20">
                    <pillar.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-secondary mb-8 leading-relaxed min-h-[60px]">
                    {pillar.description}
                  </p>
                  <a
                    href="#audit"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent group-hover:text-white transition-colors"
                  >
                    {pillar.action}
                    <span className="inline-block transition-transform duration-300 ease-out group-hover/link:translate-x-4">
                      &rarr;
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUDIT FORM / CTA ─── */}
      <section id="audit" className="py-24 md:py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
              Is your website holding you&nbsp;back?
              <br />
              Find out.
            </h2>
            <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto font-medium">
              Get a free performance audit and discover exactly what's costing you conversions.
            </p>
          </motion.div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-black mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-black mb-3">Thank you!</h3>
              <p className="text-lg text-black/70">
                We've received your details and will be in touch shortly with your free audit.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="max-w-lg mx-auto space-y-4 text-left"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    id="ud-first-name"
                    name="first_name"
                    required
                    placeholder=" "
                    className="peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b border-black/10 text-black focus:outline-none focus:border-b-2 focus:border-black placeholder-transparent transition-colors"
                  />
                  <label
                    htmlFor="ud-first-name"
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-black/70"
                  >
                    First Name*
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="ud-last-name"
                    name="last_name"
                    required
                    placeholder=" "
                    className="peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b border-black/10 text-black focus:outline-none focus:border-b-2 focus:border-black placeholder-transparent transition-colors"
                  />
                  <label
                    htmlFor="ud-last-name"
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-black/70"
                  >
                    Last Name*
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  id="ud-email"
                  name="email"
                  type="email"
                  required
                  placeholder=" "
                  className="peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b border-black/10 text-black focus:outline-none focus:border-b-2 focus:border-black placeholder-transparent transition-colors"
                />
                <label
                  htmlFor="ud-email"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-black/70"
                >
                  Email*
                </label>
              </div>

              <div className="relative">
                <input
                  id="ud-phone"
                  name="phone"
                  type="tel"
                  placeholder=" "
                  className="peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b border-black/10 text-black focus:outline-none focus:border-b-2 focus:border-black placeholder-transparent transition-colors"
                />
                <label
                  htmlFor="ud-phone"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-black/70"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <input
                  id="ud-url"
                  name="website"
                  type="url"
                  placeholder=" "
                  className="peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b border-black/10 text-black focus:outline-none focus:border-b-2 focus:border-black placeholder-transparent transition-colors"
                />
                <label
                  htmlFor="ud-url"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-black/70"
                >
                  Business URL
                </label>
              </div>

              <div className="relative">
                <input
                  id="ud-company"
                  name="company"
                  required
                  placeholder=" "
                  className="peer w-full px-3 pt-6 pb-3 bg-white/10 border-0 border-b border-black/10 text-black focus:outline-none focus:border-b-2 focus:border-black placeholder-transparent transition-colors"
                />
                <label
                  htmlFor="ud-company"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 font-medium origin-left transition-all duration-300 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-black/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-black/70"
                >
                  Company Name*
                </label>
              </div>

              <div className="relative">
                <label htmlFor="ud-frustration" className="block text-sm text-black/50 font-medium mb-1">
                  What is your biggest digital frustration?
                </label>
                <select
                  id="ud-frustration"
                  name="frustration"
                  defaultValue=""
                  className="w-full px-3 py-3 bg-white/10 border-0 border-b border-black/10 text-black focus:outline-none focus:border-b-2 focus:border-black appearance-none transition-colors"
                >
                  <option value="">Select one…</option>
                  <option value="My website looks dated">My website looks dated</option>
                  <option value="Poor mobile experience">Poor mobile experience</option>
                  <option value="Low conversion rates">Low conversion rates</option>
                  <option value="Brand doesn't reflect our quality">Brand doesn't reflect our quality</option>
                  <option value="Not sure where to start">Not sure where to start</option>
                </select>
                <ChevronDown className="absolute right-3 bottom-4 w-4 h-4 text-black/40 pointer-events-none" />
              </div>

              <div className="flex items-start gap-3 pt-4">
                <input
                  id="ud-privacy"
                  name="privacy_consent"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 accent-black"
                />
                <label htmlFor="ud-privacy" className="text-xs text-black/60 leading-relaxed">
                  By clicking this box, you agree to our{" "}
                  <a href="https://omgcreative.com.au/privacy-policy/" className="underline hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                    privacy policies
                  </a>.
                  By clicking submit below, you consent to allow omgcreative.com.au to store and process the personal information submitted above to provide you the content requested.
                </label>
              </div>

              {formError && (
                <p className="text-sm text-red-700 text-center">{formError}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-black/90 transition-colors text-lg mt-4 uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending…" : "Submit"}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      
    </main>
  );
}
