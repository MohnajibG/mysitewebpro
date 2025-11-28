import { motion } from "framer-motion";
import type { JSX } from "react";
import { FiCheckCircle } from "react-icons/fi";

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

/**
 * About — version "cyberpunk" : utilise les utilitaires CSS fournis
 * (neon-text, neon-text-cyan, card-cyber, pill-accent, glow-*, input-neon).
 */
export default function About({
  title = "À propos",
  subtitle = "Présentation rapide de votre activité et de votre approche",
  paragraphs = [
    "Je crée des sites vitrines modernes, performants et accessibles pour les entrepreneurs et petites entreprises. J'assure une expérience cohérente sur tous les appareils, avec des animations discrètes et une identité visuelle forte.",
    "Je travaille principalement en front-end (React + TypeScript + Tailwind CSS) et je peux intégrer des services pour la collecte de leads (Netlify Forms, Formspree, Supabase, etc.) si vous souhaitez rendre le site interactif.",
  ],
  highlights = [
    "Design responsive",
    "Optimisation performance",
    "Animations fluides",
    "Intégration form & SEO",
  ],
}: AboutProps): JSX.Element {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 bg-black-hole-gray/80"
    >
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-start">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            id="about-title"
            variants={item}
            className="text-3xl font-semibold neon-text"
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
            className="absolute -inset-8 blur-2xl opacity-30 glow-cyan"
            aria-hidden
          />

          <div className="h-56 md:h-64 rounded-lg border-2 border-photon-magenta/20 flex items-center justify-center">
            <motion.img
              src="/assets/illustration.gif"
              alt="Illustration animée"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-gray-400">
            <div>
              <dt className="text-gray-300 font-medium">
                Temps de réalisation
              </dt>
              <dd className="mt-1">2–4 semaines (selon contenus)</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">Révisions</dt>
              <dd className="mt-1">Jusqu'à 3 cycles de retours</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">Livrables</dt>
              <dd className="mt-1">
                Code React + assets + instructions déploiement
              </dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">Options</dt>
              <dd className="mt-1">Formulaire, analytics, CMS headless</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-3">
            <span className="pill-accent">Populaire</span>
            <span className="text-xs text-gray-400">Livraison clé en main</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
