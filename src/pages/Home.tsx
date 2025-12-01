import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>
          MNG DEV – Web & Digital | Création de sites & solutions digitales
        </title>
        <meta
          name="description"
          content="MNG DEV crée des sites web modernes, rapides et optimisés SEO. Développement web, branding, solutions digitales sur mesure."
        />
        <meta property="og:title" content="MNG DEV – Web & Digital" />
        <meta
          property="og:description"
          content="Création de sites web modernes, rapides et optimisés SEO. Développement web & solutions digitales."
        />
        <meta
          property="og:image"
          content="https://mngdev.netlify.app/og-image.jpg"
        />
        <meta property="og:url" content="https://mngdev.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MNG DEV – Web & Digital" />
        <meta
          name="twitter:description"
          content="Création de sites web modernes, rapides et optimisés SEO."
        />
        <meta
          name="twitter:image"
          content="https://mngdev.netlify.app/og-image.jpg"
        />
      </Helmet>

      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
