import React, { useEffect, useState } from "react";
import axios from "axios";

const Annonce = () => {
  const [annonces, setAnnonces] = useState([]);
  const [newAnnonces, setNewAnnonce] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    fetchAnnonces();
  }, []);

  const fetchAnnonces = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/annonces/getAllAnnonces",
      );
      setAnnonces(response.data);
    } catch (error) {
      console.error("Erreur de chargement:", error);
    }
  };

  const deleteAnnonces = async (id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Pour pouvoir supprime une annonce tu dois d'abord te connecter.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8080/annonces/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Annonce supprimée !");
      fetchAnnonces(); 
    } catch (error) {
      console.error("Erreur de suppression:", error);
    }
  };

  const createAnnonce = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Tu dois d'abord te connecter avant d'ajouter.");
      return;
    }

    // Vérification des champs
    if (
      !newAnnonces.title.trim() ||
      !newAnnonces.description.trim() ||
      !newAnnonces.price ||
      !newAnnonces.category.trim()
    ) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const annonceToSend = {
        ...newAnnonces,
        price: Number(newAnnonces.price),
      };
      const response = await axios.post(
        "http://localhost:8080/annonces/create",
        annonceToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Annonce créée avec succès !");
      setAnnonces([...annonces, response.data]);
      setNewAnnonce({ title: "", description: "", price: "", category: "" });
    } catch (error) {
      console.error("Erreur de creation", error);
      alert("Erreur lors de la création de l'annonce.");
    }
  };

  return (
    <div>
      <h1>Annonces disponibles</h1>

      <div>
        {annonces.map((annonces) => (
         <div key={annonces._id} style={{ border: "1px solid black", padding: 10, marginBottom: 10 }}>
          <h3>{annonces.title}</h3>
          <p>{annonces.description}</p>
          <p>Prix: {annonces.price} €</p>
          <p>Catégorie: {annonces.category}</p>
            <button onClick={() => deleteAnnonces(annonces._id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Ajouter une annonce</h2>
        <input
          type="text"
          placeholder="Title"
          value={newAnnonces.title}
          onChange={(e) =>
            setNewAnnonce({ ...newAnnonces, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newAnnonces.description}
          onChange={(e) =>
            setNewAnnonce({ ...newAnnonces, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newAnnonces.price}
          onChange={(e) =>
            setNewAnnonce({ ...newAnnonces, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Category"
          value={newAnnonces.category}
          onChange={(e) =>
            setNewAnnonce({ ...newAnnonces, category: e.target.value })
          }
        />
        <button onClick={createAnnonce}>Create Annonce</button>
      </div>
    </div>
  );
};

export default Annonce;
