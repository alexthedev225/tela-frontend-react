import { useState } from 'react';
import '../styles/RegistrationForm.css'
import '../styles/LoginForm.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyez les données au backend pour la connexion
      // Assurez-vous que le backend gère la validation et l'authentification.
      // Vous pouvez utiliser fetch ou Axios pour cela.

      // Exemple avec fetch :
      const response = await fetch('URL_DU_BACKEND/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // La connexion a réussi, redirigez l'utilisateur ou effectuez d'autres actions.
      } else {
        // Gérez les erreurs de connexion, affichez un message d'erreur, etc.
      }
    } catch (error) {
      console.error('Une erreur est survenue :', error);
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

      <button type="submit" className="button">Connexion</button>
    </form>
    <Link to={'/'} style={{ color : 'white', fontWeight : 'bold'}}>Retourner a la page d&apos;acceuil</Link>
    </div>
  );
};

export default LoginForm;
