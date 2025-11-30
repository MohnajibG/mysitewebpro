import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-photon-magenta selection:text-black">
      <Navbar />
      <main className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-30"
        />
        {/* Outlet affichera Home ou une page légale selon la route */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
