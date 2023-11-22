import { Link } from "react-router-dom";
import "../styles/AchatPassButton.css"; // Assurez-vous d'avoir un fichier AchatPassButton.css avec ces styles

export default function AjouterMaisonButton() {
    return (
        <Link to={'/creer-maison'} className="achat-pass-button">
            <p className="achat-pass-text">Ajouter une maison</p>
        </Link>
    );
}