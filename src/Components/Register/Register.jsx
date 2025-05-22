import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"

const Register = () => {
  const [username, setUsername] = useState(""); // utilisé pour backend
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/users/register", {
        username,
        email,
        password,
      });

      alert("Inscription réussie !");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Échec de l'inscription");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Inscription</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="register-field">
          <label className="register-label" htmlFor="username">Nom d'utilisateur :</label>
          <input
            className="register-input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="register-field">
          <label className="register-label" htmlFor="email">Email :</label>
          <input
            className="register-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-field">
          <label className="register-label" htmlFor="password">Mot de passe :</label>
          <input
            className="register-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="register-button" type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
