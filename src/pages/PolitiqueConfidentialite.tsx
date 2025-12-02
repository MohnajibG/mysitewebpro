import type { JSX } from "react";

const PolitiqueConfidentialite = (): JSX.Element => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose prose-invert mt-50">
      <h1 className="neon-text text-4xl mb-6">Politique de confidentialité</h1>

      <section className="mb-6">
        <p>
          Nous nous engageons à protéger vos données personnelles et à respecter
          votre vie privée. Les informations collectées sont utilisées
          uniquement pour répondre à vos demandes et améliorer nos services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Collecte des données</h2>
        <p>
          Les données personnelles que vous fournissez via nos formulaires (nom,
          email, téléphone, message) sont stockées uniquement pour les finalités
          indiquées.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Partage des données</h2>
        <p>
          Nous ne partageons pas vos données avec des tiers sauf si la loi nous
          y oblige ou pour fournir le service demandé.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Droits RGPD</h2>
        <p>
          Vous disposez d'un droit d'accès, de rectification, d'effacement, de
          limitation, d'opposition et de portabilité de vos données.
          Contactez-nous à{" "}
          <a href="mailto:contact@exemple.com" className="text-neon-cyan">
            contact@exemple.com
          </a>
          .
        </p>
      </section>

      <footer className="mt-8 text-sm text-gray-400">
        <p>Dernière mise à jour : 28 novembre 2025</p>
      </footer>
    </main>
  );
};

export default PolitiqueConfidentialite;
