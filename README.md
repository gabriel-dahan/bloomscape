# 🌸 BloomScape

**BloomScape** est un jeu de simulation de jardinage en ligne relaxant et stratégique. Gérez votre jardin, cultivez des espèces rares et échangez vos récoltes sur un marché dynamique au sein d'une économie fermée.

## 🌟 Fonctionnalités Clés

- 🌱 **Gestion de Jardin :** Plantez, arrosez et faites grandir vos fleurs en temps réel. Attention, sans soin, elles fanent !
- 💎 **Système de Rareté :** Découvrez des espèces allant de _Commune_ à _Légendaire_ via un système de génération procédurale.
- 💰 **Marché Joueur-contre-Joueur :** Vendez vos plus belles récoltes contre de la **Sève** (monnaie virtuelle) ou achetez les fleurs manquantes à votre collection.
- 🏆 **Progression :** Montez de niveau pour débloquer de nouvelles graines et agrandir votre terrain.
- 📖 **Floradéx :** Complétez votre album de collection botanique.

## 🛠 Stack Technique

Ce projet est conçu comme une application "Fullstack TypeScript" moderne et robuste :

- **Frontend :** Next.js (App Router), React, daisyUI, TailwindCSS.
- **Backend :** Next.js API Routes + Remult (CRUD & Type-safety).
- **Base de données :** PostgreSQL.
- **Infrastructure :** Docker & Docker Compose.

## 🚀 Installation et Lancement

Le projet est entièrement conteneurisé. Vous n'avez besoin que de **Docker Desktop** installé sur votre machine.

### 1. Récupérer le projet

```bash
git clone https://github.com/ton-pseudo/bloomscape.git
cd bloomscape
```

### 2. Lancer l'environnement

Lancez l'application et la base de données avec une seule commande :`

```bash
docker compose up --build
```

_La première installation peut prendre quelques minutes._

### 3. Accéder au jeu

Une fois les logs affichés, ouvrez votre navigateur :

- **Application :** http://localhost:3000
- **Base de données (Interne) :** Port 5432

## ⚖️ License & Copyright

**© 2025 BloomScape. Tous droits réservés.**

Ce code source est rendu public **uniquement à des fins éducatives, de démonstration et de transparence**.

- Vous êtes autorisé à consulter le code pour apprendre ou auditer le fonctionnement.
- **Vous n'êtes PAS autorisé** à copier, modifier, distribuer, vendre ou utiliser ce code (ou les assets graphiques) pour un projet commercial ou personnel (rendu publique) sans autorisation écrite explicite de l'auteur.
- Tout les assets graphiques sont manquants dans le code, et sons remplacés par un placeholder.

---

_Fait avec ❤️ et de l'eau fraîche par BloomScape._
