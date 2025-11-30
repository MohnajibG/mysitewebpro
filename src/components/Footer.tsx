import React, { useState, useRef, type JSX } from "react";
import { FiMail, FiPhone, FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

type NewsletterState = {
  email: string;
  status: "idle" | "sent" | "error";
  message?: string;
};

export default function Footer(): JSX.Element {
  const [newsletter, setNewsletter] = useState<NewsletterState>({
    email: "",
    status: "idle",
  });
  const timeoutRef = useRef<number | null>(null);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const email = newsletter.email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setNewsletter({ email, status: "error", message: "Email invalide" });
      return;
    }

    setNewsletter({
      email,
      status: "sent",
      message: "Merci — inscription enregistrée localement.",
    });

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setNewsletter({ email: "", status: "idle" });
      timeoutRef.current = null;
    }, 2500);
  };

  return (
    <footer className="border-t border-photon-magenta/10 bg-black-hole-gray text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Branding */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center text-2xl font-extrabold neon-text"
          >
            <img
              src="/logo192.png"
              alt="Najib G"
              className="w-10 h-10 mr-2 rounded"
            />
            Najib G
          </Link>

          <p className="mt-1 text-sm text-gray-400 max-w-xs">
            Donnez vie à votre activité en ligne — site web moderne, dynamique
            et sur-mesure. Vitrine, e-commerce, gestion clients, paiements
            sécurisés, SEO et analytics.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://github.com/MohnajibG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="p-2 rounded-md hover:glow-magenta transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/najib-guerchaoui/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:glow-cyan transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-md hover:glow-magenta transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick links (anchors + legal pages) */}
        <nav aria-label="Liens rapides" className="flex flex-col md:gap-2 my-5">
          <h3 className="text-sm font-semibold text-gray-300">Navigation</h3>

          <div className="flex flex-col gap-2">
            {[
              { label: "Services", to: "/#features", hoverClass: "neon-cyan" },
              { label: "À propos", to: "/#about", hoverClass: "glitch-teal" },
              { label: "Contact", to: "/#contact", hoverClass: "ion-yellow" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2 text-sm hover:text-${item.hoverClass} transition-colors`}
              >
                <FiChevronRight /> {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="/mentions-legales"
              className="flex items-center gap-2 text-sm hover:text-photon-magenta transition-colors"
            >
              <FiChevronRight /> Mentions légales
            </Link>

            <Link
              to="/politique-confidentialite"
              className="flex items-center gap-2 text-sm hover:text-neon-cyan transition-colors"
            >
              <FiChevronRight /> Politique de confidentialité
            </Link>

            <Link
              to="/cookies"
              className="flex items-center gap-2 text-sm hover:text-ion-yellow transition-colors"
            >
              <FiChevronRight /> Cookies
            </Link>
          </div>
        </nav>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300">Contact</h3>

          <ul className="mt-3 text-sm space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <FiMail />
              <a
                href="mailto:mngdevpro@gmail.com"
                className="hover:text-neon-cyan transition-colors"
              >
                mngdevpro@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiPhone />
              <a
                href="tel:+33658478308"
                className="hover:text-glitch-teal transition-colors"
              >
                +33 6 58 47 83 08
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiMapPin /> <span>Paris, France</span>
            </li>
          </ul>

          <form
            onSubmit={handleSubscribe}
            className="mt-5"
            aria-label="Formulaire newsletter"
          >
            <label
              htmlFor="footer-newsletter"
              className="text-sm font-medium text-gray-300"
            >
              Newsletter
            </label>

            <div className="mt-2 flex gap-2">
              <input
                id="footer-newsletter"
                type="email"
                value={newsletter.email}
                onChange={(e) =>
                  setNewsletter({
                    ...newsletter,
                    email: e.target.value,
                    status: "idle",
                  })
                }
                placeholder="votre@email.tld"
                className="flex-1 input-neon"
                aria-invalid={newsletter.status === "error"}
                aria-describedby="footer-newsletter-status"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-neon"
                aria-label="S'inscrire à la newsletter"
              >
                S'inscrire
              </button>
            </div>

            <p
              id="footer-newsletter-status"
              role="status"
              aria-live="polite"
              className="mt-2 text-xs h-5"
            >
              {newsletter.status === "error" && (
                <span className="text-rose-400">{newsletter.message}</span>
              )}
              {newsletter.status === "sent" && (
                <span className="text-green-400">{newsletter.message}</span>
              )}
            </p>

            <p className="mt-3 text-xs text-gray-500">
              Front-end uniquement — aucun envoi réel tant qu'un service n'est
              pas connecté.
            </p>
          </form>
        </div>
      </div>

      <div className="border-t border-photon-magenta/6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <span>© {currentYear} Najib G — Tous droits réservés</span>

          <div className="mt-2 md:mt-0 flex gap-4">
            <Link
              to="/politique-confidentialite"
              className="hover:text-neon-cyan transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/cookies"
              className="hover:text-photon-magenta transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
