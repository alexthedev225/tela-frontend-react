import { Link } from "react-router-dom";
import RootLayout from "../Layout";
import '../styles/TelaTv.css'

export default function TelaTV() {
  return (
    <RootLayout>
      <Link className="pub-link"> {/* Ajoutez la classe à ce lien */}
        <img src="/Pub.PNG" alt="pub-image" className="pub-image" /> {/* Ajoutez la classe à cette image */}
      </Link>
      <Link className="live-link"> {/* Ajoutez la classe à ce lien */}
        <img src="/Live.PNG" alt="live-image" className="live-image" /> {/* Ajoutez la classe à cette image */}
      </Link>
    </RootLayout>
  );
}
