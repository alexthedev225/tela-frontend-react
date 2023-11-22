import { useState } from "react";
import "../styles/RegistrationForm.css";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    email: "",
    phone: "",
    photo: "",
    password: "",
    confirmPassword: "",
    is_demarcheur: false,
    is_staff: false,
    is_suspended: false,
  });

  const [validationErrors, setValidationErrors] = useState({
    nom: false,
    prenoms: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [name]: value });
    // Effacer le message d'erreur lorsqu'un champ est modifié
    setValidationErrors({ ...validationErrors, [name]: false });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Affichage des données avant l'envoi au backend
    console.log("Données à envoyer :", formData);

    // Validation de tous les champs
    const fieldsToValidate = [
      "nom",
      "prenoms",
      "email",
      "phone",
      "password",
      "confirmPassword",
      "photo",
    ];
    const newValidationErrors = {};

    fieldsToValidate.forEach((field) => {
      if (!formData[field]) {
        newValidationErrors[field] = true;
      }
    });

    if (Object.keys(newValidationErrors).length > 0) {
      // Afficher un message d'erreur si tous les champs ne sont pas remplis
      setValidationErrors(newValidationErrors);
      return;
    }

    // Validation du mot de passe
    if (formData.password !== formData.confirmPassword) {
      setValidationErrors({ ...validationErrors, confirmPassword: true });
      return;
    }

    // Validation de la photo
    if (!formData.photo) {
      setValidationErrors({ ...validationErrors, photo: true });
      return;
    }

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
        photo: formData.photo,
      };

      // Envoi des données au serveur
      const response = await fetch(
        "http://127.0.0.1/telaweb_app/public/api/users/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const responseData = await response.json();
      console.log("Données renvoyées par le serveur:", responseData);

      navigate("/");
    } catch (error) {
      console.error("Une erreur est survenue :", error);
      // Affichage d'un message d'erreur
      alert("Une erreur est survenue lors de l'inscription.");
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1 className="text">Inscription</h1>

        {/* Champ Nom avec validation */}
        <input
          type="text"
          name="nom"
          placeholder="Nom de famille"
          value={formData.nom}
          onChange={handleChange}
          className={`input-field ${validationErrors.nom && "error"}`}
        />
        {validationErrors.nom && (
          <p className="error-message">Veuillez entrer votre nom.</p>
        )}

        {/* Champ Prénoms avec validation */}
        <input
          type="text"
          name="prenoms"
          placeholder="Prénoms"
          value={formData.prenoms}
          onChange={handleChange}
          className={`input-field ${validationErrors.prenoms && "error"}`}
        />
        {validationErrors.prenoms && (
          <p className="error-message">Veuillez entrer vos prénoms.</p>
        )}

        {/* Champ Email avec validation */}
        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          value={formData.email}
          onChange={handleChange}
          className={`input-field ${validationErrors.email && "error"}`}
        />
        {validationErrors.email && (
          <p className="error-message">
            Veuillez entrer une adresse e-mail valide.
          </p>
        )}

        {/* Champ Numéro de téléphone avec validation */}
        <input
          type="text"
          name="phone"
          placeholder="Numéro de téléphone"
          value={formData.phone}
          onChange={handleChange}
          className={`input-field ${validationErrors.phone && "error"}`}
        />
        {validationErrors.phone && (
          <p className="error-message">
            Veuillez entrer votre numéro de téléphone.
          </p>
        )}
        {/* Champ Photo d'identité */}
        <label className="photo-label">
          Photo d&apos;identité :
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="photo-input"
          />
        </label>

        {/* Champ Mot de passe avec validation */}
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          className={`input-field ${validationErrors.password && "error"}`}
        />
        {validationErrors.password && (
          <p className="error-message">Veuillez entrer un mot de passe.</p>
        )}

        {/* Champ Confirmation du mot de passe avec validation */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`input-field ${
            validationErrors.confirmPassword && "error"
          }`}
        />
        {validationErrors.confirmPassword && (
          <p className="error-message">
            Veuillez confirmer votre mot de passe.
          </p>
        )}

        {/* Checkbox pour Devenir démarcheur */}
        <label className="checkbox-label">
          <p>Devenir démarcheur :</p>
          <input
            type="checkbox"
            name="is_demarcheur"
            checked={formData.is_demarcheur}
            onChange={handleChange}
          />
        </label>

        {/* Bouton de soumission */}
        <button type="submit" className="button">
          S&apos;inscrire
        </button>
      </form>

      {/* Lien de retour à la page d'accueil */}
      <Link to={"/"} style={{ color: "white", fontWeight: "bold" }}>
        Retourner à la page d&apos;accueil
      </Link>
    </div>
  );
};

export default RegistrationForm;
