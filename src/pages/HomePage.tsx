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

export function HomePage() {
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
