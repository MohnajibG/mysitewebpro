import React, { useState, useRef, type JSX } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiChevronRight,
  FiFolder,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type NewsletterState = {
  email: string;
  status: "idle" | "sending" | "sent" | "error";
  message?: string;
};

const Footer = (): JSX.Element => {
  const [newsletter, setNewsletter] = useState<NewsletterState>({
    email: "",
    status: "idle",
  });
  const timeoutRef = useRef<number | null>(null);
  const currentYear = new Date().getFullYear();

  const MAILCHIMP_URL =
    "https://mngdev.us22.list-manage.com/subscribe/post-json?u=90bae6b80dddf121c87280004&id=fd2a3c01e6";

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = newsletter.email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      setNewsletter({ email, status: "error", message: "Email invalide" });
      return;
    }

    setNewsletter({ ...newsletter, status: "sending", message: "" });

    // Mailchimp's classic embedded form has no CORS-friendly JSON endpoint,
    // so we use its JSONP callback to actually read back success/error
    // instead of guessing from a hidden iframe load event.
    const callbackName = `mcSubscribeCallback_${Date.now()}`;
    const win = window as unknown as Record<string, unknown>;

    const cleanup = () => {
      delete win[callbackName];
      script.remove();
    };

    win[callbackName] = (data: { result: string; msg: string }) => {
      if (data.result === "success") {
        setNewsletter({
          email: "",
          status: "sent",
          message: "Merci pour votre inscription !",
        });
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          setNewsletter({ email: "", status: "idle" });
          timeoutRef.current = null;
        }, 2500);
      } else {
        setNewsletter({
          email,
          status: "error",
          message:
            data.msg?.replace(/<[^>]*>/g, "") ||
            "Échec de l'inscription, veuillez réessayer.",
        });
      }
      cleanup();
    };

    const script = document.createElement("script");
    script.src = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(
      email
    )}&c=${callbackName}`;
    script.onerror = () => {
      setNewsletter({
        email,
        status: "error",
        message: "Échec de l'inscription, veuillez réessayer plus tard.",
      });
      cleanup();
    };
    document.body.appendChild(script);
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
              src="/logo-mngdev.png"
              alt="MNG DEV Logo"
              className="w-10 h-10 mr-2 rounded"
            />
            MNGDEV
          </Link>

          <p className="mt-1 text-sm text-gray-400 max-w-xs">
            Donnez vie à votre activité en ligne, site web moderne, dynamique et
            sur-mesure.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <motion.a
              href="https://portfolio-mng.netlify.app/"
              target="_blank"
              aria-label="Portfolio"
              className="p-2 rounded-full"
              whileHover={{ scale: 1.1, boxShadow: "0 0 12px #00ffff" }}
            >
              <FiFolder size={16} />
            </motion.a>
            <motion.a
              href="https://github.com/MohnajibG"
              target="_blank"
              aria-label="Github"
              className="p-2 rounded-full"
              whileHover={{ scale: 1.1, boxShadow: "0 0 12px #ff33cc" }}
            >
              <FaGithub size={16} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/najib-guerchaoui/"
              target="_blank"
              aria-label="LinkedIn"
              className="p-2 rounded-full"
              whileHover={{ scale: 1.1, boxShadow: "0 0 12px #00ffff" }}
            >
              <FaLinkedin size={16} />
            </motion.a>
            <motion.a
              href="https://x.com/mngdevpro"
              target="_blank"
              aria-label="XTwitter"
              className="p-2 rounded-full"
              whileHover={{ scale: 1.1, boxShadow: "0 0 12px #1d59e5" }}
            >
              <FaXTwitter size={16} />
            </motion.a>
          </div>
        </div>

        {/* Quick links (anchors + legal pages) */}
        <nav aria-label="Liens rapides" className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-300">Navigation</h3>

          <div className="flex flex-col gap-2">
            {[
              {
                label: "Services",
                to: "/home#features",
                className:
                  "flex items-center gap-2 text-sm hover:text-neon-cyan transition-colors",
              },
              {
                label: "À propos",
                to: "/home#about",
                className:
                  "flex items-center gap-2 text-sm hover:text-glitch-teal transition-colors",
              },
              {
                label: "Contact",
                to: "/home#contact",
                className:
                  "flex items-center gap-2 text-sm hover:text-ion-yellow transition-colors",
              },
            ].map((item) => (
              <Link key={item.to} to={item.to} className={item.className}>
                <FiChevronRight /> {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-2">
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
                href="mailto:contact@mngdev.pro"
                className="hover:text-neon-cyan transition-colors"
              >
                contact@mngdev.pro
              </a>
            </li>

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
                href="tel:+33658748308"
                className="hover:text-glitch-teal transition-colors"
              >
                +33 6 58 74 83 08
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
                placeholder="votre@email.fr"
                className="flex-1 input-neon"
                aria-invalid={newsletter.status === "error"}
                aria-describedby="footer-newsletter-status"
                required
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-neon disabled:opacity-60"
                disabled={newsletter.status === "sending"}
                aria-label="S'inscrire à la newsletter"
              >
                {newsletter.status === "sending" ? "Envoi…" : "S'inscrire"}
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
          </form>
        </div>
      </div>

      <div className="border-t border-photon-magenta/6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <span>© {currentYear} MNG DEV - Tous droits réservés</span>
          <div className="flex items-center gap-4 text-xs">
            <a href="/robots.txt" className="hover:underline">
              robots.txt
            </a>
            <a href="/sitemap.xml" className="hover:underline">
              sitemap
            </a>
            <a href="#top" className="hover:underline">
              Haut de page
            </a>
          </div>

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
};

export default Footer;
