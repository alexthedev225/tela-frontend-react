import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-box-container-top">
        <img src="/LOGO.png" alt="logo-tela" className="logo-tela" />
        <div className="button-registration">
          <button>S&apos;abonner</button>
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
    </div>
  );
}
