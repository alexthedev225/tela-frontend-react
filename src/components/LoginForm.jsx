import { useState } from "react";
import "../styles/RegistrationForm.css";
import "../styles/LoginForm.css";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await fetch("http://127.0.0.1/telaweb_app/public/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      console.log("Données renvoyées par le serveur:", responseData);
      // alert('Connexion avec succes')
      navigate('/')
    } catch (error) {
      console.error("Une erreur est survenue :", error);
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="text">Connexion</h1>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Numéro de téléphone"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
          required
          placeholder="Mot de passe"
        />

        <button type="submit" className="button">
          Connexion
        </button>
      </form>
      <Link to={"/"} style={{ color: "white", fontWeight: "bold" }}>
        Retourner a la page d&apos;acceuil
      </Link>
    </div>
  );
};

export default LoginForm;
