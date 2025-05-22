import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);

      alert("Connexion réussie !");
      navigate("/Annonce"); 
    } catch (error) {
      console.error("Erreur de connexion :", error);
      alert("Échec de la connexion");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Connexion</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            className="login-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            className="login-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">Se connecter</button>
        <p>
          Pas encore inscrit ? <a href="/register">Inscrivez-vous ici</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
