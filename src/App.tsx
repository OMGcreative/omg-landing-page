/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { UpdateYourBrand } from "./pages/UpdateYourBrand";
import { UpdateYourDigital } from "./pages/UpdateYourDigital";
import { ThankYouBrand } from "./pages/ThankYouBrand";
import { ThankYouDigital } from "./pages/ThankYouDigital";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/update-your-brand" element={<UpdateYourBrand />} />
          <Route path="/update-your-digital" element={<UpdateYourDigital />} />
          <Route path="/thank-you-brand" element={<ThankYouBrand />} />
          <Route path="/thank-you-digital" element={<ThankYouDigital />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
