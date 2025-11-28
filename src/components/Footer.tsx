import React, { useState, type JSX } from "react";
import { FiMail, FiPhone, FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const email = newsletter.email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setNewsletter({ email, status: "error", message: "Email invalide" });
      return;
    }
    // Frontend-only placeholder behaviour — intégrer un service pour envoi réel
    setNewsletter({
      email,
      status: "sent",
      message: "Merci — inscription enregistrée localement.",
    });
    setTimeout(() => {
      setNewsletter({ email: "", status: "idle" });
    }, 2500);
  };

  return (
    <footer className="border-t border-photon-magenta/10 bg-black-hole-gray text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Brand & description */}
        <div className="space-y-4">
          <a
            href="#"
            className="inline-block text-2xl font-extrabold neon-text"
            style={{ color: "var(--photon-magenta)" }}
          >
            MonComptePro
          </a>

          <p className="mt-1 text-sm text-gray-400 max-w-xs">
            Site vitrine one-page — design cyberpunk, animations néon et
            expérience soignée. Pour collecte de leads, connectez un service
            externe (Netlify Forms, Formspree, Supabase).
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              aria-label="Github"
              href="#"
              className="p-2 rounded-md hover:glow-magenta transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href="#"
              className="p-2 rounded-md hover:glow-cyan transition"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              aria-label="Twitter"
              href="#"
              className="p-2 rounded-md hover:glow-magenta transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Liens rapides" className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-300">Liens</h3>

          <a
            href="#features"
            className="flex items-center gap-2 text-sm hover:text-neon-cyan transition-colors"
          >
            <FiChevronRight /> Services
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 text-sm hover:text-glitch-teal transition-colors"
          >
            <FiChevronRight /> À propos
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 text-sm hover:text-ion-yellow transition-colors"
          >
            <FiChevronRight /> Contact
          </a>

          <a
            href="/mentions"
            className="flex items-center gap-2 text-sm hover:text-photon-magenta transition-colors"
          >
            <FiChevronRight /> Mentions légales
          </a>
        </nav>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300">Contact</h3>

          <ul className="mt-3 text-sm space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <FiMail />{" "}
              <a
                href="mailto:contact@votresite.tld"
                className="hover:text-neon-cyan transition-colors"
              >
                contact@votresite.tld
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiPhone />{" "}
              <a
                href="tel:+33123456789"
                className="hover:text-glitch-teal transition-colors"
              >
                +33 1 23 45 67 89
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
          <span>© {currentYear} MonComptePro — Tous droits réservés</span>

          <div className="mt-2 md:mt-0 flex gap-4">
            <a
              href="/privacy"
              className="hover:text-neon-cyan transition-colors"
            >
              Politique de confidentialité
            </a>
            <a
              href="/cookies"
              className="hover:text-photon-magenta transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
