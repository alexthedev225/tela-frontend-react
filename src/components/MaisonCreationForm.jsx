import { useState } from "react";

function CreerMaison() {
  const [commune, setCommune] = useState("");
  const [zone, setZone] = useState("");
  const [typeMaisons, setTypeMaisons] = useState("");
  const [typeHabitat, setTypeHabitat] = useState("");
  const [nombrePieces, setNombrePieces] = useState(0);
  const [nombreSallesDeau, setNombreSallesDeau] = useState(0);
  const [cour, setCour] = useState([]);
  const [gardien, setGardien] = useState("");
  const [garage, setGarage] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const handleImagesChange = (e) => {
    const files = e.target.files;
    setImages([...images, ...files]);
  };

  const handleSubmit = async () => {
    // Vous pouvez envoyer les données du formulaire au backend ici
    // Assurez-vous d'envoyer les données dans le bon format, y compris les fichiers image
    const formData = new FormData();
    formData.append("commune", commune);
    formData.append("zone", zone);
    formData.append("typeMaisons", typeMaisons);
    formData.append("typeHabitat", typeHabitat);
    formData.append("nombrePieces", nombrePieces);
    formData.append("nombreSallesDeau", nombreSallesDeau);
    formData.append("cour", JSON.stringify(cour));
    formData.append("gardien", gardien);
    formData.append("garage", garage);
    formData.append("coverImage", coverImage);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    try {
      const response = await fetch("http://localhost:3000/api/creer-maison", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Maison créée avec succès!");
      } else {
        alert("Erreur lors de la création de la maison.");
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de la création de la maison.");
    }
  };

  return (
    <div>
      <h1>Créer une Maison</h1>
      <form>
        <div>
          <label>Commune:</label>
          <input
            type="text"
            value={commune}
            onChange={(e) => setCommune(e.target.value)}
          />
        </div>
        <div>
          <label>Zone:</label>
          <input
            type="text"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          />
        </div>
        <div>
          <label>Type de maisons:</label>
          <input
            type="text"
            value={typeMaisons}
            onChange={(e) => setTypeMaisons(e.target.value)}
          />
        </div>
        <div>
          <label>Type d&apos;habitat:</label>
          <input
            type="text"
            value={typeHabitat}
            onChange={(e) => setTypeHabitat(e.target.value)}
          />
        </div>
        <div>
          <label>Nombre de pièces:</label>
          <input
            type="number"
            value={nombrePieces}
            onChange={(e) => setNombrePieces(e.target.value)}
          />
        </div>
        <div>
          <label>Nombre de salles d&apos;eau:</label>
          <input
            type="number"
            value={nombreSallesDeau}
            onChange={(e) => setNombreSallesDeau(e.target.value)}
          />
        </div>
        <div>
          <label>Cour:</label>
          <input
            type="text"
            value={cour}
            onChange={(e) => setCour(e.target.value.split(","))}
          />
        </div>
        <div>
          <label>Gardien:</label>
          <input
            type="text"
            value={gardien}
            onChange={(e) => setGardien(e.target.value)}
          />
        </div>
        <div>
          <label>Garage:</label>
          <input
            type="text"
            value={garage}
            onChange={(e) => setGarage(e.target.value)}
          />
        </div>

        <div>
          <label>Image de couverture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageChange}
          />
        </div>
        <div>
          <label>Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
          />
        </div>
        <button onClick={handleSubmit}>Créer la Maison</button>
      </form>
    </div>
  );
}

export default CreerMaison;
