import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Maison from "./pages/Maison";
import TelaTV from "./pages/TelaTv";
import MaisonCreationForm from "./components/MaisonCreationForm";
import InscriptionForm from "./components/InscriptionForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/creer-maison" element={<MaisonCreationForm />} />
          <Route path="/abonnement" element={<InscriptionForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/maison-a-louer" element={<Maison />} />
          <Route path="/tela-tv" element={<TelaTV />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
