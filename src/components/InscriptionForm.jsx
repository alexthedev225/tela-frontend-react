import { useState } from "react";

function InscriptionForm() {
  const [formData, setFormData] = useState({
    nomComplet: "",
    lieuNaissance: "",
    dateNaissance: "",
    genre: "",
    pays: "",
    nationalite: "",
    domicileActuel: "",
    passportCNI_Recto: "",
    passportCNI_Verso: "",
    photoIdentite: "",
    numeroTelephone1: "",
    numeroTelephone2: "",
    dateInscription: new Date().toISOString().substr(0, 10),
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };
  const handleRectoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      passportCNI_Recto: file,
    });
  };

  const handleVersoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      passportCNI_Verso: file,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photoIdentite: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("nomComplet", formData.nomComplet);
    formDataToSend.append("lieuNaissance", formData.lieuNaissance);
    formDataToSend.append("dateNaissance", formData.dateNaissance);
    formDataToSend.append("genre", formData.genre);
    formDataToSend.append("pays", formData.pays);
    formDataToSend.append("nationalite", formData.nationalite);
    formDataToSend.append("domicileActuel", formData.domicileActuel);
    formDataToSend.append("passportCNI_Recto", formData.passportCNI_Recto);
    formDataToSend.append("passportCNI_Verso", formData.passportCNI_Verso);
    formDataToSend.append("photoIdentite", formData.photoIdentite);
    formDataToSend.append("numeroTelephone1", formData.numeroTelephone1);
    formDataToSend.append("numeroTelephone2", formData.numeroTelephone2);
    formDataToSend.append("dateInscription", formData.dateInscription);

    try {
      // Effectuez une requête POST vers l'API backend
      const response = await fetch("http://localhost:3000/inscription", {
        method: "POST",
        body: formDataToSend, // Convertissez l'objet formData en JSON pour l'envoyer
      });

      if (response.ok) {
        // Le backend a répondu avec succès
        const responseData = await response.json(); // Récupérez les données renvoyées par le backend
        console.log("Inscription réussie !");
        console.log("Données du backend :", responseData); // Affichez les données renvoyées
      } else {
        // Gérez les erreurs ici, par exemple :
        console.error("Échec de l'inscription");
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  return (
    <div>
      <h2>Formulaire d'Inscription</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Noms Complets:
          <input
            type="text"
            name="nomComplet"
            value={formData.nomComplet}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Lieu de Naissance:
          <input
            type="text"
            name="lieuNaissance"
            value={formData.lieuNaissance}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date de Naissance:
          <input
            type="date"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Genre:
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez le genre</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre</option>
          </select>
        </label>
        <label>
          Pays:
          <input
            type="text"
            name="pays"
            value={formData.pays}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nationalité:
          <input
            type="text"
            name="nationalite"
            value={formData.nationalite}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Domicile Actuel:
          <input
            type="text"
            name="domicileActuel"
            value={formData.domicileActuel}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Passport ou CNI Recto:
          <input
            type="file"
            name="passportCNI_Recto"
            accept="image/*"
            onChange={handleRectoChange}
            required
          />
        </label>
        <label>
          Passport ou CNI Verso:
          <input
            type="file"
            name="passportCNI_Verso"
            accept="image/*"
            onChange={handleVersoChange}
            required
          />
        </label>
        <label>
          Photo d'Identité:
          <input
            type="file"
            name="photoIdentite"
            accept="image/*"
            onChange={handlePhotoChange}
            required
          />
        </label>
        <label>
          Numéro de Téléphone 1:
          <input
            type="tel"
            name="numeroTelephone1"
            value={formData.numeroTelephone1}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Numéro de Téléphone 2:
          <input
            type="tel"
            name="numeroTelephone2"
            value={formData.numeroTelephone2}
            onChange={handleChange}
          />
        </label>
        <label>
          Date d'Inscription:
          <input
            type="date"
            name="dateInscription"
            value={formData.dateInscription}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Inscrire</button>
      </form>
    </div>
  );
}

export default InscriptionForm;
