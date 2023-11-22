import { Link } from "react-router-dom";
import "../styles/AchatPassButton.css"; // Assurez-vous d'avoir un fichier AchatPassButton.css avec ces styles

export default function AchatPassButton() {
    return (
        <Link to={'/achat-pass'} className="achat-pass-button">
            <p className="achat-pass-text">Acheter un Pass</p>
        </Link>
    );
}