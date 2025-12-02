import { type JSX } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import logoSrc from "../assets/logo-mngdev.png";

const Hero = (): JSX.Element => {
  return (
    <section
      id="hero"
      className="pt-24 md:pt-12 min-h-[80vh] flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 my-20  md:mt-48 grid md:grid-cols-2 gap-14 items-center">
        {/* Texte Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-extrabold leading-tight md:text-left">
            <span className="text-4xl md:text-6xl text-center block neon-text md:mb-4 md:leading-snug my-10">
              Donnez vie à votre activité en ligne
            </span>
            <span className="block mt-2 text-photon-magenta/95 font-extralight text-justify text-xl md:text-4xl  neon-text-cyan">
              Votre site web moderne, dynamique et sur-mesure
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl text-justify my-5">
            {" "}
            Je conçois des sites web professionnels qui incarnent l’identité de
            votre entreprise. Sites vitrines, boutiques en ligne, gestion
            clients et paiements intégrés, chaque détail est optimisé pour
            améliorer votre visibilité et convertir davantage de visiteurs en
            clients.{" "}
          </p>{" "}
          <p className="mt-4 text-lg text-gray-300 max-w-xl text-justify my-5">
            {" "}
            Création de sites sur-mesure : vitrine, e-commerce et gestion client
            avec paiements sécurisés. Design, performances et animations
            interactives alignés sur vos objectifs pour maximiser trafic et
            ventes.{" "}
          </p>{" "}
          <p className="mt-4 text-lg text-gray-300 max-w-xl text-justify my-5">
            {" "}
            J’élabore des sites performants et esthétiques vitrines et boutiques
            e-commerce, avec gestion des clients et solutions de paiement. Tout
            est pensé pour renforcer votre image et générer des résultats
            mesurables.{" "}
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
            <span className="pill-accent">Paiements sécurisés</span>
            <span className="pill-accent">SEO & performance</span>
            <span className="pill-accent">Intégrations API</span>
            <span className="pill-accent">CMS (headless possible)</span>
            <span className="pill-accent">Analytics & suivi</span>
            <span className="pill-accent">Sécurité & sauvegarde</span>
            <span className="pill-accent">Déploiement CI/CD</span>
            <span className="pill-accent">Maintenance & support</span>
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
            <div className="h-56 md:h-72 rounded-lg flex items-center justify-center   relative overflow-hidden">
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
                  className="relative object-cover w-44 h-44 md:w-56 md:h-56 rounded-full logo-animate"
                />
              </div>
            </div>

            {/* Infos projet */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-gray-400">
              <div>
                <div className="text-gray-300 font-medium text-sm">Temps</div>
                <div>
                  2–4 semaines - planning typique :
                  <ul className="list-disc ml-4">
                    <li>Phase 1 : Kick-off, maquettes & architecture</li>
                    <li>Phase 2 : Développement des pages principales</li>
                    <li>Phase 3 : Intégration e-commerce, formulaires & API</li>
                    <li>Phase 4 : Tests, optimisation, déploiement</li>
                  </ul>
                  Dépendances : contenu client, accès hébergement/API,
                  validation des maquettes.
                </div>
              </div>

              <div>
                <div className="text-gray-300 font-medium text-sm">
                  Révisions
                </div>
                <div>
                  Jusqu'à 3 cycles de révision inclus - processus :
                  <ul className="list-disc ml-4">
                    <li>
                      Cycle 1 : Retours sur maquettes et ajustements
                      fonctionnels
                    </li>
                    <li>Cycle 2 : Corrections visuelles et optimisation UX</li>
                    <li>
                      Cycle 3 : Ajustements finaux avant mise en production
                    </li>
                  </ul>
                  Remarques : demandes hors périmètre seront chiffrées
                  séparément. Délai de réponse client recommandé : 48–72h par
                  cycle.
                </div>
              </div>

              <div>
                <div className="text-gray-300 font-medium text-sm">
                  Livrables
                </div>
                Code React + assets + intégration e-commerce,
                <br />
                Maquettes UI/UX (si fournies), documentation technique,
                <br />
                Structure du projet optimisée, fichiers source organisés,
                <br />
                Composants réutilisables, formulaires fonctionnels, <br />
                Intégration API (si fournie), optimisation SEO de base,
                <br />
                Versionning Git (GitHub), guide d’utilisation rapide,
                <br />
                Assistance au déploiement (hébergement / nom de domaine){" "}
              </div>
              <div>
                <div className="text-gray-300 font-medium text-sm">Options</div>
                <div>
                  Formulaire, CMS, Analytics, Paiement en ligne,
                  Authentification,
                  <br />
                  Gestion de contenu dynamique, Intégration API, Optimisation
                  SEO,
                  <br />
                  Responsive Design, Sécurité des données,
                  <br />
                  Performance & optimisation de chargement, Gestion
                  d’hébergement,
                  <br />
                  Déploiement CI/CD, Versionning Git/GitHub, Maintenance & mise
                  à jour,
                  <br />
                  Intégration de bases de données (si nécessaire),
                  <br />
                  Intégration de services tiers (Google Maps, newsletters, etc.)
                </div>
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
};

export default Hero;
