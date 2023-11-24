import { useEffect, useState } from "react";
import RootLayout from "../Layout";
import "../styles/Maison.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Maison() {
  const interval = 10000;

  const [formData, setFormData] = useState({
    commune_id: "", // Correspond à 'commune_id' dans la fonction de recherche Laravel
    is_Appartment: "", // Correspond à 'is_Appartment' dans la fonction de recherche Laravel
    is_MAISON_BASSE: "", // Correspond à 'is_MAISON_BASSE' dans la fonction de recherche Laravel
    is_DUPLEX: "", // Correspond à 'is_DUPLEX' dans la fonction de recherche Laravel
    is_Studio: "", // Correspond à 'is_Studio' dans la fonction de recherche Laravel
    is_Chambre: "", // Correspond à 'is_Chambre' dans la fonction de recherche Laravel
    is_Residence: "", // Correspond à 'is_Residence' dans la fonction de recherche Laravel
    is_HAUT_STANDING: "", // Correspond à 'is_HAUT_STANDING' dans la fonction de recherche Laravel
    has_PISCINE: "", // Correspond à 'has_PISCINE' dans la fonction de recherche Laravel
    has_GARDIEN: "", // Correspond à 'has_GARDIEN' dans la fonction de recherche Laravel
    has_GARAGE: "", // Correspond à 'has_GARAGE' dans la fonction de recherche Laravel
    has_balcon_avant: "", // Correspond à 'has_balcon_avant' dans la fonction de recherche Laravel
    has_balcon_arriere: "", // Correspond à 'has_balcon_arriere' dans la fonction de recherche Laravel
    nombre_piece: "", // Correspond à 'nombre_piece' dans la fonction de recherche Laravel
    nombre_salle_eau: "", // Correspond à 'nombre_salle_eau' dans la fonction de recherche Laravel
    has_COUR_AVANT: "", // Correspond à 'has_COUR_AVANT' dans la fonction de recherche Laravel
    has_COUR_ARRIERE: "", // Correspond à 'has_COUR_ARRIERE' dans la fonction de recherche Laravel
  });

  const [showTable, setShowTable] = useState(false); // État pour contrôler la visibilité du tableau
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchType, setSearchType] = useState(""); // Ajout de la nouvelle propriété
  const [selectedResult, setSelectedResult] = useState(null);

  const showImagesSlider = (result) => {
    setSelectedResult(result);
  };

  const closeImagesSlider = () => {
    setSelectedResult(null);
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

  useEffect(() => {
    setShowTable(false);
  }, []);

  const performSearch = async () => {
    try {
      let endpoint =
        "http://127.0.0.1/telaweb_app/public/api/places/searchplace";

      if (searchType === "bureau") {
        endpoint =
          "http://127.0.0.1/telaweb_app/public/api/places/searchbureau";
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data)
      setResults(data); // Mettre à jour l'état des résultats
      setShowResults(true); // Afficher les résultats après la recherche
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootLayout>
      {showResults ? (
        <div className="results-container">
          <h2>Résultats de la recherche :</h2>
          {results.length > 0 ? (
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  
                  <div
                    onClick={() => {
                      showImagesSlider(result);
                      setShowResults(false);
                    }}
                  >
                    <img src={result.image} alt="Couverture" />
                  </div>
                  <p>{results.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun résultat trouvé.</p>
          )}
          <button
            onClick={() => {
              setShowResults(false);
            }}
          >
            Revenir en arrière
          </button>
        </div>
      ) : (
        <>
          {showTable ? (
            <div className="table-container">
              <table>
                <tbody>
                  <tr>
                    <td>COMMUNE</td>
                    <td>
                      <select
                        name="commune_id"
                        value={formData.commune_id}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled></option>
                        <option value="1">Abobo</option>
                        <option value="2">Adjamé</option>
                        <option value="3">Anyama</option>
                        <option value="4">Attécoubé</option>
                        <option value="5">Bingerville</option>
                        <option value="6">Cocody</option>
                        <option value="7">Koumassi</option>
                        <option value="8">Marcory</option>
                        <option value="9">Plateau</option>
                        <option value="10">Port bouët</option>
                        <option value="11">Treichville</option>
                        <option value="12">Songon</option>
                        <option value="13">Yopougon</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>MAISON BASSE</td>
                    <td>
                      <input
                        type="checkbox"
                        name="is_MAISON_BASSE"
                        checked={formData.is_MAISON_BASSE}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>APPARTEMENT</td>
                    <td>
                      <input
                        type="checkbox"
                        name="is_Appartment"
                        checked={formData.is_Appartment}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td>
                      <input
                        type="checkbox"
                        name="is_Studio"
                        checked={formData.is_Studio}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>CHAMBRE</td>
                    <td>
                      <input
                        type="checkbox"
                        name="is_Chambre"
                        checked={formData.is_Chambre}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>RESIDENCE</td>
                    <td>
                      <input
                        type="checkbox"
                        name="is_Residence"
                        checked={formData.is_Residence}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>DUPLEX</td>
                    <td>
                      <input
                        type="checkbox"
                        name="is_DUPLEX"
                        checked={formData.is_DUPLEX}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>HABITAT HAUT STANDING</td>
                    <td>
                      <input
                        type="checkbox"
                        name="is_HAUT_STANDING"
                        checked={formData.is_HAUT_STANDING}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>AVEC PISCINE</td>
                    <td>
                      <input
                        type="checkbox"
                        name="has_PISCINE"
                        checked={formData.has_PISCINE}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>NOMBRE DE PIECES</td>
                    <td>
                      <select
                        name="nombre_piece"
                        value={formData.nombre_piece}
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
                        name="nombre_salle_eau"
                        value={formData.nombre_salle_eau}
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
                      name="has_COUR_AVANT"
                      checked={formData.has_COUR_AVANT}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>COUR ARRIERE</td>
                  <td>
                    <input
                      type="checkbox"
                      name="has_COUR_ARRIERE"
                      checked={formData.has_COUR_ARRIERE}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>BALCON AVANT</td>
                  <td>
                    <input
                      type="checkbox"
                      name="has_balcon_avant"
                      checked={formData.has_balcon_avant}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>BALCON ARRIÈRE</td>
                  <td>
                    <input
                      type="checkbox"
                      name="has_balcon_arriere"
                      checked={formData.has_balcon_arriere}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>AVEC GARDIEN</td>
                  <td>
                    <input
                      type="checkbox"
                      name="has_GARDIEN"
                      checked={formData.has_GARDIEN}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>AVEC GARAGE</td>
                  <td>
                    <input
                      type="checkbox"
                      name="has_GARAGE"
                      checked={formData.has_GARAGE}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
              </table>
              <button onClick={performSearch} className="submit-button">
                <img src="/verifie.png" alt="" />
                <p>Validez</p>
              </button>
            </div>
          ) : (
            !selectedResult && (
              <div className="options-container">
                <button
                  className="location-button"
                  onClick={() => {
                    setShowTable(true);
                    setSearchType("logement");
                  }}
                >
                  Logement
                </button>
                <button
                  className="location-button"
                  onClick={() => {
                    setShowTable(true);
                    setSearchType("bureau");
                  }}
                >
                  Bureau
                </button>
              </div>
            )
          )}
        </>
      )}
      {selectedResult && (
        <div className="images-slider-container">
          <Carousel
            swipeable={false}
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            interval={interval}
          >
            {selectedResult.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index + 2}`} />
              </div>
            ))}
          </Carousel>
          {/* Afficher toutes les autres données en dessous du carrousel */}
          <div className="other-data-container">
            <h3>Autres données :</h3>
            <p>Commune: {selectedResult.commune}</p>
            <p>Type de maison: {selectedResult.typeMaisons}</p>
            <p>Type d&apos;habitat: {selectedResult.typeHabitat}</p>
            <p>Nombre de pièces: {selectedResult.nombrePieces}</p>
            <p>
              Nombre de salles d&apos;eau: {selectedResult.nombreSallesDeau}
            </p>
            <p>Cour: {selectedResult.cour.join(", ")}</p>
            <p>Balcon: {selectedResult.balcon.join(", ")}</p>
            <p>Gardien: {selectedResult.gardien}</p>
            <p>Garage: {selectedResult.garage}</p>
          </div>
          <button
            onClick={() => {
              closeImagesSlider();
              setShowResults(true);
            }}
          >
            Fermer le slider
          </button>
        </div>
      )}
    </RootLayout>
  );
}
