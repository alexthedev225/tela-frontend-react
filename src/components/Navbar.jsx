import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";
  const isTelaTVPage = location.pathname === "/tela-tv";

  return (
    <div className="navbar-container">
      <div className="navbar-box-container-top">
        <img src="/LOGO.png" alt="logo-tela" className="logo-tela" />
        <div className="button-registration">
        <Link to={"/identification"}>
            <button>S&apos;identifier</button>
          </Link>
          <Link to={"/inscription"}>
            <button>S&apos;abonner</button>
          </Link>
          <Link to={"/connexion"}>
            <button>Se connecter</button>
          </Link>
          <button>Mon compte</button>
        </div>
      </div>
      <div className="link-container">
        <NavLink to={"/"} activeClassName="active">
          Accueil
        </NavLink>

        <NavLink to={"/a-propos"} activeClassName="active">
          A propos
        </NavLink>

        <NavLink to={"/maison-a-louer"} activeClassName="active">
          Maison à louer
        </NavLink>

        <NavLink to={"/tela-tv"} activeClassName="active">
          TELA TV
        </NavLink>

        <NavLink to={"/contact"} activeClassName="active">
          Contacts
        </NavLink>
      </div>
      {isContactPage || isTelaTVPage ? null : (
        <h1 className="navbar-text">
          TELA, la meilleure plateforme de recherche de logements et de bureaux
          en Cote D&apos;Ivoire
        </h1>
      )}{" "}
    </div>
  );
}
