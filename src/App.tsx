import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MentionsLegales from "./pages/MentionsLegales";
import type { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Cookies from "./pages/Cookies";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#121212] text-white selection:bg-photon-magenta selection:text-black">
        <Navbar />
        <Routes>
          {/* Page principale */}
          <Route
            path="/"
            element={
              <main className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-30"
                />
                <Hero />
                <Features />
                <About />
                <Contact />
              </main>
            }
          />

          {/* Page Mentions légales */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route
            path="/politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="/cookies" element={<Cookies />} />

          {/* fallback optionnel */}
          <Route
            path="*"
            element={<div className="p-12">Page introuvable</div>}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
