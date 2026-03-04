/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "../components/Hero";
import { Partners } from "../components/Partners";
import { Pillars } from "../components/Pillars";
import { PainPoints } from "../components/PainPoints";
import { Portfolio } from "../components/Portfolio";
import { CTA } from "../components/CTA";
import { useDocumentHead } from "../hooks/useDocumentHead";

export function HomePage() {
  useDocumentHead({
    title: "OMG! Creative — Deliberately Different Brand Strategy & Creative",
    description:
      "We build brand assets that lead, perform, and drive growth. Stop losing customers to a dated brand experience. Deliberately different brand strategy from OMG! Creative.",
    canonical: "https://omgcreative.com.au/",
    ogUrl: "https://omgcreative.com.au/",
  });

  return (
    <main>
      <Hero />
      <Partners />
      <Pillars />
      <PainPoints />
      <Portfolio />
      <CTA />
    </main>
  );
}
