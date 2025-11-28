import { motion } from "framer-motion";
import type { JSX } from "react";
import {
  FiMonitor,
  FiCpu,
  FiZap,
  FiShield,
  FiShoppingCart,
  FiDatabase,
  FiMail,
} from "react-icons/fi";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type Props = {
  items?: Feature[];
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Features({ items }: Props): JSX.Element {
  const defaultItems: Feature[] = [
    {
      id: "f-forms",
      title: "Formulaires avancés",
      description:
        "Création de formulaires de contact, devis et commandes avec validation, upload d’images et intégration aux workflows.",
      icon: <FiMail size={20} />,
    },
    {
      id: "f-cms",
      title: "CMS & Headless",
      description:
        "Intégration de CMS (headless ou classique) pour gérer facilement le contenu sans déployer de code.",
      icon: <FiDatabase size={20} />,
    },
    {
      id: "f-analytics",
      title: "Analytics & suivi",
      description:
        "Configuration d’outils d’analyse, tableaux de bord et tracking des conversions pour mesurer la performance.",
      icon: <FiCpu size={20} />,
    },
    {
      id: "f-payments",
      title: "Paiements en ligne",
      description:
        "Intégration Stripe / solutions de paiement sécurisées, gestion des paniers et suivi des transactions.",
      icon: <FiShoppingCart size={20} />,
    },
    {
      id: "f-auth",
      title: "Authentification & sécurité",
      description:
        "Systèmes d’authentification (email, OAuth), gestion des rôles et bonnes pratiques de sécurité.",
      icon: <FiShield size={20} />,
    },
    {
      id: "f-api",
      title: "Intégration API",
      description:
        "Connexion à des APIs tierces (ERP, CRM, services externes) et développement d’API pour échanger des données.",
      icon: <FiMonitor size={20} />,
    },
    {
      id: "f-seo",
      title: "SEO & performance",
      description:
        "Optimisation SEO on-page, balises meta, sitemap, et bonnes pratiques de performance (lazy load, code splitting).",
      icon: <FiZap size={20} />,
    },
    {
      id: "f-ops",
      title: "Hébergement & déploiement",
      description:
        "Assistance déploiement (Vercel, Netlify, hébergement custom), configuration domaine et CI/CD.",
      icon: <FiCpu size={20} />,
    },
    {
      id: "f-maintenance",
      title: "Maintenance & support",
      description:
        "Forfaits de maintenance, mises à jour de sécurité, sauvegardes et support post-lancement.",
      icon: <FiDatabase size={20} />,
    },
    {
      id: "f-access",
      title: "Accessibilité",
      description:
        "Conformité WCAG de base et améliorations d’accessibilité pour une meilleure expérience utilisateur.",
      icon: <FiMonitor size={20} />,
    },
  ];

  const list = items ?? defaultItems;

  return (
    <section id="features" aria-labelledby="features-title" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="features-title"
          className="text-3xl font-semibold mb-6 neon-text"
          style={{ color: "var(--photon-magenta)" }}
        >
          Services
        </h2>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((f, idx) => (
            <motion.li
              key={f.id}
              variants={item}
              className="card-cyber flex gap-4 p-5 rounded-lg border border-photon-magenta/8"
              aria-labelledby={`${f.id}-title`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-md text-photon-magenta bg-photon-magenta/10 shrink-0 glow-magenta"
                aria-hidden
                role="img"
                aria-label={f.title}
              >
                {f.icon ?? <FiMonitor size={20} />}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 id={`${f.id}-title`} className="text-lg font-medium">
                    {f.title}
                  </h3>
                  <span className="pill-accent text-xs">
                    {idx === 0 ? "Top" : "Pro"}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-300">{f.description}</p>

                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={`#${f.id}`}
                    className="text-xs btn-ghost-neon inline-flex items-center gap-2 px-3 py-1 rounded-md"
                    aria-label={`En savoir plus sur ${f.title}`}
                  >
                    Voir
                  </a>

                  <span className="text-xs text-gray-400">—</span>

                  <span className="text-xs text-gray-400">Rapide</span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
