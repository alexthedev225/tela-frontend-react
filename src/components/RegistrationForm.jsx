import { useState } from "react";
import "../styles/RegistrationForm.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    email: "",
    phone: "",
    password: "",
    is_demarcheur: false,
    is_staff: false,
    is_suspended: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        nom: formData.nom,
        prenoms: formData.prenoms,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        is_demarcheur: formData.is_demarcheur,
        is_staff: formData.is_staff,
        is_suspended: formData.is_suspended,
      };

      const response = await fetch("http://127.0.0.1:8000/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert(
          "Inscription réussie. Voici les données enregistrées : " +
            JSON.stringify(responseData)
        );
      } else {
        const responseData = await response.json();
        if (responseData && responseData.message) {
          alert(`Erreur : ${responseData.message}`);
        } else {
          alert("Une erreur est survenue lors de l'inscription.");
        }
      }
    } catch (error) {
      console.error("Une erreur est survenue :", error);
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="text">Inscription</h1>
        <input
          type="text"
          name="nom"
          placeholder="Nom de famille"
          value={formData.nom}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="prenoms"
          placeholder="Prénoms"
          value={formData.prenoms}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="phone"
          placeholder="Numéro de téléphone"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
        />
        <label className="checkbox-label">
          <p>Devenir démarcheur :</p>
          <input
            type="checkbox"
            name="is_demarcheur"
            checked={formData.is_demarcheur}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="button">
          S&apos;inscrire
        </button>
      </form>
      <Link to={'/'} style={{ color: 'white', fontWeight: 'bold' }}>Retourner à la page d&apos;accueil</Link>
    </div>
  );
};

export default RegistrationForm;
