import { type JSX } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import logoSrc from "../assets/logo-mngdev.png";

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="pt-24 min-h-[80vh] flex items-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 my-20 grid md:grid-cols-2 gap-14 items-center">
        {/* Texte Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-extrabold leading-tight text-justify">
            <span className="text-8xl md:text-6xl  block neon-text">
              Donnez vie à votre activité en ligne
            </span>
            <span className="block mt-2 text-photon-magenta/95 font-extralight text-justify text-xl md:text-4xl  neon-text-cyan">
              Votre site web moderne, dynamique et sur-mesure
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-xl text-justify my-5">
            Je crée des sites web professionnels qui reflètent l’image de votre
            entreprise.
            <br />
            Sites vitrines, e-commerce, gestion de clients, paiements en ligne
            et animations interactives — tout est pensé pour booster votre
            visibilité et vos ventes.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="btn-neon inline-flex items-center gap-3"
              aria-label="Contactez moi"
            >
              Contactez-moi <FiArrowRight />
            </a>

            <a
              href="#features"
              className="btn-ghost-neon inline-flex items-center gap-2 px-4 py-2"
              aria-label="Voir les services"
            >
              Voir les services
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <span className="pill-accent">Rapide & clé en main</span>
            <span className="pill-accent">Responsive</span>
            <span className="pill-accent">E-commerce intégré</span>
            <span className="pill-accent">Gestion clients</span>
          </div>
        </motion.div>

        {/* Card info projet */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-cyber rounded-2xl p-6 shadow-neon-lg border-photon-magenta/8 relative overflow-hidden">
            {/* Logo area */}
            <div className="h-56 md:h-72 rounded-lg flex items-center justify-center border-2 border-photon-magenta/20 relative overflow-hidden">
              {/* neon circular ring behind logo */}
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center -z-10"
              >
                <div
                  className="rounded-full"
                  style={{
                    width: "86%",
                    height: "86%",
                    boxShadow:
                      "0 0 48px rgba(255,51,204,0.14), inset 0 0 28px rgba(0,255,255,0.06)",
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(0,255,213,0.05), transparent 25%), radial-gradient(circle at 70% 70%, rgba(255,51,204,0.04), transparent 30%)",
                    border: "1px solid rgba(255,51,204,0.08)",
                  }}
                />
              </div>

              {/* logo image */}
              <div className="relative z-10 flex items-center justify-center w-44 h-44 md:w-56 md:h-56 rounded-full bg-linear-to-br from-dark-matter-indigo/80 to-black-hole-gray/80  overflow-hidden">
                <div className="absolute -inset-2 rounded-full glow-magenta opacity-50" />
                <img
                  src={logoSrc}
                  alt="MNG DEV"
                  className="relative  object-coverw-44 h-44 md:w-56 md:h-56 rounded-full"
                />
              </div>
            </div>

            {/* Infos projet */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-gray-400">
              <div>
                <div className="text-gray-300 font-medium text-sm">Temps</div>
                <div>2–4 semaines</div>
              </div>
              <div>
                <div className="text-gray-300 font-medium text-sm">
                  Révisions
                </div>
                <div>Jusqu'à 3 cycles</div>
              </div>
              <div>
                <div className="text-gray-300 font-medium text-sm">
                  Livrables
                </div>
                <div>Code React + assets + intégration e-commerce</div>
              </div>
              <div>
                <div className="text-gray-300 font-medium text-sm">Options</div>
                <div>Formulaire, CMS, Analytics, Paiement en ligne</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* decorative subtle grid / lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(255,51,204,0.06), transparent 10%), radial-gradient(circle at 90% 90%, rgba(0,255,255,0.04), transparent 12%)",
        }}
      />
    </section>
  );
}
