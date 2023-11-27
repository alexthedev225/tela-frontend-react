import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const LogoutButton = ({onClick}) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch("http://127.0.0.1/telaweb_app/public/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('token')}`,
                },
            });
            console.log('Reponse du serveur', await response.json())
            
            // Supprime le cookie côté client
            Cookies.remove('token');

            // Redirige vers la page d'accueil ou une autre page après la déconnexion
            navigate('/');
        } catch (error) {
            console.error("Une erreur est survenue :", error);
        }
    };

    return (
        <button onClick={() => {
            onClick()
            handleLogout()
        }}>Se deconnecter</button>
    );
};

export default LogoutButton;
