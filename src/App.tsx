import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Cookies from "./pages/Cookies";
import ScrollToTop from "./components/ScrollToTop";
import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
          <Route
            path="politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="cookies" element={<Cookies />} />
          <Route
            path="*"
            element={<div className="p-12">Page introuvable</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
