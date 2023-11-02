import { useEffect, useState } from "react";
import RootLayout from "../Layout";
import "../styles/Maison.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const simulatedHouse1 = {
  commune: "Cocody",
  typeMaisons: "MAISON BASSE",
  typeHabitat: "HABITAT HAUT STANDING AVEC PISCINE",
  nombrePieces: "4",
  nombreSallesDeau: "3",
  cour: ["COUR AVANT", "COUR ARRIERE"],
  gardien: "AVEC GARDIEN",
  garage: "AVEC GARAGE",
  coverImage: "/couverture.jpg",
  images: [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
  ],
};

const simulatedHouse2 = {
  commune: "Cocody",
  typeMaisons: "MAISON BASSE",
  typeHabitat: "HABITAT HAUT STANDING AVEC PISCINE",
  nombrePieces: "4",
  nombreSallesDeau: "3",
  cour: ["COUR AVANT", "COUR ARRIERE"],
  gardien: "AVEC GARDIEN",
  garage: "AVEC GARAGE",
  coverImage: "/couverture.jpg",
  images: [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
  ],
};

export default function Maison() {
  const [selectedHouseIndex, setSelectedHouseIndex] = useState(0);

  const [showImages, setShowImages] = useState(false);

  const [showOptions, setShowOptions] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [formData, setFormData] = useState({
    commune: "",
    typeMaisons: "",
    typeHabitat: "",
    nombrePieces: "",
    nombreSallesDeau: "",
    cour: [],
    gardien: "",
    garage: "",
  });
  const [showForm, setShowForm] = useState(true);
  const [visite, setVisite] = useState(false);
  const [selectedHouses, setSelectedHouses] = useState([]); // Ajout d'un état pour suivre les maisons sélectionnées

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

  const toggleVisite = () => {
    setVisite(!visite);
    setShowForm(false);
    setShowTable(false);
  };

  const handleChoice = (choice) => {
    // Vérifiez si les critères correspondent à l'une des maisons simulées
    const isMatchingCriteria1 =
      formData.commune === simulatedHouse1.commune &&
      formData.typeMaisons === simulatedHouse1.typeMaisons &&
      formData.typeHabitat === simulatedHouse1.typeHabitat &&
      formData.nombrePieces === simulatedHouse1.nombrePieces &&
      formData.nombreSallesDeau === simulatedHouse1.nombreSallesDeau &&
      formData.cour.every((item) => simulatedHouse1.cour.includes(item)) &&
      formData.gardien === simulatedHouse1.gardien &&
      formData.garage === simulatedHouse1.garage;

    const isMatchingCriteria2 =
      formData.commune === simulatedHouse2.commune &&
      formData.typeMaisons === simulatedHouse2.typeMaisons &&
      formData.typeHabitat === simulatedHouse2.typeHabitat &&
      formData.nombrePieces === simulatedHouse2.nombrePieces &&
      formData.nombreSallesDeau === simulatedHouse2.nombreSallesDeau &&
      formData.cour.every((item) => simulatedHouse2.cour.includes(item)) &&
      formData.gardien === simulatedHouse2.gardien &&
      formData.garage === simulatedHouse2.garage;

    if (choice === "2 maisons") {
      const selected = [];
      if (isMatchingCriteria1) {
        selected.push(simulatedHouse1);
      }
      if (isMatchingCriteria2) {
        selected.push(simulatedHouse2);
      }
      setSelectedHouses(selected);
    }
  };

  
  const performSearch = () => {
    console.log("Formulaire soumis avec les données suivantes :");
    console.log(formData);

    toggleVisite();
  };

  return (
    <RootLayout>
      {showForm && showTable ? (
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
                    checked={
                      formData.typeHabitat ===
                      "HABITAT HAUT STANDING AVEC PISCINE"
                    }
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
                    checked={
                      formData.typeHabitat ===
                      "HABITAT HAUT STANDING SANS PISCINE"
                    }
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
      ) : visite ? (
        <div className="choice-page">
          <p>Choisissez l&apos;option de visite :</p>
          <button onClick={() => handleChoice("2 maisons")}>
            2000 FCFA pour visiter 2 maisons
          </button>
          <button onClick={() => handleChoice("20 maisons")}>
            5000 FCFA pour visiter 20 maisons
          </button>
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
        <div
          className="maison-link"
          onClick={showOptionsContent}
          style={{ cursor: "pointer" }}
        >
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
      {selectedHouses.map((house, index) => (
        <div key={index} className="house-details">
          {showImages && selectedHouseIndex  === index ? (
           <Carousel
           showThumbs={false}
           showArrows={true}
           showStatus={false}
           infiniteLoop={true}
           autoPlay={true} // Ajoutez cette option pour activer le défilement automatique
           interval={5000} // Définissez l'intervalle entre les images en millisecondes (par exemple, 5 secondes)
         >   {house.images.map((image, imageIndex) => (
              <div key={imageIndex}>
                <img src={image} alt={`Image ${imageIndex + 1}`} />
              </div>
            ))}
          </Carousel>
          ) : (
            <>
              <div className="house-header" onClick={() => setShowImages(true)}>
                <img
                  src={house.coverImage}
                  alt={`façade de la maison ${index + 1}`}
                />
                <h3>Maison {index + 1}</h3>
              </div>
              <ul>
                <li>Commune: {house.commune}</li>
                <li>Type de maison: {house.typeMaisons}</li>
                <li>Type d'habitat: {house.typeHabitat}</li>
                <li>Nombre de pièces: {house.nombrePieces}</li>
                <li>Nombre de salles d'eau: {house.nombreSallesDeau}</li>
                <li>Commodités: {house.cour.join(", ")}</li>
                <li>Gardien: {house.gardien}</li>
                <li>Garage: {house.garage}</li>
              </ul>
            </>
          )}
        </div>
      ))}
    </RootLayout>
  );
}
