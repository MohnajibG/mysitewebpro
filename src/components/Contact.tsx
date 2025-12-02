import { useEffect, useRef, useState, type JSX } from "react";
import emailjs from "@emailjs/browser";

type Form = {
  name: string;
  email: string;
  phone?: string;
  project_type?: string;
  budget?: string;
  timeline?: string;
  message: string;
};
type Status = "idle" | "sending" | "sent" | "error";

const Contact = (): JSX.Element => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // modal visibility state
  const [modalVisible, setModalVisible] = useState(false);
  const modalTimeoutRef = useRef<number | null>(null);
  const resetStatusTimeoutRef = useRef<number | null>(null);

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  // EmailJS config (Vite env vars)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    import.meta.env.VITE_EMAILJS_USER_ID;

  // Optional company/template metadata (can be provided via env)
  const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || "Najib G";
  const CONTACT_EMAIL =
    import.meta.env.VITE_CONTACT_EMAIL || "mngdevpro@gmail.com";
  const CONTACT_PHONE =
    import.meta.env.VITE_CONTACT_PHONE || "+33 6 58 47 83 08";
  const LOGO_URL =
    import.meta.env.VITE_LOGO_URL || `${location.origin}/logo-mngdev.png`;

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  // show modal automatically when status becomes 'sent'
  useEffect(() => {
    if (status === "sent") {
      // open modal
      setModalVisible(true);
      // auto-close modal after 5s
      if (modalTimeoutRef.current) window.clearTimeout(modalTimeoutRef.current);
      modalTimeoutRef.current = window.setTimeout(() => {
        setModalVisible(false);
        modalTimeoutRef.current = null;
      }, 5000);

      // also reset status to idle after small delay so UI buttons re-enable (keeps existing behavior)
      if (resetStatusTimeoutRef.current)
        window.clearTimeout(resetStatusTimeoutRef.current);
      resetStatusTimeoutRef.current = window.setTimeout(() => {
        setStatus("idle");
        resetStatusTimeoutRef.current = null;
      }, 2200);
    }

    return () => {
      if (modalTimeoutRef.current) {
        window.clearTimeout(modalTimeoutRef.current);
        modalTimeoutRef.current = null;
      }
      if (resetStatusTimeoutRef.current) {
        window.clearTimeout(resetStatusTimeoutRef.current);
        resetStatusTimeoutRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const closeModal = () => {
    if (modalTimeoutRef.current) {
      window.clearTimeout(modalTimeoutRef.current);
      modalTimeoutRef.current = null;
    }
    setModalVisible(false);
  };

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
        setForm({
          name: "",
          email: "",
          phone: "",
          project_type: "",
          budget: "",
          timeline: "",
          message: "",
        });
        // status reset handled by effect above
      }, 900);
      return;
    }

    setStatus("sending");

    const createdAt = new Date().toISOString();
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone || "",
      project_type: form.project_type || "",
      budget: form.budget || "",
      timeline: form.timeline || "",
      message: form.message,
      // admin / template metadata (useful in the EmailJS HTML template)
      company_name: COMPANY_NAME,
      contact_email: CONTACT_EMAIL,
      contact_phone: CONTACT_PHONE,
      logo_url: LOGO_URL,
      project_link: "", // optional, fill if you maintain a project tracker
      created_at: createdAt,
      year: new Date().getFullYear(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        project_type: "",
        budget: "",
        timeline: "",
        message: "",
      });
      // status reset and modal handled by effect above
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Échec de l'envoi — veuillez réessayer plus tard.");
      setStatus("error");
    }
  };

  return (
    <>
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
            animations interactives sur-mesure, tout est pensé pour booster
            votre activité.
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

            <label className="sr-only" htmlFor="contact-phone">
              Téléphone (optionnel)
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Téléphone (optionnel)"
              className="p-3 rounded input-neon"
              disabled={status === "sending"}
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                id="contact-project-type"
                value={form.project_type}
                onChange={(e) =>
                  setForm({ ...form, project_type: e.target.value })
                }
                placeholder="Type de projet (ex. e-commerce, vitrine)"
                className="p-3 rounded input-neon"
                disabled={status === "sending"}
              />
              <input
                id="contact-budget"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                placeholder="Budget (optionnel)"
                className="p-3 rounded input-neon"
                disabled={status === "sending"}
              />
            </div>

            <label className="sr-only" htmlFor="contact-timeline">
              Délai estimé (optionnel)
            </label>
            <input
              id="contact-timeline"
              value={form.timeline}
              onChange={(e) => setForm({ ...form, timeline: e.target.value })}
              placeholder="Délai estimé (optionnel)"
              className="p-3 rounded input-neon"
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

            {/* small hint when EmailJS is not configured */}
            {(!SERVICE_ID || !TEMPLATE_ID) && (
              <p className="mt-2 text-xs text-yellow-300">
                Info: EmailJS non configuré — le formulaire simule l'envoi en
                local. Ajoutez VITE_EMAILJS_SERVICE_ID et
                VITE_EMAILJS_TEMPLATE_ID dans votre .env.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Modal: success notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
          modalVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            modalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        />

        {/* panel */}
        <div
          className={`relative w-full max-w-lg mx-4 transform transition-all duration-300 ${
            modalVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <div className="bg-[#0f0f10] border border-photon-magenta/8 rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <img
                src={LOGO_URL}
                alt={`${COMPANY_NAME} logo`}
                className="w-12 h-12 rounded-md"
              />
              <div className="flex-1">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--photon-magenta)" }}
                >
                  Message envoyé
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Merci, <br />
                  Nous avons bien reçu votre message et nous vous répondrons
                  dans les plus brefs délais.
                </p>
              </div>

              <button
                onClick={closeModal}
                aria-label="Fermer la notification"
                className="ml-4 text-sm text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 text-xs text-gray-400">
              Si vous n'obtenez pas de réponse sous 48h, vérifiez vos spams ou
              réessayez via {CONTACT_EMAIL}.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
