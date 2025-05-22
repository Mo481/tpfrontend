# TP Frontend

Ce projet est une application frontend React pour la gestion des utilisateurs et des annonces.

## Installation

 Installez les dépendances :

## Lancement du projet

```
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## Fonctionnalités

- Inscription et connexion utilisateur
- Création, affichage et suppression d'annonces

## Structure du projet

```plaintext
tpfrontend/
├── src/
│   ├── App.js                       # Composant principal de l'application
│   └── Components/                  # Tous les composants React
│       ├── Annonce/
│       │   ├── Annonce.jsx          # Gestion des annonces (affichage, création, suppression)
│       │   └── Annonce.css          # Style du composant Annonce
│       ├── Login/
│       │   ├── Login.jsx            # Composant de connexion
│       │   └── Login.css            # Style du composant Login
│       └── Register/
│           ├── Register.jsx         # Composant d'inscription
│           └── Register.css         # Style du composant Register
├── public/                         # Contient index.html et autres fichiers statiques
├── package.json                    # Dépendances et scripts du projet
                   
```



