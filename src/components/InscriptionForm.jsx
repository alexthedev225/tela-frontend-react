import { useState } from "react";
import '../styles/InscriptionForm.css'
import { Link } from "react-router-dom";

function InscriptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    lieu_naissance: "",
    date_naissance: "",
    genre: "",
    pays: "",
    nationalite: "",
    domicile: "",
    cni_recto: "",
    cni_verso: "",
    phone1: "",
    phone2: "",
    numero_cni: ""
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("lieuNaissance", formData.lieu_naissance);
    formDataToSend.append("dateNaissance", formData.date_naissance);
    formDataToSend.append("genre", formData.genre);
    formDataToSend.append("pays", formData.pays);
    formDataToSend.append("nationalite", formData.nationalite);
    formDataToSend.append("domicileActuel", formData.domicile);
    formDataToSend.append("passportCNI_Recto", formData.cni_recto);
    formDataToSend.append("passportCNI_Verso", formData.cni_verso);
    formDataToSend.append("numeroTelephone1", formData.phone1);
    formDataToSend.append("numeroTelephone2", formData.phone2);
    formDataToSend.append("numero_cni", formData.numero_cni);
    
    try {
      // Effectuez une requête POST vers l'API backend
      const response = await fetch("URL_DU_BACKEND", {
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
    <>
    <div className="inscription-form-container">
    <h2>Formulaire d&apos;Identification</h2>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label className="form-label">
        Noms Complets:
        <input
          type="text"
          name="nomComplet"
          value={formData.nomComplet}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
  
      <label className="form-label">
        Nationalité:
        <input
          type="text"
          name="nationalite"
          value={formData.nationalite}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
  
      <label className="form-label">
        Domicile Actuel:
        <input
          type="text"
          name="domicileActuel"
          value={formData.domicileActuel}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
  
      <label className="form-label">
        Passport ou CNI Recto:
        <input
          type="file"
          name="passportCNI_Recto"
          accept="image/*"
          onChange={handleRectoChange}
          className="form-file"
          required
        />
      </label>
  
      <label className="form-label">
        Passport ou CNI Verso:
        <input
          type="file"
          name="passportCNI_Verso"
          accept="image/*"
          onChange={handleVersoChange}
          className="form-file"
          required
        />
      </label>
  
  
      <label className="form-label">
        Numéro de Téléphone 1:
        <input
          type="tel"
          name="numeroTelephone1"
          value={formData.numeroTelephone1}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
  
      <label className="form-label">
        Numéro de Téléphone 2:
        <input
          type="tel"
          name="numeroTelephone2"
          value={formData.numeroTelephone2}
          onChange={handleChange}
          className="form-input"
        />
      </label>
  
      <label className="form-label">
        Date d&apos;Inscription:
        <input
          type="date"
          name="dateInscription"
          value={formData.dateInscription}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
  
      <button type="submit" className="form-button">
        Inscrire
      </button>
    </form>
    
  </div>
  <Link to={"/"} style={{ color: "white", fontWeight: "bold", marginBottom: '1rem' }}>
  Retourner à la page d&apos;accueil
</Link>
</>
  );
}

export default InscriptionForm;