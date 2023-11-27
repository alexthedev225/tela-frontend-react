import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import LogoutButton from "./LogoutButton";
import Cookies from "js-cookie";

export default function Navbar() {
  const token = Cookies.get("token");

  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isContactPage = location.pathname === "/contact";
  const isTelaTVPage = location.pathname === "/tela-tv";

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    // Ajoute ou supprime la classe 'no-scroll' au corps du document
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  useEffect(() => {
    // Nettoie la classe ajoutée lorsque le composant est démonté
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-box-container-top">
        <img src="/LOGO.png" alt="logo-tela" className="logo-tela" />
        <button
          className={`burger-menu-button ${isMenuOpen ? "close" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`burger-line ${isMenuOpen ? "close" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "close" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "close" : ""}`}></div>
        </button>

        <div className={`menu-items ${isMenuOpen ? "show-menu" : ""}`}>
          <Link to={"/identification"} onClick={toggleMenu}>
            <button>S&apos;identifier</button>
          </Link>
          <Link to={"/inscription"} onClick={toggleMenu}>
            <button>S&apos;abonner</button>
          </Link>
          {token ? (
            <LogoutButton onClick={toggleMenu}/>
          ) : (
            <Link to={"/connexion"} onClick={toggleMenu}>
              <button>Se connecter</button>
            </Link>
          )}

          <Link to={"/mon-compte"} onClick={toggleMenu}>
            <button>Mon compte</button>
          </Link>
        </div>
      </div>
      <div className="link-container">
        <NavLink to={"/"} activeclassname="active">
          Accueil
        </NavLink>

        <NavLink to={"/a-propos"} activeclassname="active">
          A propos
        </NavLink>

        <NavLink to={"/maison-a-louer"} activeclassname="active">
          Maison à louer
        </NavLink>

        <NavLink to={"/tela-tv"} activeclassname="active">
          TELA TV
        </NavLink>

        <NavLink to={"/contact"} activeclassname="active">
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
