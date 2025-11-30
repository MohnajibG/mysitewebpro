import { useEffect, useState, type JSX } from "react";
import emailjs from "@emailjs/browser";

type Form = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

export default function Contact(): JSX.Element {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  // EmailJS config (Vite env vars)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    import.meta.env.VITE_EMAILJS_USER_ID;

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Tous les champs sont requis.");
      setStatus("error");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Email invalide.");
      setStatus("error");
      return;
    }

    // If EmailJS variables are not set, fallback to local simulation
    if (!SERVICE_ID || !TEMPLATE_ID) {
      setStatus("sending");
      setTimeout(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 2200);
      }, 900);
      return;
    }

    setStatus("sending");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      // add other template fields if your EmailJS template expects them
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2200);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Échec de l'envoi — veuillez réessayer plus tard.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-2xl font-semibold neon-text"
          style={{ color: "var(--photon-magenta)" }}
        >
          Contact & Devis
        </h2>

        <p className="mt-2 text-sm text-gray-300">
          Discutons de votre projet digital et obtenez un devis gratuit.
          <br />
          Sites vitrines, e-commerce, paiement en ligne, gestion clients et
          animations interactives sur-mesure, tout est pensé pour booster votre
          activité.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid gap-4"
          aria-label="Formulaire de contact"
        >
          <label className="sr-only" htmlFor="contact-name">
            Nom
          </label>
          <input
            id="contact-name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Nom"
            className="p-3 rounded input-neon"
            required
            disabled={status === "sending"}
          />

          <label className="sr-only" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="p-3 rounded input-neon"
            required
            disabled={status === "sending"}
          />

          <label className="sr-only" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Décrivez votre projet, vos besoins et vos objectifs"
            rows={6}
            className="p-3 rounded input-neon resize-vertical"
            required
            disabled={status === "sending"}
          />

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full btn-neon disabled:opacity-60"
              disabled={status === "sending"}
              aria-live="polite"
            >
              {status === "sending" ? "Envoi…" : "Envoyer"}
            </button>

            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <span className="pill-accent">Front-end</span>
              <span className="pill-accent">
                React / Tailwind / Framer Motion
              </span>
              <span className="pill-accent">E-commerce & Stripe</span>
              <span>Aucun stockage sans backend</span>
            </div>
          </div>

          <div aria-live="polite" className="h-6 mt-1 text-sm">
            {status === "sent" && (
              <span className="text-green-400">Message envoyé, merci !</span>
            )}
            {status === "error" && error && (
              <span className="text-rose-400">{error}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
