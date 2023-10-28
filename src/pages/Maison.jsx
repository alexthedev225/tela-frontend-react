import { Link } from "react-router-dom";
import RootLayout from "../Layout";
import "../styles/Maison.css";

export default function Maison() {
  return (
    <RootLayout>
        
      <Link to="/maison" className="maison-link">
      <p className="maison-text">Maison A <br />louer</p>
        <img
          src="/Maison1.jpg"
          alt="façade de la première maison"
          className="maison-image-1" // Classe pour la première image
        />
        <img
          src="/Maison2.jpg"
          alt="façade de la deuxième maison"
          style={{ marginTop: "4rem" }}
          className="maison-image-2" // Classe pour la deuxième image
        />
      </Link>
    </RootLayout>
  );
}
