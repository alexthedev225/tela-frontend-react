import { Link } from "react-router-dom";
import RootLayout from "../Layout";
import "../styles/TelaTv.css";

export default function TelaTV() {
  return (
    <RootLayout>
      <Link className="pub-link">
        <img src="/jouer.png" alt="jouer icon" />
        <img src="/Pub.PNG" alt="pub-image" className="pub-image" />{" "}
      </Link>
      <Link className="live-link">
        <img src="/jouer.png" alt="jouer icon" />
        <img src="/Live.PNG" alt="live-image" className="live-image" />{" "}
      </Link>
      <Link className="emission-link">
        <img src="/jouer.png" alt="jouer icon" />
        <img src="/Emission.PNG" alt="emission-image" className="emission-image" />{" "}
      </Link>
      <Link className="rediffusion-link">
        <img src="/jouer.png" alt="jouer icon" />
        <img src="/Rediffusion.PNG" alt="rediffusion-image" className="rediffusion-image" />{" "}
      </Link> <Link className="sport-link">
        <img src="/jouer.png" alt="jouer icon" />
        <img src="/Sport.PNG" alt="sport-image" className="sport-image" />{" "}
      </Link>
      <Link className="filmMusic-link">
        <img src="/jouer.png" alt="jouer icon" />
        <img src="/FilmMusic.PNG" alt="FilmMusic-image" className="filmMusic-image" />{" "}
      </Link>
    </RootLayout>
  );
}
