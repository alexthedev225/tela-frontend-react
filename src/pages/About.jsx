import { useState } from "react";
import RootLayout from "../Layout";
import "../styles/About.css";

function About() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal); // Inverse l'état de la boîte modale (ouvrir/fermer)
  };

  return (
    <RootLayout>
      <p style={{ color: "white" }}>
        Dans le souci de participer activement au développement de notre pays et
        surtout faciliter la vie aux populations, nous n&apos;avons de cesse de
        réflechir et apporter notre contribution pour impacter positivement la
        vie de chaque citoyen vivant sur le sol d&apos;Eburnie. <br /> C&apos;est dans
        cette optique que nous vous proposons la plateforme TELA. TELA est une
        application tout en un qui a été mise en place dans le but de faciliter
        la vie aux populations vivant en Côte d&apos;Ivoire. <br />
        <br /> Premièrement, avec Tela, désormais c&apos;est facile de trouver
        rapidement un logement à son gout. Pour y arriver, il suffit de cliquer
        dans la rubrique “Maison à louer” pour trouver le logement de son choix.{" "}
        <br /> De plus c&apos;est une application qui va générer à terme plus de 30
        000 emplois sur toute l&apos;étendue du territoire ivoirien. A ce niveau il
        s&apos;agit pur le citoyen lambda de transférer des photos de maisons à sur
        la plateforme pour gagner au moins 150 000 FCFA chaque fin de mois.
        (Voir conditions{" "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={toggleModal}
        >
          ICI
        </span>{" "}
        pour devenir démarcheur Tela) <br /> <br /> Deuxièmement, le démarcheur
        après avoir reçu son virement mensuel peut décider d&apos;épargner sur la
        plateforme tout en se conformant aux règles de transfère de photos et
        autres conditions qui seront précisées pour voir son épargne majorée
        d&apos;un bonus périodique. <br />
        <br />
        Troisièmement l&apos;application comporte une web TV dénommée TELA TV, “La
        meilleure” , qui est une vitrine pour les petites et moyennes
        entreprises, les petits et moyens commerces mais aussi et surtout pour
        la jeunesse du pays tout entier. Ses émissions en Live vous permettront
        de vous distraire sainement et très souvent de vous faire gagner des
        lots et de l&apos;argent en participant directement sur le plateau de
        diffusion ou en ligne. TELA TV accordera une place spéciale à la CAN
        2023 qui se déroulera dans notre pays à travers des reportages sportifs,
        des émissions sportives en direct et probablement la diffusion en Live
        ou en différé de certains matchs. Nous irons à cet effet dans les
        coulisses des stades pour prendre la températures avec les fans
        ivoiriens et étrangers.{" "}
      </p>
      {showModal && (
        <div className="modal-container" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="/condition.JPG" alt="condition pour devenir demarcheur" />
          </div>
        </div>
      )}
    </RootLayout>
  );
}

export default About;
