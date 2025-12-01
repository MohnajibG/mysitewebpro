import { motion } from "framer-motion";
import type { JSX } from "react";
import { FiCheckCircle } from "react-icons/fi";
import illustration from "../assets/illustration.gif";

type AboutProps = {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  highlights?: string[];
};

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
};

export default function About({
  title = "À propos",
  subtitle = "Présentation rapide de votre activité et de votre approche",
  paragraphs = [
    "Je conçois des sites vitrines et e-commerce sur-mesure, rapides et accessibles. J'accompagne les entrepreneurs et PME depuis la phase de design jusqu'au déploiement et à la maintenance.",
    "Compétences principales : intégration de formulaires et gestion de leads, configuration CMS (headless), analytics et tracking des conversions, intégration de paiements sécurisés (Stripe), authentification, et optimisation SEO / performance.",
    "Je travaille principalement en front-end (React + TypeScript + Tailwind CSS). Je fournis le code source, les assets optimisés et l'assistance au déploiement (Vercel, Netlify ou hébergement custom).",
  ],
  highlights = [
    "Design responsive",
    "Formulaires & capture de leads",
    "CMS (headless) & édition contenu",
    "Paiements sécurisés (Stripe)",
    "Analytics & suivi des conversions",
    "Authentification & gestion rôles",
    "Optimisation SEO & performances",
    "Maintenance & sauvegardes",
  ],
}: AboutProps): JSX.Element {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 bg-black-hole-gray/80"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-start">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            id="about-title"
            variants={item}
            className="text-4xl font-semibold neon-text"
            style={{ color: "var(--photon-magenta)" }}
          >
            {title}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-3 text-lg text-gray-300 neon-text-cyan"
            style={{ color: "var(--neon-cyan)" }}
          >
            {subtitle}
          </motion.p>

          <div className="mt-6 space-y-4">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={item}
                className="text-sm text-gray-300 leading-relaxed card-cyber p-4"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00))",
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.ul
            variants={item}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-sm text-gray-200"
                variants={item}
              >
                <span className="flex-none rounded-md bg-photon-magenta/10 p-2 text-photon-magenta glow-magenta">
                  <FiCheckCircle />
                </span>
                <span>{h}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-6">
            <a
              href="#contact"
              className="inline-block px-5 py-3 rounded-full btn-neon"
              aria-label="Me contacter"
            >
              Me contacter
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl p-6 card-cyber border-photon-magenta/8 relative overflow-hidden"
        >
          {/* cyan subtle glow */}
          <div
            className="absolute -inset-8 blur-2xl opacity-30 glow-cyan md:mt-40"
            aria-hidden
          />

          <div className="h-56 md:h-64 rounded-lg flex items-center justify-center  ">
            <motion.img
              src={illustration}
              alt="Illustration animée"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
