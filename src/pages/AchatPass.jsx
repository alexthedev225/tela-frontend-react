import { Link } from "react-router-dom";
import "../styles/AchatPass.css";

const AchatPassPage = () => {
  return (
    <div className="achat-pass-page-container">
      <div className="achat-pass-page">
        <h1>Procurez-vous votre Pass dès maintenant !</h1>
        <div className="pass-form">
          <form>
            <label className="code-label">
              <h3>Entrez le code</h3>
              <input type="text" className="code-input" />
            </label>
            <button type="submit" className="verify-button">
              Vérifier
            </button>
          </form>
        </div>
        <div className="pass-options">
          <div className="pass-option">
            <h4>
              2000 fcfa : <br /> 2 visites
            </h4>
            <button className="acheter-button">Acheter</button>
          </div>
          <div className="pass-option">
            <h4>
              3000 fcfa : <br /> 15 visites
            </h4>
            <button className="acheter-button">Acheter</button>
          </div>
          <div className="pass-option">
            <h4>
              5000 fcfa : <br /> 20 visites
            </h4>
            <button className="acheter-button">Acheter</button>
          </div>
        </div>
      </div>
      <Link to={'/'} style={{ color: 'white'}}>Retourner a la page d&apos;accueil</Link>
    </div>
  );
};

export default AchatPassPage;
