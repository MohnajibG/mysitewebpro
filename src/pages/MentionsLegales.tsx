import type { JSX } from "react";

type Props = {
  companyName?: string;
  siren?: string;
  address?: string;
  director?: string;
  email?: string;
  phone?: string;
  host?: { name: string; address?: string; phone?: string; website?: string };
  publicationDate?: string;
};

export default function MentionsLegales({
  companyName = "MNGDEV PRO",
  siren = "SIRET / SIREN : 000 000 000 00000",
  address = "Adresse complète de la société",
  director = "GUERCHAOUI Mohammed Najib",
  email = "mngdevpro@gmail.com",
  phone = "+33 6 58 74 83 08",
  host = {
    name: "Nom de l'hébergeur",
    address: "Adresse de l'hébergeur",
    phone: "Téléphone hébergeur",
    website: "https://www.hebergeur-exemple.com",
  },
  publicationDate = "01 janvier 2025",
}: Props): JSX.Element {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose prose-invert mt-50">
      <h1 className="neon-text text-4xl mb-6">Mentions légales</h1>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Éditeur du site</h2>
        <p>
          Le site est édité par <strong>{companyName}</strong> - {siren}.
        </p>
        <p>
          Siège social : {address}
          <br />
          Responsable de la publication : <strong>{director}</strong>
          <br />
          Contact :{" "}
          <a href={`mailto:${email}`} className="text-neon-cyan">
            {email}
          </a>{" "}
          - {phone}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Hébergement</h2>
        <p>
          Hébergeur : <strong>{host.name}</strong>
          {host.address ? <>, {host.address}</> : null}
          {host.phone && (
            <>
              <br />
              Tél. : {host.phone}
            </>
          )}
          {host.website && (
            <>
              <br />
              Site :{" "}
              <a href={host.website} className="text-neon-cyan">
                {host.website}
              </a>
            </>
          )}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">
          Propriété intellectuelle
        </h2>
        <p>
          L'ensemble du contenu présent sur ce site (textes, images, logos,
          icônes, vidéos, éléments graphiques et code) est la propriété
          exclusive de {companyName} ou de ses partenaires et est protégé par le
          droit de la propriété intellectuelle. Toute reproduction totale ou
          partielle, modification, diffusion ou réutilisation sans autorisation
          écrite préalable est interdite.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Responsabilité</h2>
        <p>
          Les informations publiées sur ce site le sont à titre informatif.{" "}
          {companyName} ne peut garantir l'exactitude, la complétude ou
          l'actualité des informations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Liens externes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers. {companyName} ne
          contrôle pas ces sites et décline toute responsabilité quant à leur
          contenu ou leur politique de confidentialité.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">
          Données personnelles (RGPD)
        </h2>
        <p>
          Lors de l'utilisation des formulaires ou services du site, des données
          personnelles peuvent être collectées (nom, email, téléphone, message,
          etc.). Ces données sont traitées par {companyName} pour répondre à vos
          demandes.
        </p>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de
          rectification, d'effacement, de limitation du traitement, d'opposition
          et de portabilité des données. Pour exercer ces droits :{" "}
          <a href={`mailto:${email}`} className="text-neon-cyan">
            {email}
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Cookies</h2>
        <p>
          Le site peut utiliser des cookies et autres traceurs pour améliorer la
          navigation, analyser la fréquentation et proposer des fonctionnalités.
          Vous pouvez gérer vos préférences via votre navigateur.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Conservation des logs</h2>
        <p>
          Les fichiers de logs (accès serveur, erreurs) peuvent être conservés
          temporairement par l'hébergeur pour des raisons de sécurité et
          diagnostic.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Réclamations & Contact</h2>
        <p>
          Pour toute question relative au site ou à vos données personnelles :
          <br />
          <a href={`mailto:${email}`} className="text-neon-cyan">
            {email}
          </a>{" "}
          - {phone}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl neon-text-cyan mb-2">Loi applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, les tribunaux compétents seront ceux du ressort du
          siège social de {companyName}.
        </p>
      </section>

      <footer className="mt-8 text-sm text-gray-400">
        <p>Dernière mise à jour : {publicationDate}</p>
      </footer>
    </main>
  );
}
