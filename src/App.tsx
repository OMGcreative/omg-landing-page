/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Pillars } from "./components/Pillars";
import { PainPoints } from "./components/PainPoints";
import { Portfolio } from "./components/Portfolio";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <PainPoints />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
