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
        <meta property="og:image" content="https://mngdev.pro/og-image.jpg" />
        <meta property="og:url" content="https://mngdev.pro/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MNG DEV – Web & Digital" />
        <meta
          name="twitter:description"
          content="Création de sites web modernes, rapides et optimisés SEO."
        />
        <meta name="twitter:image" content="https://mngdev.pro/og-image.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "MNG DEV",
          "url": "https://mngdev.pro",
          "logo": "https://mngdev.pro/logo-mngdev.png",
          "sameAs": [
            "https://www.linkedin.com/in/mohammed-najib-guerchaoui",
            "https://twitter.com/MNGDEVPro"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+33 6 58 74 83 08",
              "contactType": "customer service",
              "areaServed": "FR",
              "availableLanguage": ["Français", "Anglais"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
           ddressLocality": "Paris",
              "postalCode": "75000",
            "addressCountry": "FR"
          },
          "founder": {
            "@type": "Person",
            "name": "Mohammed Najib Guerchaoui"
          },
          "foundingDate": "2025-01-01",
          "description": "MNG DEV crée des sites web modernes, rapides et optimisés SEO. Développement web, branding et solutions digitales sur mesure pour entreprises et entrepreneurs."
        },
        {
          "@type": "WebPage",
          "url": "https://mngdev.pro/",
          "name": "MNG DEV – Web & Digital",
          "description": "MNG DEV crée des sites web modernes, rapides et optimisés SEO. Développement web, branding et solutions digitales sur mesure.",
          "inLanguage": "fr",
          "isPartOf": {
            "@type": "Website",
            "name": "MNG DEV",
            "url": "https://mngdev.pro"
          }
        }
      ]
    }
    `}
        </script>
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
