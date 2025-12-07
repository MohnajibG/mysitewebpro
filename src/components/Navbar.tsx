import { useState, type JSX } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logoSrc from "../assets/logo-mngdev.png";
import useHideOnIdleScroll from "../hooks/useHideOnIdleScroll";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const hidden = useHideOnIdleScroll(1200);

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
  };

  const linkHover = { scale: 1.05, textShadow: "0 0 8px #ff33cc" };

  return (
    <nav
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`fixed w-full z-50 top-0 left-0 bg-black-hole-gray/60 backdrop-blur-md border-b border-photon-magenta/10 ${
        hidden && !hovering ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center flex-col md:flex-row gap-4 ">
          <img
            src={logoSrc}
            alt="MNG DEV"
            className="relative object-coverw-12 h-12 md:w-32 md:h-32 rounded-full leading-tight"
          />
          <a
            href="#hero"
            className="font-extrabold text-2xl md:text-6xl neon-text hover:neon-text-cyan transition-all"
            style={{ color: "var(--photon-magenta)" }}
          >
            MNGDEV
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Services", href: "/home#features" },
            { label: "À propos", href: "/home#about" },
            { label: "Contact", href: "/home#contact" },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-ml text-gray-300 hover:text-photon-magenta transition-all"
              whileHover={linkHover}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.a
            href="/home#contact"
            className="ml-2 btn-ghost-neon text-sm hidden lg:inline-flex"
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #00ffff" }}
            aria-label="Demander un devis"
          >
            Demander un devis
          </motion.a>

          <div className="ml-3 flex items-center gap-3">
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

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-photon-magenta/30"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={menuVariants}
            className="md:hidden px-6 pb-6 border-t border-photon-magenta/6 bg-black-hole-gray/70 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-3 py-4">
              {[
                { label: "Services", href: "/home#features" },
                { label: "À propos", href: "/home#about" },
                { label: "Contact", href: "/home#contact" },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-3 rounded-md text-gray-300 hover:bg-photon-magenta/10 transition-all"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 8px #ff33cc" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="/home#contact"
                className="mt-2 btn-ghost-neon inline-flex items-center justify-center px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px #00ffff" }}
                onClick={() => setOpen(false)}
              >
                Demander un devis
              </motion.a>

              <div className="mt-3 flex items-center gap-3">
                <motion.a
                  href="https://github.com/MohnajibG"
                  aria-label="Github"
                  className="p-2 rounded-md"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 12px #ff33cc" }}
                >
                  <FaGithub size={16} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/najib-guerchaoui/"
                  aria-label="LinkedIn"
                  className="p-2 rounded-md"
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
                <span className="ml-auto text-xs text-gray-400">
                  © {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
