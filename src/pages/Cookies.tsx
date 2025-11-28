import type { JSX } from "react";

export default function Cookies(): JSX.Element {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose prose-invert mt-50">
      <h1 className="neon-text text-4xl mb-6">Cookies</h1>

      <section className="mb-6">
        <p>
          Notre site utilise des cookies et autres traceurs pour améliorer la
          navigation, analyser la fréquentation et proposer certaines
          fonctionnalités.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Gestion des cookies</h2>
        <p>
          Vous pouvez configurer votre navigateur pour accepter ou refuser les
          cookies, ou utiliser notre outil de consentement pour gérer vos
          préférences.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Types de cookies</h2>
        <p>
          Les cookies peuvent être : nécessaires au fonctionnement du site,
          analytiques pour suivre le trafic, ou marketing pour personnaliser les
          contenus.
        </p>
      </section>

      <footer className="mt-8 text-sm text-gray-400">
        <p>Dernière mise à jour : 28 novembre 2025</p>
      </footer>
    </main>
  );
}
