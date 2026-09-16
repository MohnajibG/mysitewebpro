import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import type { JSX } from "react";

const Home = (): JSX.Element => {
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
        <link rel="canonical" href="https://mngdev.pro/" />
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
};
export default Home;
