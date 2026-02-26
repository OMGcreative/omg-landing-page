/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { UpdateYourDigital } from "./pages/UpdateYourDigital";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/update-your-digital" element={<UpdateYourDigital />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
