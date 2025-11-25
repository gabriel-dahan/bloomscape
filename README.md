# 🌸 BloomScape

**BloomScape** is a relaxing and strategic online gardening simulation game. Manage your garden, cultivate rare species, and trade your harvests in a dynamic market within a closed economy.

## 🌟 Key Features

- 🌱 **Garden Management:** Plant, water, and grow your flowers in real-time. Careful, without care, they wither!
- 💎 **Rarity System:** Discover species of varying rarity, from common to legendary flowers.
- 💰 **Player-vs-Player Market:** Sell your finest harvests for **Sap** (virtual currency) or buy missing flowers for your collection: beware, species prices can fluctuate.
- 🏆 **Progression:** Level up to unlock new seeds and expand your land.
- 📖 **Floradex:** Complete your botanical collection album.

## 🛠 Tech Stack

This project is designed as a modern and robust "Fullstack TypeScript" application:

- **Frontend:** Next.js (App Router), React, daisyUI, TailwindCSS.
- **Backend:** Next.js API Routes + Remult (CRUD & Type-safety).
- **Database:** PostgreSQL.
- **Infrastructure:** Docker & Docker Compose.

## 🚀 Installation and Setup

The project is fully containerized. You only need **Docker Desktop** installed on your machine.

### 1. Clone the project

```bash
git clone https://github.com/gabriel-dahan/bloomscape.git
cd bloomscape
```

### 2. Launch the environment

Launch the application and the database with a single command:

```bash
docker compose up --build
```

_The first installation may take a few minutes._

### 3. Access the game

Once the logs are displayed, open your browser:

- **Application:** http://localhost:3000
- **Database (Internal):** Port 5432

## ⚖️ License & Copyright

**© 2025 BloomScape. All rights reserved.**

This source code is made public **solely for educational, demonstration, and transparency purposes**.

- You are authorized to view the code to learn or audit its functionality.
- **You are NOT authorized** to copy, modify, distribute, sell, or use this code for a commercial or personal project (made public) without explicit written permission from the author.
- Some graphic assets are missing from the code, and are replaced by a placeholder.

---

_Made with ❤️ and fresh water by BloomScape._

(first version of this README made with AI, errors may exist)
