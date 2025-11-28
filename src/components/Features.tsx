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
      id: "f-design",
      title: "Design responsive",
      description:
        "Interface adaptée sur mobile, tablette et desktop, avec animations interactives.",
      icon: <FiMonitor size={20} />,
    },
    {
      id: "f-performance",
      title: "Performance optimisée",
      description:
        "Sites rapides et légers, chargement optimisé et meilleures pratiques web.",
      icon: <FiCpu size={20} />,
    },
    {
      id: "f-ecommerce",
      title: "E-commerce & Paiement",
      description:
        "Intégration Stripe pour paiements sécurisés et suivi des commandes.",
      icon: <FiShoppingCart size={20} />,
    },
    {
      id: "f-database",
      title: "Gestion clients",
      description:
        "Base de données sécurisée pour suivre vos clients et vos contacts.",
      icon: <FiDatabase size={20} />,
    },
    {
      id: "f-interactions",
      title: "Animations & micro-interactions",
      description:
        "Transitions, effets et interactions pour un site vivant et engageant.",
      icon: <FiZap size={20} />,
    },
    {
      id: "f-secu",
      title: "Sécurité",
      description:
        "Protection des données et bonnes pratiques pour vos utilisateurs.",
      icon: <FiShield size={20} />,
    },
    {
      id: "f-mail",
      title: "Notifications & Emails",
      description:
        "Intégration EmailJS pour formulaires de contact et notifications automatiques.",
      icon: <FiMail size={20} />,
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
