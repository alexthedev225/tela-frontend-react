import { useState } from "react";
import RootLayout from "../Layout";
import "../styles/Maison.css";

export default function Maison() {
  const [zone, setZone] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [formData, setFormData] = useState({
    commune: "",
    nombrePieces: "",
    nombreSallesDeau: "",
    typeMaisons: "",
    typeHabitat: "",
    cour: [],
    gardien: "",
    garage: "",
  });

  const showOptionsContent = () => {
    setShowOptions(true);
  };

  const showTableContent = () => {
    setShowTable(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedData = { ...formData };

    if (type === "checkbox") {
      if (checked) {
        updatedData[name] = [...formData[name], value];
      } else {
        updatedData[name] = formData[name].filter((item) => item !== value);
      }
    } else if (type === "radio") {
      updatedData[name] = value;
    } else {
      updatedData[name] = value;
    }

    setFormData(updatedData);
  };

  const performSearch = () => {
    // Envoyer les données au backend pour effectuer la recherche
    // Vous devrez implémenter cette partie côté backend
    console.log("Formulaire soumis avec les données suivantes :");
    console.log(formData);
  };

  return (
    <RootLayout>
      {showTable ? (
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>Commune</td>
                <td>
                  <select
                    name="commune"
                    value={formData.commune}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled></option>
                    <option value="Abobo">Abobo</option>
                    <option value="Adjamé">Adjamé</option>
                    <option value="Anyama">Anyama</option>
                    <option value="Attécoubé">Attécoubé</option>
                    <option value="Bingerville">Bingerville</option>
                    <option value="Cocody">Cocody</option>
                    <option value="Koumassi">Koumassi</option>
                    <option value="Marcory">Marcory</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Port bouët">Port bouët</option>
                    <option value="Treichville">Treichville</option>
                    <option value="Songon">Songon</option>
                    <option value="Yopougon">Yopougon</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Préciser la zone</td>
                <td>
                  <input
                    type="text"
                    name="zone"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>MAISON BASSE</td>
                <td>
                  <input
                    type="radio"
                    name="typeMaisons"
                    value="MAISON BASSE"
                    checked={formData.typeMaisons === "MAISON BASSE"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>APPARTEMENT</td>
                <td>
                  <input
                    type="radio"
                    name="typeMaisons"
                    value="APPARTEMENT"
                    checked={formData.typeMaisons === "APPARTEMENT"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>DUPLEX</td>
                <td>
                  <input
                    type="radio"
                    name="typeMaisons"
                    value="DUPLEX"
                    checked={formData.typeMaisons === "DUPLEX"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>HABITAT HAUT STANDING AVEC PISCINE</td>
                <td>
                  <input
                    type="radio"
                    name="typeHabitat"
                    value="HABITAT HAUT STANDING AVEC PISCINE"
                    checked={formData.typeHabitat === "HABITAT HAUT STANDING AVEC PISCINE"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>HABITAT HAUT STANDING SANS PISCINE</td>
                <td>
                  <input
                    type="radio"
                    name="typeHabitat"
                    value="HABITAT HAUT STANDING SANS PISCINE"
                    checked={formData.typeHabitat === "HABITAT HAUT STANDING SANS PISCINE"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>NOMBRE DE PIECES</td>
                <td>
                  <select
                    name="nombrePieces"
                    value={formData.nombrePieces}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>NOMBRE DE SALLE D&apos;EAU</td>
                <td>
                  <select
                    name="nombreSallesDeau"
                    value={formData.nombreSallesDeau}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tr>
              <td>COMMODITES ADDITIONNELLES</td>
              <td>Ligne 1, Colonne 2</td>
            </tr>
            <tr>
              <td>COUR AVANT</td>
              <td>
                <input
                  type="checkbox"
                  name="cour"
                  value="COUR AVANT"
                  checked={formData.cour.includes("COUR AVANT")}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>COUR ARRIERE</td>
              <td>
                <input
                  type="checkbox"
                  name="cour"
                  value="COUR ARRIERE"
                  checked={formData.cour.includes("COUR ARRIERE")}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>AVEC GARDIEN</td>
              <td>
                <input
                  type="radio"
                  name="gardien"
                  value="AVEC GARDIEN"
                  checked={formData.gardien === "AVEC GARDIEN"}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>SANS GARDIEN</td>
              <td>
                <input
                  type="radio"
                  name="gardien"
                  value="SANS GARDIEN"
                  checked={formData.gardien === "SANS GARDIEN"}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>AVEC GARAGE</td>
              <td>
                <input
                  type="radio"
                  name="garage"
                  value="AVEC GARAGE"
                  checked={formData.garage === "AVEC GARAGE"}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>SANS GARAGE</td>
              <td>
                <input
                  type="radio"
                  name="garage"
                  value="SANS GARAGE"
                  checked={formData.garage === "SANS GARAGE"}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </table>
          <button onClick={performSearch}>Valider</button>
        </div>
      ) : showOptions ? (
        <div className="options-container">
          <button className="location-button" onClick={showTableContent}>
            Logement
          </button>
          <button className="location-button" onClick={showTableContent}>
            Bureau
          </button>
        </div>
      ) : (
        <div className="maison-link" onClick={showOptionsContent}>
          <p className="maison-text">Maison A louer</p>
          <img
            src="/Maison1.jpg"
            alt="façade de la première maison"
            className="maison-image-1"
          />
          <img
            src="/Maison2.jpg"
            alt="façade de la deuxième maison"
            style={{ marginTop: "4rem" }}
            className="maison-image-2"
          />
        </div>
      )}
    </RootLayout>
  );
}
