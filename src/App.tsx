import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-photon-magenta selection:text-black">
      <Navbar />
      <main className="relative">
        {/* optional subtle background glow / grid for cyberpunk vibe */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-30"
        />
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
