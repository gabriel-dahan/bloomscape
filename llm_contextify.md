Project tree: 
```        ├── .gitattributes
        ├── .gitignore
        ├── .prettierrc.json
        ├── README.md
        ├── README_fr.md
        ├── bloomscape_roadmap.pdf
        ├── env.d.ts
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── public/
        │   ├── bloomscape_logo.png
        │   ├── bloomscape_market_presentation.wav
        │   ├── bloomscape_presentation.wav
        │   ├── bloomscape_text.png
        │   ├── favicon.ico
        │   ├── favicon.png
        │   └── textures/
        │       ├── land_bottom.png
        │       ├── land_grass_side.png
        │       ├── soil_center.png
        │       ├── soil_corner.png
        │       ├── soil_edge.png
        │       └── water/
        │           ├── 1side/
        │           │   ├── frame1.png
        │           │   ├── frame10.png
        │           │   ├── frame11.png
        │           │   ├── frame12.png
        │           │   ├── frame13.png
        │           │   ├── frame14.png
        │           │   ├── frame15.png
        │           │   ├── frame16.png
        │           │   ├── frame2.png
        │           │   ├── frame3.png
        │           │   ├── frame4.png
        │           │   ├── frame5.png
        │           │   ├── frame6.png
        │           │   ├── frame7.png
        │           │   ├── frame8.png
        │           │   └── frame9.png
        │           ├── 2sides/
        │           ├── 3sides/
        │           ├── 4sides/
        │           ├── open/
        │           │   ├── frame1.png
        │           │   ├── frame10.png
        │           │   ├── frame11.png
        │           │   ├── frame12.png
        │           │   ├── frame13.png
        │           │   ├── frame14.png
        │           │   ├── frame15.png
        │           │   ├── frame16.png
        │           │   ├── frame2.png
        │           │   ├── frame3.png
        │           │   ├── frame4.png
        │           │   ├── frame5.png
        │           │   ├── frame6.png
        │           │   ├── frame7.png
        │           │   ├── frame8.png
        │           │   └── frame9.png
        │           └── xcf_files/
        │               ├── frame1.xcf
        │               ├── frame10.xcf
        │               ├── frame11.xcf
        │               ├── frame12.xcf
        │               ├── frame13.xcf
        │               ├── frame14.xcf
        │               ├── frame15.xcf
        │               ├── frame16.xcf
        │               ├── frame2.xcf
        │               ├── frame3.xcf
        │               ├── frame4.xcf
        │               ├── frame5.xcf
        │               ├── frame6.xcf
        │               ├── frame7.xcf
        │               ├── frame8.xcf
        │               └── frame9.xcf
        ├── src/
        │   ├── App.vue
        │   ├── BaseApp.vue
        │   ├── assets/
        │   │   ├── globals.css
        │   │   └── main.css
        │   ├── components/
        │   │   ├── FlowerImage.vue
        │   │   ├── Footer.vue
        │   │   ├── Form.vue
        │   │   ├── GlobalModal.vue
        │   │   ├── Header.vue
        │   │   ├── HomeMarketTicker.vue
        │   │   ├── admin/
        │   │   │   ├── AdminSideBar.vue
        │   │   │   └── integrated_views/
        │   │   │       ├── AdminConfig.vue
        │   │   │       ├── AdminDatabase.vue
        │   │   │       ├── AdminLogs.vue
        │   │   │       ├── AdminModeration.vue
        │   │   │       ├── AdminOverview.vue
        │   │   │       ├── AdminReports.vue
        │   │   │       └── AdminUsers.vue
        │   │   ├── auth/
        │   │   │   ├── AuthModal.vue
        │   │   │   └── logic/
        │   │   │       └── useAuthModal.ts
        │   │   ├── buttons/
        │   │   │   ├── GoogleLoginBtn.vue
        │   │   │   └── ThemeSwitcher.vue
        │   │   ├── chat/
        │   │   │   └── GlobalChatDrawer.vue
        │   │   ├── game/
        │   │   │   ├── LandScene.vue
        │   │   │   ├── SideBar.vue
        │   │   │   ├── TopBar.vue
        │   │   │   ├── config/
        │   │   │   │   └── ItemRegistery.ts
        │   │   │   ├── logic/
        │   │   │   │   ├── AutoTilingUtils.ts
        │   │   │   │   ├── LandSceneManager.ts
        │   │   │   │   └── WorldElementsManager.ts
        │   │   │   └── modal_features/
        │   │   │       ├── InventoryInModal.vue
        │   │   │       ├── MarketInModal.vue
        │   │   │       └── TileManagerInModal.vue
        │   │   └── icons/
        │   │       ├── DiscordIcon.vue
        │   │       ├── InstagramIcon.vue
        │   │       └── navbar/
        │   │           ├── HomeIcon.vue
        │   │           ├── InventoryIcon.vue
        │   │           ├── MarketIcon.vue
        │   │           └── SettingsIcon.vue
        │   ├── main.ts
        │   ├── private/
        │   │   └── assets/
        │   │       ├── flowers/
        │   │       │   ├── golden_lotus/
        │   │       │   │   ├── icon/
        │   │       │   │   │   └── seed.png
        │   │       │   │   └── sprite/
        │   │       │   │       └── seed.png
        │   │       │   ├── heart_flower/
        │   │       │   │   └── icon/
        │   │       │   │       ├── growing1.png
        │   │       │   │       ├── growing2.png
        │   │       │   │       ├── mature.png
        │   │       │   │       ├── seed.png
        │   │       │   │       ├── sprout1.png
        │   │       │   │       ├── sprout2.png
        │   │       │   │       └── withered.png
        │   │       │   ├── night_shade/
        │   │       │   └── unknown.png
        │   │       └── items/
        │   ├── routes/
        │   │   ├── index.ts
        │   │   ├── routes_enum.ts
        │   │   └── scroll.ts
        │   ├── server/
        │   │   ├── _seedMarket.ts
        │   │   ├── api.ts
        │   │   ├── controllers/
        │   │   │   ├── AdminController.ts
        │   │   │   ├── AuthController.ts
        │   │   │   ├── ChatController.ts
        │   │   │   ├── GameController.ts
        │   │   │   ├── MarketController.ts
        │   │   │   ├── ReportController.ts
        │   │   │   └── UserController.ts
        │   │   ├── ext.ts
        │   │   └── index.ts
        │   ├── shared/
        │   │   ├── analytics/
        │   │   │   ├── FlowerDiscovery.ts
        │   │   │   ├── ModerationLog.ts
        │   │   │   └── UserReport.ts
        │   │   ├── chat/
        │   │   │   ├── Chat.ts
        │   │   │   ├── ChatMessage.ts
        │   │   │   └── ChatParticipant.ts
        │   │   ├── economy/
        │   │   │   ├── Item.ts
        │   │   │   ├── MarketHistory.ts
        │   │   │   ├── MarketListing.ts
        │   │   │   ├── MarketStat.ts
        │   │   │   └── SapPurchase.ts
        │   │   ├── flowers/
        │   │   │   ├── FlowerSpecies.ts
        │   │   │   └── UserFlower.ts
        │   │   ├── gameTime.ts
        │   │   ├── index.ts
        │   │   ├── map/
        │   │   │   ├── Island.ts
        │   │   │   └── Tile.ts
        │   │   ├── social/
        │   │   │   ├── ClaimLink.ts
        │   │   │   ├── Friendship.ts
        │   │   │   └── UserClaim.ts
        │   │   ├── types.ts
        │   │   └── user/
        │   │       ├── Achievement.ts
        │   │       ├── User.ts
        │   │       ├── UserAchievement.ts
        │   │       └── UserItem.ts
        │   ├── stores/
        │   │   ├── auth.ts
        │   │   ├── breakpoints.ts
        │   │   ├── chat.ts
        │   │   ├── game.ts
        │   │   ├── modal.ts
        │   │   ├── theme.ts
        │   │   ├── time.ts
        │   │   └── ui.ts
        │   └── views/
        │       ├── AboutView.vue
        │       ├── ContactView.vue
        │       ├── HomeView.vue
        │       ├── WikiView.vue
        │       ├── admin/
        │       │   ├── DBManagerView.vue
        │       │   └── ManagerView.vue
        │       ├── errors/
        │       │   └── 404View.vue
        │       ├── game/
        │       │   ├── FloraDexView.vue
        │       │   ├── LandView.vue
        │       │   ├── LeaderboardView.vue
        │       │   ├── MarketView.vue
        │       │   └── UserProfileView.vue
        │       └── user/
        │           ├── LoginView.vue
        │           ├── SettingsView.vue
        │           ├── SignupView.vue
        │           └── SupportView.vue
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts
```
---
### File: .gitattributes
---

```text
* text=auto eol=lf

```

---
### File: .gitignore
---

```text
# VSCode 
.vscode/

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

**/.env

node_modules
.DS_Store
dist
dist-ssr
coverage
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

*.tsbuildinfo

.eslintcache

# Cypress
/cypress/videos/
/cypress/screenshots/

# Vitest
__screenshots__/

# Database & private
*.sqlite
src/private/**
```

---
### File: .prettierrc.json
---

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "singleQuote": true,
  "printWidth": 100
}

```

---
### File: README.md
---

```md
# 🌸 BloomScape

(first version of this README made with AI, errors may exist)

**BloomScape** is a relaxing and strategic online gardening simulation game. Manage your garden, cultivate rare species, and trade your harvests in a dynamic market within a closed economy.

## 🌟 Key Features

- 🌱 **Garden Management:** Plant, water, and grow your flowers in real-time. Careful, without care, they wither!
- 💎 **Rarity System:** Discover species of varying rarity, from common to legendary flowers.
- 💰 **Player-vs-Player Market:** Sell your finest harvests for **Sap** (virtual currency) or buy missing flowers for your collection: beware, species prices can fluctuate.
- 🏆 **Progression:** Level up to unlock new seeds and expand your land.
- 📖 **Floradex:** Complete your botanical collection album.

## ⚖️ License & Copyright

**© 2025 BloomScape. All rights reserved.**

This source code is made public **solely for educational, demonstration, and transparency purposes**.

- You are authorized to view the code to learn or audit its functionality.
- **You are NOT authorized** to copy, modify, distribute, sell, or use this code for a commercial or personal project (made public) without explicit written permission from the author.
- Some graphic assets are missing from the code, and are replaced by a placeholder.

---

_Made with ❤️ and fresh water by BloomScape._

```

---
### File: README_fr.md
---

```md
# 🌸 BloomScape

(première version de ce README faite avec IA, il peut y avoir des erreurs)

**BloomScape** est un jeu de simulation de jardinage en ligne relaxant et stratégique. Gérez votre jardin, cultivez des espèces rares et échangez vos récoltes sur un marché dynamique au sein d'une économie fermée.

## 🌟 Fonctionnalités Clés

- 🌱 **Gestion de Jardin :** Plantez, arrosez et faites grandir vos fleurs en temps réel. Attention, sans soin, elles fanent !
- 💎 **Système de Rareté :** Découvrez des espèces de différentes rareté, des plus communes aux fleurs légendaires.
- 💰 **Marché Joueur-contre-Joueur :** Vendez vos plus belles récoltes contre de la **Sève** (monnaie virtuelle) ou achetez les fleurs manquantes à votre collection : attention le prix d'une espèce peut évoluer.
- 🏆 **Progression :** Montez de niveau pour débloquer de nouvelles graines et agrandir votre terrain.
- 📖 **Floradéx :** Complétez votre album de collection botanique.

## ⚖️ License & Copyright

**© 2025 BloomScape. Tous droits réservés.**

Ce code source est rendu public **uniquement à des fins éducatives, de démonstration et de transparence**.

- Vous êtes autorisé à consulter le code pour apprendre ou auditer le fonctionnement.
- **Vous n'êtes PAS autorisé** à copier, modifier, distribuer, vendre ou utiliser ce code pour un projet commercial ou personnel (rendu publique) sans autorisation écrite explicite de l'auteur.
- Certains assets graphiques sont manquants dans le code, et sont remplacés par un placeholder.

---

_Fait avec ❤️ et de l'eau fraîche par BloomScape._

```

---
### File: env.d.ts
---

```ts
/// <reference types="vite/client" />

```

---
### File: index.html
---

```html
<!doctype html>
<html lang="en" data-theme="forest">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <title>BloomScape</title>

    <!-- GOOGLE-API INIT -->
    <script src="https://accounts.google.com/gsi/client" async defer></script>
  </head>

  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

```

---
### File: llm_contextify.md
---

```md
Project tree: 
```        ├── .gitattributes
        ├── .gitignore
        ├── .prettierrc.json
        ├── README.md
        ├── README_fr.md
        ├── bloomscape_roadmap.pdf
        ├── env.d.ts
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── public/
        │   ├── bloomscape_logo.png
        │   ├── bloomscape_market_presentation.wav
        │   ├── bloomscape_presentation.wav
        │   ├── bloomscape_text.png
        │   ├── favicon.ico
        │   ├── favicon.png
        │   └── textures/
        │       ├── land_bottom.png
        │       ├── land_grass_side.png
        │       ├── soil_center.png
        │       ├── soil_corner.png
        │       ├── soil_edge.png
        │       └── water/
        │           ├── 1side/
        │           │   ├── frame1.png
        │           │   ├── frame10.png
        │           │   ├── frame11.png
        │           │   ├── frame12.png
        │           │   ├── frame13.png
        │           │   ├── frame14.png
        │           │   ├── frame15.png
        │           │   ├── frame16.png
        │           │   ├── frame2.png
        │           │   ├── frame3.png
        │           │   ├── frame4.png
        │           │   ├── frame5.png
        │           │   ├── frame6.png
        │           │   ├── frame7.png
        │           │   ├── frame8.png
        │           │   └── frame9.png
        │           ├── 2sides/
        │           ├── 3sides/
        │           ├── 4sides/
        │           ├── open/
        │           │   ├── frame1.png
        │           │   ├── frame10.png
        │           │   ├── frame11.png
        │           │   ├── frame12.png
        │           │   ├── frame13.png
        │           │   ├── frame14.png
        │           │   ├── frame15.png
        │           │   ├── frame16.png
        │           │   ├── frame2.png
        │           │   ├── frame3.png
        │           │   ├── frame4.png
        │           │   ├── frame5.png
        │           │   ├── frame6.png
        │           │   ├── frame7.png
        │           │   ├── frame8.png
        │           │   └── frame9.png
        │           └── xcf_files/
        │               ├── frame1.xcf
        │               ├── frame10.xcf
        │               ├── frame11.xcf
        │               ├── frame12.xcf
        │               ├── frame13.xcf
        │               ├── frame14.xcf
        │               ├── frame15.xcf
        │               ├── frame16.xcf
        │               ├── frame2.xcf
        │               ├── frame3.xcf
        │               ├── frame4.xcf
        │               ├── frame5.xcf
        │               ├── frame6.xcf
        │               ├── frame7.xcf
        │               ├── frame8.xcf
        │               └── frame9.xcf
        ├── src/
        │   ├── App.vue
        │   ├── BaseApp.vue
        │   ├── assets/
        │   │   ├── globals.css
        │   │   └── main.css
        │   ├── components/
        │   │   ├── FlowerImage.vue
        │   │   ├── Footer.vue
        │   │   ├── Form.vue
        │   │   ├── GlobalModal.vue
        │   │   ├── Header.vue
        │   │   ├── HomeMarketTicker.vue
        │   │   ├── admin/
        │   │   │   ├── AdminSideBar.vue
        │   │   │   └── integrated_views/
        │   │   │       ├── AdminConfig.vue
        │   │   │       ├── AdminDatabase.vue
        │   │   │       ├── AdminLogs.vue
        │   │   │       ├── AdminModeration.vue
        │   │   │       ├── AdminOverview.vue
        │   │   │       ├── AdminReports.vue
        │   │   │       └── AdminUsers.vue
        │   │   ├── auth/
        │   │   │   ├── AuthModal.vue
        │   │   │   └── logic/
        │   │   │       └── useAuthModal.ts
        │   │   ├── buttons/
        │   │   │   ├── GoogleLoginBtn.vue
        │   │   │   └── ThemeSwitcher.vue
        │   │   ├── chat/
        │   │   │   └── GlobalChatDrawer.vue
        │   │   ├── game/
        │   │   │   ├── LandScene.vue
        │   │   │   ├── SideBar.vue
        │   │   │   ├── TopBar.vue
        │   │   │   ├── config/
        │   │   │   │   └── ItemRegistery.ts
        │   │   │   ├── logic/
        │   │   │   │   ├── AutoTilingUtils.ts
        │   │   │   │   ├── LandSceneManager.ts
        │   │   │   │   └── WorldElementsManager.ts
        │   │   │   └── modal_features/
        │   │   │       ├── InventoryInModal.vue
        │   │   │       ├── MarketInModal.vue
        │   │   │       └── TileManagerInModal.vue
        │   │   └── icons/
        │   │       ├── DiscordIcon.vue
        │   │       ├── InstagramIcon.vue
        │   │       └── navbar/
        │   │           ├── HomeIcon.vue
        │   │           ├── InventoryIcon.vue
        │   │           ├── MarketIcon.vue
        │   │           └── SettingsIcon.vue
        │   ├── main.ts
        │   ├── private/
        │   │   └── assets/
        │   │       ├── flowers/
        │   │       │   ├── golden_lotus/
        │   │       │   │   ├── icon/
        │   │       │   │   │   └── seed.png
        │   │       │   │   └── sprite/
        │   │       │   │       └── seed.png
        │   │       │   ├── heart_flower/
        │   │       │   │   └── icon/
        │   │       │   │       ├── growing1.png
        │   │       │   │       ├── growing2.png
        │   │       │   │       ├── mature.png
        │   │       │   │       ├── seed.png
        │   │       │   │       ├── sprout1.png
        │   │       │   │       ├── sprout2.png
        │   │       │   │       └── withered.png
        │   │       │   ├── night_shade/
        │   │       │   └── unknown.png
        │   │       └── items/
        │   ├── routes/
        │   │   ├── index.ts
        │   │   ├── routes_enum.ts
        │   │   └── scroll.ts
        │   ├── server/
        │   │   ├── _seedMarket.ts
        │   │   ├── api.ts
        │   │   ├── controllers/
        │   │   │   ├── AdminController.ts
        │   │   │   ├── AuthController.ts
        │   │   │   ├── ChatController.ts
        │   │   │   ├── GameController.ts
        │   │   │   ├── MarketController.ts
        │   │   │   ├── ReportController.ts
        │   │   │   └── UserController.ts
        │   │   ├── ext.ts
        │   │   └── index.ts
        │   ├── shared/
        │   │   ├── analytics/
        │   │   │   ├── FlowerDiscovery.ts
        │   │   │   ├── ModerationLog.ts
        │   │   │   └── UserReport.ts
        │   │   ├── chat/
        │   │   │   ├── Chat.ts
        │   │   │   ├── ChatMessage.ts
        │   │   │   └── ChatParticipant.ts
        │   │   ├── economy/
        │   │   │   ├── Item.ts
        │   │   │   ├── MarketHistory.ts
        │   │   │   ├── MarketListing.ts
        │   │   │   ├── MarketStat.ts
        │   │   │   └── SapPurchase.ts
        │   │   ├── flowers/
        │   │   │   ├── FlowerSpecies.ts
        │   │   │   └── UserFlower.ts
        │   │   ├── gameTime.ts
        │   │   ├── index.ts
        │   │   ├── map/
        │   │   │   ├── Island.ts
        │   │   │   └── Tile.ts
        │   │   ├── social/
        │   │   │   ├── ClaimLink.ts
        │   │   │   ├── Friendship.ts
        │   │   │   └── UserClaim.ts
        │   │   ├── types.ts
        │   │   └── user/
        │   │       ├── Achievement.ts
        │   │       ├── User.ts
        │   │       ├── UserAchievement.ts
        │   │       └── UserItem.ts
        │   ├── stores/
        │   │   ├── auth.ts
        │   │   ├── breakpoints.ts
        │   │   ├── chat.ts
        │   │   ├── game.ts
        │   │   ├── modal.ts
        │   │   ├── theme.ts
        │   │   ├── time.ts
        │   │   └── ui.ts
        │   └── views/
        │       ├── AboutView.vue
        │       ├── ContactView.vue
        │       ├── HomeView.vue
        │       ├── WikiView.vue
        │       ├── admin/
        │       │   ├── DBManagerView.vue
        │       │   └── ManagerView.vue
        │       ├── errors/
        │       │   └── 404View.vue
        │       ├── game/
        │       │   ├── FloraDexView.vue
        │       │   ├── LandView.vue
        │       │   ├── LeaderboardView.vue
        │       │   ├── MarketView.vue
        │       │   └── UserProfileView.vue
        │       └── user/
        │           ├── LoginView.vue
        │           ├── SettingsView.vue
        │           ├── SignupView.vue
        │           └── SupportView.vue
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts

```

---
### File: package-lock.json
---

```json
{
  "name": "bloomscape",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "bloomscape",
      "version": "0.0.0",
      "dependencies": {
        "@tailwindcss/vite": "^4.1.17",
        "@vueuse/components": "^13.6.0",
        "@vueuse/core": "^13.6.0",
        "@vueuse/integrations": "^13.8.0",
        "axios": "^1.11.0",
        "bcrypt": "^6.0.0",
        "bcryptjs": "^3.0.2",
        "better-sqlite3": "^12.2.0",
        "chart.js": "^4.5.1",
        "cheerio": "^1.1.2",
        "cookie-session": "^2.1.0",
        "date-fns": "^4.1.0",
        "dotenv": "^17.2.0",
        "express": "^5.1.0",
        "fuse.js": "^7.1.0",
        "google-auth-library": "^10.5.0",
        "pinia": "^3.0.3",
        "playwright": "^1.55.0",
        "remult": "^3.0.5",
        "slugify": "^1.6.6",
        "sqlite3": "^5.1.7",
        "tailwindcss": "^4.1.17",
        "three": "^0.181.2",
        "ts-node": "^10.9.2",
        "tsx": "^4.20.3",
        "vue": "^3.5.18",
        "vue-chartjs": "^5.3.3",
        "vue-router": "^4.5.1",
        "vue3-google-signin": "^2.1.1"
      },
      "devDependencies": {
        "@tsconfig/node22": "^22.0.2",
        "@types/bcrypt": "^5.0.2",
        "@types/better-sqlite3": "^7.6.13",
        "@types/cookie-session": "^2.0.49",
        "@types/express": "^5.0.3",
        "@types/jsdom": "^21.1.7",
        "@types/node": "^22.15.32",
        "@vitejs/plugin-vue": "^6.0.2",
        "@vitejs/plugin-vue-jsx": "^5.1.2",
        "@vue/test-utils": "^2.4.6",
        "@vue/tsconfig": "^0.7.0",
        "daisyui": "^5.0.43",
        "jsdom": "^26.1.0",
        "npm-run-all2": "^8.0.4",
        "prettier": "3.5.3",
        "typescript": "~5.8.0",
        "vite": "^7.0.0",
        "vite-plugin-vue-devtools": "^7.7.7",
        "vue-tsc": "^2.2.12"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@antfu/utils": {
      "version": "0.7.10",
      "resolved": "https://registry.npmjs.org/@antfu/utils/-/utils-0.7.10.tgz",
      "integrity": "sha512-+562v9k4aI80m1+VuMHehNJWLOFjBnXn3tdOitzD0il5b7smkSBal4+a3oKiQTbrwMmN/TBUMDvbdoWDehgOww==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@asamuzakjp/css-color": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/css-color/-/css-color-3.2.0.tgz",
      "integrity": "sha512-K1A6z8tS3XsmCMM86xoWdn7Fkdn9m6RSVtocUrJYIwZnFVkng/PvkEoWtOWmP+Scc6saYWHWZYbndEEXxl24jw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@csstools/css-calc": "^2.1.3",
        "@csstools/css-color-parser": "^3.0.9",
        "@csstools/css-parser-algorithms": "^3.0.4",
        "@csstools/css-tokenizer": "^3.0.3",
        "lru-cache": "^10.4.3"
      }
    },
    "node_modules/@asamuzakjp/css-color/node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.27.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.27.3.tgz",
      "integrity": "sha512-fXSwMQqitTGeHLBC08Eq5yXz2m37E4pJX1qAU1+2cNedz/ifv/bVXft90VeSav5nFO61EcNgwr0aJxbyPaWBPg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.27.3"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.28.5.tgz",
      "integrity": "sha512-q3WC4JfdODypvxArsJQROfupPBq9+lMwjKq7C33GhbFYJsufD0yd/ziwD+hJucLeWsnFPWZjsU2DNFqBPE7jwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.27.3",
        "@babel/helper-member-expression-to-functions": "^7.28.5",
        "@babel/helper-optimise-call-expression": "^7.27.1",
        "@babel/helper-replace-supers": "^7.27.1",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1",
        "@babel/traverse": "^7.28.5",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.28.5.tgz",
      "integrity": "sha512-cwM7SBRZcPCLgl8a7cY0soT1SptSzAlMH39vwiRpOQkJlh53r5hdHwLSCZpQdVLT39sZt+CRpNwYG4Y2v77atg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.27.1.tgz",
      "integrity": "sha512-URMGH08NzYFhubNSGJrpUEphGKQwMQYBySzat5cAByY1/YgIRkULnIy3tAMeszlL/so2HbeilYloUmSpd7GdVw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.27.1.tgz",
      "integrity": "sha512-7EHz6qDZc8RYS5ElPoShMheWvEgERonFCs7IAonWLLUTXW59DP14bCZt89/GKyreYn8g3S83m21FelHKbeDCKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-member-expression-to-functions": "^7.27.1",
        "@babel/helper-optimise-call-expression": "^7.27.1",
        "@babel/traverse": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.27.1.tgz",
      "integrity": "sha512-Tub4ZKEXqbPjXgWLl2+3JpQAYBJ8+ikpQ2Ocj/q/r0LwE3UhENh7EUabyHjz2kCEsrRY83ew2DQdHluuiDQFzg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-proposal-decorators": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-decorators/-/plugin-proposal-decorators-7.28.0.tgz",
      "integrity": "sha512-zOiZqvANjWDUaUS9xMxbMcK/Zccztbe/6ikvUXaG9nsPH3w6qh5UaPGAnirI/WhIbZ8m3OHU0ReyPrknG+ZKeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.27.1",
        "@babel/helper-plugin-utils": "^7.27.1",
        "@babel/plugin-syntax-decorators": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-decorators": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-decorators/-/plugin-syntax-decorators-7.27.1.tgz",
      "integrity": "sha512-YMq8Z87Lhl8EGkmb0MwYkt36QnxC+fzCgrl66ereamPlYToRpIk5nUjKUY3QKLWq8mwUB1BgbeXcTJhZOCDg5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-attributes": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-attributes/-/plugin-syntax-import-attributes-7.27.1.tgz",
      "integrity": "sha512-oFT0FrKHgF53f4vOsZGi2Hh3I35PfSmVs4IBFLFj4dnafP+hIWDLg3VyKmUHfLoLHlyxY4C7DGtmHuJgn+IGww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-meta": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
      "integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-jsx": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.27.1.tgz",
      "integrity": "sha512-y8YTNIeKoyhGd9O0Jiyzyyqk8gdjnumGTQPsz0xOZOQ2RmkVJeZ1vmmfIvFEKqucBG6axJGBZDE/7iI5suUI/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-typescript": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.27.1.tgz",
      "integrity": "sha512-xfYCBMxveHrRMnAWl1ZlPXOZjzkN82THFvLhQhFXFt81Z5HnN+EtUkZhv/zcKpmT3fzmWZB0ywiBrbC3vogbwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typescript": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.28.5.tgz",
      "integrity": "sha512-x2Qa+v/CuEoX7Dr31iAfr0IhInrVOWZU/2vJMJ00FOR/2nM0BcBEclpaf9sWCDc+v5e9dMrhSH8/atq/kX7+bA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.27.3",
        "@babel/helper-create-class-features-plugin": "^7.28.5",
        "@babel/helper-plugin-utils": "^7.27.1",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.27.1",
        "@babel/plugin-syntax-typescript": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@cspotcode/source-map-support/node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@csstools/color-helpers": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/@csstools/color-helpers/-/color-helpers-5.1.0.tgz",
      "integrity": "sha512-S11EXWJyy0Mz5SYvRmY8nJYTFFd1LCNV+7cXyAgQtOOuzb4EsgfqDufL+9esx72/eLhsRdGZwaldu/h+E4t4BA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT-0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@csstools/css-calc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@csstools/css-calc/-/css-calc-2.1.4.tgz",
      "integrity": "sha512-3N8oaj+0juUw/1H3YwmDDJXCgTB1gKU6Hc/bB502u9zR0q2vd786XJH9QfrKIEgFlZmhZiq6epXl4rHqhzsIgQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@csstools/css-parser-algorithms": "^3.0.5",
        "@csstools/css-tokenizer": "^3.0.4"
      }
    },
    "node_modules/@csstools/css-color-parser": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@csstools/css-color-parser/-/css-color-parser-3.1.0.tgz",
      "integrity": "sha512-nbtKwh3a6xNVIp/VRuXV64yTKnb1IjTAEEh3irzS+HkKjAOYLTGNb9pmVNntZ8iVBHcWDA2Dof0QtPgFI1BaTA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@csstools/color-helpers": "^5.1.0",
        "@csstools/css-calc": "^2.1.4"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@csstools/css-parser-algorithms": "^3.0.5",
        "@csstools/css-tokenizer": "^3.0.4"
      }
    },
    "node_modules/@csstools/css-parser-algorithms": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@csstools/css-parser-algorithms/-/css-parser-algorithms-3.0.5.tgz",
      "integrity": "sha512-DaDeUkXZKjdGhgYaHNJTV9pV7Y9B3b644jCLs9Upc3VeNGg6LWARAT6O+Q+/COo+2gg/bM5rhpMAtf70WqfBdQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@csstools/css-tokenizer": "^3.0.4"
      }
    },
    "node_modules/@csstools/css-tokenizer": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@csstools/css-tokenizer/-/css-tokenizer-3.0.4.tgz",
      "integrity": "sha512-Vd/9EVDiu6PPJt9yAh6roZP6El1xHrdvIVGjyBsHR0RYwNHgL7FJPyIIW4fANJNG6FtyZfvlRPpFI4ZM/lubvw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.12.tgz",
      "integrity": "sha512-Hhmwd6CInZ3dwpuGTF8fJG6yoWmsToE+vYgD4nytZVxcu1ulHpUQRAB1UJ8+N1Am3Mz4+xOByoQoSZf4D+CpkA==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.12.tgz",
      "integrity": "sha512-VJ+sKvNA/GE7Ccacc9Cha7bpS8nyzVv0jdVgwNDaR4gDMC/2TTRc33Ip8qrNYUcpkOHUT5OZ0bUcNNVZQ9RLlg==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.12.tgz",
      "integrity": "sha512-6AAmLG7zwD1Z159jCKPvAxZd4y/VTO0VkprYy+3N2FtJ8+BQWFXU+OxARIwA46c5tdD9SsKGZ/1ocqBS/gAKHg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.12.tgz",
      "integrity": "sha512-5jbb+2hhDHx5phYR2By8GTWEzn6I9UqR11Kwf22iKbNpYrsmRB18aX/9ivc5cabcUiAT/wM+YIZ6SG9QO6a8kg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.12.tgz",
      "integrity": "sha512-N3zl+lxHCifgIlcMUP5016ESkeQjLj/959RxxNYIthIg+CQHInujFuXeWbWMgnTo4cp5XVHqFPmpyu9J65C1Yg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.12.tgz",
      "integrity": "sha512-HQ9ka4Kx21qHXwtlTUVbKJOAnmG1ipXhdWTmNXiPzPfWKpXqASVcWdnf2bnL73wgjNrFXAa3yYvBSd9pzfEIpA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.12.tgz",
      "integrity": "sha512-gA0Bx759+7Jve03K1S0vkOu5Lg/85dou3EseOGUes8flVOGxbhDDh/iZaoek11Y8mtyKPGF3vP8XhnkDEAmzeg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.12.tgz",
      "integrity": "sha512-TGbO26Yw2xsHzxtbVFGEXBFH0FRAP7gtcPE7P5yP7wGy7cXK2oO7RyOhL5NLiqTlBh47XhmIUXuGciXEqYFfBQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.12.tgz",
      "integrity": "sha512-lPDGyC1JPDou8kGcywY0YILzWlhhnRjdof3UlcoqYmS9El818LLfJJc3PXXgZHrHCAKs/Z2SeZtDJr5MrkxtOw==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.12.tgz",
      "integrity": "sha512-8bwX7a8FghIgrupcxb4aUmYDLp8pX06rGh5HqDT7bB+8Rdells6mHvrFHHW2JAOPZUbnjUpKTLg6ECyzvas2AQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.12.tgz",
      "integrity": "sha512-0y9KrdVnbMM2/vG8KfU0byhUN+EFCny9+8g202gYqSSVMonbsCfLjUO+rCci7pM0WBEtz+oK/PIwHkzxkyharA==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.12.tgz",
      "integrity": "sha512-h///Lr5a9rib/v1GGqXVGzjL4TMvVTv+s1DPoxQdz7l/AYv6LDSxdIwzxkrPW438oUXiDtwM10o9PmwS/6Z0Ng==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.12.tgz",
      "integrity": "sha512-iyRrM1Pzy9GFMDLsXn1iHUm18nhKnNMWscjmp4+hpafcZjrr2WbT//d20xaGljXDBYHqRcl8HnxbX6uaA/eGVw==",
      "cpu": [
        "mips64el"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.12.tgz",
      "integrity": "sha512-9meM/lRXxMi5PSUqEXRCtVjEZBGwB7P/D4yT8UG/mwIdze2aV4Vo6U5gD3+RsoHXKkHCfSxZKzmDssVlRj1QQA==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.12.tgz",
      "integrity": "sha512-Zr7KR4hgKUpWAwb1f3o5ygT04MzqVrGEGXGLnj15YQDJErYu/BGg+wmFlIDOdJp0PmB0lLvxFIOXZgFRrdjR0w==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.12.tgz",
      "integrity": "sha512-MsKncOcgTNvdtiISc/jZs/Zf8d0cl/t3gYWX8J9ubBnVOwlk65UIEEvgBORTiljloIWnBzLs4qhzPkJcitIzIg==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.12.tgz",
      "integrity": "sha512-uqZMTLr/zR/ed4jIGnwSLkaHmPjOjJvnm6TVVitAa08SLS9Z0VM8wIRx7gWbJB5/J54YuIMInDquWyYvQLZkgw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.12.tgz",
      "integrity": "sha512-xXwcTq4GhRM7J9A8Gv5boanHhRa/Q9KLVmcyXHCTaM4wKfIpWkdXiMog/KsnxzJ0A1+nD+zoecuzqPmCRyBGjg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.12.tgz",
      "integrity": "sha512-Ld5pTlzPy3YwGec4OuHh1aCVCRvOXdH8DgRjfDy/oumVovmuSzWfnSJg+VtakB9Cm0gxNO9BzWkj6mtO1FMXkQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.12.tgz",
      "integrity": "sha512-fF96T6KsBo/pkQI950FARU9apGNTSlZGsv1jZBAlcLL1MLjLNIWPBkj5NlSz8aAzYKg+eNqknrUJ24QBybeR5A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.12.tgz",
      "integrity": "sha512-MZyXUkZHjQxUvzK7rN8DJ3SRmrVrke8ZyRusHlP+kuwqTcfWLyqMOE3sScPPyeIXN/mDJIfGXvcMqCgYKekoQw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.25.12.tgz",
      "integrity": "sha512-rm0YWsqUSRrjncSXGA7Zv78Nbnw4XL6/dzr20cyrQf7ZmRcsovpcRBdhD43Nuk3y7XIoW2OxMVvwuRvk9XdASg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.12.tgz",
      "integrity": "sha512-3wGSCDyuTHQUzt0nV7bocDy72r2lI33QL3gkDNGkod22EsYl04sMf0qLb8luNKTOmgF/eDEDP5BFNwoBKH441w==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.12.tgz",
      "integrity": "sha512-rMmLrur64A7+DKlnSuwqUdRKyd3UE7oPJZmnljqEptesKM8wx9J8gx5u0+9Pq0fQQW8vqeKebwNXdfOyP+8Bsg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.12.tgz",
      "integrity": "sha512-HkqnmmBoCbCwxUKKNPBixiWDGCpQGVsrQfJoVGYLPT41XWF8lHuE5N6WhVia2n4o5QK5M4tYr21827fNhi4byQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.12.tgz",
      "integrity": "sha512-alJC0uCZpTFrSL0CCDjcgleBXPnCrEAhTBILpeAp7M/OFgoqtAetfBzX0xM00MUsVVPpVjlPuMbREqnZCXaTnA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@gar/promisify": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@gar/promisify/-/promisify-1.1.3.tgz",
      "integrity": "sha512-k2Ty1JcVojjJFwrg/ThKi2ujJ7XNLYaFGNB/bWT9wGR+oSMJHMa5w+CUq6p/pVrKeNNgA7pCqEcjSnHVoqJQFw==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@kurkle/color": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/@kurkle/color/-/color-0.3.4.tgz",
      "integrity": "sha512-M5UknZPHRu3DEDWoipU6sE8PdkZ6Z/S+v4dD+Ke8IaNlpdSQah50lz1KtcFBa2vsdOnwbbnxJwVM4wty6udA5w==",
      "license": "MIT"
    },
    "node_modules/@npmcli/fs": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-1.1.1.tgz",
      "integrity": "sha512-8KG5RD0GVP4ydEzRn/I4BNDuxDtqVbOdm8675T49OIG/NGhaK0pjPX7ZcDlvKYbA+ulvVK3ztfcF4uBdOxuJbQ==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "@gar/promisify": "^1.0.1",
        "semver": "^7.3.5"
      }
    },
    "node_modules/@npmcli/fs/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@npmcli/move-file": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-1.1.2.tgz",
      "integrity": "sha512-1SUf/Cg2GzGDyaf15aR9St9TWlb+XvbZXWpDx8YKs7MLzMH/BCeopv+y9vzrzgkfykCGuWOlSu3mZhj2+FQcrg==",
      "deprecated": "This functionality has been moved to @npmcli/fs",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "mkdirp": "^1.0.4",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@one-ini/wasm": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@one-ini/wasm/-/wasm-0.1.1.tgz",
      "integrity": "sha512-XuySG1E38YScSJoMlqovLru4KTUNSjgVTIjyh7qMX6aNN5HY5Ct5LhRJdxO79JtTzKfzV/bnWpz+zquYrISsvw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@polka/url": {
      "version": "1.0.0-next.29",
      "resolved": "https://registry.npmjs.org/@polka/url/-/url-1.0.0-next.29.tgz",
      "integrity": "sha512-wwQAWhWSuHaag8c4q/KN/vCoeOJYshAIvMQwD4GpSb3OiZklFfvAgmj0VCBBImRpuF/aFgIRzllXlVX93Jevww==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.50.tgz",
      "integrity": "sha512-5e76wQiQVeL1ICOZVUg4LSOVYg9jyhGCin+icYozhsUzM+fHE7kddi1bdiE0jwVqTfkjba3jUFbEkoC9WkdvyA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/pluginutils": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.3.0.tgz",
      "integrity": "sha512-5EdhGZtnu3V88ces7s53hhfK5KSASnJZv8Lulpc04cWO3REESroJXg73DFsOmgbU2BhwV0E20bu2IDZb3VKW4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-walker": "^2.0.2",
        "picomatch": "^4.0.2"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.53.3.tgz",
      "integrity": "sha512-mRSi+4cBjrRLoaal2PnqH82Wqyb+d3HsPUN/W+WslCXsZsyHa9ZeQQX/pQsZaVIWDkPcpV6jJ+3KLbTbgnwv8w==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.53.3.tgz",
      "integrity": "sha512-CbDGaMpdE9sh7sCmTrTUyllhrg65t6SwhjlMJsLr+J8YjFuPmCEjbBSx4Z/e4SmDyH3aB5hGaJUP2ltV/vcs4w==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.53.3.tgz",
      "integrity": "sha512-Nr7SlQeqIBpOV6BHHGZgYBuSdanCXuw09hon14MGOLGmXAFYjx1wNvquVPmpZnl0tLjg25dEdr4IQ6GgyToCUA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.53.3.tgz",
      "integrity": "sha512-DZ8N4CSNfl965CmPktJ8oBnfYr3F8dTTNBQkRlffnUarJ2ohudQD17sZBa097J8xhQ26AwhHJ5mvUyQW8ddTsQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.53.3.tgz",
      "integrity": "sha512-yMTrCrK92aGyi7GuDNtGn2sNW+Gdb4vErx4t3Gv/Tr+1zRb8ax4z8GWVRfr3Jw8zJWvpGHNpss3vVlbF58DZ4w==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.53.3.tgz",
      "integrity": "sha512-lMfF8X7QhdQzseM6XaX0vbno2m3hlyZFhwcndRMw8fbAGUGL3WFMBdK0hbUBIUYcEcMhVLr1SIamDeuLBnXS+Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.53.3.tgz",
      "integrity": "sha512-k9oD15soC/Ln6d2Wv/JOFPzZXIAIFLp6B+i14KhxAfnq76ajt0EhYc5YPeX6W1xJkAdItcVT+JhKl1QZh44/qw==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.53.3.tgz",
      "integrity": "sha512-vTNlKq+N6CK/8UktsrFuc+/7NlEYVxgaEgRXVUVK258Z5ymho29skzW1sutgYjqNnquGwVUObAaxae8rZ6YMhg==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.53.3.tgz",
      "integrity": "sha512-RGrFLWgMhSxRs/EWJMIFM1O5Mzuz3Xy3/mnxJp/5cVhZ2XoCAxJnmNsEyeMJtpK+wu0FJFWz+QF4mjCA7AUQ3w==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.53.3.tgz",
      "integrity": "sha512-kASyvfBEWYPEwe0Qv4nfu6pNkITLTb32p4yTgzFCocHnJLAHs+9LjUu9ONIhvfT/5lv4YS5muBHyuV84epBo/A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.53.3.tgz",
      "integrity": "sha512-JiuKcp2teLJwQ7vkJ95EwESWkNRFJD7TQgYmCnrPtlu50b4XvT5MOmurWNrCj3IFdyjBQ5p9vnrX4JM6I8OE7g==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.53.3.tgz",
      "integrity": "sha512-EoGSa8nd6d3T7zLuqdojxC20oBfNT8nexBbB/rkxgKj5T5vhpAQKKnD+h3UkoMuTyXkP5jTjK/ccNRmQrPNDuw==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.53.3.tgz",
      "integrity": "sha512-4s+Wped2IHXHPnAEbIB0YWBv7SDohqxobiiPA1FIWZpX+w9o2i4LezzH/NkFUl8LRci/8udci6cLq+jJQlh+0g==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.53.3.tgz",
      "integrity": "sha512-68k2g7+0vs2u9CxDt5ktXTngsxOQkSEV/xBbwlqYcUrAVh6P9EgMZvFsnHy4SEiUl46Xf0IObWVbMvPrr2gw8A==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.53.3.tgz",
      "integrity": "sha512-VYsFMpULAz87ZW6BVYw3I6sWesGpsP9OPcyKe8ofdg9LHxSbRMd7zrVrr5xi/3kMZtpWL/wC+UIJWJYVX5uTKg==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.53.3.tgz",
      "integrity": "sha512-3EhFi1FU6YL8HTUJZ51imGJWEX//ajQPfqWLI3BQq4TlvHy4X0MOr5q3D2Zof/ka0d5FNdPwZXm3Yyib/UEd+w==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.53.3.tgz",
      "integrity": "sha512-eoROhjcc6HbZCJr+tvVT8X4fW3/5g/WkGvvmwz/88sDtSJzO7r/blvoBDgISDiCjDRZmHpwud7h+6Q9JxFwq1Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.53.3.tgz",
      "integrity": "sha512-OueLAWgrNSPGAdUdIjSWXw+u/02BRTcnfw9PN41D2vq/JSEPnJnVuBgw18VkN8wcd4fjUs+jFHVM4t9+kBSNLw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.53.3.tgz",
      "integrity": "sha512-GOFuKpsxR/whszbF/bzydebLiXIHSgsEUp6M0JI8dWvi+fFa1TD6YQa4aSZHtpmh2/uAlj/Dy+nmby3TJ3pkTw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.53.3.tgz",
      "integrity": "sha512-iah+THLcBJdpfZ1TstDFbKNznlzoxa8fmnFYK4V67HvmuNYkVdAywJSoteUszvBQ9/HqN2+9AZghbajMsFT+oA==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.53.3.tgz",
      "integrity": "sha512-J9QDiOIZlZLdcot5NXEepDkstocktoVjkaKUtqzgzpt2yWjGlbYiKyp05rWwk4nypbYUNoFAztEgixoLaSETkg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.53.3.tgz",
      "integrity": "sha512-UhTd8u31dXadv0MopwGgNOBpUVROFKWVQgAg5N1ESyCz8AuBcMqm4AuTjrwgQKGDfoFuz02EuMRHQIw/frmYKQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@sec-ant/readable-stream": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@sec-ant/readable-stream/-/readable-stream-0.4.1.tgz",
      "integrity": "sha512-831qok9r2t8AlxLko40y2ebgSDhenenCatLVeW/uBtnHPyhHOvG0C7TvfgecV+wHzIm5KUICgzmVpWS+IMEAeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@sindresorhus/merge-streams": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/merge-streams/-/merge-streams-4.0.0.tgz",
      "integrity": "sha512-tlqY9xq5ukxTUZBmoOp+m61cqwQD5pHJtFY3Mn8CA8ps6yghLH/Hw8UPdqg4OLmFW3IFlcXnQNmo/dh8HzXYIQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.17.tgz",
      "integrity": "sha512-csIkHIgLb3JisEFQ0vxr2Y57GUNYh447C8xzwj89U/8fdW8LhProdxvnVH6U8M2Y73QKiTIH+LWbK3V2BBZsAg==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.17"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.17.tgz",
      "integrity": "sha512-F0F7d01fmkQhsTjXezGBLdrl1KresJTcI3DB8EkScCldyKp3Msz4hub4uyYaVnk88BAS1g5DQjjF6F5qczheLA==",
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.17",
        "@tailwindcss/oxide-darwin-arm64": "4.1.17",
        "@tailwindcss/oxide-darwin-x64": "4.1.17",
        "@tailwindcss/oxide-freebsd-x64": "4.1.17",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.17",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.17",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.17",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.17",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.17",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.17",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.17",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.17"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.17.tgz",
      "integrity": "sha512-BMqpkJHgOZ5z78qqiGE6ZIRExyaHyuxjgrJ6eBO5+hfrfGkuya0lYfw8fRHG77gdTjWkNWEEm+qeG2cDMxArLQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.17.tgz",
      "integrity": "sha512-EquyumkQweUBNk1zGEU/wfZo2qkp/nQKRZM8bUYO0J+Lums5+wl2CcG1f9BgAjn/u9pJzdYddHWBiFXJTcxmOg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.17.tgz",
      "integrity": "sha512-gdhEPLzke2Pog8s12oADwYu0IAw04Y2tlmgVzIN0+046ytcgx8uZmCzEg4VcQh+AHKiS7xaL8kGo/QTiNEGRog==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.17.tgz",
      "integrity": "sha512-hxGS81KskMxML9DXsaXT1H0DyA+ZBIbyG/sSAjWNe2EDl7TkPOBI42GBV3u38itzGUOmFfCzk1iAjDXds8Oh0g==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.17.tgz",
      "integrity": "sha512-k7jWk5E3ldAdw0cNglhjSgv501u7yrMf8oeZ0cElhxU6Y2o7f8yqelOp3fhf7evjIS6ujTI3U8pKUXV2I4iXHQ==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.17.tgz",
      "integrity": "sha512-HVDOm/mxK6+TbARwdW17WrgDYEGzmoYayrCgmLEw7FxTPLcp/glBisuyWkFz/jb7ZfiAXAXUACfyItn+nTgsdQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.17.tgz",
      "integrity": "sha512-HvZLfGr42i5anKtIeQzxdkw/wPqIbpeZqe7vd3V9vI3RQxe3xU1fLjss0TjyhxWcBaipk7NYwSrwTwK1hJARMg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.17.tgz",
      "integrity": "sha512-M3XZuORCGB7VPOEDH+nzpJ21XPvK5PyjlkSFkFziNHGLc5d6g3di2McAAblmaSUNl8IOmzYwLx9NsE7bplNkwQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.17.tgz",
      "integrity": "sha512-k7f+pf9eXLEey4pBlw+8dgfJHY4PZ5qOUFDyNf7SI6lHjQ9Zt7+NcscjpwdCEbYi6FI5c2KDTDWyf2iHcCSyyQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.17.tgz",
      "integrity": "sha512-cEytGqSSoy7zK4JRWiTCx43FsKP/zGr0CsuMawhH67ONlH+T79VteQeJQRO/X7L0juEUA8ZyuYikcRBf0vsxhg==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.6.0",
        "@emnapi/runtime": "^1.6.0",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.0.7",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.17.tgz",
      "integrity": "sha512-JU5AHr7gKbZlOGvMdb4722/0aYbU+tN6lv1kONx0JK2cGsh7g148zVWLM0IKR3NeKLv+L90chBVYcJ8uJWbC9A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.17.tgz",
      "integrity": "sha512-SKWM4waLuqx0IH+FMDUw6R66Hu4OuTALFgnleKbqhgGU30DY20NORZMZUKgLRjQXNN2TLzKvh48QXTig4h4bGw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.1.17.tgz",
      "integrity": "sha512-4+9w8ZHOiGnpcGI6z1TVVfWaX/koK7fKeSYF3qlYg2xpBtbteP2ddBxiarL+HVgfSJGeK5RIxRQmKm4rTJJAwA==",
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.1.17",
        "@tailwindcss/oxide": "4.1.17",
        "tailwindcss": "4.1.17"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7"
      }
    },
    "node_modules/@tootallnate/once": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",
      "integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.12.tgz",
      "integrity": "sha512-UCYBaeFvM11aU2y3YPZ//O5Rhj+xKyzy7mvcIoAjASbigy8mHMryP5cK7dgjlz2hWxh1g5pLw084E0a/wlUSFQ==",
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "license": "MIT"
    },
    "node_modules/@tsconfig/node22": {
      "version": "22.0.5",
      "resolved": "https://registry.npmjs.org/@tsconfig/node22/-/node22-22.0.5.tgz",
      "integrity": "sha512-hLf2ld+sYN/BtOJjHUWOk568dvjFQkHnLNa6zce25GIH+vxKfvTgm3qpaH6ToF5tu/NN0IH66s+Bb5wElHrLcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/bcrypt": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/@types/bcrypt/-/bcrypt-5.0.2.tgz",
      "integrity": "sha512-6atioO8Y75fNcbmj0G7UjI9lXN2pQ/IGJ2FWT4a/btd0Lk9lQalHLKhkgKVZ3r+spnmWUKfbMi1GEe9wyHQfNQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/better-sqlite3": {
      "version": "7.6.13",
      "resolved": "https://registry.npmjs.org/@types/better-sqlite3/-/better-sqlite3-7.6.13.tgz",
      "integrity": "sha512-NMv9ASNARoKksWtsq/SHakpYAYnhBrQgGD8zkLYk/jaK8jUGn08CfEdTRgYhMypUQAfzSP8W6gNLe0q19/t4VA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/cookie-session": {
      "version": "2.0.49",
      "resolved": "https://registry.npmjs.org/@types/cookie-session/-/cookie-session-2.0.49.tgz",
      "integrity": "sha512-4E/bBjlqLhU5l4iGPR+NkVJH593hpNsT4dC3DJDr+ODm6Qpe13kZQVkezRIb+TYDXaBMemS3yLQ+0leba3jlkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/express": "*",
        "@types/keygrip": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-5.0.5.tgz",
      "integrity": "sha512-LuIQOcb6UmnF7C1PCFmEU1u2hmiHL43fgFQX67sN3H4Z+0Yk0Neo++mFsBjhOAuLzvlQeqAAkeDOZrJs9rzumQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^5.0.0",
        "@types/serve-static": "^1"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.0.tgz",
      "integrity": "sha512-jnHMsrd0Mwa9Cf4IdOzbz543y4XJepXrbia2T4b6+spXC2We3t1y6K44D3mR8XMFSXMCf3/l7rCgddfx7UNVBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/jsdom": {
      "version": "21.1.7",
      "resolved": "https://registry.npmjs.org/@types/jsdom/-/jsdom-21.1.7.tgz",
      "integrity": "sha512-yOriVnggzrnQ3a9OKOCxaVuSug3w3/SbOj5i7VwXWZEyUNl3bLF9V3MfxGbZKuwqJOQyRfqXyROBB1CoZLFWzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/tough-cookie": "*",
        "parse5": "^7.0.0"
      }
    },
    "node_modules/@types/keygrip": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@types/keygrip/-/keygrip-1.0.6.tgz",
      "integrity": "sha512-lZuNAY9xeJt7Bx4t4dx0rYCDqGPW8RXhQZK1td7d4H6E9zYbLoOtjBvfwdTKpsyxQI/2jv+armjX/RW+ZNpXOQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/mime": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz",
      "integrity": "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "22.19.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.19.1.tgz",
      "integrity": "sha512-LCCV0HdSZZZb34qifBsyWlUmok6W7ouER+oQIGBScS8EsZsQbrtFTUrDX4hOl+CS6p7cnNC4td+qrSVGSCTUfQ==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-eOunJqu0K1923aExK6y8p6fsihYEn/BYuQ4g0CxAAgFc4b/ZLN4CrsRZ55srTdqoiLzU2B2evC+apEIxprEzkQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "1.15.10",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.10.tgz",
      "integrity": "sha512-tRs1dB+g8Itk72rlSI2ZrW6vZg0YrLI81iQSTkMmOqnqCaNr/8Ek4VwWcN5vZgCYWbg/JJSGBlUaYGAOP73qBw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*",
        "@types/send": "<1"
      }
    },
    "node_modules/@types/serve-static/node_modules/@types/send": {
      "version": "0.17.6",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.6.tgz",
      "integrity": "sha512-Uqt8rPBE8SY0RK8JB1EzVOIZ32uqy8HwdxCnoCOsYrvnswqmFZ/k+9Ikidlk/ImhsdvBsloHbAlewb2IEBV/Og==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/mime": "^1",
        "@types/node": "*"
      }
    },
    "node_modules/@types/tough-cookie": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/@types/tough-cookie/-/tough-cookie-4.0.5.tgz",
      "integrity": "sha512-/Ad8+nIOV7Rl++6f1BdKxFSMgmoqEoYbHRpPcx3JEfv8VRsQe9Z4mCXeJBzxs7mbHY/XOZZuXlRNfhpVPbs6ZA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/web-bluetooth": {
      "version": "0.0.21",
      "resolved": "https://registry.npmjs.org/@types/web-bluetooth/-/web-bluetooth-0.0.21.tgz",
      "integrity": "sha512-oIQLCGWtcFZy2JW77j9k8nHzAOpqMHLQejDA48XXMWH6tjCQHz5RCFz1bzsmROyL6PUm+LLnUiI4BCn221inxA==",
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-vue": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue/-/plugin-vue-6.0.2.tgz",
      "integrity": "sha512-iHmwV3QcVGGvSC1BG5bZ4z6iwa1SOpAPWmnjOErd4Ske+lZua5K9TtAVdx0gMBClJ28DViCbSmZitjWZsWO3LA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "1.0.0-beta.50"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^5.0.0 || ^6.0.0 || ^7.0.0",
        "vue": "^3.2.25"
      }
    },
    "node_modules/@vitejs/plugin-vue-jsx": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue-jsx/-/plugin-vue-jsx-5.1.2.tgz",
      "integrity": "sha512-3a2BOryRjG/Iih87x87YXz5c8nw27eSlHytvSKYfp8ZIsp5+FgFQoKeA7k2PnqWpjJrv6AoVTMnvmuKUXb771A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-syntax-typescript": "^7.27.1",
        "@babel/plugin-transform-typescript": "^7.28.5",
        "@rolldown/pluginutils": "^1.0.0-beta.50",
        "@vue/babel-plugin-jsx": "^2.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^5.0.0 || ^6.0.0 || ^7.0.0",
        "vue": "^3.0.0"
      }
    },
    "node_modules/@volar/language-core": {
      "version": "2.4.15",
      "resolved": "https://registry.npmjs.org/@volar/language-core/-/language-core-2.4.15.tgz",
      "integrity": "sha512-3VHw+QZU0ZG9IuQmzT68IyN4hZNd9GchGPhbD9+pa8CVv7rnoOZwo7T8weIbrRmihqy3ATpdfXFnqRrfPVK6CA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@volar/source-map": "2.4.15"
      }
    },
    "node_modules/@volar/source-map": {
      "version": "2.4.15",
      "resolved": "https://registry.npmjs.org/@volar/source-map/-/source-map-2.4.15.tgz",
      "integrity": "sha512-CPbMWlUN6hVZJYGcU/GSoHu4EnCHiLaXI9n8c9la6RaI9W5JHX+NqG+GSQcB0JdC2FIBLdZJwGsfKyBB71VlTg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@volar/typescript": {
      "version": "2.4.15",
      "resolved": "https://registry.npmjs.org/@volar/typescript/-/typescript-2.4.15.tgz",
      "integrity": "sha512-2aZ8i0cqPGjXb4BhkMsPYDkkuc2ZQ6yOpqwAuNwUoncELqoy5fRgOQtLR9gB0g902iS0NAkvpIzs27geVyVdPg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@volar/language-core": "2.4.15",
        "path-browserify": "^1.0.1",
        "vscode-uri": "^3.0.8"
      }
    },
    "node_modules/@vue/babel-helper-vue-transform-on": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@vue/babel-helper-vue-transform-on/-/babel-helper-vue-transform-on-2.0.1.tgz",
      "integrity": "sha512-uZ66EaFbnnZSYqYEyplWvn46GhZ1KuYSThdT68p+am7MgBNbQ3hphTL9L+xSIsWkdktwhPYLwPgVWqo96jDdRA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vue/babel-plugin-jsx": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@vue/babel-plugin-jsx/-/babel-plugin-jsx-2.0.1.tgz",
      "integrity": "sha512-a8CaLQjD/s4PVdhrLD/zT574ZNPnZBOY+IhdtKWRB4HRZ0I2tXBi5ne7d9eCfaYwp5gU5+4KIyFTV1W1YL9xZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-plugin-utils": "^7.27.1",
        "@babel/plugin-syntax-jsx": "^7.27.1",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.4",
        "@babel/types": "^7.28.4",
        "@vue/babel-helper-vue-transform-on": "2.0.1",
        "@vue/babel-plugin-resolve-type": "2.0.1",
        "@vue/shared": "^3.5.22"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        }
      }
    },
    "node_modules/@vue/babel-plugin-resolve-type": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@vue/babel-plugin-resolve-type/-/babel-plugin-resolve-type-2.0.1.tgz",
      "integrity": "sha512-ybwgIuRGRRBhOU37GImDoWQoz+TlSqap65qVI6iwg/J7FfLTLmMf97TS7xQH9I7Qtr/gp161kYVdhr1ZMraSYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-plugin-utils": "^7.27.1",
        "@babel/parser": "^7.28.4",
        "@vue/compiler-sfc": "^3.5.22"
      },
      "funding": {
        "url": "https://github.com/sponsors/sxzz"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@vue/compiler-core": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.5.25.tgz",
      "integrity": "sha512-vay5/oQJdsNHmliWoZfHPoVZZRmnSWhug0BYT34njkYTPqClh3DNWLkZNJBVSjsNMrg0CCrBfoKkjZQPM/QVUw==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@vue/shared": "3.5.25",
        "entities": "^4.5.0",
        "estree-walker": "^2.0.2",
        "source-map-js": "^1.2.1"
      }
    },
    "node_modules/@vue/compiler-dom": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.5.25.tgz",
      "integrity": "sha512-4We0OAcMZsKgYoGlMjzYvaoErltdFI2/25wqanuTu+S4gismOTRTBPi4IASOjxWdzIwrYSjnqONfKvuqkXzE2Q==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-core": "3.5.25",
        "@vue/shared": "3.5.25"
      }
    },
    "node_modules/@vue/compiler-sfc": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.5.25.tgz",
      "integrity": "sha512-PUgKp2rn8fFsI++lF2sO7gwO2d9Yj57Utr5yEsDf3GNaQcowCLKL7sf+LvVFvtJDXUp/03+dC6f2+LCv5aK1ag==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@vue/compiler-core": "3.5.25",
        "@vue/compiler-dom": "3.5.25",
        "@vue/compiler-ssr": "3.5.25",
        "@vue/shared": "3.5.25",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.21",
        "postcss": "^8.5.6",
        "source-map-js": "^1.2.1"
      }
    },
    "node_modules/@vue/compiler-ssr": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.5.25.tgz",
      "integrity": "sha512-ritPSKLBcParnsKYi+GNtbdbrIE1mtuFEJ4U1sWeuOMlIziK5GtOL85t5RhsNy4uWIXPgk+OUdpnXiTdzn8o3A==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-dom": "3.5.25",
        "@vue/shared": "3.5.25"
      }
    },
    "node_modules/@vue/compiler-vue2": {
      "version": "2.7.16",
      "resolved": "https://registry.npmjs.org/@vue/compiler-vue2/-/compiler-vue2-2.7.16.tgz",
      "integrity": "sha512-qYC3Psj9S/mfu9uVi5WvNZIzq+xnXMhOwbTFKKDD7b1lhpnn71jXSFdTQ+WsIEk0ONCd7VV2IMm7ONl6tbQ86A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "de-indent": "^1.0.2",
        "he": "^1.2.0"
      }
    },
    "node_modules/@vue/devtools-api": {
      "version": "7.7.9",
      "resolved": "https://registry.npmjs.org/@vue/devtools-api/-/devtools-api-7.7.9.tgz",
      "integrity": "sha512-kIE8wvwlcZ6TJTbNeU2HQNtaxLx3a84aotTITUuL/4bzfPxzajGBOoqjMhwZJ8L9qFYDU/lAYMEEm11dnZOD6g==",
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-kit": "^7.7.9"
      }
    },
    "node_modules/@vue/devtools-core": {
      "version": "7.7.9",
      "resolved": "https://registry.npmjs.org/@vue/devtools-core/-/devtools-core-7.7.9.tgz",
      "integrity": "sha512-48jrBSwG4GVQRvVeeXn9p9+dlx+ISgasM7SxZZKczseohB0cBz+ITKr4YbLWjmJdy45UHL7UMPlR4Y0CWTRcSQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-kit": "^7.7.9",
        "@vue/devtools-shared": "^7.7.9",
        "mitt": "^3.0.1",
        "nanoid": "^5.1.0",
        "pathe": "^2.0.3",
        "vite-hot-client": "^2.0.4"
      },
      "peerDependencies": {
        "vue": "^3.0.0"
      }
    },
    "node_modules/@vue/devtools-core/node_modules/nanoid": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-5.1.6.tgz",
      "integrity": "sha512-c7+7RQ+dMB5dPwwCp4ee1/iV/q2P6aK1mTZcfr1BTuVlyW9hJYiMPybJCcnBlQtuSmTIWNeazm/zqNoZSSElBg==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.js"
      },
      "engines": {
        "node": "^18 || >=20"
      }
    },
    "node_modules/@vue/devtools-kit": {
      "version": "7.7.9",
      "resolved": "https://registry.npmjs.org/@vue/devtools-kit/-/devtools-kit-7.7.9.tgz",
      "integrity": "sha512-PyQ6odHSgiDVd4hnTP+aDk2X4gl2HmLDfiyEnn3/oV+ckFDuswRs4IbBT7vacMuGdwY/XemxBoh302ctbsptuA==",
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-shared": "^7.7.9",
        "birpc": "^2.3.0",
        "hookable": "^5.5.3",
        "mitt": "^3.0.1",
        "perfect-debounce": "^1.0.0",
        "speakingurl": "^14.0.1",
        "superjson": "^2.2.2"
      }
    },
    "node_modules/@vue/devtools-shared": {
      "version": "7.7.9",
      "resolved": "https://registry.npmjs.org/@vue/devtools-shared/-/devtools-shared-7.7.9.tgz",
      "integrity": "sha512-iWAb0v2WYf0QWmxCGy0seZNDPdO3Sp5+u78ORnyeonS6MT4PC7VPrryX2BpMJrwlDeaZ6BD4vP4XKjK0SZqaeA==",
      "license": "MIT",
      "dependencies": {
        "rfdc": "^1.4.1"
      }
    },
    "node_modules/@vue/language-core": {
      "version": "2.2.12",
      "resolved": "https://registry.npmjs.org/@vue/language-core/-/language-core-2.2.12.tgz",
      "integrity": "sha512-IsGljWbKGU1MZpBPN+BvPAdr55YPkj2nB/TBNGNC32Vy2qLG25DYu/NBN2vNtZqdRbTRjaoYrahLrToim2NanA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@volar/language-core": "2.4.15",
        "@vue/compiler-dom": "^3.5.0",
        "@vue/compiler-vue2": "^2.7.16",
        "@vue/shared": "^3.5.0",
        "alien-signals": "^1.0.3",
        "minimatch": "^9.0.3",
        "muggle-string": "^0.4.1",
        "path-browserify": "^1.0.1"
      },
      "peerDependencies": {
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@vue/language-core/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@vue/reactivity": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.5.25.tgz",
      "integrity": "sha512-5xfAypCQepv4Jog1U4zn8cZIcbKKFka3AgWHEFQeK65OW+Ys4XybP6z2kKgws4YB43KGpqp5D/K3go2UPPunLA==",
      "license": "MIT",
      "dependencies": {
        "@vue/shared": "3.5.25"
      }
    },
    "node_modules/@vue/runtime-core": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.5.25.tgz",
      "integrity": "sha512-Z751v203YWwYzy460bzsYQISDfPjHTl+6Zzwo/a3CsAf+0ccEjQ8c+0CdX1WsumRTHeywvyUFtW6KvNukT/smA==",
      "license": "MIT",
      "dependencies": {
        "@vue/reactivity": "3.5.25",
        "@vue/shared": "3.5.25"
      }
    },
    "node_modules/@vue/runtime-dom": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.5.25.tgz",
      "integrity": "sha512-a4WrkYFbb19i9pjkz38zJBg8wa/rboNERq3+hRRb0dHiJh13c+6kAbgqCPfMaJ2gg4weWD3APZswASOfmKwamA==",
      "license": "MIT",
      "dependencies": {
        "@vue/reactivity": "3.5.25",
        "@vue/runtime-core": "3.5.25",
        "@vue/shared": "3.5.25",
        "csstype": "^3.1.3"
      }
    },
    "node_modules/@vue/server-renderer": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.5.25.tgz",
      "integrity": "sha512-UJaXR54vMG61i8XNIzTSf2Q7MOqZHpp8+x3XLGtE3+fL+nQd+k7O5+X3D/uWrnQXOdMw5VPih+Uremcw+u1woQ==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-ssr": "3.5.25",
        "@vue/shared": "3.5.25"
      },
      "peerDependencies": {
        "vue": "3.5.25"
      }
    },
    "node_modules/@vue/shared": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.5.25.tgz",
      "integrity": "sha512-AbOPdQQnAnzs58H2FrrDxYj/TJfmeS2jdfEEhgiKINy+bnOANmVizIEgq1r+C5zsbs6l1CCQxtcj71rwNQ4jWg==",
      "license": "MIT"
    },
    "node_modules/@vue/test-utils": {
      "version": "2.4.6",
      "resolved": "https://registry.npmjs.org/@vue/test-utils/-/test-utils-2.4.6.tgz",
      "integrity": "sha512-FMxEjOpYNYiFe0GkaHsnJPXFHxQ6m4t8vI/ElPGpMWxZKpmRvQ33OIrvRXemy6yha03RxhOlQuy+gZMC3CQSow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "js-beautify": "^1.14.9",
        "vue-component-type-helpers": "^2.0.0"
      }
    },
    "node_modules/@vue/tsconfig": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/@vue/tsconfig/-/tsconfig-0.7.0.tgz",
      "integrity": "sha512-ku2uNz5MaZ9IerPPUyOHzyjhXoX2kVJaVf7hL315DC17vS6IiZRmmCPfggNbU16QTvM80+uYYy3eYJB59WCtvg==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "typescript": "5.x",
        "vue": "^3.4.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        },
        "vue": {
          "optional": true
        }
      }
    },
    "node_modules/@vueuse/components": {
      "version": "13.9.0",
      "resolved": "https://registry.npmjs.org/@vueuse/components/-/components-13.9.0.tgz",
      "integrity": "sha512-0DDFpjG3hEEK+3YgSzE/OzOGqpo/KmxcXWzW2YdmgahZvaoUdegn68GmbdcHRJE7CH55dDj13Cz47iN8QoI3jQ==",
      "license": "MIT",
      "dependencies": {
        "@vueuse/core": "13.9.0",
        "@vueuse/shared": "13.9.0"
      },
      "peerDependencies": {
        "vue": "^3.5.0"
      }
    },
    "node_modules/@vueuse/core": {
      "version": "13.9.0",
      "resolved": "https://registry.npmjs.org/@vueuse/core/-/core-13.9.0.tgz",
      "integrity": "sha512-ts3regBQyURfCE2BcytLqzm8+MmLlo5Ln/KLoxDVcsZ2gzIwVNnQpQOL/UKV8alUqjSZOlpFZcRNsLRqj+OzyA==",
      "license": "MIT",
      "dependencies": {
        "@types/web-bluetooth": "^0.0.21",
        "@vueuse/metadata": "13.9.0",
        "@vueuse/shared": "13.9.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "vue": "^3.5.0"
      }
    },
    "node_modules/@vueuse/integrations": {
      "version": "13.9.0",
      "resolved": "https://registry.npmjs.org/@vueuse/integrations/-/integrations-13.9.0.tgz",
      "integrity": "sha512-SDobKBbPIOe0cVL7QxMzGkuUGHvWTdihi9zOrrWaWUgFKe15cwEcwfWmgrcNzjT6kHnNmWuTajPHoIzUjYNYYQ==",
      "license": "MIT",
      "dependencies": {
        "@vueuse/core": "13.9.0",
        "@vueuse/shared": "13.9.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "async-validator": "^4",
        "axios": "^1",
        "change-case": "^5",
        "drauu": "^0.4",
        "focus-trap": "^7",
        "fuse.js": "^7",
        "idb-keyval": "^6",
        "jwt-decode": "^4",
        "nprogress": "^0.2",
        "qrcode": "^1.5",
        "sortablejs": "^1",
        "universal-cookie": "^7 || ^8",
        "vue": "^3.5.0"
      },
      "peerDependenciesMeta": {
        "async-validator": {
          "optional": true
        },
        "axios": {
          "optional": true
        },
        "change-case": {
          "optional": true
        },
        "drauu": {
          "optional": true
        },
        "focus-trap": {
          "optional": true
        },
        "fuse.js": {
          "optional": true
        },
        "idb-keyval": {
          "optional": true
        },
        "jwt-decode": {
          "optional": true
        },
        "nprogress": {
          "optional": true
        },
        "qrcode": {
          "optional": true
        },
        "sortablejs": {
          "optional": true
        },
        "universal-cookie": {
          "optional": true
        }
      }
    },
    "node_modules/@vueuse/metadata": {
      "version": "13.9.0",
      "resolved": "https://registry.npmjs.org/@vueuse/metadata/-/metadata-13.9.0.tgz",
      "integrity": "sha512-1AFRvuiGphfF7yWixZa0KwjYH8ulyjDCC0aFgrGRz8+P4kvDFSdXLVfTk5xAN9wEuD1J6z4/myMoYbnHoX07zg==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@vueuse/shared": {
      "version": "13.9.0",
      "resolved": "https://registry.npmjs.org/@vueuse/shared/-/shared-13.9.0.tgz",
      "integrity": "sha512-e89uuTLMh0U5cZ9iDpEI2senqPGfbPRTHM/0AaQkcxnpqjkZqDYP8rpfm7edOz8s+pOCOROEy1PIveSW8+fL5g==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "vue": "^3.5.0"
      }
    },
    "node_modules/abbrev": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-2.0.0.tgz",
      "integrity": "sha512-6/mh1E2u2YgEsCHdY0Yx5oW+61gZU+1vXaoiHHrpKeuRNNgFvS+/jrwHiQhB5apAf5oB7UB7E19ol2R2LKH8hQ==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.4",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz",
      "integrity": "sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==",
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
      "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/agentkeepalive": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.6.0.tgz",
      "integrity": "sha512-kja8j7PjmncONqaTsB8fQ+wE2mSU2DJ9D4XKoJ5PFWIdRMa6SLSN1ff4mOr4jCbfRSsxR4keIiySJU0N9T5hIQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "humanize-ms": "^1.2.1"
      },
      "engines": {
        "node": ">= 8.0.0"
      }
    },
    "node_modules/aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/alien-signals": {
      "version": "1.0.13",
      "resolved": "https://registry.npmjs.org/alien-signals/-/alien-signals-1.0.13.tgz",
      "integrity": "sha512-OGj9yyTnJEttvzhTUWuscOvtqxq5vrhF7vL9oS0xJ2mK0ItPYP1/y+vCFebfxoEyAz0++1AIwJ5CMr+Fk3nDmg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/aproba": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-2.1.0.tgz",
      "integrity": "sha512-tLIEcj5GuR2RSTnxNKdkK0dJ/GrC7P38sUkiDmDuHfsHmbagTFAxDVIBltoklXEVIQ/f14IL8IMJ5pn9Hez1Ew==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/are-we-there-yet": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-3.0.1.tgz",
      "integrity": "sha512-QZW4EDmGwlYur0Yyf/b2uGucHQMa8aFUP7eu9ddR73vvhFyt4V0Vl3QHPcTNJ8l6qYOBdxgXdnBXQrHilfRQBg==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "delegates": "^1.0.0",
        "readable-stream": "^3.6.0"
      },
      "engines": {
        "node": "^12.13.0 || ^14.15.0 || >=16.0.0"
      }
    },
    "node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "license": "MIT"
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/axios": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.13.2.tgz",
      "integrity": "sha512-VPk9ebNqPcy5lRGuSlKx752IlDatOjT9paPlm8A7yOuW2Fbvp4X3JznJtT4f0GzGLLiWE9W8onz51SqLYwzGaA==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.15.6",
        "form-data": "^4.0.4",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "license": "MIT"
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.8.31",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.8.31.tgz",
      "integrity": "sha512-a28v2eWrrRWPpJSzxc+mKwm0ZtVx/G8SepdQZDArnXYU/XS+IF6mp8aB/4E+hH1tyGCoDo3KlUCdlSxGDsRkAw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/bcrypt": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-6.0.0.tgz",
      "integrity": "sha512-cU8v/EGSrnH+HnxV2z0J7/blxH8gq7Xh2JFT6Aroax7UohdmiJJlxApMxtKfuI7z68NvvVcmR78k2LbT6efhRg==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "node-addon-api": "^8.3.0",
        "node-gyp-build": "^4.8.4"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/bcrypt/node_modules/node-addon-api": {
      "version": "8.5.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-8.5.0.tgz",
      "integrity": "sha512-/bRZty2mXUIFY/xU5HLvveNHlswNJej+RnxBjOMkidWfwZzgTbPG1E3K5TOxRLOR+5hX7bSofy8yf1hZevMS8A==",
      "license": "MIT",
      "engines": {
        "node": "^18 || ^20 || >= 21"
      }
    },
    "node_modules/bcryptjs": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-3.0.3.tgz",
      "integrity": "sha512-GlF5wPWnSa/X5LKM1o0wz0suXIINz1iHRLvTS+sLyi7XPbe5ycmYI3DlZqVGZZtDgl4DmasFg7gOB3JYbphV5g==",
      "license": "BSD-3-Clause",
      "bin": {
        "bcrypt": "bin/bcrypt"
      }
    },
    "node_modules/better-sqlite3": {
      "version": "12.4.6",
      "resolved": "https://registry.npmjs.org/better-sqlite3/-/better-sqlite3-12.4.6.tgz",
      "integrity": "sha512-gaYt9yqTbQ1iOxLpJA8FPR5PiaHP+jlg8I5EX0Rs2KFwNzhBsF40KzMZS5FwelY7RG0wzaucWdqSAJM3uNCPCg==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "bindings": "^1.5.0",
        "prebuild-install": "^7.1.1"
      },
      "engines": {
        "node": "20.x || 22.x || 23.x || 24.x || 25.x"
      }
    },
    "node_modules/bignumber.js": {
      "version": "9.3.1",
      "resolved": "https://registry.npmjs.org/bignumber.js/-/bignumber.js-9.3.1.tgz",
      "integrity": "sha512-Ko0uX15oIUS7wJ3Rb30Fs6SkVbLmPBAKdlm7q9+ak9bbIeFf0MwuBsQV6z7+X768/cHsfg+WlysDWJcmthjsjQ==",
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/bindings": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
      "license": "MIT",
      "dependencies": {
        "file-uri-to-path": "1.0.0"
      }
    },
    "node_modules/birpc": {
      "version": "2.8.0",
      "resolved": "https://registry.npmjs.org/birpc/-/birpc-2.8.0.tgz",
      "integrity": "sha512-Bz2a4qD/5GRhiHSwj30c/8kC8QGj12nNDwz3D4ErQ4Xhy35dsSDvF+RA/tWpjyU0pdGtSDiEk6B5fBGE1qNVhw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/bl": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
      "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
      "license": "MIT",
      "dependencies": {
        "buffer": "^5.5.0",
        "inherits": "^2.0.4",
        "readable-stream": "^3.4.0"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.1.tgz",
      "integrity": "sha512-nfDwkulwiZYQIGwxdy0RUmowMhKcFVcYXUU7m4QlKYim1rUtg83xm2yjZ40QjDuc291AJjjeSc9b++AWHSgSHw==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.3",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.7.0",
        "on-finished": "^2.4.1",
        "qs": "^6.14.0",
        "raw-body": "^3.0.1",
        "type-is": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/body-parser/node_modules/iconv-lite": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.0.tgz",
      "integrity": "sha512-cf6L2Ds3h57VVmkZe+Pn+5APsT7FpqJtEhhieDCvrE2MK5Qk9MyffgQyuxQTm6BChfeZNtcOLHp9IcWRVcIcBQ==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
      "license": "ISC"
    },
    "node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.0",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.0.tgz",
      "integrity": "sha512-tbydkR/CxfMwelN0vwdP/pLkDwyAASZ+VfWm4EOwlB6SWhx1sYnWLqo8N5j0rAzPfzfRaxt0mM/4wPU/Su84RQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.8.25",
        "caniuse-lite": "^1.0.30001754",
        "electron-to-chromium": "^1.5.249",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.1.4"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.1.13"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/bundle-name": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/bundle-name/-/bundle-name-4.1.0.tgz",
      "integrity": "sha512-tjwM5exMg6BGRI+kNmTntNsvdZS1X8BFYS6tnJ2hdH0kVxM6/eVZ2xy+FqStSWvYmtfFMDLIxurorHwDKfDz5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "run-applescript": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/cacache": {
      "version": "15.3.0",
      "resolved": "https://registry.npmjs.org/cacache/-/cacache-15.3.0.tgz",
      "integrity": "sha512-VVdYzXEn+cnbXpFgWs5hTT7OScegHVmLhJIR8Ufqk3iFD6A6j5iSX1KuBTfNEv4tdJWE2PzA6IVFtcLC7fN9wQ==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "@npmcli/fs": "^1.0.0",
        "@npmcli/move-file": "^1.0.1",
        "chownr": "^2.0.0",
        "fs-minipass": "^2.0.0",
        "glob": "^7.1.4",
        "infer-owner": "^1.0.4",
        "lru-cache": "^6.0.0",
        "minipass": "^3.1.1",
        "minipass-collect": "^1.0.2",
        "minipass-flush": "^1.0.5",
        "minipass-pipeline": "^1.2.2",
        "mkdirp": "^1.0.3",
        "p-map": "^4.0.0",
        "promise-inflight": "^1.0.1",
        "rimraf": "^3.0.2",
        "ssri": "^8.0.1",
        "tar": "^6.0.2",
        "unique-filename": "^1.1.1"
      },
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/cacache/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/cacache/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/cacache/node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/cacache/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/cacache/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cacache/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001757",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001757.tgz",
      "integrity": "sha512-r0nnL/I28Zi/yjk1el6ilj27tKcdjLsNqAOZr0yVjWPrSQyHgKI2INaEWw21bAQSv2LXRt1XuCS/GomNpWOxsQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chart.js": {
      "version": "4.5.1",
      "resolved": "https://registry.npmjs.org/chart.js/-/chart.js-4.5.1.tgz",
      "integrity": "sha512-GIjfiT9dbmHRiYi6Nl2yFCq7kkwdkp1W/lp2J99rX0yo9tgJGn3lKQATztIjb5tVtevcBtIdICNWqlq5+E8/Pw==",
      "license": "MIT",
      "dependencies": {
        "@kurkle/color": "^0.3.0"
      },
      "engines": {
        "pnpm": ">=8"
      }
    },
    "node_modules/cheerio": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-1.1.2.tgz",
      "integrity": "sha512-IkxPpb5rS/d1IiLbHMgfPuS0FgiWTtFIm/Nj+2woXDLTZ7fOT2eqzgYbdMlLweqlHbsZjxEChoVK+7iph7jyQg==",
      "license": "MIT",
      "dependencies": {
        "cheerio-select": "^2.1.0",
        "dom-serializer": "^2.0.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.2.2",
        "encoding-sniffer": "^0.2.1",
        "htmlparser2": "^10.0.0",
        "parse5": "^7.3.0",
        "parse5-htmlparser2-tree-adapter": "^7.1.0",
        "parse5-parser-stream": "^7.1.2",
        "undici": "^7.12.0",
        "whatwg-mimetype": "^4.0.0"
      },
      "engines": {
        "node": ">=20.18.1"
      },
      "funding": {
        "url": "https://github.com/cheeriojs/cheerio?sponsor=1"
      }
    },
    "node_modules/cheerio-select": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cheerio-select/-/cheerio-select-2.1.0.tgz",
      "integrity": "sha512-9v9kG0LvzrlcungtnJtpGNxY+fzECQKhK4EGJX2vByejiMX84MFNQw4UxPJl3bFbTMw+Dfs37XaIkCwTZfLh4g==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "boolbase": "^1.0.0",
        "css-select": "^5.1.0",
        "css-what": "^6.1.0",
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/chownr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/color-support": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "color-support": "bin.js"
      }
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-10.0.1.tgz",
      "integrity": "sha512-y4Mg2tXshplEbSGzx7amzPwKKOCGuoSRP/CjEdwwk0FOGlUbq6lKuoyDZTNZkmxHdJtp54hdfY/JUrdL7Xfdug==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/config-chain": {
      "version": "1.1.13",
      "resolved": "https://registry.npmjs.org/config-chain/-/config-chain-1.1.13.tgz",
      "integrity": "sha512-qj+f8APARXHrM0hraqXYb2/bOVSV4PvJQlNZ/DVj0QrmNM2q2euizkeuVckQ57J+W0mRH6Hvi+k50M4Jul2VRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ini": "^1.3.4",
        "proto-list": "~1.2.1"
      }
    },
    "node_modules/console-control-strings": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
      "integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/content-disposition": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.1.tgz",
      "integrity": "sha512-oIXISMynqSqm241k6kcQ5UwttDILMK4BiurCfGEREw6+X9jkkpEe5T9FZaApyLGGOnFuyMWZpdolTXMtvEJ08Q==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-session": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/cookie-session/-/cookie-session-2.1.1.tgz",
      "integrity": "sha512-ji3kym/XZaFVew1+tIZk5ZLp9Z/fLv9rK1aZmpug0FsgE7Cu3ZDrUdRo7FT9vFjMYfNimrrUHJzywDwT7XEFlg==",
      "license": "MIT",
      "dependencies": {
        "cookies": "0.9.1",
        "debug": "3.2.7",
        "on-headers": "~1.1.0",
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/cookie-session/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cookies": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/cookies/-/cookies-0.9.1.tgz",
      "integrity": "sha512-TG2hpqe4ELx54QER/S3HQ9SRVnQnGBtKUz5bLQWtYAQ+o6GpgMs6sYUvaiJjVxb+UXwhRhAEP3m7LbsIZ77Hmw==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "keygrip": "~1.1.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/copy-anything": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/copy-anything/-/copy-anything-4.0.5.tgz",
      "integrity": "sha512-7Vv6asjS4gMOuILabD3l739tsaxFQmC+a7pLZm02zyvs8p977bL3zEgq3yDk5rn9B0PbYgIv++jmHcuUab4RhA==",
      "license": "MIT",
      "dependencies": {
        "is-what": "^5.2.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/mesqueeb"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-select": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-5.2.2.tgz",
      "integrity": "sha512-TizTzUddG/xYLA3NXodFM0fSbNizXjOKhqiQQwvhlspadZokn1KDy0NZFS0wuEubIYAV5/c1/lAr0TaaFXEXzw==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "boolbase": "^1.0.0",
        "css-what": "^6.1.0",
        "domhandler": "^5.0.2",
        "domutils": "^3.0.1",
        "nth-check": "^2.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/css-what": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-6.2.2.tgz",
      "integrity": "sha512-u/O3vwbptzhMs3L1fQE82ZSLHQQfto5gyZzwteVIEyeaY5Fc7R4dapF/BvRoSYFeqfBk4m0V1Vafq5Pjv25wvA==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">= 6"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/cssstyle": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-4.6.0.tgz",
      "integrity": "sha512-2z+rWdzbbSZv6/rhtvzvqeZQHrBaqgogqt85sqFNbabZOuFbCVFb8kPeEtZjiKkbrm395irpNKiYeFeLiQnFPg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/css-color": "^3.2.0",
        "rrweb-cssom": "^0.8.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "license": "MIT"
    },
    "node_modules/daisyui": {
      "version": "5.5.5",
      "resolved": "https://registry.npmjs.org/daisyui/-/daisyui-5.5.5.tgz",
      "integrity": "sha512-ekvI93ZkWIJoCOtDl0D2QMxnWvTejk9V5nWBqRv+7t0xjiBXqAK5U6o6JE2RPvlIC3EqwNyUoIZSdHX9MZK3nw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/saadeghi/daisyui?sponsor=1"
      }
    },
    "node_modules/data-uri-to-buffer": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/data-uri-to-buffer/-/data-uri-to-buffer-4.0.1.tgz",
      "integrity": "sha512-0R9ikRb668HB7QDxT1vkpuUBtqc53YyAwMwGeUFKRojY/NWKvdZ+9UYtRfGmhqNbRkTSVpMbmyhXipFFv2cb/A==",
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/data-urls": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-5.0.0.tgz",
      "integrity": "sha512-ZYP5VBHshaDAiVZxjbRVcFJpc+4xGgT0bK3vzy1HLN8jTO975HEbuYzZJcHoQEY5K1a0z8YayJkyVETa08eNTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-mimetype": "^4.0.0",
        "whatwg-url": "^14.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/date-fns": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-4.1.0.tgz",
      "integrity": "sha512-Ukq0owbQXxa/U3EGtsdVBkR1w7KOQ5gIBqdH2hkvknzZPYvBxb/aa6E8L7tmjFtkwZBu3UXBbjIgPo/Ez4xaNg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/kossnocorp"
      }
    },
    "node_modules/de-indent": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/de-indent/-/de-indent-1.0.2.tgz",
      "integrity": "sha512-e/1zu3xH5MQryN2zdVaF0OrdNLUbvWxzMbi+iNA6Bky7l1RoP8a2fIbRocyHclXt/arDrrR6lL3TqFD9pMQTsg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz",
      "integrity": "sha512-YpgQiITW3JXGntzdUmyUR1V812Hn8T1YVXhCu+wO3OpS4eU9l4YdD3qjyiKdV6mvV29zapkMeD390UVEf2lkUg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/decompress-response": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz",
      "integrity": "sha512-aW35yZM6Bb/4oJlZncMH2LCoZtJXTRxES17vE3hoRiowU2kWHaJKFkSBDnDR+cm9J+9QhXmREyIfv0pji9ejCQ==",
      "license": "MIT",
      "dependencies": {
        "mimic-response": "^3.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/default-browser": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/default-browser/-/default-browser-5.4.0.tgz",
      "integrity": "sha512-XDuvSq38Hr1MdN47EDvYtx3U0MTqpCEn+F6ft8z2vYDzMrvQhVp0ui9oQdqW3MvK3vqUETglt1tVGgjLuJ5izg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bundle-name": "^4.1.0",
        "default-browser-id": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/default-browser-id": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/default-browser-id/-/default-browser-id-5.0.1.tgz",
      "integrity": "sha512-x1VCxdX4t+8wVfd1so/9w+vQ4vx7lKd2Qp5tDRutErwmR85OgmfX7RlLRMWafRMY7hbEiXIbudNrjOAPa/hL8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/define-lazy-prop": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-3.0.0.tgz",
      "integrity": "sha512-N+MeXYoqr3pOgn8xfyRPREN7gHakLYjhsHhWGT3fWAiL4IkAt0iDw14QiiEm2bE30c5XX5q0FtAA3CK5f9/BUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/delegates": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
      "integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/diff": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
      "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dom-serializer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz",
      "integrity": "sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==",
      "license": "MIT",
      "dependencies": {
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.2",
        "entities": "^4.2.0"
      },
      "funding": {
        "url": "https://github.com/cheeriojs/dom-serializer?sponsor=1"
      }
    },
    "node_modules/domelementtype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz",
      "integrity": "sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ],
      "license": "BSD-2-Clause"
    },
    "node_modules/domhandler": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz",
      "integrity": "sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "domelementtype": "^2.3.0"
      },
      "engines": {
        "node": ">= 4"
      },
      "funding": {
        "url": "https://github.com/fb55/domhandler?sponsor=1"
      }
    },
    "node_modules/domutils": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-3.2.2.tgz",
      "integrity": "sha512-6kZKyUajlDuqlHKVX1w7gyslj9MPIXzIFiz/rGu35uC1wMi+kMhQwGhl4lt9unC9Vb9INnY9Z3/ZA3+FhASLaw==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "dom-serializer": "^2.0.0",
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3"
      },
      "funding": {
        "url": "https://github.com/fb55/domutils?sponsor=1"
      }
    },
    "node_modules/dotenv": {
      "version": "17.2.3",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.2.3.tgz",
      "integrity": "sha512-JVUnt+DUIzu87TABbhPmNfVdBDt18BLOWjMUFJMSi/Qqg7NTYtabbvSNJGOJ7afbRuv9D/lngizHtP7QyLQ+9w==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "license": "MIT"
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/editorconfig": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/editorconfig/-/editorconfig-1.0.4.tgz",
      "integrity": "sha512-L9Qe08KWTlqYMVvMcTIvMAdl1cDUubzRNYL+WfA4bLDMHe4nemKkpmYzkznE1FwLKu0EEmy6obgQKzMJrg4x9Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@one-ini/wasm": "0.1.1",
        "commander": "^10.0.0",
        "minimatch": "9.0.1",
        "semver": "^7.5.3"
      },
      "bin": {
        "editorconfig": "bin/editorconfig"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/editorconfig/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.260",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.260.tgz",
      "integrity": "sha512-ov8rBoOBhVawpzdre+Cmz4FB+y66Eqrk6Gwqd8NGxuhv99GQ8XqMAr351KEkOt7gukXWDg6gJWEMKgL2RLMPtA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/encoding": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
      "integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "iconv-lite": "^0.6.2"
      }
    },
    "node_modules/encoding-sniffer": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/encoding-sniffer/-/encoding-sniffer-0.2.1.tgz",
      "integrity": "sha512-5gvq20T6vfpekVtqrYQsSCFZ1wEg5+wW0/QaZMWkFr6BqD3NfKs0rLCx4rrVlSWJeZb5NBJgVLswK/w2MWU+Gw==",
      "license": "MIT",
      "dependencies": {
        "iconv-lite": "^0.6.3",
        "whatwg-encoding": "^3.1.1"
      },
      "funding": {
        "url": "https://github.com/fb55/encoding-sniffer?sponsor=1"
      }
    },
    "node_modules/end-of-stream": {
      "version": "1.4.5",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz",
      "integrity": "sha512-ooEGc6HP26xXq/N+GCGOT0JKCLDGrq2bQUZrQ7gyrJiZANJ/8YDTxTpQBXGMn+WbIQXNVpyWymm7KYVICQnyOg==",
      "license": "MIT",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.3",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.3.tgz",
      "integrity": "sha512-d4lC8xfavMeBjzGr2vECC3fsGXziXZQyJxD868h2M/mBI3PwAuODxAkLkq5HYuvrPYcUtiLzsTo8U3PgX3Ocww==",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/entities": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
      "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/env-paths": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
      "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/err-code": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",
      "integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/error-stack-parser-es": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/error-stack-parser-es/-/error-stack-parser-es-0.1.5.tgz",
      "integrity": "sha512-xHku1X40RO+fO8yJ8Wh2f2rZWVjqyhb1zgq1yZ8aZRQkv6OOKhKWRUaht3eSCUbAOBaKIgM+ykwFLE+QUxgGeg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.25.12.tgz",
      "integrity": "sha512-bbPBYYrtZbkt6Os6FiTLCTFxvq4tt3JKall1vRwshA3fdVztsLAatFaZobhkBC8/BrPetoa0oksYoKXoG4ryJg==",
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.25.12",
        "@esbuild/android-arm": "0.25.12",
        "@esbuild/android-arm64": "0.25.12",
        "@esbuild/android-x64": "0.25.12",
        "@esbuild/darwin-arm64": "0.25.12",
        "@esbuild/darwin-x64": "0.25.12",
        "@esbuild/freebsd-arm64": "0.25.12",
        "@esbuild/freebsd-x64": "0.25.12",
        "@esbuild/linux-arm": "0.25.12",
        "@esbuild/linux-arm64": "0.25.12",
        "@esbuild/linux-ia32": "0.25.12",
        "@esbuild/linux-loong64": "0.25.12",
        "@esbuild/linux-mips64el": "0.25.12",
        "@esbuild/linux-ppc64": "0.25.12",
        "@esbuild/linux-riscv64": "0.25.12",
        "@esbuild/linux-s390x": "0.25.12",
        "@esbuild/linux-x64": "0.25.12",
        "@esbuild/netbsd-arm64": "0.25.12",
        "@esbuild/netbsd-x64": "0.25.12",
        "@esbuild/openbsd-arm64": "0.25.12",
        "@esbuild/openbsd-x64": "0.25.12",
        "@esbuild/openharmony-arm64": "0.25.12",
        "@esbuild/sunos-x64": "0.25.12",
        "@esbuild/win32-arm64": "0.25.12",
        "@esbuild/win32-ia32": "0.25.12",
        "@esbuild/win32-x64": "0.25.12"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/execa": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-9.6.0.tgz",
      "integrity": "sha512-jpWzZ1ZhwUmeWRhS7Qv3mhpOhLfwI+uAX4e5fOcXqwMR7EcJ0pj2kV1CVzHVMX/LphnKWD3LObjZCoJ71lKpHw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sindresorhus/merge-streams": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "figures": "^6.1.0",
        "get-stream": "^9.0.0",
        "human-signals": "^8.0.1",
        "is-plain-obj": "^4.1.0",
        "is-stream": "^4.0.1",
        "npm-run-path": "^6.0.0",
        "pretty-ms": "^9.2.0",
        "signal-exit": "^4.1.0",
        "strip-final-newline": "^4.0.0",
        "yoctocolors": "^2.1.1"
      },
      "engines": {
        "node": "^18.19.0 || >=20.5.0"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/expand-template": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz",
      "integrity": "sha512-XYfuKMvj4O35f/pOXLObndIRvyQ+/+6AhODh+OKWj9S9498pHHn/IMszH+gt0fBCRWMNfk1ZSp5x3AifmnI2vg==",
      "license": "(MIT OR WTFPL)",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fetch-blob": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/fetch-blob/-/fetch-blob-3.2.0.tgz",
      "integrity": "sha512-7yAQpD2UMJzLi1Dqv7qFYnPbaPx7ZfFK6PiIxQ4PfkGPyNyl2Ugx+a/umUonmKqjhM4DnfbMvdX6otXq83soQQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/jimmywarting"
        },
        {
          "type": "paypal",
          "url": "https://paypal.me/jimmywarting"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "node-domexception": "^1.0.0",
        "web-streams-polyfill": "^3.0.3"
      },
      "engines": {
        "node": "^12.20 || >= 14.13"
      }
    },
    "node_modules/figures": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-6.1.0.tgz",
      "integrity": "sha512-d+l3qxjSesT4V7v2fh+QnmFnUWv9lSpjarhShNTgBOfA0ttejbQUAlHLitbjkoRiDulW0OPoQPYIGhIC8ohejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-unicode-supported": "^2.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/file-uri-to-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
      "license": "MIT"
    },
    "node_modules/finalhandler": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.0.tgz",
      "integrity": "sha512-/t88Ty3d5JWQbWYgaOGCCYfXRwV1+be02WqYYlL6h0lEiUAMPM8o8qKGO01YIkOHzka2up08wvgYD0mDiI+q3Q==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/follow-redirects": {
      "version": "1.15.11",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz",
      "integrity": "sha512-deG2P0JfjrTxl50XGCDyfI97ZGVCxIpfKYmfyrQ54n5FO/0gfIES8C/Psl6kWVDolizcaaxZJnTS0QSMxvnsBQ==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/form-data": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.5.tgz",
      "integrity": "sha512-8RipRLol37bNs2bhoV67fiTEvdTrbMUYcFTiy3+wuuOnUog2QBHCZWXDRijWQfAkhBj2Uf5UnVaiWwA5vdd82w==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/form-data/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/form-data/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/formdata-polyfill": {
      "version": "4.0.10",
      "resolved": "https://registry.npmjs.org/formdata-polyfill/-/formdata-polyfill-4.0.10.tgz",
      "integrity": "sha512-buewHzMvYL29jdeQTVILecSaZKnt/RJWjoZCF5OW60Z67/GmSLBkOFM7qh1PI3zFNtJbaZL5eQu1vLfazOwj4g==",
      "license": "MIT",
      "dependencies": {
        "fetch-blob": "^3.1.2"
      },
      "engines": {
        "node": ">=12.20.0"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fs-constants": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz",
      "integrity": "sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==",
      "license": "MIT"
    },
    "node_modules/fs-extra": {
      "version": "11.3.2",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-11.3.2.tgz",
      "integrity": "sha512-Xr9F6z6up6Ws+NjzMCZc6WXg2YFRlrLP9NQDO3VQrWrfiojdhS56TzueT88ze0uBdCTwEIhQ3ptnmKeWGFAe0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=14.14"
      }
    },
    "node_modules/fs-minipass": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
      "license": "ISC",
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/fs-minipass/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fs-minipass/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC"
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/fuse.js": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/fuse.js/-/fuse.js-7.1.0.tgz",
      "integrity": "sha512-trLf4SzuuUxfusZADLINj+dE8clK1frKdmqiJNb1Es75fmI5oY6X2mxLVUciLLjxqw/xr72Dhy+lER6dGd02FQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/gauge": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-4.0.4.tgz",
      "integrity": "sha512-f9m+BEN5jkg6a0fZjleidjN51VE1X+mPFQ2DJ0uv1V39oCLCbsGe6yjbBnp7eK7z/+GAon99a3nHuqbuuthyPg==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "aproba": "^1.0.3 || ^2.0.0",
        "color-support": "^1.1.3",
        "console-control-strings": "^1.1.0",
        "has-unicode": "^2.0.1",
        "signal-exit": "^3.0.7",
        "string-width": "^4.2.3",
        "strip-ansi": "^6.0.1",
        "wide-align": "^1.1.5"
      },
      "engines": {
        "node": "^12.13.0 || ^14.15.0 || >=16.0.0"
      }
    },
    "node_modules/gauge/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/gauge/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/gauge/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/gauge/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/gauge/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/gaxios": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/gaxios/-/gaxios-7.1.3.tgz",
      "integrity": "sha512-YGGyuEdVIjqxkxVH1pUTMY/XtmmsApXrCVv5EU25iX6inEPbV+VakJfLealkBtJN69AQmh1eGOdCl9Sm1UP6XQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "extend": "^3.0.2",
        "https-proxy-agent": "^7.0.1",
        "node-fetch": "^3.3.2",
        "rimraf": "^5.0.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/gaxios/node_modules/rimraf": {
      "version": "5.0.10",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-5.0.10.tgz",
      "integrity": "sha512-l0OE8wL34P4nJH/H2ffoaniAokM2qSmrtXHmlpvYr5AVVX8msAyW0l8NVJFDxlSK4u3Uh/f41cQheDVdnYijwQ==",
      "license": "ISC",
      "dependencies": {
        "glob": "^10.3.7"
      },
      "bin": {
        "rimraf": "dist/esm/bin.mjs"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/gcp-metadata": {
      "version": "8.1.2",
      "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-8.1.2.tgz",
      "integrity": "sha512-zV/5HKTfCeKWnxG0Dmrw51hEWFGfcF2xiXqcA3+J90WDuP0SvoiSO5ORvcBsifmx/FoIjgQN3oNOGaQ5PhLFkg==",
      "license": "Apache-2.0",
      "dependencies": {
        "gaxios": "^7.0.0",
        "google-logging-utils": "^1.0.0",
        "json-bigint": "^1.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-stream": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-9.0.1.tgz",
      "integrity": "sha512-kVCxPF3vQM/N0B1PmoqVUqgHP+EeVjmZSQn+1oCRPxd2P21P2F19lIgbR3HBosbB1PUhOAoctJnfEn2GbN2eZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sec-ant/readable-stream": "^0.4.1",
        "is-stream": "^4.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.0.tgz",
      "integrity": "sha512-1VKTZJCwBrvbd+Wn3AOgQP/2Av+TfTCOlE4AcRJE72W1ksZXbAx8PPBR9RzgTeSPzlPMHrbANMH3LbltH73wxQ==",
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/github-from-package": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/github-from-package/-/github-from-package-0.0.0.tgz",
      "integrity": "sha512-SyHy3T1v2NUXn29OsWdxmK6RwHD+vkj3v8en8AOBZ1wBQ/hCAQ5bAQTD02kW4W9tUp/3Qh6J8r9EvntiyCmOOw==",
      "license": "MIT"
    },
    "node_modules/glob": {
      "version": "10.5.0",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.5.0.tgz",
      "integrity": "sha512-DfXN8DfhJ7NH3Oe7cFmu3NCu1wKbkReJ8TorzSAFbSKrlNaQSKfIzqYqVY8zlbs2NLBbWpRiU52GX2PbaBVNkg==",
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^3.1.2",
        "minimatch": "^9.0.4",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^1.11.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/google-auth-library": {
      "version": "10.5.0",
      "resolved": "https://registry.npmjs.org/google-auth-library/-/google-auth-library-10.5.0.tgz",
      "integrity": "sha512-7ABviyMOlX5hIVD60YOfHw4/CxOfBhyduaYB+wbFWCWoni4N7SLcV46hrVRktuBbZjFC9ONyqamZITN7q3n32w==",
      "license": "Apache-2.0",
      "dependencies": {
        "base64-js": "^1.3.0",
        "ecdsa-sig-formatter": "^1.0.11",
        "gaxios": "^7.0.0",
        "gcp-metadata": "^8.0.0",
        "google-logging-utils": "^1.0.0",
        "gtoken": "^8.0.0",
        "jws": "^4.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/google-logging-utils": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-1.1.3.tgz",
      "integrity": "sha512-eAmLkjDjAFCVXg7A1unxHsLf961m6y17QFqXqAXGj/gVkKFrEICfStRfwUlGNfeCEjNRa32JEWOUTlYXPyyKvA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/gtoken": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/gtoken/-/gtoken-8.0.0.tgz",
      "integrity": "sha512-+CqsMbHPiSTdtSO14O51eMNlrp9N79gmeqmXeouJOhfucAedHw9noVe/n5uJk3tbKE6a+6ZCQg3RPhVhHByAIw==",
      "license": "MIT",
      "dependencies": {
        "gaxios": "^7.0.0",
        "jws": "^4.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-unicode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
      "integrity": "sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "he": "bin/he"
      }
    },
    "node_modules/hookable": {
      "version": "5.5.3",
      "resolved": "https://registry.npmjs.org/hookable/-/hookable-5.5.3.tgz",
      "integrity": "sha512-Yc+BQe8SvoXH1643Qez1zqLRmbA5rCL+sSmk6TVos0LWVfNIB7PGncdlId77WzLGSIB5KaWgTaNTs2lNVEI6VQ==",
      "license": "MIT"
    },
    "node_modules/html-encoding-sniffer": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-4.0.0.tgz",
      "integrity": "sha512-Y22oTqIU4uuPgEemfz7NDJz6OeKf12Lsu+QC+s3BVpda64lTiMYCyGwg5ki4vFxkMwQdeZDl2adZoqUgdFuTgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-encoding": "^3.1.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/htmlparser2": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-10.0.0.tgz",
      "integrity": "sha512-TwAZM+zE5Tq3lrEHvOlvwgj1XLWQCtaaibSN11Q+gGBAS7Y1uZSWwXXRe4iF6OXnaq1riyQAPFOBtYc77Mxq0g==",
      "funding": [
        "https://github.com/fb55/htmlparser2?sponsor=1",
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.2.1",
        "entities": "^6.0.0"
      }
    },
    "node_modules/htmlparser2/node_modules/entities": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/entities/-/entities-6.0.1.tgz",
      "integrity": "sha512-aN97NXWF6AWBTahfVOIrB/NShkzi5H7F9r1s9mD3cDj4Ko5f2qhhVoYMibXF7GlLveb/D2ioWay8lxI97Ven3g==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/http-cache-semantics": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.2.0.tgz",
      "integrity": "sha512-dTxcvPXqPvXBQpq5dUr6mEMJX4oIEFv6bwom3FDwKRDsuIjjJGANqhBuoAn9c1RQJIdAKav33ED65E2ys+87QQ==",
      "license": "BSD-2-Clause",
      "optional": true
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/http-proxy-agent": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
      "integrity": "sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/human-signals": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-8.0.1.tgz",
      "integrity": "sha512-eKCa6bwnJhvxj14kZk5NCPc6Hb6BdsU9DZcOnmQKSnO1VKrfV0zCvtttPZUsBvjmNDn8rpcJfpwSYnHBjc95MQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/humanize-ms": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",
      "integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "ms": "^2.0.0"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
      "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/infer-owner": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",
      "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "license": "ISC"
    },
    "node_modules/ip-address": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/ip-address/-/ip-address-10.1.0.tgz",
      "integrity": "sha512-XXADHxXmvT9+CRxhXg56LJovE+bmWnEWB78LB83VZTprKTmaC5QfruXocxzTZ2Kl0DNwKuBdlIhjL8LeY8Sf8Q==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-docker": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-3.0.0.tgz",
      "integrity": "sha512-eljcgEDlEns/7AXFosB5K/2nCM4P7FQPkGc/DWLy5rmFEWvZayGrik1d9/QIY5nJ4f9YsVvBkA6kJpHn9rISdQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "is-docker": "cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-inside-container": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-inside-container/-/is-inside-container-1.0.0.tgz",
      "integrity": "sha512-KIYLCCJghfHZxqjYBE7rEy0OBuTd5xCHS7tHVgvCLkx7StIoaxwNW3hCALgEUjFfeRk+MG/Qxmp/vtETEF3tRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-docker": "^3.0.0"
      },
      "bin": {
        "is-inside-container": "cli.js"
      },
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-lambda": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-lambda/-/is-lambda-1.0.1.tgz",
      "integrity": "sha512-z7CMFGNrENq5iFB9Bqo64Xk6Y9sg+epq1myIcdHaGnbMTYOxvzsEtdYqQUylB7LxfkvgrrjP32T6Ywciio9UIQ==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/is-plain-obj": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-4.1.0.tgz",
      "integrity": "sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-potential-custom-element-name": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
      "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/is-stream": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-4.0.1.tgz",
      "integrity": "sha512-Dnz92NInDqYckGEUJv689RbRiTSEHCQ7wOVeALbkOz999YpqT46yMRIGtSNl2iCL1waAZSx40+h59NV/EwzV/A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-unicode-supported": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-2.1.0.tgz",
      "integrity": "sha512-mE00Gnza5EEB3Ds0HfMyllZzbBrmLOX3vfWoj9A9PEnTfratQ/BcaJOuMhnkhjXvb2+FkY3VuHqtAGpTPmglFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-what": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/is-what/-/is-what-5.5.0.tgz",
      "integrity": "sha512-oG7cgbmg5kLYae2N5IVd3jm2s+vldjxJzK1pcu9LfpGuQ93MQSzo0okvRna+7y5ifrD+20FE8FvjusyGaz14fw==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/mesqueeb"
      }
    },
    "node_modules/is-wsl": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-3.1.0.tgz",
      "integrity": "sha512-UcVfVfaK4Sc4m7X3dUSoHoozQGBEFeDC+zVo06t98xe8CzHSZZBekNXH+tu0NalHolcJ/QAGqS46Hef7QXBIMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-inside-container": "^1.0.0"
      },
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "license": "ISC"
    },
    "node_modules/jackspeak": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-beautify": {
      "version": "1.15.4",
      "resolved": "https://registry.npmjs.org/js-beautify/-/js-beautify-1.15.4.tgz",
      "integrity": "sha512-9/KXeZUKKJwqCXUdBxFJ3vPh467OCckSBmYDwSK/EtV090K+iMJ7zx2S3HLVDIWFQdqMIsZWbnaGiba18aWhaA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "config-chain": "^1.1.13",
        "editorconfig": "^1.0.4",
        "glob": "^10.4.2",
        "js-cookie": "^3.0.5",
        "nopt": "^7.2.1"
      },
      "bin": {
        "css-beautify": "js/bin/css-beautify.js",
        "html-beautify": "js/bin/html-beautify.js",
        "js-beautify": "js/bin/js-beautify.js"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/js-cookie": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/js-cookie/-/js-cookie-3.0.5.tgz",
      "integrity": "sha512-cEiJEAEoIbWfCZYKWhVwFuvPX1gETRYPw6LlaTKoxD3s2AkXzkCjnp6h0V77ozyqj0jakteJ4YqDJT830+lVGw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsdom": {
      "version": "26.1.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-26.1.0.tgz",
      "integrity": "sha512-Cvc9WUhxSMEo4McES3P7oK3QaXldCfNWp7pl2NNeiIFlCoLr3kfq9kb1fxftiwk1FLV7CvpvDfonxtzUDeSOPg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssstyle": "^4.2.1",
        "data-urls": "^5.0.0",
        "decimal.js": "^10.5.0",
        "html-encoding-sniffer": "^4.0.0",
        "http-proxy-agent": "^7.0.2",
        "https-proxy-agent": "^7.0.6",
        "is-potential-custom-element-name": "^1.0.1",
        "nwsapi": "^2.2.16",
        "parse5": "^7.2.1",
        "rrweb-cssom": "^0.8.0",
        "saxes": "^6.0.0",
        "symbol-tree": "^3.2.4",
        "tough-cookie": "^5.1.1",
        "w3c-xmlserializer": "^5.0.0",
        "webidl-conversions": "^7.0.0",
        "whatwg-encoding": "^3.1.1",
        "whatwg-mimetype": "^4.0.0",
        "whatwg-url": "^14.1.1",
        "ws": "^8.18.0",
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "canvas": "^3.0.0"
      },
      "peerDependenciesMeta": {
        "canvas": {
          "optional": true
        }
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-bigint": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-bigint/-/json-bigint-1.0.0.tgz",
      "integrity": "sha512-SiPv/8VpZuWbvLSMtTDU8hEfrZWg/mH/nV/b4o0CYbSxu1UIQPLdwKOCIyLQX+VIPO5vrLX3i8qtqFyhdPSUSQ==",
      "license": "MIT",
      "dependencies": {
        "bignumber.js": "^9.0.0"
      }
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-4.0.0.tgz",
      "integrity": "sha512-lR4MXjGNgkJc7tkQ97kb2nuEMnNCyU//XYVH0MKTGcXEiSudQ5MKGKen3C5QubYy0vmq+JGitUg92uuywGEwIA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.2.0.tgz",
      "integrity": "sha512-FGuPw30AdOIUTRMC2OMRtQV+jkVj2cfPqSeWXv1NEAJ1qZ5zb1X6z1mFhbfOB/iy3ssJCD+3KuZ8r8C3uVFlAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/keygrip": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/keygrip/-/keygrip-1.1.0.tgz",
      "integrity": "sha512-iYSchDJ+liQ8iwbSI2QqsQOvqv58eJCEanyJPJi+Khyu8smkcKSFUCbPwzFcL7YVtZ6eONjqRX/38caJ7QjRAQ==",
      "deprecated": "Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.",
      "license": "MIT",
      "dependencies": {
        "tsscmp": "1.0.6"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/kolorist": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/kolorist/-/kolorist-1.8.0.tgz",
      "integrity": "sha512-Y+60/zizpJ3HRH8DCss+q95yr6145JXZo46OTpFvDZWLfRCE4qChOyk1b26nMaNpfHHgxagk9dXT5OP0Tfe+dQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "license": "ISC"
    },
    "node_modules/make-fetch-happen": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",
      "integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "agentkeepalive": "^4.1.3",
        "cacache": "^15.2.0",
        "http-cache-semantics": "^4.1.0",
        "http-proxy-agent": "^4.0.1",
        "https-proxy-agent": "^5.0.0",
        "is-lambda": "^1.0.1",
        "lru-cache": "^6.0.0",
        "minipass": "^3.1.3",
        "minipass-collect": "^1.0.2",
        "minipass-fetch": "^1.3.2",
        "minipass-flush": "^1.0.5",
        "minipass-pipeline": "^1.2.4",
        "negotiator": "^0.6.2",
        "promise-retry": "^2.0.1",
        "socks-proxy-agent": "^6.0.0",
        "ssri": "^8.0.0"
      },
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/make-fetch-happen/node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/make-fetch-happen/node_modules/http-proxy-agent": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",
      "integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tootallnate/once": "1",
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/make-fetch-happen/node_modules/https-proxy-agent": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/make-fetch-happen/node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/make-fetch-happen/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/make-fetch-happen/node_modules/negotiator": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.4.tgz",
      "integrity": "sha512-myRT3DiWPHqho5PrJaIRyaMv2kgYf0mUVgBNOYMuCH5Ki1yEiQaf/ZJuQ62nvpc44wL5WDbTX7yGJi1Neevw8w==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/make-fetch-happen/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/memorystream": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/memorystream/-/memorystream-0.3.1.tgz",
      "integrity": "sha512-S3UwM3yj5mtUSEfP41UZmt/0SCoVYUcU1rkXv+BQ5Ig8ndL4sPoJNBUJERafdPb5jjHJGuMgytgKvKIf58XNBw==",
      "dev": true,
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/mimic-response": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz",
      "integrity": "sha512-z0yWI+4FDrrweS8Zmt4Ej5HdJmky15+L2e6Wgn3+iK5fWzb6T3fhNFq2+MeTRb064c6Wr4N/wv0DzQTjNzHNGQ==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/minimatch": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.1.tgz",
      "integrity": "sha512-0jWhJpD/MdhPXwPuiRkCbfYfSKp2qnn2eOc279qI7f+osl/l+prKSrvhg157zSYvx/1nmgn2NqdT6k2Z7zSH9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/minipass-collect": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",
      "integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/minipass-collect/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-collect/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/minipass-fetch": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-1.4.1.tgz",
      "integrity": "sha512-CGH1eblLq26Y15+Azk7ey4xh0J/XfJfrCox5LDJiKqI2Q2iwOLOKrlmIaODiSQS8d18jalF6y2K2ePUm0CmShw==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "minipass": "^3.1.0",
        "minipass-sized": "^1.0.3",
        "minizlib": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "optionalDependencies": {
        "encoding": "^0.1.12"
      }
    },
    "node_modules/minipass-fetch/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-fetch/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/minipass-flush": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
      "integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/minipass-flush/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-flush/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/minipass-pipeline": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
      "integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-pipeline/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-pipeline/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/minipass-sized": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-1.0.3.tgz",
      "integrity": "sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-sized/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minipass-sized/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/minizlib": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
      "license": "MIT",
      "dependencies": {
        "minipass": "^3.0.0",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/minizlib/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minizlib/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC"
    },
    "node_modules/mitt": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mitt/-/mitt-3.0.1.tgz",
      "integrity": "sha512-vKivATfr97l2/QBCYAkXYDbrIWPM2IIKEl7YPhjCvKlG3kE2gm+uBo6nEXK3M5/Ffh/FLpKExzOQ3JJoJGFKBw==",
      "license": "MIT"
    },
    "node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "license": "MIT",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mkdirp-classic": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz",
      "integrity": "sha512-gKLcREMhtuZRwRAfqP3RFW+TK4JqApVBtOIftVgjuABpAtpxhPGaDcfvbhNvD0B8iD1oUr/txX35NjcaY6Ns/A==",
      "license": "MIT"
    },
    "node_modules/mrmime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mrmime/-/mrmime-2.0.1.tgz",
      "integrity": "sha512-Y3wQdFg2Va6etvQ5I82yUhGdsKrcYox6p7FfL1LbK2J4V01F9TGlepTIhnK24t7koZibmg82KGglhA1XK5IsLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/muggle-string": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/muggle-string/-/muggle-string-0.4.1.tgz",
      "integrity": "sha512-VNTrAak/KhO2i8dqqnqnAHOa3cYBwXEZe9h+D5h/1ZqFSTEFHdM65lR7RoIqq3tBBYavsOXV84NoHXZ0AkPyqQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-build-utils": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/napi-build-utils/-/napi-build-utils-2.0.0.tgz",
      "integrity": "sha512-GEbrYkbfF7MoNaoh2iGG84Mnf/WZfB0GdGEsM8wz7Expx/LlWf5U8t9nvJKXSp3qr5IsEbK04cBGhol/KwOsWA==",
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/node-abi": {
      "version": "3.85.0",
      "resolved": "https://registry.npmjs.org/node-abi/-/node-abi-3.85.0.tgz",
      "integrity": "sha512-zsFhmbkAzwhTft6nd3VxcG0cvJsT70rL+BIGHWVq5fi6MwGrHwzqKaxXE+Hl2GmnGItnDKPPkO5/LQqjVkIdFg==",
      "license": "MIT",
      "dependencies": {
        "semver": "^7.3.5"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/node-abi/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/node-addon-api": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
      "integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
      "license": "MIT"
    },
    "node_modules/node-domexception": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-domexception/-/node-domexception-1.0.0.tgz",
      "integrity": "sha512-/jKZoMpw0F8GRwl4/eLROPA3cfcXtLApP0QzLmUT/HuPCZWyB7IY9ZrMeKw2O/nFIqPQB3PVM9aYm0F312AXDQ==",
      "deprecated": "Use your platform's native DOMException instead",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/jimmywarting"
        },
        {
          "type": "github",
          "url": "https://paypal.me/jimmywarting"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=10.5.0"
      }
    },
    "node_modules/node-fetch": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-3.3.2.tgz",
      "integrity": "sha512-dRB78srN/l6gqWulah9SrxeYnxeddIG30+GOqK/9OlLVyLg3HPnr6SqOWTWOXKRwC2eGYCkZ59NNuSgvSrpgOA==",
      "license": "MIT",
      "dependencies": {
        "data-uri-to-buffer": "^4.0.0",
        "fetch-blob": "^3.1.4",
        "formdata-polyfill": "^4.0.10"
      },
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/node-fetch"
      }
    },
    "node_modules/node-gyp": {
      "version": "8.4.1",
      "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-8.4.1.tgz",
      "integrity": "sha512-olTJRgUtAb/hOXG0E93wZDs5YiJlgbXxTwQAFHyNlRsXQnYzUaF2aGgujZbw+hR8aF4ZG/rST57bWMWD16jr9w==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "env-paths": "^2.2.0",
        "glob": "^7.1.4",
        "graceful-fs": "^4.2.6",
        "make-fetch-happen": "^9.1.0",
        "nopt": "^5.0.0",
        "npmlog": "^6.0.0",
        "rimraf": "^3.0.2",
        "semver": "^7.3.5",
        "tar": "^6.1.2",
        "which": "^2.0.2"
      },
      "bin": {
        "node-gyp": "bin/node-gyp.js"
      },
      "engines": {
        "node": ">= 10.12.0"
      }
    },
    "node_modules/node-gyp-build": {
      "version": "4.8.4",
      "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.4.tgz",
      "integrity": "sha512-LA4ZjwlnUblHVgq0oBF3Jl/6h/Nvs5fzBLwdEF4nuxnFdsfajde4WfxtJr3CaiH+F6ewcIB/q4jQ4UzPyid+CQ==",
      "license": "MIT",
      "bin": {
        "node-gyp-build": "bin.js",
        "node-gyp-build-optional": "optional.js",
        "node-gyp-build-test": "build-test.js"
      }
    },
    "node_modules/node-gyp/node_modules/abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/node-gyp/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/node-gyp/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/node-gyp/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/node-gyp/node_modules/nopt": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
      "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "abbrev": "1"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/node-gyp/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nopt": {
      "version": "7.2.1",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-7.2.1.tgz",
      "integrity": "sha512-taM24ViiimT/XntxbPyJQzCG+p4EKOpgD3mxFwW38mGjVUrfERQOeY4EDHjdnptttfHuHQXFx+lTP08Q+mLa/w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "abbrev": "^2.0.0"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
      }
    },
    "node_modules/npm-normalize-package-bin": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-4.0.0.tgz",
      "integrity": "sha512-TZKxPvItzai9kN9H/TkmCtx/ZN/hvr3vUycjlfmH0ootY9yFBzNOpiXAdIn1Iteqsvk4lQn6B5PTrt+n6h8k/w==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/npm-run-all2": {
      "version": "8.0.4",
      "resolved": "https://registry.npmjs.org/npm-run-all2/-/npm-run-all2-8.0.4.tgz",
      "integrity": "sha512-wdbB5My48XKp2ZfJUlhnLVihzeuA1hgBnqB2J9ahV77wLS+/YAJAlN8I+X3DIFIPZ3m5L7nplmlbhNiFDmXRDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "cross-spawn": "^7.0.6",
        "memorystream": "^0.3.1",
        "picomatch": "^4.0.2",
        "pidtree": "^0.6.0",
        "read-package-json-fast": "^4.0.0",
        "shell-quote": "^1.7.3",
        "which": "^5.0.0"
      },
      "bin": {
        "npm-run-all": "bin/npm-run-all/index.js",
        "npm-run-all2": "bin/npm-run-all/index.js",
        "run-p": "bin/run-p/index.js",
        "run-s": "bin/run-s/index.js"
      },
      "engines": {
        "node": "^20.5.0 || >=22.0.0",
        "npm": ">= 10"
      }
    },
    "node_modules/npm-run-all2/node_modules/isexe": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-3.1.1.tgz",
      "integrity": "sha512-LpB/54B+/2J5hqQ7imZHfdU31OlgQqx7ZicVlkm9kzg9/w8GKLEcFfJl/t7DCEDueOyBAD6zCCwTO6Fzs0NoEQ==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/npm-run-all2/node_modules/which": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/which/-/which-5.0.0.tgz",
      "integrity": "sha512-JEdGzHwwkrbWoGOlIHqQ5gtprKGOenpDHpxE9zVR1bWbOtYRyPPHMe9FaP6x61CmNaTThSkb0DAJte5jD+DmzQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^3.1.1"
      },
      "bin": {
        "node-which": "bin/which.js"
      },
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/npm-run-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-6.0.0.tgz",
      "integrity": "sha512-9qny7Z9DsQU8Ou39ERsPU4OZQlSTP47ShQzuKZ6PRXpYLtIFgl/DEBYEXKlvcEa+9tHVcK8CF81Y2V72qaZhWA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^4.0.0",
        "unicorn-magic": "^0.3.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/npm-run-path/node_modules/path-key": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-4.0.0.tgz",
      "integrity": "sha512-haREypq7xkM7ErfgIyA0z+Bj4AGKlMSdlQE2jvJo6huWD1EdkKYV+G/T4nq0YEF2vgTT8kqMFKo1uHn950r4SQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/npmlog": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-6.0.2.tgz",
      "integrity": "sha512-/vBvz5Jfr9dT/aFWd0FIRf+T/Q2WBsLENygUaFUqstqsycmZAP/t5BvFJTK0viFmSUxiUKTUplWy5vt+rvKIxg==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "are-we-there-yet": "^3.0.0",
        "console-control-strings": "^1.1.0",
        "gauge": "^4.0.3",
        "set-blocking": "^2.0.0"
      },
      "engines": {
        "node": "^12.13.0 || ^14.15.0 || >=16.0.0"
      }
    },
    "node_modules/nth-check": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
      "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "boolbase": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/fb55/nth-check?sponsor=1"
      }
    },
    "node_modules/nwsapi": {
      "version": "2.2.22",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.22.tgz",
      "integrity": "sha512-ujSMe1OWVn55euT1ihwCI1ZcAaAU3nxUiDwfDQldc51ZXaB9m2AyOn6/jh1BLe2t/G8xd6uKG1UBF2aZJeg2SQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/on-headers": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.1.0.tgz",
      "integrity": "sha512-737ZY3yNnXy37FHkQxPzt4UZ2UWPWiCZWLvFZ4fu5cueciegX0zGPnrlY6bwRg4FdQOe9YU8MkmJwGhoMybl8A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/open": {
      "version": "10.2.0",
      "resolved": "https://registry.npmjs.org/open/-/open-10.2.0.tgz",
      "integrity": "sha512-YgBpdJHPyQ2UE5x+hlSXcnejzAvD0b22U2OuAP+8OnlJT+PjWPxtgmGqKKc+RgTM63U9gN0YzrYc71R2WT/hTA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "default-browser": "^5.2.1",
        "define-lazy-prop": "^3.0.0",
        "is-inside-container": "^1.0.0",
        "wsl-utils": "^0.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-map": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "aggregate-error": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
      "license": "BlueOak-1.0.0"
    },
    "node_modules/parse-ms": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-ms/-/parse-ms-4.0.0.tgz",
      "integrity": "sha512-TXfryirbmq34y8QBwgqCVLi+8oA3oWx2eAnSn62ITyEhEYaWRlVZ2DvMM9eZbMs/RfxPu/PK/aBLyGj4IrqMHw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parse5": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-7.3.0.tgz",
      "integrity": "sha512-IInvU7fabl34qmi9gY8XOVxhYyMyuH2xUNpb2q8/Y+7552KlejkRvqvD19nMoUW/uQGGbqNpA6Tufu5FL5BZgw==",
      "license": "MIT",
      "dependencies": {
        "entities": "^6.0.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/parse5-htmlparser2-tree-adapter": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-7.1.0.tgz",
      "integrity": "sha512-ruw5xyKs6lrpo9x9rCZqZZnIUntICjQAd0Wsmp396Ul9lN/h+ifgVV1x1gZHi8euej6wTfpqX8j+BFQxF0NS/g==",
      "license": "MIT",
      "dependencies": {
        "domhandler": "^5.0.3",
        "parse5": "^7.0.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/parse5-parser-stream": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/parse5-parser-stream/-/parse5-parser-stream-7.1.2.tgz",
      "integrity": "sha512-JyeQc9iwFLn5TbvvqACIF/VXG6abODeB3Fwmv/TGdLk2LfbWkaySGY72at4+Ty7EkPZj854u4CrICqNk2qIbow==",
      "license": "MIT",
      "dependencies": {
        "parse5": "^7.0.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/parse5/node_modules/entities": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/entities/-/entities-6.0.1.tgz",
      "integrity": "sha512-aN97NXWF6AWBTahfVOIrB/NShkzi5H7F9r1s9mD3cDj4Ko5f2qhhVoYMibXF7GlLveb/D2ioWay8lxI97Ven3g==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-browserify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-1.0.1.tgz",
      "integrity": "sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "license": "ISC"
    },
    "node_modules/path-to-regexp": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.3.0.tgz",
      "integrity": "sha512-7jdwVIRtsP8MYpdXSwOS0YdD0Du+qOoF/AEPIt88PcCFrZCzx41oxku1jD88hZBwbNUIEfpqvuhjFaMAqMTWnA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/perfect-debounce": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/perfect-debounce/-/perfect-debounce-1.0.0.tgz",
      "integrity": "sha512-xCy9V055GLEqoFaHoC1SoLIaLmWctgCUaBaWxDZ7/Zx4CTyX7cJQLJOok/orfjZAh9kEYpjJa4d0KcJmCbctZA==",
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pidtree": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/pidtree/-/pidtree-0.6.0.tgz",
      "integrity": "sha512-eG2dWTVw5bzqGRztnHExczNxt5VGsE6OwTeCG3fdUf9KBsZzO3R5OIIIzWR+iZA0NtZ+RDVdaoE2dK1cn6jH4g==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "pidtree": "bin/pidtree.js"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/pinia": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/pinia/-/pinia-3.0.4.tgz",
      "integrity": "sha512-l7pqLUFTI/+ESXn6k3nu30ZIzW5E2WZF/LaHJEpoq6ElcLD+wduZoB2kBN19du6K/4FDpPMazY2wJr+IndBtQw==",
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-api": "^7.7.7"
      },
      "funding": {
        "url": "https://github.com/sponsors/posva"
      },
      "peerDependencies": {
        "typescript": ">=4.5.0",
        "vue": "^3.5.11"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/playwright": {
      "version": "1.57.0",
      "resolved": "https://registry.npmjs.org/playwright/-/playwright-1.57.0.tgz",
      "integrity": "sha512-ilYQj1s8sr2ppEJ2YVadYBN0Mb3mdo9J0wQ+UuDhzYqURwSoW4n1Xs5vs7ORwgDGmyEh33tRMeS8KhdkMoLXQw==",
      "license": "Apache-2.0",
      "dependencies": {
        "playwright-core": "1.57.0"
      },
      "bin": {
        "playwright": "cli.js"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "fsevents": "2.3.2"
      }
    },
    "node_modules/playwright-core": {
      "version": "1.57.0",
      "resolved": "https://registry.npmjs.org/playwright-core/-/playwright-core-1.57.0.tgz",
      "integrity": "sha512-agTcKlMw/mjBWOnD6kFZttAAGHgi/Nw0CZ2o6JqWSbMlI219lAFLZZCyqByTsvVAJq5XA5H8cA6PrvBRpBWEuQ==",
      "license": "Apache-2.0",
      "bin": {
        "playwright-core": "cli.js"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prebuild-install": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/prebuild-install/-/prebuild-install-7.1.3.tgz",
      "integrity": "sha512-8Mf2cbV7x1cXPUILADGI3wuhfqWvtiLA1iclTDbFRZkgRQS0NqsPZphna9V+HyTEadheuPmjaJMsbzKQFOzLug==",
      "license": "MIT",
      "dependencies": {
        "detect-libc": "^2.0.0",
        "expand-template": "^2.0.3",
        "github-from-package": "0.0.0",
        "minimist": "^1.2.3",
        "mkdirp-classic": "^0.5.3",
        "napi-build-utils": "^2.0.0",
        "node-abi": "^3.3.0",
        "pump": "^3.0.0",
        "rc": "^1.2.7",
        "simple-get": "^4.0.0",
        "tar-fs": "^2.0.0",
        "tunnel-agent": "^0.6.0"
      },
      "bin": {
        "prebuild-install": "bin.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/prettier": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.5.3.tgz",
      "integrity": "sha512-QQtaxnoDJeAkDvDKWCLiwIXkTgRhwYDEQCghU9Z6q03iyek/rxRh/2lC3HB7P8sWT2xC/y5JDctPLBIGzHKbhw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/pretty-ms": {
      "version": "9.3.0",
      "resolved": "https://registry.npmjs.org/pretty-ms/-/pretty-ms-9.3.0.tgz",
      "integrity": "sha512-gjVS5hOP+M3wMm5nmNOucbIrqudzs9v/57bWRHQWLYklXqoXKrVfYW2W9+glfGsqtPgpiz5WwyEEB+ksXIx3gQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parse-ms": "^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/promise-inflight": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
      "integrity": "sha512-6zWPyEOFaQBJYcGMHBKTKJ3u6TBsnMFOIZSa6ce1e/ZrrsOlnHRHbabMjLiBYKp+n44X9eUI6VUPaukCXHuG4g==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/promise-retry": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",
      "integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "err-code": "^2.0.2",
        "retry": "^0.12.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/proto-list": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/proto-list/-/proto-list-1.2.4.tgz",
      "integrity": "sha512-vtK/94akxsTMhe0/cbfpR+syPuszcuwhqVjJq26CuNDgFGj682oRBXOP5MJpv2r7JtE8MsiepGIqvvOTBwn2vA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "license": "MIT"
    },
    "node_modules/pump": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.3.tgz",
      "integrity": "sha512-todwxLMY7/heScKmntwQG8CXVkWUOdYxIvY2s0VWAAMh/nd8SoYiRaKjlr7+iCs984f2P8zvrfWcDDYVb73NfA==",
      "license": "MIT",
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/raw-body/node_modules/iconv-lite": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.0.tgz",
      "integrity": "sha512-cf6L2Ds3h57VVmkZe+Pn+5APsT7FpqJtEhhieDCvrE2MK5Qk9MyffgQyuxQTm6BChfeZNtcOLHp9IcWRVcIcBQ==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "license": "(BSD-2-Clause OR MIT OR Apache-2.0)",
      "dependencies": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
      "bin": {
        "rc": "cli.js"
      }
    },
    "node_modules/read-package-json-fast": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/read-package-json-fast/-/read-package-json-fast-4.0.0.tgz",
      "integrity": "sha512-qpt8EwugBWDw2cgE2W+/3oxC+KTez2uSVR8JU9Q36TXPAGCaozfQUs59v4j4GFpWTaw0i6hAZSvOmu1J0uOEUg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "json-parse-even-better-errors": "^4.0.0",
        "npm-normalize-package-bin": "^4.0.0"
      },
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/remult": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/remult/-/remult-3.3.1.tgz",
      "integrity": "sha512-L9vBpt6odrNxeOs5rZ8p07wA/Pg3qDrrrCCsuwusDr2eiOsXiFZNWE56MvFoDLdxWVLaBeKrmSiJhNfGHKH5BQ==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.3.1"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/retry": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
      "integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/rfdc": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/rfdc/-/rfdc-1.4.1.tgz",
      "integrity": "sha512-q1b3N5QkRUWUl7iyylaaj3kOpIT0N2i9MqIEQXP73GVsN9cw3fdx8X63cEmWhJGi2PPCF23Ijp7ktmd39rawIA==",
      "license": "MIT"
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/rimraf/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/rollup": {
      "version": "4.53.3",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.53.3.tgz",
      "integrity": "sha512-w8GmOxZfBmKknvdXU1sdM9NHcoQejwF/4mNgj2JuEEdRaHwwF12K7e9eXn1nLZ07ad+du76mkVsyeb2rKGllsA==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.53.3",
        "@rollup/rollup-android-arm64": "4.53.3",
        "@rollup/rollup-darwin-arm64": "4.53.3",
        "@rollup/rollup-darwin-x64": "4.53.3",
        "@rollup/rollup-freebsd-arm64": "4.53.3",
        "@rollup/rollup-freebsd-x64": "4.53.3",
        "@rollup/rollup-linux-arm-gnueabihf": "4.53.3",
        "@rollup/rollup-linux-arm-musleabihf": "4.53.3",
        "@rollup/rollup-linux-arm64-gnu": "4.53.3",
        "@rollup/rollup-linux-arm64-musl": "4.53.3",
        "@rollup/rollup-linux-loong64-gnu": "4.53.3",
        "@rollup/rollup-linux-ppc64-gnu": "4.53.3",
        "@rollup/rollup-linux-riscv64-gnu": "4.53.3",
        "@rollup/rollup-linux-riscv64-musl": "4.53.3",
        "@rollup/rollup-linux-s390x-gnu": "4.53.3",
        "@rollup/rollup-linux-x64-gnu": "4.53.3",
        "@rollup/rollup-linux-x64-musl": "4.53.3",
        "@rollup/rollup-openharmony-arm64": "4.53.3",
        "@rollup/rollup-win32-arm64-msvc": "4.53.3",
        "@rollup/rollup-win32-ia32-msvc": "4.53.3",
        "@rollup/rollup-win32-x64-gnu": "4.53.3",
        "@rollup/rollup-win32-x64-msvc": "4.53.3",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/rrweb-cssom": {
      "version": "0.8.0",
      "resolved": "https://registry.npmjs.org/rrweb-cssom/-/rrweb-cssom-0.8.0.tgz",
      "integrity": "sha512-guoltQEx+9aMf2gDZ0s62EcV8lsXR+0w8915TC3ITdn2YueuNjdAYh/levpU9nFaoChh9RUS5ZdQMrKfVEN9tw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/run-applescript": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/run-applescript/-/run-applescript-7.1.0.tgz",
      "integrity": "sha512-DPe5pVFaAsinSaV6QjQ6gdiedWDcRCbUuiQfQa2wmWV7+xC9bGulGI8+TdRmoFkAPaBXk8CrAbnlY2ISniJ47Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/saxes": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-6.0.0.tgz",
      "integrity": "sha512-xAg7SOnEhrm5zI3puOOKyy1OMcMlIJZYNJY7xLBwSze0UjhPLnWfj2GF2EpT0jmzaJKIWKHLsaSSajf35bcYnA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "xmlchars": "^2.2.0"
      },
      "engines": {
        "node": ">=v12.22.7"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/send": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.0.tgz",
      "integrity": "sha512-uaW0WwXKpL9blXE2o0bRhoL2EGXIrZxQ2ZQ4mgcfoBxdFmQold+qWsD2jLrfZ0trjKL6vOw0j//eAwcALFjKSw==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.3.5",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "mime-types": "^3.0.1",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-61g9pCh0Vnh7IutZjtLGGpTA355+OPn2TyDv/6ivP2h/AdAVX9azsoxmg2/M6nZeQZNYBEwIcsne1mJd9oQItQ==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shell-quote": {
      "version": "1.8.3",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.3.tgz",
      "integrity": "sha512-ObmnIF4hXNg1BqhnHmgbDETF8dLPCggZWBjkQfhZpbszZnYur5DUljTcCHii5LC3J5E0yeO/1LIMyH+UvHQgyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/simple-concat": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz",
      "integrity": "sha512-cSFtAPtRhljv69IK0hTVZQ+OfE9nePi/rtJmw5UjHeVyVroEqJXP1sFztKUy1qU+xvz3u/sfYJLa947b7nAN2Q==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/simple-get": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/simple-get/-/simple-get-4.0.1.tgz",
      "integrity": "sha512-brv7p5WgH0jmQJr1ZDDfKDOSeWWg+OVypG99A/5vYGPqJ6pxiaHLy8nxtFjBA7oMa01ebA9gfh1uMCFqOuXxvA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decompress-response": "^6.0.0",
        "once": "^1.3.1",
        "simple-concat": "^1.0.0"
      }
    },
    "node_modules/sirv": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/sirv/-/sirv-3.0.2.tgz",
      "integrity": "sha512-2wcC/oGxHis/BoHkkPwldgiPSYcpZK3JU28WoMVv55yHJgcZ8rlXvuG9iZggz+sU1d4bRgIGASwyWqjxu3FM0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@polka/url": "^1.0.0-next.24",
        "mrmime": "^2.0.0",
        "totalist": "^3.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/slugify": {
      "version": "1.6.6",
      "resolved": "https://registry.npmjs.org/slugify/-/slugify-1.6.6.tgz",
      "integrity": "sha512-h+z7HKHYXj6wJU+AnS/+IH8Uh9fdcX1Lrhg1/VMdf9PwoBQXFcXiAdsy2tSK0P6gKwJLXp02r90ahUCqHk9rrw==",
      "license": "MIT",
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/smart-buffer": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
      "integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0"
      }
    },
    "node_modules/socks": {
      "version": "2.8.7",
      "resolved": "https://registry.npmjs.org/socks/-/socks-2.8.7.tgz",
      "integrity": "sha512-HLpt+uLy/pxB+bum/9DzAgiKS8CX1EvbWxI4zlmgGCExImLdiad2iCwXT5Z4c9c3Eq8rP2318mPW2c+QbtjK8A==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "ip-address": "^10.0.1",
        "smart-buffer": "^4.2.0"
      },
      "engines": {
        "node": ">= 10.0.0",
        "npm": ">= 3.0.0"
      }
    },
    "node_modules/socks-proxy-agent": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.1.tgz",
      "integrity": "sha512-a6KW9G+6B3nWZ1yB8G7pJwL3ggLy1uTzKAgCb7ttblwqdz9fMGJUuTy3uFzEP48FAs9FLILlmzDlE2JJhVQaXQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "agent-base": "^6.0.2",
        "debug": "^4.3.3",
        "socks": "^2.6.2"
      },
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/socks-proxy-agent/node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/speakingurl": {
      "version": "14.0.1",
      "resolved": "https://registry.npmjs.org/speakingurl/-/speakingurl-14.0.1.tgz",
      "integrity": "sha512-1POYv7uv2gXoyGFpBCmpDVSNV74IfsWlDW216UPjbWufNf+bSU6GdbDsxdcxtfwb4xlI3yxzOTKClUosxARYrQ==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sqlite3": {
      "version": "5.1.7",
      "resolved": "https://registry.npmjs.org/sqlite3/-/sqlite3-5.1.7.tgz",
      "integrity": "sha512-GGIyOiFaG+TUra3JIfkI/zGP8yZYLPQ0pl1bH+ODjiX57sPhrLU5sQJn1y9bDKZUFYkX1crlrPfSYt0BKKdkog==",
      "hasInstallScript": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "bindings": "^1.5.0",
        "node-addon-api": "^7.0.0",
        "prebuild-install": "^7.1.1",
        "tar": "^6.1.11"
      },
      "optionalDependencies": {
        "node-gyp": "8.x"
      },
      "peerDependencies": {
        "node-gyp": "8.x"
      },
      "peerDependenciesMeta": {
        "node-gyp": {
          "optional": true
        }
      }
    },
    "node_modules/ssri": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/ssri/-/ssri-8.0.1.tgz",
      "integrity": "sha512-97qShzy1AiyxvPNIkLWoGua7xoQzzPjQ0HAH4B0rWKo7SZ6USuPcrUiAFrws0UH8RrbWmgq3LMTObhPIHbbBeQ==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "minipass": "^3.1.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/ssri/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ssri/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC",
      "optional": true
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/string-width-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz",
      "integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-final-newline": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-4.0.0.tgz",
      "integrity": "sha512-aulFJcD6YK8V1G7iRB5tigAP4TsHBZZrOV8pjV++zdUwmeV8uzbY7yn6h9MswN62adStNZFuCIx4haBnRuMDaw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/superjson": {
      "version": "2.2.5",
      "resolved": "https://registry.npmjs.org/superjson/-/superjson-2.2.5.tgz",
      "integrity": "sha512-zWPTX96LVsA/eVYnqOM2+ofcdPqdS1dAF1LN4TS2/MWuUpfitd9ctTa87wt4xrYnZnkLtS69xpBdSxVBP5Rm6w==",
      "license": "MIT",
      "dependencies": {
        "copy-anything": "^4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tailwindcss": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.17.tgz",
      "integrity": "sha512-j9Ee2YjuQqYT9bbRTfTZht9W/ytp5H+jJpZKiYdP/bpnXARAuELt9ofP0lPnmHjbga7SNQIxdTAXCmtKVYjN+Q==",
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tar": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.2.1.tgz",
      "integrity": "sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==",
      "license": "ISC",
      "dependencies": {
        "chownr": "^2.0.0",
        "fs-minipass": "^2.0.0",
        "minipass": "^5.0.0",
        "minizlib": "^2.1.1",
        "mkdirp": "^1.0.3",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/tar-fs": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/tar-fs/-/tar-fs-2.1.4.tgz",
      "integrity": "sha512-mDAjwmZdh7LTT6pNleZ05Yt65HC3E+NiQzl672vQG38jIrehtJk/J3mNwIg+vShQPcLF/LV7CMnDW6vjj6sfYQ==",
      "license": "MIT",
      "dependencies": {
        "chownr": "^1.1.1",
        "mkdirp-classic": "^0.5.2",
        "pump": "^3.0.0",
        "tar-stream": "^2.1.4"
      }
    },
    "node_modules/tar-fs/node_modules/chownr": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
      "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
      "license": "ISC"
    },
    "node_modules/tar-stream": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-2.2.0.tgz",
      "integrity": "sha512-ujeqbceABgwMZxEJnk2HDY2DlnUZ+9oEcb1KzTVfYHio0UE6dG71n60d8D2I4qNvleWrrXpmjpt7vZeF1LnMZQ==",
      "license": "MIT",
      "dependencies": {
        "bl": "^4.0.3",
        "end-of-stream": "^1.4.1",
        "fs-constants": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.1.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tar/node_modules/minipass": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-5.0.0.tgz",
      "integrity": "sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==",
      "license": "ISC",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tar/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC"
    },
    "node_modules/three": {
      "version": "0.181.2",
      "resolved": "https://registry.npmjs.org/three/-/three-0.181.2.tgz",
      "integrity": "sha512-k/CjiZ80bYss6Qs7/ex1TBlPD11whT9oKfT8oTGiHa34W4JRd1NiH/Tr1DbHWQ2/vMUypxksLnF2CfmlmM5XFQ==",
      "license": "MIT"
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tldts": {
      "version": "6.1.86",
      "resolved": "https://registry.npmjs.org/tldts/-/tldts-6.1.86.tgz",
      "integrity": "sha512-WMi/OQ2axVTf/ykqCQgXiIct+mSQDFdH2fkwhPwgEwvJ1kSzZRiinb0zF2Xb8u4+OqPChmyI6MEu4EezNJz+FQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tldts-core": "^6.1.86"
      },
      "bin": {
        "tldts": "bin/cli.js"
      }
    },
    "node_modules/tldts-core": {
      "version": "6.1.86",
      "resolved": "https://registry.npmjs.org/tldts-core/-/tldts-core-6.1.86.tgz",
      "integrity": "sha512-Je6p7pkk+KMzMv2XXKmAE3McmolOQFdxkKw0R8EYNr7sELW46JqnNeTX8ybPiQgvg1ymCoF8LXs5fzFaZvJPTA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/totalist": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/totalist/-/totalist-3.0.1.tgz",
      "integrity": "sha512-sf4i37nQ2LBx4m3wB74y+ubopq6W/dIzXg0FDGjsYnZHVa1Da8FH853wlL2gtUhg+xJXjfk3kUZS3BRoQeoQBQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tough-cookie": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-5.1.2.tgz",
      "integrity": "sha512-FVDYdxtnj0G6Qm/DhNPSb8Ju59ULcup3tuJxkFb5K8Bv2pUXILbf0xZWU8PX8Ov19OXljbUyveOFwRMwkXzO+A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "tldts": "^6.1.32"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/tr46": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.1.1.tgz",
      "integrity": "sha512-hdF5ZgjTqgAntKkklYw0R03MG2x/bSzTtkxmIRw/sTNV8YXsCJ1tfLAX23lhxhHJlEf3CRCOCGGWw3vI3GaSPw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tsscmp": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/tsscmp/-/tsscmp-1.0.6.tgz",
      "integrity": "sha512-LxhtAkPDTkVCMQjt2h6eBVY28KCjikZqZfMcC15YBeNjkgUpdCfBu5HoiOTDu86v6smE8yOjyEktJ8hlbANHQA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6.x"
      }
    },
    "node_modules/tsx": {
      "version": "4.20.6",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.20.6.tgz",
      "integrity": "sha512-ytQKuwgmrrkDTFP4LjR0ToE2nqgy886GpvRSpU0JAnrdBYppuY5rLkRUYPU1yCryb24SsKBTL/hlDQAEFVwtZg==",
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.25.0",
        "get-tsconfig": "^4.7.5"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/tsx/node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha512-McnNiV1l8RYeY8tBgEpuodCC1mLUdbSN+CYBL7kJsJNInOP8UjDDEwdk6Mw60vdLLrr5NHKZhMAOSrR2NZuQ+w==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typescript": {
      "version": "5.8.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.8.3.tgz",
      "integrity": "sha512-p1diW6TqL9L07nNxvRMM7hMMw4c5XOo/1ibL4aAIGmSAt9slTE1Xgw5KWuof2uTOvCg9BY7ZRi+GaF+7sfgPeQ==",
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/undici/-/undici-7.16.0.tgz",
      "integrity": "sha512-QEg3HPMll0o3t2ourKwOeUAZ159Kn9mx5pnzHRQO8+Wixmh88YdZRiIwat0iNzNNXn0yoEtXJqFpyW7eM8BV7g==",
      "license": "MIT",
      "engines": {
        "node": ">=20.18.1"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "license": "MIT"
    },
    "node_modules/unicorn-magic": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/unicorn-magic/-/unicorn-magic-0.3.0.tgz",
      "integrity": "sha512-+QBBXBCvifc56fsbuxZQ6Sic3wqqc3WWaqxs58gvJrcOuN83HGTCwz3oS5phzU9LthRNE9VrJCFCLUgHeeFnfA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/unique-filename": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",
      "integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "unique-slug": "^2.0.0"
      }
    },
    "node_modules/unique-slug": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",
      "integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "imurmurhash": "^0.1.4"
      }
    },
    "node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.4.tgz",
      "integrity": "sha512-q0SPT4xyU84saUX+tomz1WLkxUbuaJnR1xWt17M7fJtEJigJeWUNGUqrauFXsHnqev9y9JTRGwk13tFBuKby4A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "license": "MIT"
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vite": {
      "version": "7.2.4",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.2.4.tgz",
      "integrity": "sha512-NL8jTlbo0Tn4dUEXEsUg8KeyG/Lkmc4Fnzb8JXN/Ykm9G4HNImjtABMJgkQoVjOBN/j2WAwDTRytdqJbZsah7w==",
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.25.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vite-hot-client": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/vite-hot-client/-/vite-hot-client-2.1.0.tgz",
      "integrity": "sha512-7SpgZmU7R+dDnSmvXE1mfDtnHLHQSisdySVR7lO8ceAXvM0otZeuQQ6C8LrS5d/aYyP/QZ0hI0L+dIPrm4YlFQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "vite": "^2.6.0 || ^3.0.0 || ^4.0.0 || ^5.0.0-0 || ^6.0.0-0 || ^7.0.0-0"
      }
    },
    "node_modules/vite-plugin-vue-devtools": {
      "version": "7.7.9",
      "resolved": "https://registry.npmjs.org/vite-plugin-vue-devtools/-/vite-plugin-vue-devtools-7.7.9.tgz",
      "integrity": "sha512-08DvePf663SxqLFJeMVNW537zzVyakp9KIrI2K7lwgaTqA5R/ydN/N2K8dgZO34tg/Qmw0ch84fOKoBtCEdcGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-core": "^7.7.9",
        "@vue/devtools-kit": "^7.7.9",
        "@vue/devtools-shared": "^7.7.9",
        "execa": "^9.5.2",
        "sirv": "^3.0.1",
        "vite-plugin-inspect": "0.8.9",
        "vite-plugin-vue-inspector": "^5.3.1"
      },
      "engines": {
        "node": ">=v14.21.3"
      },
      "peerDependencies": {
        "vite": "^3.1.0 || ^4.0.0-0 || ^5.0.0-0 || ^6.0.0-0 || ^7.0.0-0"
      }
    },
    "node_modules/vite-plugin-vue-devtools/node_modules/vite-plugin-inspect": {
      "version": "0.8.9",
      "resolved": "https://registry.npmjs.org/vite-plugin-inspect/-/vite-plugin-inspect-0.8.9.tgz",
      "integrity": "sha512-22/8qn+LYonzibb1VeFZmISdVao5kC22jmEKm24vfFE8siEn47EpVcCLYMv6iKOYMJfjSvSJfueOwcFCkUnV3A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@antfu/utils": "^0.7.10",
        "@rollup/pluginutils": "^5.1.3",
        "debug": "^4.3.7",
        "error-stack-parser-es": "^0.1.5",
        "fs-extra": "^11.2.0",
        "open": "^10.1.0",
        "perfect-debounce": "^1.0.0",
        "picocolors": "^1.1.1",
        "sirv": "^3.0.0"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "vite": "^3.1.0 || ^4.0.0 || ^5.0.0-0 || ^6.0.1"
      },
      "peerDependenciesMeta": {
        "@nuxt/kit": {
          "optional": true
        }
      }
    },
    "node_modules/vite-plugin-vue-inspector": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/vite-plugin-vue-inspector/-/vite-plugin-vue-inspector-5.3.2.tgz",
      "integrity": "sha512-YvEKooQcSiBTAs0DoYLfefNja9bLgkFM7NI2b07bE2SruuvX0MEa9cMaxjKVMkeCp5Nz9FRIdcN1rOdFVBeL6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.23.0",
        "@babel/plugin-proposal-decorators": "^7.23.0",
        "@babel/plugin-syntax-import-attributes": "^7.22.5",
        "@babel/plugin-syntax-import-meta": "^7.10.4",
        "@babel/plugin-transform-typescript": "^7.22.15",
        "@vue/babel-plugin-jsx": "^1.1.5",
        "@vue/compiler-dom": "^3.3.4",
        "kolorist": "^1.8.0",
        "magic-string": "^0.30.4"
      },
      "peerDependencies": {
        "vite": "^3.0.0-0 || ^4.0.0-0 || ^5.0.0-0 || ^6.0.0-0 || ^7.0.0-0"
      }
    },
    "node_modules/vite-plugin-vue-inspector/node_modules/@vue/babel-helper-vue-transform-on": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@vue/babel-helper-vue-transform-on/-/babel-helper-vue-transform-on-1.5.0.tgz",
      "integrity": "sha512-0dAYkerNhhHutHZ34JtTl2czVQHUNWv6xEbkdF5W+Yrv5pCWsqjeORdOgbtW2I9gWlt+wBmVn+ttqN9ZxR5tzA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vite-plugin-vue-inspector/node_modules/@vue/babel-plugin-jsx": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@vue/babel-plugin-jsx/-/babel-plugin-jsx-1.5.0.tgz",
      "integrity": "sha512-mneBhw1oOqCd2247O0Yw/mRwC9jIGACAJUlawkmMBiNmL4dGA2eMzuNZVNqOUfYTa6vqmND4CtOPzmEEEqLKFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-plugin-utils": "^7.27.1",
        "@babel/plugin-syntax-jsx": "^7.27.1",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.0",
        "@babel/types": "^7.28.2",
        "@vue/babel-helper-vue-transform-on": "1.5.0",
        "@vue/babel-plugin-resolve-type": "1.5.0",
        "@vue/shared": "^3.5.18"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        }
      }
    },
    "node_modules/vite-plugin-vue-inspector/node_modules/@vue/babel-plugin-resolve-type": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@vue/babel-plugin-resolve-type/-/babel-plugin-resolve-type-1.5.0.tgz",
      "integrity": "sha512-Wm/60o+53JwJODm4Knz47dxJnLDJ9FnKnGZJbUUf8nQRAtt6P+undLUAVU3Ha33LxOJe6IPoifRQ6F/0RrU31w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-plugin-utils": "^7.27.1",
        "@babel/parser": "^7.28.0",
        "@vue/compiler-sfc": "^3.5.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sxzz"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/vite/node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/vscode-uri": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/vscode-uri/-/vscode-uri-3.1.0.tgz",
      "integrity": "sha512-/BpdSx+yCQGnCvecbyXdxHDkuk55/G3xwnC0GqY4gmQ3j+A+g8kzzgB4Nk/SINjqn6+waqw3EgbVF2QKExkRxQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vue": {
      "version": "3.5.25",
      "resolved": "https://registry.npmjs.org/vue/-/vue-3.5.25.tgz",
      "integrity": "sha512-YLVdgv2K13WJ6n+kD5owehKtEXwdwXuj2TTyJMsO7pSeKw2bfRNZGjhB7YzrpbMYj5b5QsUebHpOqR3R3ziy/g==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-dom": "3.5.25",
        "@vue/compiler-sfc": "3.5.25",
        "@vue/runtime-dom": "3.5.25",
        "@vue/server-renderer": "3.5.25",
        "@vue/shared": "3.5.25"
      },
      "peerDependencies": {
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/vue-chartjs": {
      "version": "5.3.3",
      "resolved": "https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-5.3.3.tgz",
      "integrity": "sha512-jqxtL8KZ6YJ5NTv6XzrzLS7osyegOi28UGNZW0h9OkDL7Sh1396ht4Dorh04aKrl2LiSalQ84WtqiG0RIJb0tA==",
      "license": "MIT",
      "peerDependencies": {
        "chart.js": "^4.1.1",
        "vue": "^3.0.0-0 || ^2.7.0"
      }
    },
    "node_modules/vue-component-type-helpers": {
      "version": "2.2.12",
      "resolved": "https://registry.npmjs.org/vue-component-type-helpers/-/vue-component-type-helpers-2.2.12.tgz",
      "integrity": "sha512-YbGqHZ5/eW4SnkPNR44mKVc6ZKQoRs/Rux1sxC6rdwXb4qpbOSYfDr9DsTHolOTGmIKgM9j141mZbBeg05R1pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vue-router": {
      "version": "4.6.3",
      "resolved": "https://registry.npmjs.org/vue-router/-/vue-router-4.6.3.tgz",
      "integrity": "sha512-ARBedLm9YlbvQomnmq91Os7ck6efydTSpRP3nuOKCvgJOHNrhRoJDSKtee8kcL1Vf7nz6U+PMBL+hTvR3bTVQg==",
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-api": "^6.6.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/posva"
      },
      "peerDependencies": {
        "vue": "^3.5.0"
      }
    },
    "node_modules/vue-router/node_modules/@vue/devtools-api": {
      "version": "6.6.4",
      "resolved": "https://registry.npmjs.org/@vue/devtools-api/-/devtools-api-6.6.4.tgz",
      "integrity": "sha512-sGhTPMuXqZ1rVOk32RylztWkfXTRhuS7vgAKv0zjqk8gbsHkJ7xfFf+jbySxt7tWObEJwyKaHMikV/WGDiQm8g==",
      "license": "MIT"
    },
    "node_modules/vue-tsc": {
      "version": "2.2.12",
      "resolved": "https://registry.npmjs.org/vue-tsc/-/vue-tsc-2.2.12.tgz",
      "integrity": "sha512-P7OP77b2h/Pmk+lZdJ0YWs+5tJ6J2+uOQPo7tlBnY44QqQSPYvS0qVT4wqDJgwrZaLe47etJLLQRFia71GYITw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@volar/typescript": "2.4.15",
        "@vue/language-core": "2.2.12"
      },
      "bin": {
        "vue-tsc": "bin/vue-tsc.js"
      },
      "peerDependencies": {
        "typescript": ">=5.0.0"
      }
    },
    "node_modules/vue3-google-signin": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/vue3-google-signin/-/vue3-google-signin-2.1.1.tgz",
      "integrity": "sha512-RwlwyeCv8+PZjK35C/UyJN4/9MH+Fsz4bJDO7IjtmRuOaTMrvmMmI6SP5qkJgD7w9MIKOCj5rYVFMAL7+NCM0A==",
      "license": "MIT",
      "peerDependencies": {
        "vue": "^3"
      }
    },
    "node_modules/w3c-xmlserializer": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-5.0.0.tgz",
      "integrity": "sha512-o8qghlI8NZHU1lLPrpi2+Uq7abh4GGPpYANlalzWxyWteJOCsr/P+oPBA49TOLu5FTZO4d3F9MnWJfiMo4BkmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/web-streams-polyfill": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-3.3.3.tgz",
      "integrity": "sha512-d2JWLCivmZYTSIoge9MsgFCZrt571BikcWGYkjC1khllbTeDlGqZ2D8vD8E/lJa8WGWbb7Plm8/XJYV7IJHZZw==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
      "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/whatwg-encoding": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-3.1.1.tgz",
      "integrity": "sha512-6qN4hJdMwfYBtE3YBTTHhoeuUrDBPZmbQaxWAqSALV/MeEnR5z1xd8UKud2RAkFoPkmB+hli1TZSnyi84xz1vQ==",
      "license": "MIT",
      "dependencies": {
        "iconv-lite": "0.6.3"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/whatwg-mimetype": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-4.0.0.tgz",
      "integrity": "sha512-QaKxh0eNIi2mE9p2vEdzfagOKHCcj1pJ56EEHGQOVxp8r9/iszLUUV7v89x9O1p/T+NlTM5W7jW6+cz4Fq1YVg==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/whatwg-url": {
      "version": "14.2.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.2.0.tgz",
      "integrity": "sha512-De72GdQZzNTUBBChsXueQUnPKDkg/5A5zp7pFDuQAj5UFoENpiACU0wlCvzpAGnTkj++ihpKwKyYewn/XNUbKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tr46": "^5.1.0",
        "webidl-conversions": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/wide-align": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.5.tgz",
      "integrity": "sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==",
      "license": "ISC",
      "optional": true,
      "dependencies": {
        "string-width": "^1.0.2 || 2 || 3 || 4"
      }
    },
    "node_modules/wide-align/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wide-align/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/wide-align/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wide-align/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/ws": {
      "version": "8.18.3",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.3.tgz",
      "integrity": "sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/wsl-utils": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/wsl-utils/-/wsl-utils-0.1.0.tgz",
      "integrity": "sha512-h3Fbisa2nKGPxCpm89Hk33lBLsnaGBvctQopaBSOW/uIs6FTe1ATyAnKFJrzVs9vpGdsTe73WF3V4lIsk4Gacw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-wsl": "^3.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/xml-name-validator": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-5.0.0.tgz",
      "integrity": "sha512-EvGK8EJ3DhaHfbRlETOWAS5pO9MZITeauHKJyb8wyajUfQUenkIg2MvLDTZ4T/TgIcm3HU0TFBgWWboAZ30UHg==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/xmlchars": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
      "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yoctocolors": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yoctocolors/-/yoctocolors-2.1.2.tgz",
      "integrity": "sha512-CzhO+pFNo8ajLM2d2IW/R93ipy99LWjtwblvC1RsoSUMZgyLbYFr221TnSNT7GjGdYui6P459mw9JH/g/zW2ug==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}

```

---
### File: package.json
---

```json
{
  "name": "bloomscape",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": "^20.19.0 || >=22.12.0"
  },
  "scripts": {
    "dev": "vite --host",
    "dev-server": "tsx watch src/server/index.ts",
    "build": "run-p type-check \"build-only {@}\" --",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --build",
    "format": "prettier --write src/",
    "hmr-debug": "vite --debug hmr"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "@vueuse/components": "^13.6.0",
    "@vueuse/core": "^13.6.0",
    "@vueuse/integrations": "^13.8.0",
    "axios": "^1.11.0",
    "bcrypt": "^6.0.0",
    "bcryptjs": "^3.0.2",
    "better-sqlite3": "^12.2.0",
    "chart.js": "^4.5.1",
    "cheerio": "^1.1.2",
    "cookie-session": "^2.1.0",
    "date-fns": "^4.1.0",
    "dotenv": "^17.2.0",
    "express": "^5.1.0",
    "fuse.js": "^7.1.0",
    "google-auth-library": "^10.5.0",
    "pinia": "^3.0.3",
    "playwright": "^1.55.0",
    "remult": "^3.0.5",
    "slugify": "^1.6.6",
    "sqlite3": "^5.1.7",
    "tailwindcss": "^4.1.17",
    "three": "^0.181.2",
    "ts-node": "^10.9.2",
    "tsx": "^4.20.3",
    "vue": "^3.5.18",
    "vue-chartjs": "^5.3.3",
    "vue-router": "^4.5.1",
    "vue3-google-signin": "^2.1.1"
  },
  "devDependencies": {
    "@tsconfig/node22": "^22.0.2",
    "@types/bcrypt": "^5.0.2",
    "@types/better-sqlite3": "^7.6.13",
    "@types/cookie-session": "^2.0.49",
    "@types/express": "^5.0.3",
    "@types/jsdom": "^21.1.7",
    "@types/node": "^22.15.32",
    "@vitejs/plugin-vue": "^6.0.2",
    "@vitejs/plugin-vue-jsx": "^5.1.2",
    "@vue/test-utils": "^2.4.6",
    "@vue/tsconfig": "^0.7.0",
    "daisyui": "^5.0.43",
    "jsdom": "^26.1.0",
    "npm-run-all2": "^8.0.4",
    "prettier": "3.5.3",
    "typescript": "~5.8.0",
    "vite": "^7.0.0",
    "vite-plugin-vue-devtools": "^7.7.7",
    "vue-tsc": "^2.2.12"
  }
}

```

---
### File: src/App.vue
---

```vue
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import Base from './BaseApp.vue'
import { onMounted } from 'vue'
import AuthModal from './components/auth/AuthModal.vue'
import { useAuthModal } from '@/components/auth/logic/useAuthModal'

import GlobalModal from './components/GlobalModal.vue'
import GlobalChatDrawer from './components/chat/GlobalChatDrawer.vue'

const auth = useAuthStore()

const { isOpen, mode, handleSuccess } = useAuthModal()

onMounted(async () => {
  await auth.fetchSessionUser()
})
</script>

<template>
  <AuthModal v-model:is-open="isOpen" :mode="mode" @success="handleSuccess" />
  <GlobalModal />
  <GlobalChatDrawer />

  <Base>
    <RouterView />
  </Base>
</template>

```

---
### File: src/BaseApp.vue
---

```vue
<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useRoute } from 'vue-router'

const themeStore = useThemeStore()

onMounted(() => {
    themeStore.applyTheme()
})

const route = useRoute()
</script>

<template>
    <Header v-if="!route.meta.hideLayout" />

    <main class="container mx-auto h-full flex flex-col gap-10 items-center justify-center">
        <slot />
    </main>

    <Footer v-if="!route.meta.hideLayout" />
</template>

```

---
### File: src/assets/globals.css
---

```css
@import 'tailwindcss';

@plugin "daisyui" {
  themes: forest --default --prefersdark;
}

@theme {
  --breakpoint-phone: 450px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;

  --color-bloom-primary: #34d399;
  --color-bloom-secondary: #10b981;
  --color-bloom-dark: #022c22;
}

```

---
### File: src/assets/main.css
---

```css

```

---
### File: src/components/FlowerImage.vue
---

```vue
<script setup lang="ts">
import { computed } from 'vue';
import { GameController } from '@/server/controllers/GameController';
import { FlowerStatus } from '@/shared/types'; // Assure-toi que le chemin est correct

// Définition des props
interface Props {
    slug: string;
    status?: FlowerStatus;
    type?: 'icon' | 'sprite';
    size?: number | string;
    alt?: string;
}

const props = withDefaults(defineProps<Props>(), {
    status: FlowerStatus.MATURE,
    type: 'icon',
    size: 32,
    alt: 'Flower icon'
});

const imageUrl = computed(() => {
    if (!props.slug) return '';
    return GameController.getFlowerAssetUrl(props.slug, props.status, props.type);
});

const sizeStyle = computed(() => {
    const s = props.size;
    const finalSize = typeof s === 'number' ? `${s}px` : s;

    return {
        width: finalSize,
        height: finalSize,
    };
});
</script>

<template>
    <img v-if="imageUrl" :src="imageUrl" :alt="alt" class="flower-image-component pixelated" :style="sizeStyle"
        draggable="false" />
    <div v-else class="flower-image-component pixelated bg-slate-800/50 rounded-md animate-pulse" :style="sizeStyle">
    </div>
</template>

<style scoped>
.flower-image-component {
    object-fit: contain;

    vertical-align: middle;
    display: inline-block;
}

.pixelated {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
}
</style>
```

---
### File: src/components/Footer.vue
---

```vue
<script setup lang="ts">
import { ROUTES_ENUM as routes } from '@/routes/routes_enum'
import ThemeSwitcher from './buttons/ThemeSwitcher.vue'
import DiscordIcon from './icons/DiscordIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'

const appTitle = import.meta.env.VITE_APP
const appVersion = import.meta.env.VITE_APP_VERSION

const instagramAccountURL = 'https://instagram.com/comx.app/'
const discordServerURL = 'https://discord.gg/4sJyaynWdW'
</script>

<template>
    <footer class="footer sm:footer-horizontal p-10 bg-slate-950 text-slate-400 border-t border-slate-800">
        <aside>
            <div class="flex items-center gap-2 mb-1">
                <div
                    class="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-slate-900 text-xs font-bold shadow-lg shadow-emerald-500/20">
                    B
                </div>
                <span class="text-xl font-bold text-white tracking-tight">{{ appTitle }}</span>
            </div>

            <div class="flex items-center gap-2 mt-1">
                <span class="text-sm">&copy; {{ new Date().getFullYear() }}</span>
                <kbd class="kbd kbd-sm bg-slate-900 border-slate-700 text-emerald-400 font-mono text-xs">
                    v{{ appVersion }}
                </kbd>
            </div>
        </aside>

        <nav>
            <h6 class="footer-title text-white opacity-100 mb-2">Services</h6>
            <a class="link link-hover hover:text-emerald-400 transition-colors">Advertisement</a>
            <a class="link link-hover hover:text-emerald-400 transition-colors">Market API</a>
        </nav>

        <nav>
            <h6 class="footer-title text-white opacity-100 mb-2">Company</h6>
            <RouterLink class="link link-hover hover:text-emerald-400 transition-colors" :to="routes.ABOUT.path">
                About us
            </RouterLink>
            <RouterLink class="link link-hover hover:text-emerald-400 transition-colors" :to="routes.WIKI.path">
                Wiki
            </RouterLink>
            <RouterLink class="link link-hover hover:text-emerald-400 transition-colors" :to="routes.SUPPORT.path">
                Support
            </RouterLink>
        </nav>

        <nav>
            <h6 class="footer-title text-white opacity-100 mb-2">Community</h6>
            <div class="grid grid-flow-col gap-4">
                <a :href="instagramAccountURL" target="_blank"
                    class="hover:text-emerald-400 hover:-translate-y-1 transition-all">
                    <InstagramIcon class="w-6 h-6" />
                </a>
                <a :href="discordServerURL" target="_blank"
                    class="hover:text-emerald-400 hover:-translate-y-1 transition-all">
                    <DiscordIcon class="w-6 h-6" />
                </a>
            </div>
        </nav>
    </footer>
</template>

<style scoped>
/* Optional: Ensure footer links don't have default underlining until hover */
.link {
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>
```

---
### File: src/components/Form.vue
---

```vue
<script setup lang="ts">
import { PropType, Ref } from 'vue'

const props = defineProps({
    method: {
        type: String,
        default: 'POST',
    },
    title: {
        type: String,
        default: 'Form Title',
    },
    submitButtonText: {
        type: String,
        default: 'Submit',
    },
    submitAction: {
        type: Function as PropType<(payload?: any) => void>,
        default: () => {
            console.warn('No submit action provided')
        },
    },
    fieldSetBorder: {
        type: Boolean,
        default: true,
    },
})
</script>

<template>
    <form :method="method" @submit.prevent="submitAction">
        <div class="flex justify-center">
            <fieldset
                class="flex flex-col gap-5 fieldset bg-base-100 rounded-box w-xs phone:w-sm sm:w-md p-6 mt-5 mb-5 text-sm"
                :class="{
                    'border border-base-300': fieldSetBorder,
                }">
                <legend class="fieldset-legend">{{ title }}</legend>

                <h2 v-if="$slots.default" class="color-neutral-content">
                    <slot name="header"></slot>
                </h2>

                <slot name="fields"></slot>

                <div class="flex w-full items-center mt-4">
                    <button class="btn btn-primary rounded-2xl flex-1">{{ submitButtonText }}</button>
                    <slot name="moreBtns"></slot>
                </div>

                <p class="label">
                    <slot name="small"></slot>
                </p>
            </fieldset>
        </div>
    </form>
</template>

```

---
### File: src/components/GlobalModal.vue
---

```vue
<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const modalStore = useModalStore();
const { isOpen, title, message, type, actions, size, component, componentProps, sideBarMargin } = storeToRefs(modalStore);

// Configuration visuelle selon le type (couleurs)
const config = computed(() => {
    switch (type.value) {
        case 'success': return { color: 'text-emerald-400', border: 'border-emerald-500/30' };
        case 'error': return { color: 'text-red-400', border: 'border-red-500/30' };
        case 'warning': return { color: 'text-amber-400', border: 'border-amber-500/30' };
        default: return { color: 'text-blue-400', border: 'border-blue-500/30' };
    }
});

// Configuration des tailles (Largeur / Hauteur)
const sizeClasses = computed(() => {
    switch (size.value) {
        case 'large':
            return 'w-full h-full phone:max-w-6xl phone:h-[85vh] phone:mx-5' + (sideBarMargin.value ? ' md:ml-25' : '');
        case 'fullscreen':
            return 'w-full h-full max-w-none border-1' + (sideBarMargin.value ? ' md:ml-25' : '');
        default:
            return 'w-full max-w-md';
    }
});

// Helper pour le style des boutons
const getBtnClass = (variant?: string) => {
    switch (variant) {
        case 'danger': return 'btn-error text-white';
        case 'ghost': return 'btn-ghost text-slate-400';
        case 'secondary': return 'btn-outline border-slate-600 text-slate-300 hover:bg-slate-700';
        default: return 'btn-primary text-white shadow-lg shadow-emerald-500/20';
    }
};
</script>

<template>
    <transition name="fade">
        <div v-if="isOpen"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm md:p-4"
            @click.self="modalStore.close">

            <transition name="scale">
                <div v-if="isOpen"
                    class="glass-panel flex flex-col p-6 rounded-2xl border shadow-2xl relative overflow-hidden transition-all duration-300"
                    :class="[config.border, sizeClasses]">

                    <div
                        class="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none">
                    </div>

                    <div class="flex-none flex items-center gap-4 mb-4">
                        <h3 class="text-md phone:text-xl font-bold tracking-wide" :class="config.color">
                            {{ title }}
                        </h3>
                    </div>

                    <div class="flex-1 overflow-y-auto min-h-0 custom-scrollbar phone:mb-4">

                        <component v-if="component" :is="component" v-bind="componentProps" />

                        <p v-else class="text-slate-300 text-sm leading-relaxed">
                            {{ message }}
                        </p>
                    </div>

                    <div class="flex-none flex justify-end gap-3 phone:border-t phone:border-white/5 pt-2 phone:pt-4">
                        <button v-for="(action, idx) in actions" :key="idx" @click="action.onClick"
                            class="btn btn-sm rounded-lg font-bold transition-transform hover:scale-105"
                            :class="getBtnClass(action.variant)">
                            {{ action.label }}
                        </button>
                    </div>

                </div>
            </transition>
        </div>
    </transition>
</template>

<style scoped>
.glass-panel {
    background: rgba(15, 23, 42, 0.95);
    /* Légèrement plus opaque pour la lisibilité du Market */
    backdrop-filter: blur(16px);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
}

/* Scrollbar personnalisée fine et discrète pour le contenu interne */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-enter-from,
.scale-leave-to {
    transform: scale(0.95) translateY(10px);
    opacity: 0;
}
</style>
```

---
### File: src/components/Header.vue
---

```vue
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import { useAuthModal } from './auth/logic/useAuthModal';
import { RouterLink, useRouter } from 'vue-router';
import { remult } from 'remult'; // Import nécessaire pour vérifier l'utilisateur
import { useAuthStore } from '@/stores/auth';
import { useChatStore } from '@/stores/chat';

const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const handleLinkClick = (path?: string) => {
    isMenuOpen.value = false;
    if (path) router.push(path);
}

const menuLinks = [
    { name: 'Marketplace', path: ROUTES.MARKET.path },
    { name: 'Wiki', path: ROUTES.WIKI.path },
    { name: 'Leaderboard', path: '#' },
    { name: 'FloraDex', path: ROUTES.FLORADEX.path }
]

const chat = useChatStore()
const auth = useAuthStore()

onMounted(async () => {
    await auth.fetchSessionUser()
})
</script>

<template>
    <nav class="sticky top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

            <button class="flex items-center gap-2 cursor-pointer z-50" @click="handleLinkClick(ROUTES.HOME.path)">
                <div>
                    <img src="/bloomscape_logo.png" alt="Logo" width="45" height="45" />
                </div>
                <span class="font-bold tracking-wide w-40 hidden phone:block">
                    <img src="/bloomscape_text.png" alt="BloomScape">
                </span>
            </button>

            <div class="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                <RouterLink v-for="link in menuLinks" :to="link.path" class="hover:text-white transition-colors">
                    {{ link.name }}
                </RouterLink>
            </div>

            <div class="flex items-center gap-4">

                <div v-if="auth.user" class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar online placeholder">
                        <div class="w-8 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
                            <img :src="`https://ui-avatars.com/api/?name=${auth.user.tag}&background=10b981&color=fff`"
                                :alt="auth.user.tag" />
                        </div>
                    </label>

                    <ul tabindex="0"
                        class="mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-slate-800 rounded-box w-52 border border-slate-700 text-slate-200">
                        <li class="menu-title">
                            <span class="text-emerald-400">{{ auth.user.tag }}</span>
                        </li>
                        <li>
                            <RouterLink class="justify-between" :to="ROUTES.CURRENT_USER_PROFILE.path">
                                Profile
                            </RouterLink>
                        </li>

                        <li>
                            <button class="justify-between" @click="chat.toggle">
                                Messages
                            </button>
                        </li>

                        <li v-if="remult.isAllowed('admin')">
                            <RouterLink :to="ROUTES.ADMIN_MANAGER.path">Admin Panel</RouterLink>
                        </li>

                        <div class="divider my-0"></div>

                        <li><a @click="router.push(ROUTES.LOGOUT.path)"
                                class="text-red-400 hover:text-red-300">Logout</a></li>
                    </ul>
                </div>

                <button v-else class="btn btn-sm btn-ghost text-slate-300" @click="() => {
                    const authModal = useAuthModal()
                    authModal.openAuthModal('login')
                }">Login</button>

                <button
                    class="btn btn-sm bg-emerald-500 hover:bg-emerald-400 border-none text-slate-900 font-bold px-6 shadow-lg shadow-emerald-500/20"
                    @click="router.push(ROUTES.LAND.path)">
                    Play
                </button>

                <button @click="toggleMenu" class="md:hidden btn btn-square btn-ghost btn-sm text-slate-300 bg-none">
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-4 opacity-0">
            <div v-if="isMenuOpen" class="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl">
                <div class="flex flex-col p-4 space-y-4 text-slate-300 font-medium">
                    <RouterLink v-for="link in menuLinks" :to="link.path"
                        class="block py-2 px-4 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition-colors"
                        @click="handleLinkClick()">
                        {{ link.name }}
                    </RouterLink>
                </div>
            </div>
        </transition>
    </nav>
</template>
```

---
### File: src/components/HomeMarketTicker.vue
---

```vue
<script setup lang="ts">
import { ref } from 'vue'

const marketTicker = ref([
    { name: 'Moon Rose', change: '+12%', price: 420, up: true },
    { name: 'Sun Sunflower', change: '-2%', price: 85, up: false },
    { name: 'Void Tulip', change: '+5%', price: 1200, up: true },
    { name: 'Basic Daisy', change: '0%', price: 15, up: true },
    { name: 'Crystal Lily', change: '+24%', price: 2400, up: true },
    { name: 'Fire Orchid', change: '-8%', price: 310, up: false },
])
</script>

<template>
    <div class="w-full bg-slate-900/50 border-y border-slate-800 overflow-hidden py-3 backdrop-blur-sm relative z-20">
        <div class="flex gap-12 animate-marquee whitespace-nowrap">
            <div v-for="(item, i) in [...marketTicker, ...marketTicker, ...marketTicker]" :key="i"
                class="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                <span class="font-bold text-slate-300 text-sm">{{ item.name }}</span>
                <span class="font-mono text-white text-sm">{{ item.price }} S</span>
                <span class="text-xs px-1.5 py-0.5 rounded font-mono"
                    :class="item.up ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'">
                    {{ item.change }}
                </span>
                <div class="w-1 h-1 rounded-full bg-slate-700 mx-2"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 40s linear infinite;
}

.animate-marquee:hover {
    animation-play-state: paused;
}
</style>
```

---
### File: src/components/admin/AdminSideBar.vue
---

```vue
<script setup lang="ts">

// Define the shape of a menu item
export interface MenuItem {
    id: string
    label: string
}

defineProps<{
    activeTab: string
    menuItems: MenuItem[]
}>()

const emit = defineEmits<{
    (e: 'update:tab', id: string): void
}>()
</script>

<template>
    <aside class="w-64 bg-slate-900 border-r border-slate-800 flex flex-col absolute h-full z-10">
        <div class="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900/50">
            <span class="text-emerald-500 font-bold tracking-wider text-sm uppercase">Admin Managing Tools</span>
        </div>

        <nav class="flex-1 p-4 space-y-1">
            <button v-for="item in menuItems" :key="item.id" @click="emit('update:tab', item.id)"
                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                :class="activeTab === item.id
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'">
                {{ item.label }}
            </button>
        </nav>

        <div class="p-4 border-t border-slate-800 text-xs text-slate-500">
            <p>Admin Panel v1.0</p>
            <p>Server Status: <span class="text-emerald-500">Online</span></p>
        </div>
    </aside>
</template>
```

---
### File: src/components/admin/integrated_views/AdminConfig.vue
---

```vue
<template>
    <div class="space-y-6 max-w-2xl">
        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 class="font-bold text-white mb-6">Economy Parameters</h3>

            <div class="form-control w-full mb-4">
                <label class="label"><span class="label-text">Global Growth Speed Multiplier</span></label>
                <input type="number" value="1.0" class="input input-bordered bg-slate-950" />
            </div>

            <div class="form-control w-full mb-4">
                <label class="label"><span class="label-text">Market Tax Rate (%)</span></label>
                <input type="number" value="5" class="input input-bordered bg-slate-950" />
            </div>

            <button class="btn btn-primary bg-emerald-600 mt-4">Save Configuration</button>
        </div>
    </div>
</template>
```

---
### File: src/components/admin/integrated_views/AdminDatabase.vue
---

```vue
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { remult, type Repository, type FieldMetadata, type ClassType } from 'remult'

import { Achievement, ClaimLink, FlowerSpecies, Island, Item, SapPurchase, Tile, User } from '@/shared'

type EntityConfig = {
    label: string
    key: string
    entity: ClassType<any>
}

const ENTITY_MAP: EntityConfig[] = [
    { label: 'Flower Species', key: 'flowers', entity: FlowerSpecies },
    { label: 'Items', key: 'items', entity: Item },
    { label: 'Users', key: 'users', entity: User },
    { label: 'Achievements', key: 'achievements', entity: Achievement },
    { label: 'Islands', key: 'islands', entity: Island },
    { label: 'Tiles', key: 'tiles', entity: Tile },
    { label: 'Sap Purchases', key: 'sap', entity: SapPurchase },
    { label: 'Claim Links', key: 'claimlinks', entity: ClaimLink },
]

const activeEntityKey = ref(ENTITY_MAP[0].key)
const items = ref<any[]>([])
const loading = ref(false)
const error = ref('')

// Pagination State
const page = ref(1)
const pageSize = 100
const totalCount = ref(0)

// Modal State
const showModal = ref(false)
const isEditing = ref(false)
const editingItem = ref<any>({})

// --- 4. COMPUTED HELPERS ---
const currentConfig = computed(() => ENTITY_MAP.find(e => e.key === activeEntityKey.value)!)

// Generic Repo Access
const currentRepo = computed((): Repository<any> => remult.repo(currentConfig.value.entity))

const totalPages = computed(() => Math.ceil(totalCount.value / pageSize))

const displayFields = computed(() => {
    if (!currentRepo.value || !currentRepo.value.metadata) return []
    return currentRepo.value.metadata.fields.toArray().filter(f => !['passwordHash'].includes(f.key))
})

const formFields = computed(() => {
    if (!currentRepo.value || !currentRepo.value.metadata) return []
    return currentRepo.value.metadata.fields.toArray().filter(f =>
        !['createdAt', 'updatedAt', 'passwordHash', 'id'].includes(f.key)
    )
})

// --- 5. ACTIONS ---

async function loadData() {
    loading.value = true
    error.value = ''
    try {
        // 1. Get total count for pagination UI
        totalCount.value = await currentRepo.value.count()

        // 2. Get paginated data
        items.value = await currentRepo.value.find({
            limit: pageSize,
            page: page.value
        })
    } catch (err: any) {
        error.value = err.message
    } finally {
        loading.value = false
    }
}

function changePage(delta: number) {
    const newPage = page.value + delta
    if (newPage > 0 && newPage <= totalPages.value) {
        page.value = newPage
        loadData()
    }
}

// Open Create Modal
function openCreate() {
    isEditing.value = false
    editingItem.value = {}
    showModal.value = true
}

// Open Edit Modal
function openEdit(item: any) {
    isEditing.value = true
    editingItem.value = { ...item }
    showModal.value = true
}

// Save (Create or Update)
async function saveItem() {
    try {
        if (isEditing.value) {
            await currentRepo.value.save(editingItem.value)
        } else {
            await currentRepo.value.insert(editingItem.value)
        }
        await loadData()
        showModal.value = false
    } catch (err: any) {
        alert("Error saving: " + err.message)
    }
}

// Delete
async function deleteItem(item: any) {
    if (!confirm(`Are you sure you want to delete this ${currentConfig.value.label}?`)) return

    try {
        await currentRepo.value.delete(item)
        await loadData()
    } catch (err: any) {
        alert("Error deleting: " + err.message)
    }
}

// Helpers for Inputs
function getInputType(field: FieldMetadata) {
    if (field.valueType === Boolean) return 'checkbox'
    if (field.valueType === Number) return 'number'
    if (field.key.toLowerCase().includes('date') || field.valueType === Date) return 'datetime-local'
    return 'text'
}

function formatDateForInput(date: any) {
    if (!date) return ''
    const d = new Date(date)
    if (isNaN(d.getTime())) return ''
    const offset = d.getTimezoneOffset() * 60000
    return (new Date(d.getTime() - offset)).toISOString().slice(0, 16)
}

// Reset page when tab changes
watch(activeEntityKey, () => {
    page.value = 1
    loadData()
})

onMounted(() => {
    loadData()
})
</script>

<template>
    <div class="h-[calc(100vh-8rem)] flex flex-col">

        <div class="flex flex-wrap gap-2 mb-4 p-1 bg-slate-900 rounded-lg border border-slate-800 w-fit shrink-0">
            <button v-for="conf in ENTITY_MAP" :key="conf.key" @click="activeEntityKey = conf.key"
                class="px-4 py-2 rounded-md text-sm font-medium transition-colors" :class="activeEntityKey === conf.key
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                {{ conf.label }}
            </button>
        </div>

        <div
            class="flex justify-between items-center bg-slate-900 p-4 rounded-t-xl border border-slate-800 border-b-0 shrink-0">
            <div>
                <h3 class="font-bold text-white text-lg">{{ currentConfig.label }} Database</h3>
                <p class="text-xs text-slate-500">Manage raw data records directly.</p>
            </div>
            <div class="flex gap-2">
                <button @click="loadData" class="btn btn-sm btn-ghost text-slate-400">Refresh</button>
                <button @click="openCreate"
                    class="btn btn-sm bg-emerald-600 hover:bg-emerald-500 text-white border-none">
                    + New {{ currentConfig.label }}
                </button>
            </div>
        </div>

        <div
            class="flex-1 bg-slate-900 border border-slate-800 rounded-b-xl overflow-scroll flex flex-col min-h-0 relative">

            <div class="overflow-scroll flex-1 custom-scrollbar">

                <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-slate-900/50 z-20">
                    <span class="loading loading-spinner text-emerald-500 loading-lg"></span>
                </div>

                <div v-if="error" class="p-12 text-center text-red-400">
                    {{ error }}
                </div>

                <div v-else-if="items.length === 0 && !loading"
                    class="h-full flex flex-col items-center justify-center text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-12 h-12 mb-2 opacity-20">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3.75h3M12 15.75h3M12 12h3m-3 3.75h-3m-3-3.75H9m0 3.75H9m-3-3.75H5.25m3.75 0h-3m3 3.75h-3" />
                    </svg>
                    <p>No data currently available.</p>
                </div>

                <table v-else class="table table-xs w-full">
                    <thead class="bg-slate-950 text-slate-400 sticky top-0 z-10 shadow-sm">
                        <tr>
                            <th class="bg-slate-950 w-24">Actions</th>
                            <th v-for="field in displayFields" :key="field.key" class="bg-slate-950 capitalize">
                                {{ field.caption || field.key }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.id" class="hover:bg-slate-800/50 border-slate-800 group">
                            <td
                                class="flex gap-2 sticky left-0 bg-slate-900 group-hover:bg-slate-800 transition-colors">
                                <button @click="openEdit(item)" class="text-blue-400 hover:text-blue-300">Edit</button>
                                <button @click="deleteItem(item)" class="text-red-400 hover:text-red-300">Del</button>
                            </td>
                            <td v-for="field in displayFields" :key="field.key"
                                class="whitespace-nowrap max-w-xs truncate">
                                <span v-if="field.valueType === Boolean">
                                    <span v-if="item[field.key]" class="text-emerald-400">Yes</span>
                                    <span v-else class="text-slate-600">No</span>
                                </span>
                                <span v-else-if="field.key.toLowerCase().includes('date') || field.valueType === Date"
                                    class="text-slate-500 font-mono text-xs">
                                    {{ item[field.key] ? new Date(item[field.key]).toLocaleString() : '-' }}
                                </span>
                                <span v-else>
                                    {{ item[field.key] }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div
                class="p-2 border-t border-slate-800 text-xs text-slate-400 bg-slate-950 flex justify-between items-center shrink-0">
                <span>Total Records: <span class="text-white">{{ totalCount }}</span></span>

                <div class="flex items-center gap-2">
                    <button @click="changePage(-1)" :disabled="page === 1"
                        class="btn btn-xs btn-ghost disabled:bg-transparent disabled:text-slate-700">
                        « Prev
                    </button>
                    <span class="font-mono">Page {{ page }} / {{ totalPages || 1 }}</span>
                    <button @click="changePage(1)" :disabled="page >= totalPages"
                        class="btn btn-xs btn-ghost disabled:bg-transparent disabled:text-slate-700">
                        Next »
                    </button>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
            <div
                class="bg-slate-900 border border-slate-700 p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <h3 class="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">
                    {{ isEditing ? 'Edit' : 'Create' }} {{ currentConfig.label }}
                </h3>

                <form @submit.prevent="saveItem" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="field in formFields" :key="field.key" class="form-control">
                        <label class="label py-1">
                            <span class="label-text text-slate-400 text-xs uppercase font-bold">{{ field.caption ||
                                field.key }}</span>
                        </label>

                        <input v-if="getInputType(field) === 'checkbox'" type="checkbox"
                            v-model="editingItem[field.key]"
                            class="checkbox checkbox-primary checkbox-sm border-slate-600" />

                        <input v-else-if="getInputType(field) === 'datetime-local'" type="datetime-local"
                            :value="formatDateForInput(editingItem[field.key])"
                            @input="e => editingItem[field.key] = new Date((e.target as HTMLInputElement).value)"
                            class="input input-sm input-bordered bg-slate-950 border-slate-700 text-slate-200" />

                        <input v-else :type="getInputType(field)" v-model="editingItem[field.key]"
                            class="input input-sm input-bordered bg-slate-900 border-slate-700 text-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                            :placeholder="field.key" />
                    </div>

                    <div class="col-span-full flex justify-end gap-3 mt-6 pt-4 border-t border-slate-800">
                        <button type="button" @click="showModal = false"
                            class="btn btn-ghost text-slate-400">Cancel</button>
                        <button type="submit" class="btn bg-emerald-600 hover:bg-emerald-500 text-white border-none">
                            Save {{ currentConfig.label }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>
```

---
### File: src/components/admin/integrated_views/AdminLogs.vue
---

```vue
<script setup lang="ts">
const recentLogs = [
    { time: '10:42 AM', type: 'WARN', msg: 'High volatility detected on "Void Tulip" market.' },
    { time: '10:38 AM', type: 'INFO', msg: 'User [Pierre] sold 500 Sap worth of items.' },
    { time: '10:15 AM', type: 'ERROR', msg: 'Failed to sync weather service.' },
]
</script>

<template>
    <div class="space-y-4">
        <div class="mockup-code bg-slate-900 text-slate-300 border border-slate-800">
            <pre v-for="(log, i) in recentLogs" :key="i" data-prefix=">">
        <span :class="log.type === 'ERROR' ? 'text-red-400' : log.type === 'WARN' ? 'text-yellow-400' : 'text-emerald-400'">[{{ log.time }}] {{ log.type }}:</span> {{ log.msg }}
      </pre>
        </div>
    </div>
</template>
```

---
### File: src/components/admin/integrated_views/AdminModeration.vue
---

```vue
<template>
    ...
</template>
```

---
### File: src/components/admin/integrated_views/AdminOverview.vue
---

```vue
<template>
    <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div v-for="i in 4" :key="i" class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div class="text-slate-500 text-xs uppercase font-bold mb-2">Total Active Users</div>
                <div class="text-3xl font-mono text-white">12,402</div>
                <div class="text-emerald-400 text-xs mt-1">↑ 12% from last week</div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-6 h-96">
            <div
                class="bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-600">
                [ CHART: Economy Volume (Sap) ]
            </div>
            <div
                class="bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-600">
                [ CHART: New Registrations ]
            </div>
        </div>
    </div>
</template>
```

---
### File: src/components/admin/integrated_views/AdminReports.vue
---

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { remult } from 'remult'
import { UserReport } from '@/shared/analytics/UserReport'
import { ReportStatus, ReportType } from '@/shared'

const repo = remult.repo(UserReport)

const reports = ref<UserReport[]>([])
const loading = ref(false)
const filterStatus = ref<string>('ALL') // 'ALL', 'OPEN', 'RESOLVED'

// Modal state for viewing full details
const selectedReport = ref<UserReport | null>(null)

// --- ACTIONS ---

async function fetchReports() {
    loading.value = true
    try {
        const where: any = {}

        if (filterStatus.value === 'OPEN') {
            where.status = { $in: [ReportStatus.OPEN, ReportStatus.IN_PROGRESS] }
        } else if (filterStatus.value === 'RESOLVED') {
            where.status = { $in: [ReportStatus.RESOLVED, ReportStatus.REJECTED] }
        }

        reports.value = await repo.find({
            where,
            include: { reporter: true },
            orderBy: { createdAt: 'desc' },
            limit: 100
        })
    } catch (e) {
        console.error(e)
    } finally {
        loading.value = false
    }
}

async function updateStatus(report: UserReport, status: string) {
    try {
        await repo.save({ ...report, status: status as any, resolvedAt: new Date() })
        await fetchReports()
        if (selectedReport.value?.id === report.id) selectedReport.value = null // Close modal if open
    } catch (e: any) {
        alert(e.message)
    }
}

// --- HELPERS ---

const getTypeColor = (type: string) => {
    switch (type) {
        case ReportType.BUG: return 'text-red-400 bg-red-500/10 border-red-500/20'
        case ReportType.FEATURE: return 'text-purple-400 bg-purple-500/10 border-purple-500/20'
        case ReportType.PLAYER_REPORT: return 'text-amber-400 bg-amber-500/10 border-amber-500/20'
        default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20'
    }
}

const getStatusBadge = (status: string) => {
    switch (status) {
        case ReportStatus.OPEN: return 'badge-info'
        case ReportStatus.IN_PROGRESS: return 'badge-warning'
        case ReportStatus.RESOLVED: return 'badge-success'
        case ReportStatus.REJECTED: return 'badge-error'
        default: return 'badge-ghost'
    }
}

onMounted(fetchReports)
</script>

<template>
    <div class="h-[calc(100vh-8rem)] flex flex-col">

        <div class="flex justify-between items-center mb-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div class="flex gap-2">
                <button @click="filterStatus = 'ALL'; fetchReports()" class="btn btn-sm"
                    :class="filterStatus === 'ALL' ? 'btn-primary' : 'btn-ghost'">
                    All
                </button>
                <button @click="filterStatus = 'OPEN'; fetchReports()" class="btn btn-sm"
                    :class="filterStatus === 'OPEN' ? 'btn-primary' : 'btn-ghost'">
                    Open / In Progress
                </button>
                <button @click="filterStatus = 'RESOLVED'; fetchReports()" class="btn btn-sm"
                    :class="filterStatus === 'RESOLVED' ? 'btn-primary' : 'btn-ghost'">
                    Archives
                </button>
            </div>
            <button @click="fetchReports" class="btn btn-sm btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 4.992l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </button>
        </div>

        <div class="flex-1 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative flex flex-col">

            <div v-if="loading"
                class="absolute inset-0 flex items-center justify-center bg-slate-900/50 z-20 backdrop-blur-sm">
                <span class="loading loading-spinner text-emerald-500 loading-lg"></span>
            </div>

            <div class="overflow-y-auto custom-scrollbar flex-1">
                <table class="table table-sm w-full">
                    <thead class="bg-slate-950 text-slate-400 sticky top-0 z-10">
                        <tr>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Subject</th>
                            <th>Reporter</th>
                            <th>Date</th>
                            <th class="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="report in reports" :key="report.id"
                            class="hover:bg-slate-800/50 border-slate-800 group">

                            <td>
                                <span class="px-2 py-1 rounded text-[10px] font-bold border uppercase tracking-wider"
                                    :class="getTypeColor(report.type)">
                                    {{ report.type }}
                                </span>
                            </td>

                            <td>
                                <div class="badge badge-xs gap-1" :class="getStatusBadge(report.status)">
                                    {{ report.status }}
                                </div>
                            </td>

                            <td class="max-w-xs">
                                <div class="font-bold text-slate-200 truncate">{{ report.title }}</div>
                                <div class="text-xs text-slate-500 truncate">{{ report.description }}</div>
                            </td>

                            <td>
                                <div class="flex items-center gap-2">
                                    <div class="avatar placeholder">
                                        <div class="bg-slate-800 text-slate-400 rounded-full w-6">
                                            <span class="text-xs">{{ report.reporter?.tag.slice(0, 2).toUpperCase()
                                            }}</span>
                                        </div>
                                    </div>
                                    <span class="text-xs font-mono text-slate-400">{{ report.reporter?.tag || 'Unknown'
                                    }}</span>
                                </div>
                            </td>

                            <td class="text-xs font-mono text-slate-500">
                                {{ new Date(report.createdAt!).toLocaleDateString() }}
                            </td>

                            <td class="text-right">
                                <button @click="selectedReport = report" class="btn btn-xs btn-ghost text-emerald-400">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div v-if="reports.length === 0 && !loading" class="p-10 text-center text-slate-500">
                    No reports found for this filter.
                </div>
            </div>
        </div>

        <div v-if="selectedReport"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            @click.self="selectedReport = null">
            <div
                class="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">

                <div class="p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-start">
                    <div>
                        <div class="flex items-center gap-2 mb-2">
                            <span class="px-2 py-1 rounded text-[10px] font-bold border uppercase"
                                :class="getTypeColor(selectedReport.type)">
                                {{ selectedReport.type }}
                            </span>
                            <span class="text-xs text-slate-500 font-mono">{{ selectedReport.id }}</span>
                        </div>
                        <h2 class="text-xl font-bold text-white">{{ selectedReport.title }}</h2>
                    </div>
                    <button @click="selectedReport = null" class="btn btn-sm btn-circle btn-ghost">✕</button>
                </div>

                <div class="p-6 overflow-y-auto flex-1 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {{ selectedReport.description }}
                </div>

                <div class="p-6 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
                    <div class="text-xs text-slate-500">
                        Reported by <span class="text-white">{{ selectedReport.reporter?.tag }}</span> on {{ new
                            Date(selectedReport.createdAt!).toLocaleString() }}
                    </div>

                    <div class="flex gap-2"
                        v-if="selectedReport.status === ReportStatus.OPEN || selectedReport.status === ReportStatus.IN_PROGRESS">
                        <button @click="updateStatus(selectedReport, ReportStatus.IN_PROGRESS)"
                            class="btn btn-sm btn-warning btn-outline">
                            Mark In Progress
                        </button>
                        <button @click="updateStatus(selectedReport, ReportStatus.REJECTED)"
                            class="btn btn-sm btn-error btn-outline">
                            Reject
                        </button>
                        <button @click="updateStatus(selectedReport, ReportStatus.RESOLVED)"
                            class="btn btn-sm btn-success">
                            Resolve
                        </button>
                    </div>
                    <div v-else class="badge badge-lg badge-outline">
                        {{ selectedReport.status }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>
```

---
### File: src/components/admin/integrated_views/AdminUsers.vue
---

```vue
<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { remult } from 'remult'
import { User } from '@/shared/user/User'
import { Item, FlowerSpecies, Achievement } from '@/shared'
import { AdminController } from '@/server/controllers/AdminController'
import { Role } from '@/shared/types'

// --- REPOSITORIES ---
const userRepo = remult.repo(User)

// --- STATE: LIST ---
const users = ref<User[]>([])
const totalCount = ref(0)
const loading = ref(false)
const searchQuery = ref('')
const page = ref(1)
const pageSize = 20

// --- STATE: DRAWER / ACTIONS ---
const selectedUser = ref<User | null>(null)
const isActionLoading = ref(false)

// --- STATE: BAN MODAL ---
const showBanModal = ref(false)
const banTargetUser = ref<User | null>(null)
const banReason = ref('')

// Catalogs for Dropdowns
const catalogItems = ref<Item[]>([])
const catalogSpecies = ref<FlowerSpecies[]>([])
const catalogAchievements = ref<Achievement[]>([])

// Forms
const giveItemForm = ref({ slug: '', quantity: 1 })
const giveFlowerForm = ref({ slug: '', quality: 0.5 })
const giveAchieveForm = ref({ slug: '' })

// --- FETCHING ---

async function fetchUsers() {
    loading.value = true
    try {
        const where: any = {}
        if (searchQuery.value) {
            where.tag = { $contains: searchQuery.value }
        }

        totalCount.value = await userRepo.count(where)
        users.value = await userRepo.find({
            where,
            limit: pageSize,
            page: page.value,
            orderBy: { createdAt: 'desc' }
        })
    } catch (e) {
        console.error(e)
    } finally {
        loading.value = false
    }
}

async function loadCatalogs() {
    if (catalogItems.value.length > 0) return

    const [items, flowers, ach] = await Promise.all([
        remult.repo(Item).find({ orderBy: { name: 'asc' } }),
        remult.repo(FlowerSpecies).find({ orderBy: { name: 'asc' } }),
        remult.repo(Achievement).find({ orderBy: { name: 'asc' } })
    ])
    catalogItems.value = items
    catalogSpecies.value = flowers
    catalogAchievements.value = ach
}

// --- USER ACTIONS ---

async function openUser(user: User) {
    selectedUser.value = user
    await loadCatalogs()
    if (catalogItems.value.length) giveItemForm.value.slug = catalogItems.value[0].slug
    if (catalogSpecies.value.length) giveFlowerForm.value.slug = catalogSpecies.value[0].slugName
    if (catalogAchievements.value.length) giveAchieveForm.value.slug = catalogAchievements.value[0].slug
}

async function closeUser() {
    selectedUser.value = null
}

// --- BAN LOGIC ---

function openBanModal(user: User) {
    banTargetUser.value = user
    banReason.value = ''
    showBanModal.value = true
}

async function confirmBan() {
    if (!banTargetUser.value || !banReason.value) return
    isActionLoading.value = true

    try {
        const res = await AdminController.banUser(banTargetUser.value.id, banReason.value)
        alert(res.message)
        showBanModal.value = false
        // Refresh list to show ban status if visualized
        await fetchUsers()
        if (selectedUser.value?.id === banTargetUser.value.id) {
            closeUser()
        }
    } catch (e: any) {
        alert(e.message)
    } finally {
        isActionLoading.value = false
    }
}

// --- GIVE LOGIC ---

async function performGiveItem() {
    if (!selectedUser.value) return
    isActionLoading.value = true
    try {
        const res = await AdminController.giveItem(
            selectedUser.value.id,
            giveItemForm.value.slug,
            giveItemForm.value.quantity
        )
        alert(res.message)
    } catch (e: any) {
        alert(e.message)
    } finally {
        isActionLoading.value = false
    }
}

async function performGiveFlower() {
    if (!selectedUser.value) return
    isActionLoading.value = true
    try {
        const res = await AdminController.giveFlower(
            selectedUser.value.id,
            giveFlowerForm.value.slug,
            giveFlowerForm.value.quality
        )
        alert(res.message)
    } catch (e: any) {
        alert(e.message)
    } finally {
        isActionLoading.value = false
    }
}

async function performGiveAchievement() {
    if (!selectedUser.value) return
    isActionLoading.value = true
    try {
        const res = await AdminController.giveAchievement(
            selectedUser.value.id,
            giveAchieveForm.value.slug
        )
        alert(res.message)
    } catch (e: any) {
        alert(e.message)
    } finally {
        isActionLoading.value = false
    }
}

// Watchers
watch([page, searchQuery], () => fetchUsers())
onMounted(fetchUsers)

// Helper
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize) || 1)
</script>

<template>
    <div class="h-[calc(100vh-8rem)] flex flex-col relative">

        <div class="flex justify-between items-center mb-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div class="relative w-96">
                <input v-model.lazy="searchQuery" type="text" placeholder="Search by tag..."
                    class="input input-sm w-full bg-slate-950 border-slate-700 focus:border-emerald-500" />
            </div>
            <div class="flex items-center gap-4 text-sm text-slate-400">
                <span>Total Users: {{ totalCount }}</span>
                <div class="flex gap-2">
                    <button @click="page--" :disabled="page === 1" class="btn btn-xs btn-ghost">«</button>
                    <span>{{ page }} / {{ totalPages }}</span>
                    <button @click="page++" :disabled="page >= totalPages" class="btn btn-xs btn-ghost">»</button>
                </div>
            </div>
        </div>

        <div
            class="flex-1 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col min-h-0 relative">
            <div v-if="loading"
                class="absolute inset-0 z-10 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
                <span class="loading loading-spinner text-emerald-500"></span>
            </div>

            <div class="overflow-y-auto custom-scrollbar flex-1">
                <table class="table table-sm w-full">
                    <thead class="bg-slate-950 text-slate-400 sticky top-0 z-10">
                        <tr>
                            <th>User</th>
                            <th>Info</th>
                            <th>Economy</th>
                            <th>Roles</th>
                            <th>Joined</th>
                            <th class="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id"
                            class="hover:bg-slate-800/50 border-slate-800 transition-colors group">

                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar placeholder">
                                        <div class="bg-slate-800 text-slate-300 rounded-full w-8">
                                            <span>{{ user.tag.slice(0, 2).toUpperCase() }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold flex items-center gap-2">
                                            {{ user.tag }}
                                            <span v-if="user.banned" class="badge badge-xs badge-error">BANNED</span>
                                        </div>
                                        <div class="text-[10px] text-slate-500 font-mono">{{ user.id }}</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="flex flex-col text-xs text-slate-400">
                                    <span>Lvl {{ user.level }}</span>
                                    <span>{{ user.xp }} XP</span>
                                </div>
                            </td>

                            <td>
                                <div class="font-mono text-emerald-400">{{ user.sap }} <span
                                        class="text-xs text-slate-500">Sap</span></div>
                            </td>

                            <td>
                                <div class="flex gap-1">
                                    <span v-if="user.roles.includes(Role.ADMIN)"
                                        class="badge badge-error badge-xs text-white">ADMIN</span>
                                    <span v-else class="badge badge-ghost badge-xs">USER</span>
                                </div>
                            </td>

                            <td class="text-xs text-slate-500">
                                {{ new Date(user.createdAt!).toLocaleDateString() }}
                            </td>

                            <td class="text-right">
                                <button @click="openUser(user)" class="btn btn-xs btn-ghost text-blue-400">
                                    Manage
                                </button>
                                <button @click="openBanModal(user)"
                                    class="btn btn-xs btn-ghost text-red-400 opacity-50 hover:opacity-100"
                                    title="Quick Ban">
                                    Ban
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <Transition name="slide">
            <div v-if="selectedUser"
                class="absolute inset-y-0 right-0 w-[500px] bg-slate-900 border-l border-slate-700 shadow-2xl z-20 flex flex-col">

                <div class="p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-start">
                    <div>
                        <h2 class="text-xl font-bold text-white mb-1">Manage User</h2>
                        <p class="text-emerald-400 font-mono text-sm">{{ selectedUser.tag }}</p>
                    </div>
                    <button @click="closeUser" class="btn btn-circle btn-sm btn-ghost">✕</button>
                </div>

                <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

                    <div class="space-y-4">
                        <h3
                            class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Moderation Actions
                        </h3>
                        <div class="grid grid-cols-2 gap-3">
                            <button @click="openBanModal(selectedUser)" class="btn btn-outline btn-error btn-sm w-full">
                                Ban User
                            </button>
                            <button class="btn btn-outline btn-warning btn-sm w-full">
                                Warn
                            </button>
                            <button class="btn btn-outline btn-ghost btn-sm w-full col-span-2">
                                View Logs
                            </button>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3
                            class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Give Items
                        </h3>
                        <div class="bg-slate-800/30 p-4 rounded-lg border border-slate-800 space-y-3">
                            <div>
                                <label class="label text-xs">Item</label>
                                <select v-model="giveItemForm.slug"
                                    class="select select-sm w-full bg-slate-900 border-slate-700">
                                    <option v-for="item in catalogItems" :key="item.id" :value="item.slug">
                                        {{ item.name }} ({{ item.type }})
                                    </option>
                                </select>
                            </div>
                            <div class="flex gap-2">
                                <div class="flex-1">
                                    <label class="label text-xs">Amount</label>
                                    <input type="number" v-model="giveItemForm.quantity"
                                        class="input input-sm w-full bg-slate-900 border-slate-700" min="1" />
                                </div>
                                <div class="flex items-end">
                                    <button @click="performGiveItem" :disabled="isActionLoading"
                                        class="btn btn-sm btn-primary">
                                        Give
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3
                            class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Give Seed/Flower
                        </h3>
                        <div class="bg-slate-800/30 p-4 rounded-lg border border-slate-800 space-y-3">
                            <div>
                                <label class="label text-xs">Species</label>
                                <select v-model="giveFlowerForm.slug"
                                    class="select select-sm w-full bg-slate-900 border-slate-700">
                                    <option v-for="s in catalogSpecies" :key="s.id" :value="s.slugName">
                                        {{ s.name }} ({{ s.rarity }})
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="label text-xs">Quality: {{ Math.round(giveFlowerForm.quality * 100)
                                }}%</label>
                                <input type="range" min="0" max="1" step="0.01" v-model.number="giveFlowerForm.quality"
                                    class="range range-xs range-accent" />
                            </div>
                            <button @click="performGiveFlower" :disabled="isActionLoading"
                                class="btn btn-sm btn-accent w-full">
                                Generate Seed
                            </button>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3
                            class="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Unlock Achievement
                        </h3>
                        <div class="bg-slate-800/30 p-4 rounded-lg border border-slate-800 flex gap-2">
                            <select v-model="giveAchieveForm.slug"
                                class="select select-sm flex-1 bg-slate-900 border-slate-700">
                                <option v-for="a in catalogAchievements" :key="a.id" :value="a.slug">
                                    {{ a.name }}
                                </option>
                            </select>
                            <button @click="performGiveAchievement" :disabled="isActionLoading"
                                class="btn btn-sm btn-secondary">
                                Unlock
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Transition>

        <div v-if="selectedUser" @click="closeUser"
            class="absolute inset-0 z-10 bg-slate-950/60 backdrop-blur-sm transition-opacity">
        </div>

        <div v-if="showBanModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div class="bg-slate-900 border border-red-500/30 rounded-xl w-full max-w-md shadow-2xl p-6">
                <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span class="text-red-500">🚫</span> Ban User
                </h3>
                <p class="text-slate-400 text-sm mb-4">
                    Are you sure you want to ban <span class="font-bold text-white">{{ banTargetUser?.tag }}</span>?
                    This action will restrict their access to the game.
                </p>

                <div class="form-control mb-6">
                    <label class="label pt-0">
                        <span class="label-text text-xs uppercase font-bold text-slate-500">Reason</span>
                    </label>
                    <textarea v-model="banReason"
                        class="textarea textarea-bordered bg-slate-950 border-slate-700 focus:border-red-500 w-full"
                        placeholder="Violation of TOS, harassment..."></textarea>
                </div>

                <div class="flex justify-end gap-3">
                    <button @click="showBanModal = false" class="btn btn-sm btn-ghost text-slate-400">Cancel</button>
                    <button @click="confirmBan" :disabled="!banReason || isActionLoading"
                        class="btn btn-sm btn-error text-white">
                        <span v-if="isActionLoading" class="loading loading-spinner"></span>
                        <span v-else>Confirm Ban</span>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>
```

---
### File: src/components/auth/AuthModal.vue
---

```vue
<script setup lang="ts">
import { reactive, ref, computed, watch, nextTick } from 'vue'
import { useAuthStore } from '@/stores/auth'
import GoogleLoginBtn from '../buttons/GoogleLoginBtn.vue' // Adjust path if needed
import Form from '../Form.vue' // Adjust path if needed

// --- TYPES ---
// Define keys to ensure type safety in v-for loops
interface FieldConfig {
    label: string
    type: string
    placeholder: string
    vmodel: keyof typeof formData
}

// --- PROPS & EMITS ---
const props = defineProps<{
    isOpen: boolean
    mode?: 'login' | 'signup'
}>()

const emit = defineEmits<{
    'update:isOpen': [value: boolean]
    success: [user: any]
}>()

// --- STATE ---
const mode = ref<'login' | 'signup'>(props.mode || 'login')
const auth = useAuthStore()
const dialogRef = ref<HTMLDialogElement>()

// Reactive form data
const formData = reactive({
    tagOrEmail: '',
    rememberMe: false,
    tag: '',
    email: '',
    passwd: '',
    passwdConfirm: '',
})

// Error state
const error = reactive<Record<string, string>>({})

// --- WATCHERS ---

// Control Dialog Visibility
watch(
    () => props.isOpen,
    (newValue) => {
        nextTick(() => {
            if (newValue && dialogRef.value) {
                dialogRef.value.showModal()
            } else if (!newValue && dialogRef.value) {
                dialogRef.value.close()
            }
        })
    },
    { immediate: true },
)

// Reset state when mode changes
watch(mode, () => {
    resetForm()
})

// --- ACTIONS ---

const resetForm = () => {
    // Clear errors
    Object.keys(error).forEach((key) => delete error[key])

    // Clear fields
    formData.tag = ''
    formData.email = ''
    formData.tagOrEmail = ''
    formData.passwd = ''
    formData.passwdConfirm = ''
    formData.rememberMe = false
}

const closeModal = () => {
    emit('update:isOpen', false)
    resetForm()
}

const handleDialogClose = () => {
    closeModal()
}

const switchMode = () => {
    mode.value = mode.value === 'login' ? 'signup' : 'login'
}

// --- API LOGIC ---

const login = async () => {
    error.general = ''
    try {
        await auth.login(
            formData.tagOrEmail.trim(), // Sanitize input
            formData.passwd,
            formData.rememberMe
        )

        emit('success', auth.user)
        closeModal()
    } catch (err: any) {
        handleApiError(err)
    }
}

const signUp = async () => {
    error.general = ''

    // 1. Frontend Validation
    if (formData.passwd !== formData.passwdConfirm) {
        error.passwdConfirm = "Passwords do not match"
        return
    }

    try {
        // 2. API Call
        await auth.signUp(
            formData.tag.toLowerCase().trim(),
            formData.email.toLowerCase().trim(),
            formData.passwd,
            formData.passwdConfirm,
        )

        // 3. Success Handling
        mode.value = 'login'
        formData.tagOrEmail = formData.email // Auto-fill login
        error.general = '✅ Account successfully registered! You can now login.'

    } catch (err: any) {
        handleApiError(err)
    }
}

const handleApiError = (err: any) => {
    const msg = err.message?.toLowerCase() || ''

    if (msg.includes('password')) {
        error.passwd = err.message
        error.passwdConfirm = err.message
    } else if (msg.includes('email')) {
        error.email = err.message
        error.tagOrEmail = err.message
    } else if (msg.includes('tag')) {
        error.tag = err.message
        error.tagOrEmail = err.message
    } else {
        error.general = err.message || 'Unknown error'
    }
}

// --- CONFIGURATION ---

const fields = computed<FieldConfig[]>(() => {
    if (mode.value === 'login') {
        return [
            {
                label: 'Tag or Email',
                type: 'text',
                placeholder: 'bloom-scape1231 or bloom@scape.me',
                vmodel: 'tagOrEmail',
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: 'Keep it a secret!',
                vmodel: 'passwd',
            },
            {
                label: 'Remember Me?',
                type: 'checkbox',
                placeholder: '',
                vmodel: 'rememberMe',
            },
        ]
    } else {
        return [
            { label: 'Tag', type: 'text', placeholder: 'bloomscape-fan.number1', vmodel: 'tag' },
            { label: 'Email', type: 'email', placeholder: 'bloom@scape.me', vmodel: 'email' },
            { label: 'Password', type: 'password', placeholder: 'Create a password', vmodel: 'passwd' },
            {
                label: 'Confirm Password',
                type: 'password',
                placeholder: 'Repeat password',
                vmodel: 'passwdConfirm',
            },
        ]
    }
})

const formConfig = computed(() => {
    return {
        title: mode.value === 'login' ? 'Login' : 'Sign Up',
        submitButtonText: mode.value === 'login' ? 'Login' : 'Sign Up',
        submitAction: mode.value === 'login' ? login : signUp,
    }
})
</script>

<template>
    <dialog ref="dialogRef" class="modal modal-middle" @close="handleDialogClose">
        <div class="modal-box w-11/12 max-w-md p-0">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <div class="space-y-4">

                <Form method="POST" :title="formConfig.title" :submitButtonText="formConfig.submitButtonText"
                    :submitAction="formConfig.submitAction" :fieldSetBorder="false">
                    <template #header>
                        <div v-if="mode === 'signup'" class="text-center text-sm opacity-90">
                            You don't have an account yet? Sign up now and join the
                            <span class="font-bold text-primary">BloomScape</span> community!
                        </div>
                    </template>

                    <div v-if="error.general" :class="[
                        'alert text-sm mb-4',
                        error.general.includes('✅') ? 'alert-success' : 'alert-error',
                    ]">
                        <span>{{ error.general }}</span>
                    </div>

                    <template #fields>
                        <div v-for="field in fields" :key="field.vmodel" class="flex gap-2"
                            :class="field.type === 'checkbox' ? 'form-control' : 'form-control w-full flex-col'">
                            <label :class="[
                                'label',
                                field.type === 'checkbox' ? 'cursor-pointer justify-start gap-3' : '',
                            ]">
                                <span class="label-text">{{ field.label }}</span>
                            </label>

                            <input :type="field.type" :class="[
                                field.type === 'checkbox'
                                    ? 'checkbox checkbox-primary'
                                    : 'input input-bordered w-full',
                                error[field.vmodel] && 'input-error',
                            ]" :placeholder="field.type !== 'checkbox' ? field.placeholder : ''"
                                v-model="formData[field.vmodel]" @input="() => delete error[field.vmodel]" />

                            <div v-if="error[field.vmodel]" class="label">
                                <span class="label-text-alt text-error">{{ error[field.vmodel] }}</span>
                            </div>
                        </div>
                    </template>

                    <template #small>
                        <div class="text-center text-sm mt-2">
                            <span v-if="mode === 'login'">
                                Don't have an account?
                                <button type="button" @click="switchMode" class="link link-primary">Sign Up</button>
                            </span>
                            <span v-else>
                                Already have an account?
                                <button type="button" @click="switchMode" class="link link-primary">Login</button>
                            </span>
                        </div>
                    </template>

                    <template #moreBtns v-if="mode === 'login'">
                        <div class="divider text-xs opacity-60">OR</div>
                        <GoogleLoginBtn />
                    </template>
                </Form>
            </div>
        </div>

        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>
```

---
### File: src/components/auth/logic/useAuthModal.ts
---

```ts
import { ref } from 'vue'

// Global state for the modal
const isOpen = ref(false)
const mode = ref<'login' | 'signup'>('login')
const onSuccessCallback = ref<((user: any) => void) | null>(null)

export function useAuthModal() {
  /**
   * Opens the authentication modal.
   * @param newMode - 'login' or 'signup'
   * @param onSuccess - Optional callback function to run after successful auth
   */
  function openAuthModal(newMode: 'login' | 'signup' = 'login', onSuccess?: (user: any) => void) {
    mode.value = newMode
    isOpen.value = true
    // Store the callback to be executed later
    onSuccessCallback.value = onSuccess || null
  }

  function closeAuthModal() {
    isOpen.value = false
    onSuccessCallback.value = null
  }

  /**
   * Called by AuthModal.vue upon successful login/signup
   */
  function handleSuccess(user: any) {
    if (onSuccessCallback.value) {
      onSuccessCallback.value(user)
      onSuccessCallback.value = null // Reset after execution
    }
  }

  return {
    isOpen,
    mode,
    openAuthModal,
    closeAuthModal,
    handleSuccess,
  }
}

```

---
### File: src/components/buttons/GoogleLoginBtn.vue
---

```vue
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { GoogleSignInButton, type CredentialResponse } from 'vue3-google-signin'

const auth = useAuthStore()

const onSuccess = async (response: CredentialResponse) => {
    if (response.credential) {
        try {
            await auth.googleLogin(response.credential)
        } catch (error) {
            console.error(error)
        }
    }
}

const onError = () => {
    console.error('Google Sign-In failed')
}
</script>

<template>
    <GoogleSignInButton @success="onSuccess" @error="onError" theme="light" size="medium" text="signin_with"
        shape="pill" />
</template>
```

---
### File: src/components/buttons/ThemeSwitcher.vue
---

```vue
<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>

<template>
    <label class="toggle text-base-content">
        <input type="checkbox" class="theme-controller" :checked="theme === 'dark'" @change="themeStore.toggle()" />

        <!-- Sun -->
        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
            </g>
        </svg>

        <!-- Moon -->
        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </g>
        </svg>
    </label>
</template>

```

---
### File: src/components/chat/GlobalChatDrawer.vue
---

```vue
<script setup lang="ts">
import { ref, nextTick, watch, onMounted } from 'vue';
import { useChatStore } from '@/stores/chat';
import { useAuthStore } from '@/stores/auth';

const store = useChatStore();
const auth = useAuthStore();
const messageInput = ref('');
const scrollContainer = ref<HTMLElement | null>(null);

onMounted(() => {
    if (auth.user) store.init();
});

watch(() => store.currentMessages.length, async () => {
    await nextTick();
    if (scrollContainer.value) {
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
    }
});

watch(() => store.searchQuery, () => {
    store.performSearch();
});

const handleSend = () => {
    if (!messageInput.value.trim()) return;
    store.sendMessage(messageInput.value);
    messageInput.value = '';
};

const isMine = (senderId: string) => senderId === auth.user?.id;

const formatTime = (date?: Date | string) => {
    if (!date) return '';
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="store.isOpen"
                class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[200] md:bg-transparent md:backdrop-blur-none md:pointer-events-none"
                @click="store.toggle">
            </div>
        </Transition>

        <div class="fixed top-0 right-0 h-full w-full md:w-96 bg-slate-900 border-l border-slate-700 shadow-2xl z-[201] transition-transform duration-300 ease-in-out flex flex-col pointer-events-auto"
            :class="store.isOpen ? 'translate-x-0' : 'translate-x-full'">

            <div class="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <h2 v-if="!store.activeChatId" class="font-bold text-white flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Communications
                </h2>
                <div v-else class="flex items-center gap-3">
                    <button @click="store.closeConversation"
                        class="btn btn-circle btn-ghost btn-xs text-slate-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div class="flex items-center gap-2" v-if="store.activeChat?.otherUser">
                        <div
                            class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white shadow-inner border border-slate-700">
                            {{ store.activeChat.otherUser.tag.substring(0, 2).toUpperCase() }}
                        </div>
                        <div>
                            <div class="text-sm font-bold text-white leading-none">
                                {{ store.activeChat.otherUser.tag }}
                            </div>
                            <div class="text-[10px] text-slate-500">Connected</div>
                        </div>
                    </div>
                </div>
                <button @click="store.toggle" class="btn btn-square btn-ghost btn-sm text-slate-400 hover:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div v-if="!store.activeChatId" class="flex-1 flex flex-col min-h-0">
                <div class="p-4">
                    <div class="relative">
                        <input type="text" v-model="store.searchQuery" placeholder="Search friends or users..."
                            class="input input-sm w-full bg-slate-800 border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-200 pl-9">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 absolute left-3 top-2.5 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                    <div v-if="store.filteredChats?.length > 0">
                        <div class="text-[10px] uppercase font-bold text-slate-500 px-2 mb-2">Inbox</div>
                        <div v-for="chat in store.filteredChats" :key="chat.id" @click="store.openChat(chat.id)"
                            class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors group relative">
                            <div class="relative">
                                <div
                                    class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-slate-700 shadow-lg border border-slate-600">
                                    {{ chat.otherUser?.tag.substring(0, 2).toUpperCase() || '?' }}
                                </div>
                                <span v-if="chat.hasUnread"
                                    class="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full animate-pulse"></span>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex justify-between items-baseline">
                                    <span
                                        class="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                                        {{ chat.otherUser?.tag || 'Unknown User' }}
                                    </span>
                                    <span class="text-[10px] text-slate-500">
                                        {{ formatTime(chat.lastMessageAt) }}
                                    </span>
                                </div>
                                <p class="text-xs text-slate-400 truncate"
                                    :class="{ 'font-bold text-white': chat.hasUnread }">
                                    {{ chat.lastMessagePreview || "Start a conversation" }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div v-if="store.searchQuery && store.globalSearchResults.length > 0"
                        class="mt-4 pt-4 border-t border-slate-800">
                        <div class="text-[10px] uppercase font-bold text-slate-500 px-2 mb-2">New Connections</div>
                        <div v-for="user in store.globalSearchResults" :key="user.id"
                            @click="store.startChatWithUser(user.id)"
                            class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors opacity-75 hover:opacity-100">
                            <div
                                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-slate-700 border border-dashed border-slate-500">
                                {{ user.tag.substring(0, 2).toUpperCase() }}
                            </div>
                            <div>
                                <div class="text-sm font-bold text-slate-300">{{ user.tag }}</div>
                                <div class="text-xs text-emerald-500">Click to say Hi 👋</div>
                            </div>
                        </div>
                    </div>

                    <div v-if="(!store.filteredChats || store.filteredChats.length === 0) && store.globalSearchResults.length === 0"
                        class="text-center py-10 opacity-50">
                        <div class="text-4xl mb-2">📡</div>
                        <p class="text-sm text-slate-500">No signals found.</p>
                        <p class="text-xs text-slate-600 mt-2">Search for a username to start.</p>
                    </div>
                </div>
            </div>

            <div v-else class="flex-1 flex flex-col min-h-0 bg-slate-950/30">
                <div ref="scrollContainer" class="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    <div v-if="store.currentMessages.length === 0" class="text-center py-10 text-slate-500 text-sm">
                        This is the start of your history with
                        <span class="text-emerald-400 font-bold">{{ store.activeChat?.otherUser?.tag }}</span>.
                    </div>
                    <div v-for="msg in store.currentMessages" :key="msg.id" class="flex flex-col"
                        :class="isMine(msg.senderId) ? 'items-end' : 'items-start'">
                        <div class="max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm break-words" :class="isMine(msg.senderId)
                            ? 'bg-emerald-600 text-white rounded-br-none'
                            : 'bg-slate-800 text-slate-200 rounded-bl-none'">
                            {{ msg.content }}
                        </div>
                        <span class="text-[10px] text-slate-600 mt-1 px-1">
                            {{ formatTime(msg.createdAt) }}
                        </span>
                    </div>
                </div>
                <div class="p-3 border-t border-slate-800 bg-slate-900">
                    <form @submit.prevent="handleSend" class="flex gap-2">
                        <input v-model="messageInput" type="text" placeholder="Type a message..."
                            class="input input-sm flex-1 bg-slate-950 border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-200">
                        <button type="submit" class="btn btn-sm btn-primary btn-square"
                            :disabled="!messageInput.trim()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-4 h-4">
                                <path
                                    d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>
```

---
### File: src/components/game/LandScene.vue
---

```vue
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { useTimeStore } from '@/stores/time';
import { storeToRefs } from 'pinia';
import { LandSceneManager } from './logic/LandSceneManager';
import { useAuthStore } from '@/stores/auth';

const props = withDefaults(defineProps<{
    userId: string,
    quality?: 'low' | 'high',
    tileSize?: number
}>(), {
    quality: 'high',
    tileSize: 2
});

const gameStore = useGameStore();
const timeStore = useTimeStore();
const { tiles, currentIsland, isLoading, selectedTile } = storeToRefs(gameStore);

const canvasContainerRef = ref<HTMLDivElement | null>(null);
let sceneManager: LandSceneManager | null = null;
const auth = useAuthStore();

const isCurrentUser = computed(() => auth.user?.id === props.userId);
const hasIsland = computed(() => !!currentIsland.value);

const formattedTime = computed(() => {
    const h = timeStore.now.hour.toString().padStart(2, '0');
    const m = timeStore.now.minute.toString().padStart(2, '0');
    return `${h}:${m}`;
});

const initData = async () => {
    if (!props.userId) return;

    await gameStore.fetchIslandData(props.userId);

    if (sceneManager) {
        sceneManager.updateTiles(tiles.value);
    }
};

const handleHover = (x: number, z: number) => {
    if (!hasIsland.value) {
        gameStore.setHoveredTile(null);
        return;
    }

    if (isNaN(x) || isNaN(z)) {
        gameStore.setHoveredTile(null);
        return;
    }

    const existingTile = gameStore.getTileAt(x, z);

    if (gameStore.hoveredTile?.x !== x || gameStore.hoveredTile?.z !== z) {
        gameStore.setHoveredTile({
            x,
            z,
            id: existingTile?.id,
            isOwned: !!existingTile,
            isAdjacentToLand: sceneManager?.isAdjacentToLand(x, z, gameStore.tiles) || false
        });
    }
};

const handleClick = (x: number, z: number) => {
    if (!hasIsland.value) return;

    const isAlreadySelected =
        gameStore.selectedTile &&
        gameStore.selectedTile.x === x &&
        gameStore.selectedTile.z === z;

    if (isAlreadySelected) {
        gameStore.selectTile(null);
        sceneManager?.setSelection(null, null);
    } else {
        const existingTile = gameStore.getTileAt(x, z);

        gameStore.selectTile({
            x,
            z,
            id: existingTile?.id,
            isOwned: !!existingTile,
            isAdjacentToLand: sceneManager?.isAdjacentToLand(x, z, gameStore.tiles) || false
        });
        sceneManager?.setSelection(x, z);
    }
}

const handleStartAdventure = async () => {
    await gameStore.startAdventure();
};

onMounted(async () => {
    await auth.fetchSessionUser();
    timeStore.start();

    if (!canvasContainerRef.value) return;

    sceneManager = new LandSceneManager({
        quality: props.quality,
        tileSize: props.tileSize,
        onHover: handleHover,
        onClick: handleClick
    });

    sceneManager.init(canvasContainerRef.value);

    initData();
});

onUnmounted(() => {
    if (sceneManager) sceneManager.dispose();
    timeStore.stop();
});

watch(() => props.userId, async (newId) => {
    if (newId) await initData();
});

watch(tiles, (newTiles) => {
    if (sceneManager) {
        sceneManager.updateTiles(newTiles);
    }
}, { deep: true });

watch(selectedTile, (newVal) => {
    if (!newVal) {
        sceneManager?.setSelection(null, null);
    }
});

</script>

<template>
    <div class="relative w-full h-full bg-slate-900 overflow-hidden">

        <div ref="canvasContainerRef" class="absolute inset-0 z-0 block"></div>

        <div class="absolute top-20 left-5 sm:top-auto sm:bottom-6 sm:left-10 md:left-40 z-20 pointer-events-none">
            <div
                class="bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-xl flex flex-col items-end">
                <span class="sm:text-2xl font-mono font-bold text-white tracking-widest drop-shadow-md">
                    {{ formattedTime }}
                </span>
                <span class="text-[10px] uppercase font-bold tracking-wider hidden sm:block"
                    :class="timeStore.now.isDay ? 'text-yellow-400' : 'text-blue-400'">
                    {{ timeStore.now.isDay ? 'DAY TIME' : 'NIGHT TIME' }}
                </span>
            </div>
        </div>

        <transition name="fade">
            <div v-if="!isLoading && !hasIsland"
                class="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-sm z-40">

                <div class="card w-96 glass shadow-2xl border border-slate-700">
                    <div class="card-body text-center">
                        <div v-if="isCurrentUser">
                            <h2 class="card-title justify-center text-emerald-400">Get Started!</h2>
                            <p class="text-slate-300">Your BloomScape adventure starts here. Claim your island to start
                                building.</p>
                            <div class="card-actions justify-center mt-4">
                                <button @click="handleStartAdventure"
                                    class="btn btn-primary btn-soft rounded-2xl text-white relative z-50">
                                    Start
                                </button>
                            </div>
                        </div>
                        <div v-else>
                            <h2 class="card-title justify-center text-slate-400">Uncharted Island</h2>
                            <p class="text-slate-500">This player has not started their adventure yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div v-if="isLoading"
            class="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur">
            <span class="loading loading-ring loading-lg text-emerald-500"></span>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>
```

---
### File: src/components/game/SideBar.vue
---

```vue
<script setup lang="ts">
import { GameController } from '@/server/controllers/GameController';
import { useAuthStore } from '@/stores/auth';
import { useUIStore } from '@/stores/ui';
import { computed, onMounted, ref, Teleport } from 'vue';

import HomeIcon from '../icons/navbar/HomeIcon.vue';
import MarketIcon from '../icons/navbar/MarketIcon.vue';
import InventoryIcon from '../icons/navbar/InventoryIcon.vue';
import SettingsIcon from '../icons/navbar/SettingsIcon.vue';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import { useModalStore } from '@/stores/modal';
import { router } from '@/routes';
import MarketInModal from './modal_features/MarketInModal.vue';
import InventoryInModal from './modal_features/InventoryInModal.vue';
import { useBreakpoints } from '@/stores/breakpoints';

const uiStore = useUIStore();

const auth = useAuthStore();
const userBalance = computed(() => auth.user?.sap ?? 0);

const navigationArray = [
    { name: 'Home', icon: HomeIcon, link: ROUTES.HOME.path },
    {
        name: 'Market', icon: MarketIcon,
        action: async () => {
            const modal = useModalStore();
            modal.open({
                title: 'Marketplace',
                component: MarketInModal,
                size: 'fullscreen',
                path: ROUTES.MARKET.path,
                sideBarMargin: true,
            });
        }
    },
    {
        name: 'Inventory', icon: InventoryIcon,
        action: () => {
            const modal = useModalStore();
            modal.open({
                title: 'Inventory',
                component: InventoryInModal,
                size: 'fullscreen',
                path: ROUTES.INVENTORY.path,
                sideBarMargin: true,
            })
        }
    },
    { name: 'Settings', icon: SettingsIcon, link: ROUTES.SETTINGS.pathDyn(auth.user?.tag) },
];

onMounted(async () => {
    await auth.fetchSessionUser();
})
</script>

<template>
    <teleport to="body">
        <button v-if="!uiStore.isSidebarOpen" @click="uiStore.toggleSidebar"
            class="fixed top-4 right-4 z-[100] p-2 bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg md:hidden hover:bg-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <transition name="fade">
            <div v-if="uiStore.isSidebarOpen" @click="uiStore.toggleSidebar"
                class="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm md:hidden"></div>
        </transition>

        <aside
            class="fixed top-5 left-5 h-[calc(100%-40px)] transition-all duration-300 ease-in-out glass-panel border-r border-white/10 flex flex-col z-[101] pointer-events-auto rounded-2xl overflow-hidden isolate"
            :class="[
                uiStore.isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:w-20 md:translate-x-0'
            ]" @mouseenter="uiStore.isSidebarHovered = true" @mouseleave="uiStore.isSidebarHovered = false"
            @click="uiStore.toggleSidebar">

            <button
                class="h-20 flex items-center border-b border-white/5 relative transition-all duration-300 cursor-pointer"
                :class="uiStore.isSidebarOpen ? 'px-6' : 'justify-center px-0'"
                @click.stop.prevent="router.push(ROUTES.HOME.path)">

                <div>
                    <img src="/bloomscape_logo.png" alt="Logo" width="50" height="50" />
                </div>

                <transition name="fade">
                    <span v-if="uiStore.isSidebarOpen" class="absolute left-20 font-bold tracking-wide w-40">
                        <img src="/bloomscape_text.png" alt="BloomScape">
                    </span>
                </transition>
            </button>

            <nav class="flex-1 py-6 px-3 flex flex-col gap-2">
                <a v-for="(item, index) in navigationArray" :key="index" :href="!item.action ? (item.link || '#') : '#'"
                    @click.stop="() => {
                        const bp = useBreakpoints()
                        if (item.action) item.action();
                        if (window.innerWidth < bp.md) uiStore.toggleSidebar();
                    }"
                    class="group flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-white/5 text-gray-400 hover:text-white relative overflow-hidden"
                    :class="uiStore.isSidebarOpen ? '' : 'justify-center'">
                    <div class="w-6 h-6 shrink-0 transition-transform duration-300">
                        <component v-if="item.icon" :is="item.icon" />
                        <div v-else class="w-6 h-6 bg-white/10 rounded-lg"></div>
                    </div>

                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="uiStore.isSidebarOpen ? 'max-w-[150px] opacity-100 ml-4' : 'max-w-0 opacity-0 ml-0'">
                        <span class="whitespace-nowrap font-medium">
                            {{ item.name }}
                        </span>
                    </div>
                </a>
            </nav>

            <div class="p-4 mt-auto border-t border-white/5 overflow-hidden transition-all duration-300"
                :class="uiStore.isSidebarOpen ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 py-0'">
                <div class="bg-slate-800/50 rounded-lg p-3 overflow-hidden">
                    <p class="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Balance</p>
                    <div class="flex items-center gap-2 text-emerald-400 font-mono text-sm md:text-lg">
                        <span>⟠</span>
                        <span>{{ userBalance }}</span>
                    </div>
                </div>
            </div>
        </aside>
    </teleport>

</template>

<style scoped>
.glass-panel {
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(12px);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
```

---
### File: src/components/game/TopBar.vue
---

```vue
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { remult } from 'remult';
import { useUIStore } from '@/stores/ui';
import { User } from '@/shared';
import { UserController } from '@/server/controllers/UserController';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';
import { useChatStore } from '@/stores/chat';

// --- PROPS ---
const props = defineProps<{
    userTag: string
}>();

const chat = useChatStore()

// --- STATE ---
const displayedUser = ref<User | null>(null);
const isLoading = ref(true);

// --- COMPUTED ---
// Génère un avatar cohérent basé sur le Tag de l'utilisateur
const avatarUrl = computed(() => {
    const seed = displayedUser.value?.tag || 'default';
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4`;
});

// Simule un nom de secteur basé sur l'ID (Juste pour le lore, ou à remplacer par une vraie data plus tard)
const sectorName = computed(() => {
    if (!displayedUser.value) return 'Unknown';
    const idSlice = displayedUser.value.id.slice(0, 4).toUpperCase();
    return `SEC-${idSlice}`;
});

// --- METHODS ---
const fetchUserData = async () => {
    if (!props.userTag) return;

    isLoading.value = true;
    try {
        const { user } = await UserController.getUserByTag(props.userTag);
        displayedUser.value = user || null;
    } finally {
        isLoading.value = false;
    }
};

// --- LIFECYCLE ---
onMounted(() => {
    fetchUserData();
});

// Recharge si l'ID change (navigation entre profils)
watch(() => props.userTag, () => {
    fetchUserData();
});
</script>

<template>
    <div
        class="absolute top-0 left-0 w-full phone:h-fit p-4 pointer-events-none flex justify-start sm:justify-center md:justify-end md:pr-8">

        <div
            class="pointer-events-auto glass-panel rounded-full px-6 py-2 flex items-center gap-6 shadow-2xl shadow-black/40 transition-all duration-300">

            <div class="flex flex-col text-right min-w-[80px]">
                <span class="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Sector</span>

                <span v-if="!isLoading" class="text-xs font-bold text-gray-200 animate-pulse-once">
                    {{ sectorName }}
                </span>
                <div v-else class="h-4 w-16 bg-white/10 rounded animate-pulse mt-1 ml-auto"></div>
            </div>

            <div class="h-8 w-px bg-white/10 block"></div>

            <div class="flex items-center gap-2">
                <div class="tooltip tooltip-bottom" data-tip="Messages">
                    <button class="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-white hover:bg-white/10"
                        @click="chat.toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="h-8 w-px bg-white/10"></div>

            <div class="flex items-center gap-3 cursor-pointer group">
                <div class="text-right hidden md:block min-w-[80px]">
                    <div v-if="!isLoading"
                        class="text-xs font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">
                        <RouterLink :to="ROUTES.USER_PROFILE.pathDyn(displayedUser?.tag)">
                            {{ displayedUser?.tag || 'Unknown' }}
                        </RouterLink>
                    </div>
                    <div v-else class="h-3 w-20 bg-white/10 rounded animate-pulse mb-1 ml-auto"></div>

                    <div v-if="!isLoading" class="text-[10px] text-gray-500">
                        Level {{ displayedUser?.level || 1 }}
                    </div>
                    <div v-else class="h-2 w-10 bg-white/10 rounded animate-pulse ml-auto"></div>
                </div>

                <div class="avatar" :class="{ 'online': !isLoading }">
                    <div
                        class="w-5 rounded-full ring ring-emerald-500 ring-offset-slate-900 ring-offset-2 bg-slate-800">
                        <img v-if="!isLoading" :src="avatarUrl" alt="Avatar" class="transition-opacity duration-500" />
                        <div v-else class="w-full h-full bg-slate-700 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.glass-panel {
    background: rgba(30, 41, 59, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-pulse-once {
    animation: fadeIn 0.5s ease-out forwards;
}
</style>
```

---
### File: src/components/game/config/ItemRegistery.ts
---

```ts
import * as THREE from 'three'

export interface ItemConfig {
  id: string
  geometry: THREE.BufferGeometry
  material: THREE.Material
  yOffset: number // To adjust if the model anchor is center or bottom
  scale: number
}

// Reusable geometries/materials to save memory
const geoTree = new THREE.ConeGeometry(0.3, 1, 8)
const matTree = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, flatShading: true })

const geoRock = new THREE.DodecahedronGeometry(0.3)
const matRock = new THREE.MeshStandardMaterial({ color: 0x8d99ae, flatShading: true })

export const ITEM_REGISTRY: Record<string, ItemConfig> = {
  tree_pine: {
    id: 'tree_pine',
    geometry: geoTree,
    material: matTree,
    yOffset: 0.5, // Shift up so base is on ground
    scale: 1,
  },
  rock_small: {
    id: 'rock_small',
    geometry: geoRock,
    material: matRock,
    yOffset: 0.15,
    scale: 1,
  },
}

```

---
### File: src/components/game/logic/AutoTilingUtils.ts
---

```ts
// 1 = North, 2 = East, 4 = South, 8 = West

import { TileData } from './LandSceneManager'

// Summing these gives a unique number from 0 to 15
export interface TileLayout {
  type: 'center' | 'edge' | 'corner' | 'tip' | 'island'
  rotation: number // in Radians
}

export const getTileLayout = (
  x: number,
  z: number,
  tileSize: number,
  allTiles: TileData[],
): TileLayout => {
  // Helper to check if a neighbor exists
  const has = (dx: number, dz: number) => allTiles.some((t) => t.x === x + dx && t.z === z + dz)

  // Calculate Bitmask
  let mask = 0
  if (has(0, tileSize)) mask += 1 // North
  if (has(tileSize, 0)) mask += 2 // East
  if (has(0, -tileSize)) mask += 4 // South
  if (has(-tileSize, 0)) mask += 8 // West

  const PI = Math.PI
  const hPI = Math.PI / 2

  // Lookup Table: Map mask to Shape + Rotation
  switch (mask) {
    // --- CENTER (Surrounded) ---
    case 15:
      return { type: 'center', rotation: 0 }

    // --- EDGES (3 Neighbors) ---
    case 14:
      return { type: 'edge', rotation: PI } // N-E-S (Missing West)
    case 13:
      return { type: 'edge', rotation: -hPI } // N-E-W (Missing South)
    case 11:
      return { type: 'edge', rotation: 0 } // N-S-W (Missing East)
    case 7:
      return { type: 'edge', rotation: hPI } // E-S-W (Missing North)

    // --- CORNERS (2 Neighbors) ---
    case 12:
      return { type: 'corner', rotation: 0 } // S-W (Corner is NE)
    case 6:
      return { type: 'corner', rotation: -hPI } // E-S (Corner is NW)
    case 3:
      return { type: 'corner', rotation: PI } // N-E (Corner is SW)
    case 9:
      return { type: 'corner', rotation: hPI } // N-W (Corner is SE)

    // --- TIPS (1 Neighbor) - Optional, can reuse corner or edge ---
    // For simplicity, let's treat tips like corners or define a specific logic
    case 8:
      return { type: 'corner', rotation: hPI }
    case 4:
      return { type: 'corner', rotation: 0 }
    case 2:
      return { type: 'corner', rotation: -hPI }
    case 1:
      return { type: 'corner', rotation: PI }

    // --- ISLAND (0 Neighbors) ---
    case 0:
      return { type: 'center', rotation: 0 } // Or specific single island mesh

    default:
      return { type: 'center', rotation: 0 } // Fallback
  }
}

```

---
### File: src/components/game/logic/LandSceneManager.ts
---

```ts
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { WorldElementManager } from './WorldElementsManager'
import { getTileLayout } from './AutoTilingUtils'
import { calculateGameTime } from '@/shared/gameTime'

// --- CONSTANTS ---
const WORLD_SIZE = 60
const WATER_ANIM_SPEED = 200 // Slightly faster for fluidity
const TILE_SCALE = 0.98 // Gap between tiles prevents z-fighting artifacts

const COLORS = {
  highlight: 0x333399,
  selection: 0x3333cc,
  owned: 0x10b981,
  grid: 0xffffff,
  waterBase: 0xffffff,
  firefly: new THREE.Color(0xffcc00),
}

const CYCLE_KEYS = [
  {
    progress: 0.0, // Midnight
    sky: new THREE.Color(0x020617), // Keep sky dark
    light: new THREE.Color(0xc7d2fe), // Moon color (cool blue)
    ambient: 0.9, // WAS 0.6 -> Increased so shadows aren't pitch black
    dir: 1.2, // WAS 0.8 -> Stronger moonlight to show shapes
    focus: 4.0,
  },
  {
    progress: 0.2, // Late Night
    sky: new THREE.Color(0x020617),
    light: new THREE.Color(0xc7d2fe),
    ambient: 0.9, // Keep it bright
    dir: 1.2,
    focus: 4.0,
  },
  {
    progress: 0.35, // Morning/Day
    sky: new THREE.Color(0x87ceeb),
    light: new THREE.Color(0xffffff),
    ambient: 0.95, // Day is slightly brighter
    dir: 1.5,
    focus: 1.0,
  },
  {
    progress: 0.8, // Evening/Day
    sky: new THREE.Color(0x87ceeb),
    light: new THREE.Color(0xffffff),
    ambient: 0.95,
    dir: 1.5,
    focus: 1.0,
  },
  {
    progress: 1.0, // Midnight (Loop)
    sky: new THREE.Color(0x020617),
    light: new THREE.Color(0xc7d2fe),
    ambient: 0.9, // High visibility
    dir: 1.2,
    focus: 4.0,
  },
]

export interface SceneConfig {
  quality: 'low' | 'high'
  tileSize: number
  onHover: (x: number, z: number) => void
  onClick?: (x: number, z: number) => void
}

export interface TileData {
  x: number
  z: number
  flowerId?: string
  flower?: {
    status: string
    species: { slugName: string }
  } | null
}

type WaterCategory = 'open' | '1side' | '2sides' | '3sides' | '4sides'

// --- SHADERS ---

const FireflyVertexShader = `
uniform float uTime;
uniform float uSize;
attribute float aPhase;
attribute float aYBase;

void main() {
  vec3 pos = position;
  
  // Floating animation: Up/Down sine wave based on time + random phase
  float yOffset = sin(uTime * 1.5 + aPhase) * 0.4; 
  pos.y = aYBase + yOffset;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  // Size attenuation (particles get smaller when further away)
  gl_PointSize = uSize * (30.0 / -mvPosition.z);
}
`

const FireflyFragmentShader = `
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;

void main() {
  vec2 p = gl_PointCoord - vec2(0.5);
  
  float dist = max(abs(p.x), abs(p.y));
  float isCore = step(dist, 0.1); 
  float isBody = step(dist, 0.25); 
  float isGlow = step(dist, 0.5);

  if (isGlow < 0.1) discard;

  vec3 finalColor = uColor;
  float finalAlpha = uOpacity * 0.2; 

  if (isBody > 0.5) {
    finalAlpha = uOpacity * 0.8; 
  }

  if (isCore > 0.5) {
    finalColor = mix(uColor, vec3(1.0, 1.0, 1.0), 0.9); 
    finalAlpha = uOpacity; 
  }

  // --- Retro Blink Effect ---
  // A "stepped" blink looks more 8-bit than a smooth sine wave
  float blink = sin(uTime * 4.0 + gl_FragCoord.x * 0.1);
  float steppedBlink = smoothstep(-0.2, 0.2, blink); // Sharpen the transition
  float intensity = 0.7 + 0.3 * steppedBlink;

  gl_FragColor = vec4(finalColor, finalAlpha * intensity);
}
`

export class LandSceneManager {
  private scene!: THREE.Scene
  private camera!: THREE.OrthographicCamera
  private renderer!: THREE.WebGLRenderer
  private controls!: OrbitControls
  private raycaster: THREE.Raycaster
  private mouse: THREE.Vector2
  private animationId: number = 0
  private loader: THREE.TextureLoader

  // Lights
  private ambientLight!: THREE.AmbientLight
  private dirLight!: THREE.DirectionalLight
  private focusLight!: THREE.SpotLight

  // Fireflies (Optimized)
  private fireflies!: THREE.Points
  private fireflyUniforms!: {
    uTime: { value: number }
    uOpacity: { value: number }
    uColor: { value: THREE.Color }
    uSize: { value: number }
  }

  private elementManager: WorldElementManager

  // Interaction
  private cursorMesh!: THREE.Mesh
  private selectionMesh!: THREE.Object3D
  private raycastPlane!: THREE.Mesh
  private onDownPosition = new THREE.Vector2()

  // Water
  private waterTextureSets: Record<WaterCategory, THREE.Texture[]> = {
    open: [],
    '1side': [],
    '2sides': [],
    '3sides': [],
    '4sides': [],
  }
  private waterMeshes: Record<WaterCategory, THREE.InstancedMesh | null> = {
    open: null,
    '1side': null,
    '2sides': null,
    '3sides': null,
    '4sides': null,
  }
  private currentWaterFrame: number = 0
  private lastWaterUpdate: number = 0

  // Land Meshes
  private meshCenter!: THREE.InstancedMesh
  private meshEdge!: THREE.InstancedMesh
  private meshCorner!: THREE.InstancedMesh

  // Flowers
  private flowerMeshes = new Map<
    string,
    { mesh: THREE.Sprite; currentSlug: string; currentStatus: string }
  >()

  private container: HTMLElement | null = null
  private config: SceneConfig

  constructor(config: SceneConfig) {
    this.config = config
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    this.loader = new THREE.TextureLoader()

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseClick = this.onMouseClick.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
  }

  public init(container: HTMLElement) {
    this.container = container

    // Cleanup container
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild)
    }

    const width = this.container.clientWidth
    const height = this.container.clientHeight

    // --- Scene Setup ---
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x020617) // Default Night

    // Lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(this.ambientLight)

    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
    this.dirLight.position.set(50, 80, 40)
    this.dirLight.castShadow = true
    this.dirLight.shadow.mapSize.width = 2048
    this.dirLight.shadow.mapSize.height = 2048
    this.scene.add(this.dirLight)

    this.focusLight = new THREE.SpotLight(0xffffff, 1.0)
    this.focusLight.position.set(0, 60, 0)
    this.focusLight.angle = Math.PI / 6
    this.focusLight.penumbra = 0.5
    this.focusLight.decay = 1
    this.focusLight.distance = 150
    this.scene.add(this.focusLight)
    this.scene.add(this.focusLight.target)

    // Camera
    const aspect = width / height
    const frustumSize = 40
    this.camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      1000,
    )
    this.camera.position.set(40, 40, 40)
    this.camera.lookAt(0, 0, 0)
    this.camera.zoom = 4.5

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: this.config.quality === 'high',
      alpha: false,
      logarithmicDepthBuffer: true,
      powerPreference: 'high-performance',
    })
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    this.renderer.toneMapping = THREE.LinearToneMapping
    this.renderer.toneMappingExposure = 1.2

    this.container.appendChild(this.renderer.domElement)

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    this.controls.minZoom = 0.5
    this.controls.maxZoom = 4
    this.controls.enableRotate = false
    this.controls.enablePan = true
    this.controls.screenSpacePanning = true
    this.controls.minPolarAngle = Math.PI / 3 - 0.05
    this.controls.maxPolarAngle = Math.PI / 3 + 0.05
    this.controls.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: null }

    this.createWorld()
    this.createFireflies() // GPU Based Fireflies

    this.elementManager = new WorldElementManager(this.scene)

    this.addEventListeners()
    this.animate(0)
  }

  private createWorld() {
    const { tileSize } = this.config

    // Helper to load texture arrays efficiently
    const loadFrames = (folder: string): THREE.Texture[] => {
      const frames: THREE.Texture[] = []
      for (let i = 1; i <= 16; i++) {
        const tex = this.loader.load(`/textures/water/${folder}/frame${i}.png`)
        tex.magFilter = THREE.NearestFilter
        tex.minFilter = THREE.NearestFilter
        tex.colorSpace = THREE.SRGBColorSpace
        frames.push(tex)
      }
      return frames
    }

    // Load Water Textures
    const categories: WaterCategory[] = ['open', '1side', '2sides', '3sides', '4sides']
    categories.forEach((cat) => (this.waterTextureSets[cat] = loadFrames(cat)))

    // Create Water Instanced Meshes
    const waterGeo = new THREE.PlaneGeometry(tileSize, tileSize)
    categories.forEach((cat) => {
      const mat = new THREE.MeshStandardMaterial({
        map: this.waterTextureSets[cat][0],
        color: COLORS.waterBase,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      })
      const mesh = new THREE.InstancedMesh(waterGeo, mat, 4000)
      mesh.receiveShadow = true
      mesh.count = 0
      this.scene.add(mesh)
      this.waterMeshes[cat] = mesh
    })

    // Raycast Plane (Invisible, for performance)
    const raycastGeo = new THREE.PlaneGeometry(WORLD_SIZE * tileSize * 2, WORLD_SIZE * tileSize * 2)
    this.raycastPlane = new THREE.Mesh(raycastGeo, new THREE.MeshBasicMaterial({ visible: false }))
    this.raycastPlane.rotation.x = -Math.PI / 2
    this.scene.add(this.raycastPlane)

    // Grid
    const gridHelper = new THREE.GridHelper(
      WORLD_SIZE * tileSize,
      WORLD_SIZE,
      COLORS.grid,
      COLORS.grid,
    )
    gridHelper.position.set(tileSize / 2, 0.05, tileSize / 2)
    gridHelper.material.opacity = 0.15
    gridHelper.material.transparent = true
    this.scene.add(gridHelper)

    // Cursor
    this.cursorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(tileSize, tileSize),
      new THREE.MeshBasicMaterial({
        color: COLORS.highlight,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      }),
    )
    this.cursorMesh.rotation.x = -Math.PI / 2
    this.cursorMesh.visible = false
    this.scene.add(this.cursorMesh)

    // Selection Box
    this.selectionMesh = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(tileSize, 0.55, tileSize)),
      new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 2 }),
    )
    this.selectionMesh.visible = false
    this.scene.add(this.selectionMesh)

    // Land Tiles (Instanced)
    const loadTex = (p: string) => {
      const t = this.loader.load(p)
      t.magFilter = THREE.NearestFilter
      t.minFilter = THREE.NearestFilter
      t.colorSpace = THREE.SRGBColorSpace
      return t
    }

    const texCenter = loadTex('/textures/soil_center.png')
    const texEdge = loadTex('/textures/soil_edge.png')
    const texCorner = loadTex('/textures/soil_corner.png')
    const texSideGrass = loadTex('/textures/land_grass_side.png')
    const texSideDirt = loadTex('/textures/soil_center.png')
    const texBottom = loadTex('/textures/land_bottom.png')

    const matOpts = { color: 0xffffff, roughness: 1.0, metalness: 0.0 }
    // Materials Array: [px, nx, py, ny, pz, nz]
    const matsCenter = [
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texCenter, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texBottom, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
    ]

    // ... Define Edge and Corner mats similarly (abbreviated for brevity as in original) ...
    const matsEdge = [
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texEdge, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texBottom, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideGrass, ...matOpts }),
    ]
    const matsCorner = [
      new THREE.MeshStandardMaterial({ map: texSideGrass, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texCorner, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texBottom, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideGrass, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
    ]

    const landGeo = new THREE.BoxGeometry(tileSize * TILE_SCALE, 0.5, tileSize * TILE_SCALE)

    this.meshCenter = new THREE.InstancedMesh(landGeo, matsCenter as any, 2000)
    this.meshEdge = new THREE.InstancedMesh(landGeo, matsEdge as any, 2000)
    this.meshCorner = new THREE.InstancedMesh(landGeo, matsCorner as any, 2000)
    ;[this.meshCenter, this.meshEdge, this.meshCorner].forEach((m) => {
      m.receiveShadow = true
      m.castShadow = true
      m.count = 0
      this.scene.add(m)
    })
  }

  private createFireflies() {
    const count = 150
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const phases = new Float32Array(count)
    const yBases = new Float32Array(count)

    const range = 50

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * range
      const z = (Math.random() - 0.5) * range
      const y = Math.random() * 5 + 1.5 // Height between 1.5 and 6.5

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      phases[i] = Math.random() * Math.PI * 2
      yBases[i] = y
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))
    geometry.setAttribute('aYBase', new THREE.BufferAttribute(yBases, 1))

    this.fireflyUniforms = {
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uColor: { value: COLORS.firefly },
      // INCREASED SIZE: 40.0 (was 20.0) ensures we see the "pixel" shape clearly
      uSize: { value: 40.0 * (window.devicePixelRatio || 1) },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: this.fireflyUniforms,
      vertexShader: FireflyVertexShader,
      fragmentShader: FireflyFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false, // Important for particles
    })

    this.fireflies = new THREE.Points(geometry, material)
    this.scene.add(this.fireflies)
  }

  public updateTiles(landTiles: TileData[]) {
    // Reset Counts
    let cCenter = 0,
      cEdge = 0,
      cCorner = 0
    const dummy = new THREE.Object3D()
    const landSet = new Set<string>()

    landTiles.forEach((t) => landSet.add(`${t.x},${t.z}`))

    // 1. Update Land Meshes
    landTiles.forEach((tile) => {
      const layout = getTileLayout(tile.x, tile.z, this.config.tileSize, landTiles)
      dummy.position.set(tile.x, 0.25, tile.z)
      dummy.rotation.set(0, layout.rotation, 0)
      dummy.updateMatrix()

      if (layout.type === 'center') this.meshCenter.setMatrixAt(cCenter++, dummy.matrix)
      else if (layout.type === 'edge') this.meshEdge.setMatrixAt(cEdge++, dummy.matrix)
      else this.meshCorner.setMatrixAt(cCorner++, dummy.matrix)
    })

    this.meshCenter.count = cCenter
    this.meshEdge.count = cEdge
    this.meshCorner.count = cCorner

    // Batch update
    ;[this.meshCenter, this.meshEdge, this.meshCorner].forEach(
      (m) => (m.instanceMatrix.needsUpdate = true),
    )

    this.elementManager.updateElements(landTiles)

    // 2. Update Water Meshes
    const waterCounts: Record<WaterCategory, number> = {
      open: 0,
      '1side': 0,
      '2sides': 0,
      '3sides': 0,
      '4sides': 0,
    }
    const { tileSize } = this.config
    const halfSize = (WORLD_SIZE * tileSize) / 2

    // Scan grid
    for (let x = -halfSize; x < halfSize; x += tileSize) {
      for (let z = -halfSize; z < halfSize; z += tileSize) {
        // Snap to grid
        const gx = Math.round(x / tileSize) * tileSize
        const gz = Math.round(z / tileSize) * tileSize

        if (landSet.has(`${gx},${gz}`)) continue

        // Check Neighbors
        const n = landSet.has(`${gx},${gz - tileSize}`)
        const s = landSet.has(`${gx},${gz + tileSize}`)
        const e = landSet.has(`${gx + tileSize},${gz}`)
        const w = landSet.has(`${gx - tileSize},${gz}`)
        const neighbors = (n ? 1 : 0) + (s ? 1 : 0) + (e ? 1 : 0) + (w ? 1 : 0)

        let cat: WaterCategory = 'open'
        let rot = 0

        if (neighbors === 0) cat = 'open'
        else if (neighbors === 1) {
          cat = '1side'
          rot = n ? 0 : e ? -Math.PI / 2 : s ? Math.PI : Math.PI / 2
        } else if (neighbors === 2) {
          if (n && s) {
            cat = '2sides'
            rot = 0
          } else if (e && w) {
            cat = '2sides'
            rot = Math.PI / 2
          } else {
            cat = '2sides' // Corner pieces usually use 2sides texture rotated
            if (n && e) rot = 0
            else if (e && s) rot = -Math.PI / 2
            else if (s && w) rot = Math.PI
            else if (w && n) rot = Math.PI / 2
          }
        } else if (neighbors === 3) {
          cat = '3sides'
          rot = !s ? 0 : !w ? -Math.PI / 2 : !n ? Math.PI : Math.PI / 2
        } else {
          cat = '4sides'
        }

        const mesh = this.waterMeshes[cat]
        if (mesh) {
          dummy.position.set(gx, 0, gz)
          dummy.rotation.set(-Math.PI / 2, 0, rot)
          dummy.updateMatrix()
          mesh.setMatrixAt(waterCounts[cat]++, dummy.matrix)
        }
      }
    }

    // Apply updates to water
    ;(Object.keys(this.waterMeshes) as WaterCategory[]).forEach((key) => {
      const mesh = this.waterMeshes[key]
      if (mesh) {
        mesh.count = waterCounts[key]
        mesh.instanceMatrix.needsUpdate = true
      }
    })

    this.updateFlowers(landTiles)
  }

  private updateFlowers(tiles: TileData[]) {
    const visitedKeys = new Set<string>()

    tiles.forEach((tile) => {
      if (!tile.flower) return
      const key = `${tile.x},${tile.z}`
      visitedKeys.add(key)

      const existing = this.flowerMeshes.get(key)
      const slug = tile.flower.species.slugName
      const status = tile.flower.status

      if (existing) {
        if (existing.currentSlug !== slug || existing.currentStatus !== status) {
          this.loadFlowerTextureWithFallback(slug, status, (tex) => {
            existing.mesh.material.map = tex
            existing.mesh.material.needsUpdate = true
            existing.currentSlug = slug
            existing.currentStatus = status
          })
        }
      } else {
        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({ transparent: true, depthWrite: false }),
        )
        sprite.position.set(tile.x, 0.55, tile.z)
        sprite.scale.set(1.5, 1.5, 1.5)
        sprite.center.set(0.5, 0.0)
        this.scene.add(sprite)

        this.flowerMeshes.set(key, { mesh: sprite, currentSlug: slug, currentStatus: status })
        this.loadFlowerTextureWithFallback(slug, status, (tex) => {
          sprite.material.map = tex
          sprite.material.needsUpdate = true
        })
      }
    })

    // Cleanup removed flowers
    this.flowerMeshes.forEach((entry, key) => {
      if (!visitedKeys.has(key)) {
        this.scene.remove(entry.mesh)
        entry.mesh.material.dispose()
        this.flowerMeshes.delete(key)
      }
    })
  }

  private loadFlowerTextureWithFallback(
    slug: string,
    status: string,
    onLoaded: (tex: THREE.Texture) => void,
  ) {
    const setProps = (t: THREE.Texture) => {
      t.colorSpace = THREE.SRGBColorSpace
      t.magFilter = THREE.NearestFilter
      onLoaded(t)
    }
    const spriteUrl = `/api/images/flowers/${slug}/${status.toLowerCase()}/sprite?noFallback=True`
    const iconUrl = `/api/images/flowers/${slug}/${status.toLowerCase()}/icon`

    this.loader.load(spriteUrl, setProps, undefined, () => {
      this.loader.load(iconUrl, setProps, undefined, (e) =>
        console.warn(`Missing flower tex: ${slug}`, e),
      )
    })
  }

  public isAdjacentToLand(x: number, z: number, existingTiles: TileData[]): boolean {
    const { tileSize } = this.config
    const neighbors = [
      { dx: 0, dz: tileSize },
      { dx: tileSize, dz: 0 },
      { dx: 0, dz: -tileSize },
      { dx: -tileSize, dz: 0 },
    ]
    return neighbors.some((offset) => {
      return existingTiles.some((tile) => tile.x === x + offset.dx && tile.z === z + offset.dz)
    })
  }

  public setSelection(x: number | null, z: number | null) {
    if (x === null || z === null) {
      this.selectionMesh.visible = false
    } else {
      this.selectionMesh.position.set(x, 0.25, z)
      this.selectionMesh.visible = true
    }
  }

  // --- EVENTS ---

  private addEventListeners() {
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('resize', this.onWindowResize)
    // Use optional chaining just in case container isn't set, though init() ensures it is
    this.container?.addEventListener('mousedown', this.onMouseDown)
    this.container?.addEventListener('click', this.onMouseClick)
  }

  private onMouseDown(event: MouseEvent) {
    this.onDownPosition.set(event.clientX, event.clientY)
  }

  private onMouseMove(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    this.raycaster.setFromCamera(this.mouse, this.camera)

    const intersects = this.raycaster.intersectObject(this.raycastPlane)

    if (intersects.length > 0) {
      const point = intersects[0].point
      const { tileSize } = this.config
      const x = Math.floor((point.x + tileSize / 2) / tileSize) * tileSize
      const z = Math.floor((point.z + tileSize / 2) / tileSize) * tileSize

      const limit = (WORLD_SIZE * tileSize) / 2
      if (Math.abs(x) < limit && Math.abs(z) < limit) {
        this.cursorMesh.position.set(x, 0.3, z)
        this.cursorMesh.visible = true
        this.config.onHover(x, z)
        return
      }
    }
    this.cursorMesh.visible = false
    this.config.onHover(NaN, NaN)
  }

  private onMouseClick(event: MouseEvent) {
    if (
      Math.abs(this.onDownPosition.x - event.clientX) > 5 ||
      Math.abs(this.onDownPosition.y - event.clientY) > 5
    )
      return
    if (this.cursorMesh.visible && this.config.onClick) {
      this.config.onClick(this.cursorMesh.position.x, this.cursorMesh.position.z)
    }
  }

  private onWindowResize() {
    if (!this.container || !this.camera || !this.renderer) return
    const w = window.innerWidth
    const h = window.innerHeight
    const aspect = w / h
    const frustumSize = 40

    this.camera.left = (-frustumSize * aspect) / 2
    this.camera.right = (frustumSize * aspect) / 2
    this.camera.top = frustumSize / 2
    this.camera.bottom = -frustumSize / 2
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
  }

  // --- ANIMATION ---

  private updateDayNightCycle(gameProgress: number) {
    // Determine cycle phase
    let startKey = CYCLE_KEYS[0]
    let endKey = CYCLE_KEYS[1]

    for (let i = 0; i < CYCLE_KEYS.length - 1; i++) {
      if (gameProgress >= CYCLE_KEYS[i].progress && gameProgress < CYCLE_KEYS[i + 1].progress) {
        startKey = CYCLE_KEYS[i]
        endKey = CYCLE_KEYS[i + 1]
        break
      }
    }

    const t = (gameProgress - startKey.progress) / (endKey.progress - startKey.progress)

    // Lerp values
    this.scene.background = new THREE.Color().lerpColors(startKey.sky, endKey.sky, t)
    const lightColor = new THREE.Color().lerpColors(startKey.light, endKey.light, t)

    this.ambientLight.intensity = THREE.MathUtils.lerp(startKey.ambient, endKey.ambient, t)
    this.dirLight.intensity = THREE.MathUtils.lerp(startKey.dir, endKey.dir, t)
    this.dirLight.color.copy(lightColor)
    this.focusLight.intensity = THREE.MathUtils.lerp(startKey.focus, endKey.focus, t)
    this.focusLight.color.copy(lightColor)

    // Sun Position
    const angle = gameProgress * Math.PI * 2 - Math.PI / 2
    this.dirLight.position.set(Math.cos(angle) * 100, Math.sin(angle) * 100, 40)
    this.dirLight.lookAt(0, 0, 0)

    // Firefly Opacity Logic (Fade in/out based on Game Time)
    const timeStruct = calculateGameTime()
    const isNight = timeStruct.hour >= 20 || timeStruct.hour < 5
    const targetOpacity = isNight ? 1.0 : 0.0
    // Smooth fade
    this.fireflyUniforms.uOpacity.value +=
      (targetOpacity - this.fireflyUniforms.uOpacity.value) * 0.02
  }

  private animate(time: number) {
    this.animationId = requestAnimationFrame(this.animate.bind(this))

    // 1. Water Animation (Sprite swap)
    if (time - this.lastWaterUpdate > WATER_ANIM_SPEED) {
      this.currentWaterFrame = (this.currentWaterFrame + 1) % 15
      ;(Object.keys(this.waterMeshes) as WaterCategory[]).forEach((cat) => {
        const mesh = this.waterMeshes[cat]
        const textures = this.waterTextureSets[cat]
        if (mesh && textures.length > 0 && textures[this.currentWaterFrame]) {
          // Only update map, don't create new material
          ;(mesh.material as THREE.MeshStandardMaterial).map = textures[this.currentWaterFrame]
          // (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true // Usually not needed just for map swap in Three r120+
        }
      })
      this.lastWaterUpdate = time
    }

    // 2. Day/Night & Lighting
    const gameTime = calculateGameTime()
    this.updateDayNightCycle(gameTime.progress)

    // 3. Firefly Animation (GPU)
    // We pass REAL time (time / 1000) for smooth movement, distinct from game time
    this.fireflyUniforms.uTime.value = time * 0.001

    // 4. Selection Pulse
    if (this.selectionMesh.visible) {
      const scale = 1 + Math.sin(time * 0.005) * 0.03
      this.selectionMesh.scale.set(scale, 1, scale)
      ;(this.selectionMesh.material as THREE.LineBasicMaterial).opacity =
        0.5 + Math.sin(time * 0.01) * 0.5
    }

    this.controls.update()

    // Clamp Controls
    const limit = (WORLD_SIZE * this.config.tileSize) / 2
    this.controls.target.x = THREE.MathUtils.clamp(this.controls.target.x, -limit, limit)
    this.controls.target.z = THREE.MathUtils.clamp(this.controls.target.z, -limit, limit)

    this.renderer.render(this.scene, this.camera)
  }

  public dispose() {
    cancelAnimationFrame(this.animationId)

    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.onWindowResize)
    this.container?.removeEventListener('click', this.onMouseClick)
    this.container?.removeEventListener('mousedown', this.onMouseDown)

    // Dispose Fireflies
    if (this.fireflies) {
      this.scene.remove(this.fireflies)
      this.fireflies.geometry.dispose()
      ;(this.fireflies.material as THREE.Material).dispose()
    }

    // Dispose Flowers
    this.flowerMeshes.forEach((entry) => {
      this.scene.remove(entry.mesh)
      entry.mesh.material.map?.dispose()
      entry.mesh.material.dispose()
    })
    this.flowerMeshes.clear()

    // Dispose Water Textures
    Object.values(this.waterTextureSets).forEach((arr) => arr.forEach((t) => t.dispose()))

    // Dispose Scene
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.InstancedMesh) {
        obj.geometry.dispose()
        const mat = obj.material
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
        else mat.dispose()
      }
    })

    this.renderer.dispose()
    this.renderer.forceContextLoss()
    this.container?.removeChild(this.renderer.domElement)

    if (this.elementManager) this.elementManager.dispose()
    this.controls.dispose()
  }
}

```

---
### File: src/components/game/logic/WorldElementsManager.ts
---

```ts
import * as THREE from 'three'
import { ITEM_REGISTRY } from '../config/ItemRegistery'
import { TileData } from './LandSceneManager'

export class WorldElementManager {
  private scene: THREE.Scene
  private meshMap: Map<string, THREE.InstancedMesh> = new Map()
  private dummy: THREE.Object3D = new THREE.Object3D()

  constructor(scene: THREE.Scene) {
    this.scene = scene
  }

  public updateElements(tiles: TileData[]) {
    // 1. Group tiles by their contentId
    const groups: Record<string, TileData[]> = {}

    tiles.forEach((tile) => {
      if (tile.contentId && ITEM_REGISTRY[tile.contentId]) {
        if (!groups[tile.contentId]) groups[tile.contentId] = []
        groups[tile.contentId].push(tile)
      }
    })

    // 2. Process each group
    for (const [itemId, config] of Object.entries(ITEM_REGISTRY)) {
      const itemsToRender = groups[itemId] || []

      // Get or Create the InstancedMesh for this item type
      let mesh = this.meshMap.get(itemId)

      if (!mesh) {
        // Create new InstancedMesh with buffer for 1000 items (resizable)
        mesh = new THREE.InstancedMesh(config.geometry, config.material, 2000)
        mesh.receiveShadow = true
        mesh.castShadow = true
        this.scene.add(mesh)
        this.meshMap.set(itemId, mesh)
      }

      // 3. Update instances
      mesh.count = itemsToRender.length

      itemsToRender.forEach((tile, index) => {
        this.dummy.position.set(tile.x, 0.25 + config.yOffset, tile.z)
        this.dummy.scale.set(config.scale, config.scale, config.scale)
        this.dummy.updateMatrix()

        mesh!.setMatrixAt(index, this.dummy.matrix)
      })

      mesh.instanceMatrix.needsUpdate = true
    }
  }

  public dispose() {
    this.meshMap.forEach((mesh) => {
      this.scene.remove(mesh)
      mesh.geometry.dispose()
      // Don't dispose shared materials here if they are consts in Registry,
      // or handle carefully.
    })
    this.meshMap.clear()
  }
}

```

---
### File: src/components/game/modal_features/InventoryInModal.vue
---

```vue
<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { remult } from 'remult';
import { useAuthStore } from '@/stores/auth';
import { FlowerStatus, FlowerRarity, ItemType } from '@/shared/types';
import { UserItem } from '@/shared/user/UserItem';
import { UserFlower } from '@/shared';
import { MarketController } from '@/server/controllers/MarketController';
import { GameController } from '@/server/controllers/GameController';
import FlowerImage from '@/components/FlowerImage.vue';

const auth = useAuthStore();
const flowerRepo = remult.repo(UserFlower);
const itemRepo = remult.repo(UserItem);

const activeTab = ref<'FLOWERS' | 'ITEMS'>('FLOWERS');
const isLoading = ref(true);
const selectedObject = ref<UserFlower | UserItem | null>(null);

const rawFlowers = ref<UserFlower[]>([]);
const rawItems = ref<UserItem[]>([]);

const searchQuery = ref('');
const currentMarketPrice = ref<number | null>(null);
const activeListingCount = ref<number>(0);

type DisplaySize = 'SMALL' | 'MEDIUM' | 'LARGE';
const displaySize = ref<DisplaySize>('SMALL');

type SortOption = 'QUALITY_DESC' | 'QUALITY_ASC' | 'RARITY_DESC' | 'NAME_ASC' | 'QUANTITY_DESC';
const flowerSort = ref<SortOption>('RARITY_DESC');
const itemSort = ref<SortOption>('QUANTITY_DESC');

const fetchInventory = async () => {
    if (!auth.user) return;

    isLoading.value = true;
    try {
        const { flowers, items } = await GameController.getUserInventory()
        rawFlowers.value = flowers
        rawItems.value = items
    } catch (e) {
        console.error(e);
    } finally {
        isLoading.value = false;
    }
};

onMounted(async () => {
    if (!auth.user) await auth.fetchSessionUser();
    fetchInventory();
});

const rarityOrder: { [key in FlowerRarity]: number } = {
    'COMMON': 0,
    'UNCOMMON': 1,
    'RARE': 2,
    'EPIC': 3,
    'LEGENDARY': 4,
};

const flowers = computed(() => {
    let list = [...rawFlowers.value];

    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase();
        list = list.filter(f => f.species?.name.toLowerCase().includes(q));
    }

    switch (flowerSort.value) {
        case 'QUALITY_DESC':
            return list.sort((a, b) => b.quality - a.quality);
        case 'QUALITY_ASC':
            return list.sort((a, b) => a.quality - b.quality);
        case 'RARITY_DESC':
            return list.sort((a, b) => {
                const rA = rarityOrder[a.species?.rarity || 'COMMON'];
                const rB = rarityOrder[b.species?.rarity || 'COMMON'];
                return rB - rA;
            });
        case 'NAME_ASC':
            return list.sort((a, b) => (a.species?.name || '').localeCompare(b.species?.name || ''));
        default:
            return list;
    }
});

const items = computed(() => {
    let list = [...rawItems.value];

    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase();
        list = list.filter(i => i.definition?.name.toLowerCase().includes(q));
    }

    switch (itemSort.value) {
        case 'QUANTITY_DESC':
            return list.sort((a, b) => b.quantity - a.quantity);
        case 'NAME_ASC':
            return list.sort((a, b) => (a.definition?.name || '').localeCompare(b.definition?.name || ''));
        default:
            return list;
    }
});

watch(selectedObject, async (newVal) => {
    currentMarketPrice.value = null;
    activeListingCount.value = 0;

    if (newVal && isFlower(newVal) && newVal.speciesId) {
        try {
            const metrics = await MarketController.getFlowerMarketMetrics(newVal.speciesId);
            currentMarketPrice.value = metrics.lowestPrice;
            activeListingCount.value = metrics.count;
        } catch (e) {
            console.error("Error fetching market data", e);
        }
    }
});

const getRarityGlowStyle = (rarity?: FlowerRarity) => {
    const colors: Record<FlowerRarity, string> = {
        'COMMON': '#94a3b8',
        'UNCOMMON': '#34d399',
        'RARE': '#60a5fa',
        'EPIC': '#c084fc',
        'LEGENDARY': '#fbbf24'
    };

    const color = colors[rarity || 'COMMON'];

    return {
        boxShadow: `inset 0 0 12px ${color}40, 0 0 20px ${color}60`,
        borderColor: `${color}80`
    };
};

const getRarityTextColorClass = (rarity?: FlowerRarity) => {
    switch (rarity) {
        case 'COMMON': return 'text-slate-400 border-slate-400/30';
        case 'UNCOMMON': return 'text-emerald-400 border-emerald-400/30';
        case 'RARE': return 'text-blue-400 border-blue-400/30';
        case 'EPIC': return 'text-purple-400 border-purple-400/30';
        case 'LEGENDARY': return 'text-amber-400 border-amber-400/30';
        default: return 'text-slate-400 border-slate-400/30';
    }
};

const getItemTypeIcon = (type?: ItemType) => {
    switch (type) {
        case 'CONSUMABLE': return '🧪';
        case 'TOOL': return '🔨';
        case 'RESOURCE': return '🪵';
        default: return '📦';
    }
};

const isFlower = (obj: any): obj is UserFlower => {
    return obj && 'species' in obj;
};

const flowerSortOptions: { value: SortOption, label: string }[] = [
    { value: 'RARITY_DESC', label: 'Rarity (High to Low)' },
    { value: 'QUALITY_DESC', label: 'Quality (High to Low)' },
    { value: 'NAME_ASC', label: 'Name (A-Z)' },
];

const itemSortOptions: { value: SortOption, label: string }[] = [
    { value: 'QUANTITY_DESC', label: 'Quantity (High to Low)' },
    { value: 'NAME_ASC', label: 'Name (A-Z)' },
];

watch(activeTab, () => {
    selectedObject.value = null;
});
</script>

<template>
    <div class="flex h-full w-full text-slate-200 overflow-hidden">

        <div class="flex-1 flex flex-col border-r border-slate-700/50 bg-slate-900/30">

            <div class="flex border-b border-slate-700/50">
                <button @click="activeTab = 'FLOWERS'"
                    class="flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors relative"
                    :class="activeTab === 'FLOWERS' ? 'text-emerald-400 bg-slate-800/50' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/20'">
                    🌱 Seeds Bag
                    <div v-if="activeTab === 'FLOWERS'" class="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400">
                    </div>
                </button>
                <button @click="activeTab = 'ITEMS'"
                    class="flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors relative"
                    :class="activeTab === 'ITEMS' ? 'text-blue-400 bg-slate-800/50' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/20'">
                    🎒 Backpack
                    <div v-if="activeTab === 'ITEMS'" class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></div>
                </button>
            </div>

            <div class="flex flex-col gap-3 p-3 border-b border-slate-700/50 bg-slate-900/50">

                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" v-model="searchQuery" placeholder="Search..."
                        class="input input-sm w-full bg-slate-800 border-slate-700 text-slate-200 pl-9 focus:outline-none focus:border-slate-500 placeholder-slate-500 transition-colors" />
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <label class="text-xs text-slate-400 whitespace-nowrap">Sort by:</label>
                        <select v-if="activeTab === 'FLOWERS'" v-model="flowerSort"
                            class="select select-bordered select-xs bg-slate-800 border-slate-700 text-slate-300 focus:outline-none">
                            <option v-for="option in flowerSortOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>

                        <select v-if="activeTab === 'ITEMS'" v-model="itemSort"
                            class="select select-bordered select-xs bg-slate-800 border-slate-700 text-slate-300 focus:outline-none">
                            <option v-for="option in itemSortOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </div>

                    <div v-if="activeTab === 'FLOWERS'"
                        class="flex items-center gap-1 p-1 bg-slate-800 rounded-lg border border-slate-700/50">
                        <button @click="displaySize = 'SMALL'" class="p-1.5 rounded transition-colors"
                            :class="displaySize === 'SMALL' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-500 hover:text-slate-300'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>
                        <button @click="displaySize = 'MEDIUM'" class="p-1.5 rounded transition-colors"
                            :class="displaySize === 'MEDIUM' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-500 hover:text-slate-300'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                        </button>
                        <button @click="displaySize = 'LARGE'" class="p-1.5 rounded transition-colors"
                            :class="displaySize === 'LARGE' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-500 hover:text-slate-300'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <rect x="3" y="3" width="14" height="14" rx="2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">

                <div v-if="isLoading" class="flex justify-center items-center h-full">
                    <span class="loading loading-spinner loading-lg text-emerald-500"></span>
                </div>

                <div v-else-if="(activeTab === 'FLOWERS' && flowers.length === 0) || (activeTab === 'ITEMS' && items.length === 0)"
                    class="flex flex-col items-center justify-center h-full text-slate-500 opacity-60">
                    <div class="text-4xl mb-2">🤷‍♂️</div>
                    <p v-if="searchQuery">No results found.</p>
                    <p v-else>This pocket is empty.</p>
                </div>

                <div v-if="activeTab === 'FLOWERS' && !isLoading" class="grid gap-3" :class="{
                    'grid-cols-3 sm:grid-cols-4 md:grid-cols-5': displaySize === 'LARGE',
                    'grid-cols-4 sm:grid-cols-5 md:grid-cols-6': displaySize === 'MEDIUM',
                    'grid-cols-5 sm:grid-cols-6 md:grid-cols-7': displaySize === 'SMALL'
                }">
                    <div v-for="flower in flowers" :key="flower.id" @click="selectedObject = flower"
                        class="aspect-square rounded-xl border cursor-pointer transition-all hover:scale-105 hover:shadow-lg relative group bg-slate-800/40 flex items-center justify-center"
                        :style="selectedObject?.id === flower.id ? getRarityGlowStyle(flower.species?.rarity) : { borderColor: 'rgba(51, 65, 85, 0.5)' }">

                        <div class="w-full h-full p-2 flex items-center justify-center">
                            <FlowerImage :slug="flower.species?.slugName || ''" status="SEED" type="icon" size="100%"
                                class="drop-shadow-md opacity-90 group-hover:opacity-100" />
                        </div>

                        <div
                            class="absolute top-1 right-1 text-[10px] font-mono bg-black/50 px-1 rounded text-white backdrop-blur-sm">
                            Q{{ Math.round(flower.quality * 100) }}
                        </div>
                    </div>
                </div>

                <div v-if="activeTab === 'ITEMS' && !isLoading"
                    class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    <div v-for="item in items" :key="item.id" @click="selectedObject = item"
                        class="aspect-square rounded-xl border border-slate-700/50 bg-slate-800/40 cursor-pointer transition-all hover:scale-105 hover:bg-slate-700 hover:border-blue-500/50 relative group"
                        :class="{ 'ring-2 ring-blue-400 bg-slate-700': selectedObject?.id === item.id }">
                        <div class="w-full h-full p-2 flex items-center justify-center">
                            <img :src="item.definition?.assetUrl"
                                class="w-full h-full object-contain drop-shadow-md opacity-90 group-hover:opacity-100" />
                        </div>

                        <div
                            class="absolute bottom-1 right-1 bg-slate-900 text-slate-200 text-xs font-bold px-1.5 py-0.5 rounded border border-slate-700">
                            x{{ item.quantity }}
                        </div>

                        <div class="absolute top-1 left-1 opacity-50 text-xs">
                            {{ getItemTypeIcon(item.definition?.type) }}
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="w-80 flex flex-col bg-slate-900/80 backdrop-blur-xl border-l border-slate-700/50 p-6 relative">
            <transition name="fade" mode="out-in">
                <div v-if="!selectedObject"
                    class="flex-1 flex flex-col items-center justify-center text-center text-slate-500">
                    <div
                        class="w-16 h-16 rounded-full bg-slate-800 mb-4 flex items-center justify-center text-2xl animate-pulse">
                        👆
                    </div>
                    <p class="text-sm">Select an item to view details</p>
                </div>

                <div v-else-if="isFlower(selectedObject)" :key="selectedObject.id" class="flex flex-col h-full">
                    <div class="flex justify-center mb-6">
                        <div class="w-32 h-32 rounded-2xl bg-slate-900/50 border shadow-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                            :style="getRarityGlowStyle(selectedObject.species?.rarity)">

                            <FlowerImage :slug="selectedObject.species?.slugName || ''" status="SEED" type="sprite"
                                size="96px" class="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] scale-125" />
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex items-center justify-between mb-1">
                            <h2 class="text-xl font-bold text-white">{{ selectedObject.species?.name }}</h2>
                            <span class="text-xs px-2 py-0.5 rounded border uppercase font-bold"
                                :class="getRarityTextColorClass(selectedObject.species?.rarity)">
                                {{ selectedObject.species?.rarity }}
                            </span>
                        </div>
                        <p class="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Seed</p>
                        <p class="text-sm text-slate-400 italic leading-relaxed">
                            {{ selectedObject.species?.description }}
                        </p>
                    </div>

                    <div class="bg-slate-800/40 p-3 rounded-lg border border-slate-700/50 mb-4">
                        <div class="flex justify-between items-center mb-2 pb-2 border-b border-slate-700/30">
                            <span class="text-xs font-bold text-slate-400 uppercase">Market Data</span>
                            <span class="text-xs text-slate-500">{{ activeListingCount }} Listings</span>
                        </div>
                        <div class="flex justify-between items-end">
                            <span class="text-xs text-slate-400">Est. Market Value</span>
                            <div v-if="currentMarketPrice !== null"
                                class="text-lg font-mono text-emerald-400 font-bold">
                                {{ currentMarketPrice }} <span class="text-xs font-normal">Sap</span>
                            </div>
                            <div v-else class="text-sm text-slate-500 italic">
                                Unavailable
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3 mb-auto">
                        <div class="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                            <div class="flex justify-between text-xs mb-1">
                                <span class="text-slate-400">Quality</span>
                                <span class="text-emerald-400 font-mono">{{ Math.round(selectedObject.quality * 100)
                                    }}%</span>
                            </div>
                            <progress class="progress progress-success w-full h-1.5"
                                :value="selectedObject.quality * 100" max="100"></progress>
                        </div>

                        <div
                            class="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex justify-between items-center">
                            <span class="text-xs text-slate-400">Growth Time</span>
                            <span class="text-sm text-slate-200">
                                {{ Math.round((selectedObject.species?.growthDuration || 0) / 60) }} min
                            </span>
                        </div>
                    </div>

                    <div class="mt-6 space-y-2">
                        <button class="btn btn-primary w-full shadow-lg shadow-emerald-500/20">
                            Plant in Garden
                        </button>
                        <button class="btn btn-ghost btn-sm w-full text-slate-400 hover:text-red-400">
                            Trash
                        </button>
                    </div>
                </div>

                <div v-else :key="`item-${selectedObject.id}`" class="flex flex-col h-full">
                    <div class="flex justify-center mb-6">
                        <div
                            class="w-32 h-32 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center relative overflow-hidden shadow-2xl">
                            <img :src="selectedObject.definition?.assetUrl"
                                class="w-20 h-20 object-contain drop-shadow-lg" />
                        </div>
                    </div>

                    <div class="mb-6">
                        <h2 class="text-xl font-bold text-white mb-1">{{ selectedObject.definition?.name }}</h2>
                        <div class="flex gap-2 mb-3">
                            <span class="badge badge-neutral text-xs font-mono">{{ selectedObject.definition?.type
                                }}</span>
                            <span v-if="selectedObject.definition?.isTradable"
                                class="badge badge-ghost text-xs">Tradable</span>
                        </div>
                        <p class="text-sm text-slate-400 leading-relaxed">
                            {{ selectedObject.definition?.description }}
                        </p>
                    </div>

                    <div class="space-y-3 mb-auto">
                        <div
                            class="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                            <span class="text-sm text-slate-400">Quantity Owned</span>
                            <span class="text-xl font-mono font-bold text-white">{{ selectedObject.quantity }}</span>
                        </div>

                        <div
                            class="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                            <span class="text-sm text-slate-400">Base Value</span>
                            <span class="text-sm font-mono text-emerald-400">
                                {{ (selectedObject.definition?.basePrice || 0) * selectedObject.quantity }} Sap
                            </span>
                        </div>
                    </div>

                    <div class="mt-6 space-y-2">
                        <button v-if="selectedObject.definition?.type === 'CONSUMABLE'"
                            class="btn btn-info w-full text-white">
                            Use Item
                        </button>
                        <button v-else class="btn btn-secondary w-full">
                            Equip / Inspect
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
```

---
### File: src/components/game/modal_features/MarketInModal.vue
---

```vue
<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { remult } from 'remult'
import { useModalStore } from '@/stores/modal'
import { FlowerRarity } from '@/shared/types'
import { FlowerSpecies, MarketListing, MarketStats } from '@/shared'
import { MarketController } from '@/server/controllers/MarketController'

import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import FlowerImage from '@/components/FlowerImage.vue'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const speciesList = ref<FlowerSpecies[]>([])
const listings = ref<MarketListing[]>([])
const stats = ref<MarketStats[]>([])

const selectedSpeciesId = ref<string | null>(null)
const isLoading = ref(true)
const buyingId = ref<string | null>(null)
const timeFilter = ref<'7d' | '30d' | '1y'>('7d')
const rarityFilter = ref<FlowerRarity | 'ALL'>('ALL')

const initialPrice = ref(0)

const fetchData = async () => {
    isLoading.value = true
    try {
        const { listings: l, speciesList: sL } = await MarketController.getMarketplaceData()

        speciesList.value = sL
        listings.value = l

        if (!selectedSpeciesId.value && speciesList.value.length > 0) {
            selectedSpeciesId.value = speciesList.value[0].id
        }
    } catch (error) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
}

watch([selectedSpeciesId, timeFilter], async () => {
    if (!selectedSpeciesId.value) return

    const date = new Date()
    date.setHours(0, 0, 0, 0)

    if (timeFilter.value === '7d') date.setDate(date.getDate() - 7)
    if (timeFilter.value === '30d') date.setDate(date.getDate() - 30)
    if (timeFilter.value === '1y') date.setFullYear(date.getFullYear() - 1)

    const currentStats = await MarketController.getSpeciesMarketStats(
        selectedSpeciesId.value,
        { after: date }
    )
    stats.value = currentStats

    const prevStat = await MarketController.getLastSaleStat(selectedSpeciesId.value, date)
    initialPrice.value = prevStat ? prevStat.averagePrice : 0
})

onMounted(fetchData)

const marketOverview = computed(() => {
    const map = new Map<string, { count: number, minPrice: number }>()
    listings.value.forEach(l => {
        if (!l.flower) return
        const sid = l.flower.speciesId
        const current = map.get(sid) || { count: 0, minPrice: Infinity }
        map.set(sid, {
            count: current.count + 1,
            minPrice: Math.min(current.minPrice, l.price)
        })
    })
    return map
})

const filteredSpecies = computed(() => {
    let list = speciesList.value
    if (rarityFilter.value !== 'ALL') {
        list = list.filter(s => s.rarity === rarityFilter.value)
    }
    return list
})

const selectedSpecies = computed(() =>
    speciesList.value.find(s => s.id === selectedSpeciesId.value)
)

const activeListingsForSelected = computed(() =>
    listings.value
        .filter(l => l.flower?.speciesId === selectedSpeciesId.value)
        .sort((a, b) => a.price - b.price)
)

const latestStat = computed(() => stats.value.length > 0 ? stats.value[stats.value.length - 1] : null)

const chartData = computed(() => {
    const isYearly = timeFilter.value === '1y';

    const endDate = new Date()
    endDate.setHours(0, 0, 0, 0)
    const startDate = new Date(endDate)

    if (timeFilter.value === '7d') startDate.setDate(startDate.getDate() - 7)
    else if (timeFilter.value === '30d') startDate.setDate(startDate.getDate() - 30)
    else startDate.setFullYear(startDate.getFullYear() - 1)

    const statsMap = new Map<string, number>()
    stats.value.forEach(s => {
        const d = new Date(s.date)
        d.setHours(0, 0, 0, 0)
        statsMap.set(d.toISOString(), s.averagePrice)
    })

    const labels: string[] = []
    const prices: number[] = []

    let lastKnownPrice = initialPrice.value

    const stepDays = isYearly ? 7 : 1;

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + stepDays)) {

        labels.push(d.toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' }))

        if (isYearly) {
            const weekEnd = new Date(d);
            weekEnd.setDate(weekEnd.getDate() + 7);

            let sum = 0;

            const weekStats = stats.value.filter(s => {
                const sDate = new Date(s.date);
                return sDate >= d && sDate < weekEnd;
            });

            if (weekStats.length > 0) {
                weekStats.forEach(ws => sum += ws.averagePrice);
                const avg = Math.round(sum / weekStats.length);
                prices.push(avg);
                lastKnownPrice = avg;
            } else {
                prices.push(lastKnownPrice);
            }

        } else {
            const iso = d.toISOString()
            if (statsMap.has(iso)) {
                const price = statsMap.get(iso)!
                prices.push(price)
                lastKnownPrice = price
            } else {
                prices.push(lastKnownPrice)
            }
        }
    }

    return {
        labels,
        datasets: [
            {
                label: 'Average Price',
                data: prices,
                borderColor: '#34d399',
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(52, 211, 153, 0.5)');
                    gradient.addColorStop(1, 'rgba(52, 211, 153, 0)');
                    return gradient;
                },
                borderWidth: 2,
                pointRadius: (ctx: any) => {
                    const index = ctx.dataIndex;
                    const val = ctx.dataset.data[index];
                    const prev = ctx.dataset.data[index - 1];
                    return (index === 0 || index === ctx.dataset.data.length - 1 || val !== prev) ? 3 : 0;
                },
                pointHoverRadius: 6,
                pointBackgroundColor: '#10b981',
                fill: true,
                spanGaps: true,
                tension: 0.4
            }
        ]
    }
})

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#e2e8f0',
            bodyColor: '#34d399',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            displayColors: false,
            callbacks: {
                label: (context: any) => `${context.parsed.y} Sap`
            }
        }
    },
    scales: {
        x: {
            grid: { display: false, drawBorder: false },
            ticks: { color: '#64748b', maxTicksLimit: 8 }
        },
        y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
            ticks: { color: '#64748b' },
            beginAtZero: true
        }
    },
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
    }
}

const handleBuy = async (listing: MarketListing) => {
    if (!confirm(`Buy this flower for ${listing.price} Sap?`)) return
    buyingId.value = listing.id
    try {
        const result = await MarketController.buyListing(listing.id)
        listings.value = listings.value.filter(l => l.id !== listing.id)
        useModalStore().open({
            title: 'Success!',
            message: result.message,
            type: 'success',
            size: 'standard'
        })
    } catch (e: any) {
        alert(e.message)
    } finally {
        buyingId.value = null
    }
}

const getRarityGlowStyle = (rarity?: FlowerRarity) => {
    const colors: Record<FlowerRarity, string> = {
        'COMMON': '#94a3b8',
        'UNCOMMON': '#34d399',
        'RARE': '#60a5fa',
        'EPIC': '#c084fc',
        'LEGENDARY': '#fbbf24'
    };

    const color = colors[rarity || 'COMMON'];

    return {
        boxShadow: `inset 0 0 12px ${color}40, 0 0 20px ${color}60`,
        borderColor: `${color}80`
    };
};

const getRarityTextColorClass = (rarity?: FlowerRarity) => {
    switch (rarity) {
        case 'COMMON': return 'text-slate-400 border-slate-400/30';
        case 'UNCOMMON': return 'text-emerald-400 border-emerald-400/30';
        case 'RARE': return 'text-blue-400 border-blue-400/30';
        case 'EPIC': return 'text-purple-400 border-purple-400/30';
        case 'LEGENDARY': return 'text-amber-400 border-amber-400/30';
        default: return 'text-slate-400 border-slate-400/30';
    }
}

const getQualityColor = (quality: number = 0) => {
    if (quality >= 0.9) return 'text-amber-400';
    if (quality >= 0.7) return 'text-purple-400';
    if (quality >= 0.5) return 'text-blue-400';
    return 'text-slate-400';
}
</script>

<template>
    <div class="flex w-full h-full text-slate-200">

        <div class="w-1/3 border-r border-slate-700/50 flex flex-col bg-slate-900/30">
            <div class="p-4 border-b border-slate-700/50">
                <select v-model="rarityFilter"
                    class="select select-sm select-bordered w-full bg-slate-800 text-slate-200">
                    <option value="ALL">All Rarities</option>
                    <option v-for="r in Object.values(FlowerRarity)" :key="r" :value="r">{{ r }}</option>
                </select>
            </div>

            <div class="overflow-y-auto flex-1 custom-scrollbar">
                <div v-for="species in filteredSpecies" :key="species.id" @click="selectedSpeciesId = species.id"
                    class="p-4 cursor-pointer hover:bg-white/5 transition-colors border-b border-slate-800/50 flex items-center gap-3 group"
                    :class="{ 'bg-slate-800': selectedSpeciesId === species.id }">

                    <div class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center transition-all duration-300 border border-transparent"
                        :style="selectedSpeciesId === species.id ? getRarityGlowStyle(species.rarity) : {}">
                        <FlowerImage :slug="species.slugName" status="MATURE" type="icon" size="32px"
                            class="opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div class="flex-1 min-w-0">
                        <div class="font-bold truncate text-sm"
                            :class="selectedSpeciesId === species.id ? 'text-white' : 'text-slate-300'">
                            {{ species.name }}
                        </div>

                        <div class="text-xs opacity-60 flex justify-between mt-1">
                            <span>Stock: {{ marketOverview.get(species.id)?.count || 0 }}</span>

                            <span v-if="marketOverview.get(species.id)?.count" class="text-emerald-400">
                                {{ marketOverview.get(species.id)?.minPrice }} Sap
                            </span>
                            <span v-else class="text-slate-500 italic">
                                No stock
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-2/3 flex flex-col bg-slate-900/50" v-if="selectedSpecies">

            <div class="p-6 border-b border-slate-700/50 flex items-start justify-between">
                <div class="flex gap-4">
                    <div class="w-20 h-20 bg-slate-900/50 rounded-xl p-2 border shadow-lg transition-all duration-300"
                        :style="getRarityGlowStyle(selectedSpecies.rarity)">
                        <FlowerImage :slug="selectedSpecies.slugName" status="MATURE" type="sprite" size="100%"
                            class="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <h2 class="text-2xl font-bold text-white">{{ selectedSpecies.name }}</h2>
                            <span class="text-xs px-2 py-0.5 rounded border uppercase font-bold tracking-wider"
                                :class="getRarityTextColorClass(selectedSpecies.rarity)">
                                {{ selectedSpecies.rarity }}
                            </span>
                        </div>
                        <p class="text-sm text-slate-400 max-w-md">{{ selectedSpecies.description }}</p>
                    </div>
                </div>

                <div class="flex flex-col items-end gap-2">
                    <div class="text-right">
                        <div class="text-xs text-slate-400 mb-0.5 uppercase tracking-wide">Lowest Ask</div>

                        <div v-if="marketOverview.get(selectedSpecies.id)?.count"
                            class="text-3xl font-mono font-bold text-emerald-400 leading-none">
                            {{ marketOverview.get(selectedSpecies.id)?.minPrice }}
                            <span class="text-sm text-emerald-600">Sap</span>
                        </div>
                        <div v-else class="text-xl font-mono text-slate-500 font-bold">
                            --
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-4 gap-4 px-6 py-4 border-b border-slate-700/50 bg-slate-800/20">
                <div>
                    <div class="text-xs text-slate-500 uppercase">24h Vol</div>
                    <div class="font-mono text-white text-lg">{{ latestStat?.volume || 0 }}</div>
                </div>
                <div>
                    <div class="text-xs text-slate-500 uppercase">24h Avg</div>
                    <div class="font-mono text-white text-lg">{{ latestStat?.averagePrice || '--' }} <span
                            class="text-xs text-slate-500">Sap</span></div>
                </div>
                <div>
                    <div class="text-xs text-slate-500 uppercase">24h High</div>
                    <div class="font-mono text-white text-lg">{{ latestStat?.maxPrice || '--' }} <span
                            class="text-xs text-slate-500">Sap</span></div>
                </div>
                <div>
                    <div class="text-xs text-slate-500 uppercase">24h Low</div>
                    <div class="font-mono text-emerald-400 text-lg">{{ latestStat?.minPrice || '--' }} <span
                            class="text-xs text-slate-500">Sap</span></div>
                </div>
            </div>

            <div class="p-6 min-h-[200px] border-b border-slate-700/50 flex flex-col">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-bold text-slate-300">Average Price History</h3>
                    <div class="flex gap-2 bg-slate-800 p-1 rounded-lg">
                        <button v-for="t in ['7d', '30d', '1y']" :key="t" @click="timeFilter = t as any"
                            class="px-3 py-1 text-xs rounded transition-colors"
                            :class="timeFilter === t ? 'bg-blue-600 text-white' : 'hover:text-white text-slate-400'">
                            {{ t }}
                        </button>
                    </div>
                </div>

                <div
                    class="w-full flex-1 bg-slate-800/20 rounded-lg relative overflow-hidden border border-slate-700/30 p-2">
                    <div v-if="stats.length === 0 && initialPrice === 0"
                        class="flex h-full items-center justify-center text-slate-500 text-sm">
                        No trade history available ever.
                    </div>
                    <Line v-else :data="chartData" :options="chartOptions as any" />
                </div>
            </div>

            <div class="flex-1 overflow-hidden flex flex-col p-6">
                <h3 class="font-bold text-slate-300 mb-4 flex items-center gap-2">
                    Active Listings
                    <span class="bg-slate-700 text-white text-xs px-2 py-0.5 rounded-full">
                        {{ activeListingsForSelected.length }}
                    </span>
                </h3>

                <div class="overflow-y-auto flex-1 custom-scrollbar pr-2">
                    <table class="w-full text-left border-collapse">
                        <thead class="text-xs uppercase text-slate-500 sticky top-0 bg-slate-900/90 backdrop-blur pb-2">
                            <tr>
                                <th class="pb-3 pl-2">Seller</th>
                                <th class="pb-3">Quality</th>
                                <th class="pb-3">Listed At</th>
                                <th class="pb-3 text-right">Price</th>
                                <th class="pb-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="listing in activeListingsForSelected" :key="listing.id"
                                class="border-b border-slate-800/50 hover:bg-white/5 transition-colors group">
                                <td class="py-3 pl-2 text-sm text-slate-300">
                                    {{ listing.seller?.tag || 'Unknown' }}
                                </td>
                                <td class="py-3 text-sm font-bold">
                                    <span :class="getQualityColor(listing.flower?.quality)">{{
                                        Math.round((listing.flower?.quality || 0) * 100) }}</span>%
                                </td>
                                <td class="py-3 text-xs text-slate-500">
                                    {{ new Date(listing.listedAt || '').toLocaleDateString() }}
                                </td>
                                <td class="py-3 text-right font-mono text-emerald-400 font-bold">
                                    {{ listing.price }}
                                </td>
                                <td class="py-3 text-right pr-2">
                                    <button @click="handleBuy(listing)" :disabled="!!buyingId"
                                        class="btn btn-xs btn-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span v-if="buyingId === listing.id"
                                            class="loading loading-spinner loading-xs"></span>
                                        <span v-else>Buy</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div v-if="activeListingsForSelected.length === 0" class="flex h-[50%] items-center justify-center">
                        <span class="text-slate-500 italic">
                            No one is selling this flower currently.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:deep(.select:focus),
:deep(.btn:focus) {
    outline: none;
}
</style>
```

---
### File: src/components/game/modal_features/TileManagerInModal.vue
---

```vue
<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { GameController } from '@/server/controllers/GameController'
import { FlowerRarity, Tile, PreferredSeasons, FlowerDTO, FlowerStatus } from '@/shared';
import FlowerImage from '@/components/FlowerImage.vue';

const props = defineProps<{
    x: number,
    z: number,
    islandId: string
}>()

// --- STATE ---
const tile = ref<Tile | null>(null)
const flower = ref<FlowerDTO | null>(null)
const availableSeeds = ref<FlowerDTO[]>([])

const isLoading = ref(false)
const isPlanting = ref(false)
const selectedSeedId = ref<string>('')
const activeTab = ref<'status' | 'info'>('status')
const errorMsg = ref('')

// --- LOGIC ---
const growthProgress = ref(0)
let timer: any = null

const hasTile = computed(() => !!tile.value)
const hasFlower = computed(() => !!flower.value)

// Define the growth stages in order
const GROWTH_STAGES = [
    'SEED',
    'SPROUT1',
    'SPROUT2',
    'GROWING1',
    'GROWING2',
    'MATURE'
]

// Compute current stage index to determine what is unlocked/shadowed
const currentStageIndex = computed(() => {
    if (!flower.value) return -1
    // We assume flower.status matches the uppercase strings in GROWTH_STAGES
    return GROWTH_STAGES.indexOf(flower.value.status as string)
})

const rarityColors: Record<string, string> = {
    [FlowerRarity.COMMON]: 'border-slate-400 text-slate-400 bg-slate-400/10',
    [FlowerRarity.UNCOMMON]: 'border-emerald-400 text-emerald-400 bg-emerald-400/10',
    [FlowerRarity.RARE]: 'border-blue-400 text-blue-400 bg-blue-400/10',
    [FlowerRarity.EPIC]: 'border-purple-400 text-purple-400 bg-purple-400/10',
    [FlowerRarity.LEGENDARY]: 'border-amber-400 text-amber-400 bg-amber-400/10 shadow-[0_0_15px_rgba(251,191,36,0.3)]',
}

const currentRarityColor = computed(() => {
    if (!flower.value?.species) return rarityColors['COMMON']
    return rarityColors[flower.value.species.rarity] || rarityColors['COMMON']
})

const waterStatus = computed(() => {
    if (!flower.value) return { label: 'Unknown', color: 'text-slate-500', bar: 'bg-slate-700' }
    const w = flower.value.waterLevel
    if (w > 80) return { label: 'Hydrated', color: 'text-blue-400', bar: 'progress-info' }
    if (w > 30) return { label: 'Thirsty', color: 'text-warning', bar: 'progress-warning' }
    return { label: 'Critical', color: 'text-error', bar: 'progress-error' }
})

const seasonDisplay = computed(() => {
    const s = flower.value?.species?.preferredSeason
    switch (s) {
        case PreferredSeasons.SPRING: return { label: 'Spring', color: 'text-pink-300' }
        case PreferredSeasons.SUMMER: return { label: 'Summer', color: 'text-yellow-300' }
        case PreferredSeasons.AUTUMN: return { label: 'Autumn', color: 'text-orange-300' }
        case PreferredSeasons.WINTER: return { label: 'Winter', color: 'text-cyan-300' }
        default: return { label: 'Any', color: 'text-slate-300' }
    }
})

// --- DATA FETCHING & ACTIONS ---
const loadData = async () => {
    isLoading.value = true
    errorMsg.value = ''
    tile.value = null
    flower.value = null
    selectedSeedId.value = ''
    growthProgress.value = 0
    try {
        const data = await GameController.getTileData(props.x, props.z, props.islandId)

        if (!data) {
            errorMsg.value = "Land not owned."
            return
        }

        tile.value = data.tile

        if (data.flower) {
            flower.value = data.flower
            startGrowthTimer()
        } else {
            availableSeeds.value = await GameController.getAvailableSeeds()
        }

    } catch (e: any) {
        errorMsg.value = e.message
    } finally {
        isLoading.value = false
    }
}

const handlePlant = async () => {
    if (!selectedSeedId.value || !tile.value) return
    isPlanting.value = true
    try {
        await GameController.plantSeed(tile.value.id, selectedSeedId.value)
        await loadData()
    } catch (e: any) {
        errorMsg.value = e.message
    } finally {
        isPlanting.value = false
    }
}

const handleWater = async () => {
    if (!tile.value || !flower.value) return
    try {
        const res = await GameController.waterFlower(tile.value.id)
        if (flower.value) flower.value.waterLevel = res.level
    } catch (e: any) {
        errorMsg.value = e.message
    }
}

const calculateGrowth = () => {
    if (!flower.value?.species || !flower.value.plantedAt) return 0
    const start = new Date(flower.value.plantedAt).getTime()
    const now = new Date().getTime()
    const durationMs = flower.value.species.growthDuration * 1000
    growthProgress.value = Math.min(100, ((now - start) / durationMs) * 100)
}

const startGrowthTimer = () => {
    if (timer) clearInterval(timer)
    calculateGrowth()
    timer = setInterval(calculateGrowth, 1000)
}

watch(() => [props.x, props.z], loadData, { immediate: true })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
    <div
        class="h-full flex flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-0 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50">

        <div
            class="bg-slate-950/50 backdrop-blur-md p-3 border-b border-slate-800 flex justify-between items-center shrink-0">
            <div class="flex items-center gap-2">
                <div class="badge badge-neutral font-mono text-xs">X: {{ x }}</div>
                <div class="badge badge-neutral font-mono text-xs">Z: {{ z }}</div>
            </div>
            <div class="text-xs uppercase font-bold tracking-wider text-slate-500">
                {{ isLoading ? 'Scanning...' : (tile?.type || 'Unknown') }}
            </div>
        </div>

        <div class="flex-1 overflow-y-auto p-4 relative scrollbar-thin scrollbar-thumb-slate-700">

            <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10"><span
                    class="loading loading-spinner loading-lg text-primary"></span></div>
            <div v-if="errorMsg" class="alert alert-error shadow-lg my-4"><span>{{ errorMsg }}</span><button
                    @click="loadData" class="btn btn-xs btn-ghost">Retry</button></div>

            <div v-else-if="hasTile && !hasFlower" class="flex flex-col h-full animate-in fade-in duration-300">
                <div class="text-center py-4 shrink-0">
                    <div
                        class="w-16 h-16 rounded-full bg-slate-800/50 mx-auto flex items-center justify-center border-2 border-dashed border-slate-700 mb-2">
                        <div class="w-4 h-4 rounded-full bg-slate-700"></div>
                    </div>
                    <h3 class="text-md font-bold text-slate-200">Fertile Soil</h3>
                    <p class="text-[11px] text-slate-400">Select a seed to plant.</p>
                </div>

                <div class="flex-1 overflow-y-auto mt-2 space-y-2">
                    <div v-if="availableSeeds.length === 0" class="text-center text-sm text-slate-500 py-4">No seeds
                        available.</div>
                    <div class="grid grid-cols-2 gap-2 pb-2">
                        <button v-for="seed in availableSeeds" :key="seed.id" @click="selectedSeedId = seed.id"
                            class="relative p-2 rounded-lg border text-left transition-all duration-200 group"
                            :class="selectedSeedId === seed.id ? 'bg-primary/20 border-primary shadow-[0_0_10px_rgba(var(--p),0.3)]' : 'bg-slate-800 border-slate-700 hover:border-slate-500'">
                            <div class="flex items-center gap-2">
                                <FlowerImage :slug="seed.species?.slugName || ''" status="SEED" type="icon"
                                    size="28px" />
                                <div class="overflow-hidden">
                                    <div class="font-bold text-xs text-slate-200 truncate">{{ seed.species?.name }}
                                    </div>
                                    <div class="text-[10px] text-slate-400 truncate">{{ seed.species?.rarity }}</div>
                                </div>
                            </div>
                            <div v-if="selectedSeedId === seed.id"
                                class="absolute -top-1 -right-1 bg-primary text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                                L</div>
                        </button>
                    </div>
                </div>
                <div class="mt-auto pt-3 border-t border-slate-800 shrink-0">
                    <button @click="handlePlant" :disabled="!selectedSeedId || isPlanting"
                        class="btn btn-primary btn-sm w-full shadow-lg shadow-primary/20">{{ isPlanting ? 'Planting...'
                            : 'Plant Seed' }}</button>
                </div>
            </div>

            <div v-else-if="flower && flower.species" class="flex flex-col sm:flex-row h-full gap-4">


                <div class="flex-1">
                    <div class="flex gap-4 items-start animate-in slide-in-from-left duration-300 shrink-0">
                        <div
                            class="relative w-32 h-32 shrink-0 bg-gradient-to-br from-slate-800 to-black rounded-xl border border-slate-700 flex items-center justify-center overflow-hidden shadow-inner group">
                            <div class="absolute inset-0 opacity-20 bg-radial-gradient blur-xl"
                                :class="currentRarityColor">
                            </div>
                            <FlowerImage :slug="flower.species.slugName" :status="flower.status" type="icon"
                                size="110px"
                                class="drop-shadow-2xl z-10 group-hover:scale-105 transition-transform duration-500" />
                            <div class="absolute bottom-1 right-1 text-[9px] uppercase font-bold z-10 px-1.5 py-0.5 rounded border bg-slate-900/80 backdrop-blur-md"
                                :class="currentRarityColor">
                                {{ flower.species.rarity }}
                            </div>
                            <div v-if="flower.isShiny"
                                class="absolute top-1 left-1 text-[10px] font-bold bg-yellow-500/20 text-yellow-200 px-1 rounded animate-pulse border border-yellow-500/50">
                                SHINY</div>
                        </div>

                        <div class="flex-1 pt-1 flex flex-col justify-center">
                            <h2 class="text-xl font-black text-white tracking-tight leading-tight break-words">{{
                                flower.species.name }}</h2>
                            <div class="flex gap-0.5 my-1 text-yellow-500 text-xs font-mono">
                                Quality: {{ Math.round(flower.quality * 100) }}%
                            </div>
                            <div class="text-xs font-mono mt-1">
                                <span class="opacity-50">Status:</span> <span class="font-bold"
                                    :class="growthProgress >= 100 ? 'text-primary' : 'text-slate-300'">{{ flower.status
                                    }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5 flex-1 flex flex-col animate-in slide-in-from-bottom duration-300 delay-75">
                        <div
                            class="tabs tabs-boxed bg-slate-800 p-0.5 shrink-0 mb-3 rounded-xl border border-slate-400">
                            <a @click="activeTab = 'status'" class="tab tab-sm flex-1 rounded-xl font-bold"
                                :class="{ 'tab-active bg-slate-900': activeTab === 'status' }">Status &
                                Actions</a>
                            <a @click="activeTab = 'info'" class="tab tab-sm flex-1 rounded-xl font-bold"
                                :class="{ 'tab-active bg-slate-900': activeTab === 'info' }">Botanics</a>
                        </div>

                        <div class="flex-1 overflow-y-auto">
                            <div v-if="activeTab === 'status'" class="space-y-5 py-1">
                                <div class="space-y-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-xs font-bold text-slate-400">
                                            <span>Growth</span><span>{{ growthProgress.toFixed(0) }}%</span>
                                        </div>
                                        <progress class="progress w-full h-2 bg-slate-900"
                                            :class="growthProgress >= 100 ? 'progress-primary' : 'progress-secondary'"
                                            :value="growthProgress" max="100"></progress>
                                    </div>
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-xs font-bold"><span
                                                class="text-slate-400">Water</span><span :class="waterStatus.color">{{
                                                    waterStatus.label }} ({{ flower.waterLevel }}%)</span></div>
                                        <progress class="progress w-full h-2 bg-slate-900" :class="waterStatus.bar"
                                            :value="flower.waterLevel" max="100"></progress>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-3">
                                    <button @click="handleWater" :disabled="flower.waterLevel >= 100"
                                        class="btn btn-sm btn-info btn-outline w-full">Water</button>
                                    <button v-if="growthProgress >= 100"
                                        class="btn btn-sm btn-primary w-full shadow-[0_0_15px_rgba(var(--p),0.4)] animate-pulse">Harvest</button>
                                    <button v-else disabled
                                        class="btn btn-sm btn-disabled btn-ghost border-slate-800 w-full opacity-50">Wait</button>
                                </div>
                            </div>

                            <div v-else class="space-y-3 py-1 text-sm text-slate-400">
                                <div
                                    class="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 min-h-[60px] flex items-center">
                                    <p class="italic text-xs leading-relaxed">"{{ flower.species.description_lore ||
                                        flower.species.description || 'A mysterious plant...' }}"</p>
                                </div>

                                <div class="grid grid-cols-2 gap-2 text-xs">
                                    <div class="flex flex-col bg-slate-900 p-2 rounded border border-slate-800"><span
                                            class="text-slate-500">Water Needs</span><span
                                            class="font-bold text-blue-300">{{ flower.species.waterNeeds }}</span></div>
                                    <div class="flex flex-col bg-slate-900 p-2 rounded border border-slate-800"><span
                                            class="text-slate-500">Time</span><span class="font-bold text-slate-300">{{
                                                (flower.species.growthDuration / 60).toFixed(0) }} min</span></div>
                                    <div
                                        class="flex flex-col bg-slate-900 p-2 rounded border border-slate-800 col-span-2">
                                        <span class="text-slate-500">Preferred Season</span>
                                        <div class="flex items-center gap-2 mt-1"><span
                                                class="font-bold uppercase tracking-wide"
                                                :class="seasonDisplay.color">{{
                                                    seasonDisplay.label }}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex justify-center items-center">
                    <div class="flex sm:flex-col items-center gap-1 bg-slate-800 p-1.5 rounded-lg border h-fit w-fit">
                        <div v-for="(stage, index) in GROWTH_STAGES" :key="stage"
                            class="relative w-10 h-10 sm:w-15 sm:h-15 flex items-center justify-center transition-all duration-300"
                            :title="stage">
                            <div class="w-full h-full flex items-center justify-center" :class="{
                                'filter brightness-0 invert-100 opacity-20': index > currentStageIndex,
                                'border rounded-lg border-emerald-500': index === currentStageIndex
                            }">
                                <FlowerImage :slug="flower.species.slugName" :status="stage" type="icon" size="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
    width: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #334155;
    border-radius: 20px;
}

.break-words {
    word-break: break-word;
}
</style>
```

---
### File: src/components/icons/DiscordIcon.vue
---

```vue
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord"
    viewBox="0 0 16 16">
    <path
      d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
  </svg>
</template>
```

---
### File: src/components/icons/InstagramIcon.vue
---

```vue
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram"
    viewBox="0 0 16 16">
    <path
      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
</template>
```

---
### File: src/components/icons/navbar/HomeIcon.vue
---

```vue
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path
            d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
        <path fill-rule="evenodd"
            d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
            clip-rule="evenodd" />
    </svg>
</template>
```

---
### File: src/components/icons/navbar/InventoryIcon.vue
---

```vue
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd"
            d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
            clip-rule="evenodd" />
        <path
            d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
    </svg>
</template>
```

---
### File: src/components/icons/navbar/MarketIcon.vue
---

```vue
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path
            d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
        <path fill-rule="evenodd"
            d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
            clip-rule="evenodd" />
    </svg>
</template>
```

---
### File: src/components/icons/navbar/SettingsIcon.vue
---

```vue
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path
            d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    </svg>
</template>
```

---
### File: src/main.ts
---

```ts
import { createApp } from 'vue'
import App from './App.vue'

import GoogleSignInPlugin from 'vue3-google-signin'
import { createPinia } from 'pinia'
import { router } from './routes'

import './assets/globals.css'
import './assets/main.css'

const app = createApp(App)

app.use(GoogleSignInPlugin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
})

app.use(createPinia())
app.use(router)

app.mount('#app')

```

---
### File: src/routes/index.ts
---

```ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { scrollBehavior } from './scroll'
import { ROUTES_ENUM } from './routes_enum'
import { useAuthStore } from '@/stores/auth'
import { useAuthModal } from '@/components/auth/logic/useAuthModal'

declare global {
  interface ImportMeta {
    glob: (pattern: string) => Record<string, () => Promise<unknown>>
  }
}

const viewModules = import.meta.glob('../views/**/*.vue')

const routes = [] as RouteRecordRaw[]

for (const r of Object.values(ROUTES_ENUM)) {
  routes.push({
    path: r.path,
    name: r.name,
    meta: {
      title: r.windowTitle || null,
      requiresAuth: r.requiresAuth || false,
      hideLayout: r.hideLayout || false,
    },
    component: r.viewPath
      ? viewModules[`../views/${r.viewPath}`]
      : viewModules['../views/errors/404View.vue'],
    beforeEnter: r.beforeEnter,
  })
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

router.beforeEach(async (to, _, next) => {
  const auth = useAuthStore()
  await auth.fetchSessionUser()
  if (to.meta.requiresAuth && !auth.user) {
    const authModal = useAuthModal()
    authModal.openAuthModal('login')
    next()
  } else {
    next()
  }
})

```

---
### File: src/routes/routes_enum.ts
---

```ts
import InventoryInModal from '@/components/game/modal_features/InventoryInModal.vue'
import MarketInModal from '@/components/game/modal_features/MarketInModal.vue'
import TileManagerInModal from '@/components/game/modal_features/TileManagerInModal.vue'
import { useAuthStore } from '@/stores/auth'
import { useModalStore } from '@/stores/modal'
import { remult } from 'remult'
import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'

interface RouteConfig {
  name: string
  path: string
  pathDyn?: (...args: any[]) => string
  windowTitle?: string
  windowTitleDyn?: (...args: any[]) => string
  viewPath?: string
  beforeEnter?: (
    to: RouteLocationNormalizedGeneric,
    fro: RouteLocationNormalizedLoadedGeneric,
    next: NavigationGuardNext,
  ) => any
  requiresAuth?: boolean
  hideLayout?: boolean
}

export const ROUTES_ENUM = {
  HOME: {
    name: 'home',
    path: '/',
    windowTitle: 'Explore',
    viewPath: 'HomeView.vue',
  },

  WIKI: {
    name: 'wiki',
    path: '/wiki',
    windowTitle: 'Wiki',
    viewPath: 'WikiView.vue',
  },

  ABOUT: {
    name: 'about',
    path: '/about',
    windowTitle: 'About',
    viewPath: 'AboutView.vue',
  },

  CONTACT: {
    name: 'contact',
    path: '/contact',
    windowTitle: 'Contact',
    viewPath: 'ContactView.vue',
  },

  // User routes
  LOGIN: {
    name: 'login',
    path: '/login',
    windowTitle: 'Login',
    viewPath: 'user/LoginView.vue',
  },
  SIGNUP: {
    name: 'signup',
    path: '/signup',
    windowTitle: 'Sign Up',
    viewPath: 'user/SignupView.vue',
  },
  LOGOUT: {
    name: 'logout',
    path: '/logout',
    windowTitle: 'Logout',
    beforeEnter: async (_, __, next) => {
      const auth = useAuthStore()
      await auth.logout()
      next(ROUTES_ENUM.HOME.path)
    },
  },

  // GAME

  LAND: {
    name: 'land',
    path: '/land',
    windowTitle: 'My Land',
    viewPath: 'game/LandView.vue',
    hideLayout: true,
    requiresAuth: true,
  },

  USER_LAND: {
    name: 'userLand',
    path: '/land/:tag',
    pathDyn: (tag: string) => `/land/${tag}`,
    windowTitleDyn: (tag: string) => `${tag}'s Land`,
    viewPath: 'game/LandView.vue',
    hideLayout: true,
  },

  TILE_MANAGER: {
    name: 'tileManager',
    path: '/land/tile/:x/:z',
    pathDyn: (x: number, z: number) => `/land/tile/${x}/${z}`,
    beforeEnter: async (_, __, next) => {
      const modal = useModalStore()
      modal.open({
        title: 'Tile Manager',
        component: TileManagerInModal,
        size: 'large',
        closingPath: ROUTES_ENUM.LAND.path,
      })

      next()
    },
    viewPath: 'game/LandView.vue',
    hideLayout: true,
  },

  CURRENT_USER_PROFILE: {
    name: 'currentUserProfile',
    path: '/p',
    windowTitle: 'My Profile',
    viewPath: 'game/UserProfileView.vue',
  },

  USER_PROFILE: {
    name: 'userProfile',
    path: '/p/:tag',
    pathDyn: (tag: string) => `/p/${tag}`,
    windowTitleDyn: (tag: string) => `${tag}'s Profile`,
    viewPath: 'game/UserProfileView.vue',
  },

  SETTINGS: {
    name: 'userSettings',
    path: '/p/:tag/settings',
    pathDyn: (tag: string) => `/p/${tag}/settings`,
    viewPath: 'user/SettingsView.vue',
  },

  MARKET: {
    name: 'market',
    path: '/market',
    viewPath: 'game/MarketView.vue',
  },

  LAND_MARKET: {
    name: 'landMarket',
    path: '/land/market',
    beforeEnter: async (_, __, next) => {
      const modal = useModalStore()
      modal.open({
        title: 'Marketplace',
        component: MarketInModal,
        size: 'fullscreen',
        sideBarMargin: true,
        closingPath: ROUTES_ENUM.LAND.path,
      })

      next()
    },
    viewPath: 'game/LandView.vue',
    hideLayout: true,
  },

  INVENTORY: {
    name: 'inventory',
    path: '/land/inventory',
    hideLayout: true,
    beforeEnter: async (_, __, next) => {
      const modal = useModalStore()
      modal.open({
        title: 'Inventory',
        component: InventoryInModal,
        size: 'fullscreen',
        sideBarMargin: true,
        closingPath: ROUTES_ENUM.LAND.path,
      })

      next()
    },
    viewPath: 'game/LandView.vue',
  },

  FLORADEX: {
    name: 'floradex',
    path: '/floradex',
    windowTitle: 'FloraDex',
    viewPath: 'game/FloraDexView.vue',
  },

  SUPPORT: {
    name: 'support',
    path: '/support',
    windowTitle: 'Support',
    viewPath: 'user/SupportView.vue',
  },

  ADMIN_DB_MANAGER: {
    name: 'adminDBFuncs',
    path: '/admin/db',
    windowTitle: 'Admin DB Manager',
    viewPath: 'admin/DBManagerView.vue',
  },

  ADMIN_MANAGER: {
    name: 'adminManager',
    path: '/admin/...',
    windowTitle: 'Admin | Manager',
    viewPath: 'admin/ManagerView.vue',
    beforeEnter: (to, _, next) => {
      if (!remult.isAllowed('admin')) {
        next({
          name: 'notFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          replace: true,
        })
      } else {
        next()
      }
    },
  },

  // Error routes
  NOT_FOUND: {
    name: 'notFound',
    path: '/:pathMatch(.*)*',
    windowTitle: 'Page Not Found',
    viewPath: 'errors/404View.vue',
  },
} satisfies Record<string, RouteConfig>

```

---
### File: src/routes/scroll.ts
---

```ts
import type { RouteLocationNormalized, RouterScrollBehavior } from "vue-router"

export const scrollBehavior: RouterScrollBehavior = (to: RouteLocationNormalized) => {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth'
        }
    } else {
        return { top: 0 }
    }
}
```

---
### File: src/server/_seedMarket.ts
---

```ts
// server/seedMarket.ts
import { remult } from 'remult'
import { FlowerRarity, FlowerStatus, FlowerAvailability } from '../shared/types'
import {
  FlowerSpecies,
  MarketHistory,
  MarketListing,
  MarketStats,
  User,
  UserFlower,
} from '@/shared'

// --- CONFIGURATION ---
const BOT_COUNT = 5
const HISTORY_DAYS = 30
const LISTINGS_PER_SPECIES = 4

// Fake Data Definitions
const SPECIES_DATA = [
  { name: 'Sun Petal', rarity: FlowerRarity.COMMON, basePrice: 20, color: 'gold' },
  { name: 'Dew Drop', rarity: FlowerRarity.COMMON, basePrice: 25, color: 'cyan' },
  { name: 'Ruby Rose', rarity: FlowerRarity.UNCOMMON, basePrice: 80, color: 'crimson' },
  { name: 'Night Shade', rarity: FlowerRarity.UNCOMMON, basePrice: 120, color: 'indigo' },
  { name: 'Crystal Lily', rarity: FlowerRarity.RARE, basePrice: 400, color: 'white' },
  { name: 'Void Orchid', rarity: FlowerRarity.EPIC, basePrice: 1500, color: 'purple' },
  { name: 'Golden Lotus', rarity: FlowerRarity.LEGENDARY, basePrice: 5000, color: 'orange' },
]

export async function seedMarketData() {
  console.log('🌱 Starting Market Seeding...')

  const userRepo = remult.repo(User)
  const speciesRepo = remult.repo(FlowerSpecies)
  const flowerRepo = remult.repo(UserFlower)
  const listingRepo = remult.repo(MarketListing)
  const historyRepo = remult.repo(MarketHistory)
  const statsRepo = remult.repo(MarketStats)

  // 1. Create Species (if they don't exist)
  const speciesMap = new Map<string, FlowerSpecies>()

  for (const data of SPECIES_DATA) {
    let species = await speciesRepo.findFirst({ name: data.name })
    if (!species) {
      species = await speciesRepo.insert({
        name: data.name,
        description: `A beautiful ${data.rarity.toLowerCase()} flower found in BloomScape.`,
        rarity: data.rarity,
        availability: FlowerAvailability.WILD,
        assetUrl: `https://placehold.co/64x64/${data.color}/white?text=${data.name.charAt(0)}`, // Placeholder Image
        spriteUrl: `https://placehold.co/200x200/${data.color}/white?text=Sprite`, // Placeholder Sprite
        growthDuration: 3600,
      })
    }
    speciesMap.set(data.name, species)
  }
  console.log(`✅ Verified ${speciesMap.size} Flower Species`)

  // 2. Create Bot Users
  const bots: User[] = []
  for (let i = 1; i <= BOT_COUNT; i++) {
    const tag = `TraderBot_${i}`
    let bot = await userRepo.findFirst({ tag })
    if (!bot) {
      bot = await userRepo.insert({
        tag,
        sap: 100000,
        email: `bot${i}@bloomscape.com`,
        passwordHash: 'hashed_dummy',
        description: 'I am a market simulation bot.',
      })
    }
    bots.push(bot)
  }
  console.log(`✅ Verified ${bots.length} Bot Users`)

  // 3. Generate History & Stats (The Time Machine)
  // We loop backwards from today to 30 days ago

  console.log('⏳ Generating Historical Data (this might take a moment)...')

  // Clear old stats to regenerate fresh ones
  // await Promise.all((await statsRepo.find()).map(s => statsRepo.delete(s))) // Optional: Uncomment to wipe stats first

  const today = new Date()

  for (const [name, species] of Array.from(speciesMap)) {
    const basePrice = SPECIES_DATA.find((s) => s.name === name)!.basePrice

    for (let d = HISTORY_DAYS; d >= 0; d--) {
      const date = new Date()
      date.setDate(today.getDate() - d)
      date.setHours(12, 0, 0, 0) // Midday

      // Check if stats already exist for this day (to avoid duplicates if script runs twice)
      const existingStat = await statsRepo.count({
        speciesId: species.id,
        date: {
          $gte: new Date(date.setHours(0, 0, 0, 0)),
          $lt: new Date(date.setHours(23, 59, 59, 999)),
        },
      })
      if (existingStat > 0) continue

      // Simulate Volatility: Price varies by +/- 20% + a random daily trend
      const volatility = basePrice * 0.2
      const dailyTrend = Math.sin(d) * (basePrice * 0.1) // Makes a wave pattern
      const avgPrice = Math.floor(
        basePrice + dailyTrend + (Math.random() * volatility - volatility / 2),
      )

      // Simulate 3-10 sales per day
      const salesCount = Math.floor(Math.random() * 7) + 3
      let minPrice = Infinity
      let maxPrice = -Infinity
      let totalVolume = 0

      for (let s = 0; s < salesCount; s++) {
        const salePrice = Math.floor(avgPrice + (Math.random() * 10 - 5))
        minPrice = Math.min(minPrice, salePrice)
        maxPrice = Math.max(maxPrice, salePrice)

        // Insert individual history record (optional: disable if too many rows)
        await historyRepo.insert({
          speciesId: species.id,
          price: salePrice,
          soldAt: date,
        })
        totalVolume++
      }

      // Create Daily Stats Record (Crucial for Charts)
      await statsRepo.insert({
        speciesId: species.id,
        date: date,
        averagePrice: Math.floor((minPrice + maxPrice) / 2),
        minPrice,
        maxPrice,
        volume: totalVolume,
      })
    }
  }
  console.log('✅ Historical Data Generated')

  // 4. Generate Active Listings (The Present)
  console.log('📦 generating Active Listings...')

  // Clear old listings from bots to avoid clutter
  const botIds = bots.map((b) => b.id)
  const oldListings = await listingRepo.find({ where: { sellerId: { $in: botIds } } })
  for (const l of oldListings) {
    await listingRepo.delete(l)
  }

  for (const [name, species] of Array.from(speciesMap)) {
    const baseInfo = SPECIES_DATA.find((s) => s.name === name)!

    for (let i = 0; i < LISTINGS_PER_SPECIES; i++) {
      const seller = bots[Math.floor(Math.random() * bots.length)]

      // 1. Give the bot the flower (Seed status)
      const flower = await flowerRepo.insert({
        ownerId: seller.id,
        speciesId: species.id,
        status: FlowerStatus.SEED,
        quality: Math.random(), // 0.0 to 1.0
        waterLevel: 100,
      })

      // 2. List it on the market
      // Price varies slightly
      const listingPrice = Math.floor(baseInfo.basePrice + (Math.random() * 10 - 5))

      await listingRepo.insert({
        sellerId: seller.id,
        flowerId: flower.id,
        price: listingPrice,
        listedAt: new Date(),
      })
    }
  }

  console.log('✨ Market Seed Complete! BloomScape is open for business.')
}

```

---
### File: src/server/api.ts
---

```ts
import { AuthController } from '@/server/controllers/AuthController'

import {
  Achievement,
  ClaimLink,
  FlowerSpecies,
  Friendship,
  Island,
  MarketHistory,
  MarketListing,
  MarketStats,
  SapPurchase,
  Tile,
  User,
  UserAchievement,
  UserClaim,
  UserFlower,
  UserItem,
  Item,
} from '@/shared/'

import { remultApi } from 'remult/remult-express'

import { SqlDatabase } from 'remult'
import { BetterSqlite3DataProvider } from 'remult/remult-better-sqlite3'
import Database from 'better-sqlite3'

import { UserController } from './controllers/UserController'
import { GameController } from './controllers/GameController'
import { AdminController } from './controllers/AdminController'
import { MarketController } from './controllers/MarketController'

import dotenv from 'dotenv'
import { ReportController } from './controllers/ReportController'
import { UserReport } from '@/shared/analytics/UserReport'
import { ModerationLog } from '@/shared/analytics/ModerationLog'
import { FlowerDiscovery } from '@/shared/analytics/FlowerDiscovery'
import { ChatController } from './controllers/ChatController'
import { Chat } from '@/shared/chat/Chat'
import { ChatMessage } from '@/shared/chat/ChatMessage'
import { ChatParticipant } from '@/shared/chat/ChatParticipant'

dotenv.config({
  path: './src/server/.env',
})

// DATABASE provider

const __DBProvider = new BetterSqlite3DataProvider(
  new Database(process.env.DB_PATH || './bloomscape.sqlite'),
)
const db = new SqlDatabase(__DBProvider)

export const api = remultApi({
  dataProvider: db,
  entities: [
    UserReport,
    ModerationLog,
    FlowerDiscovery,

    User,
    Achievement,
    UserAchievement,

    FlowerSpecies,
    UserFlower,
    UserItem,

    MarketListing,
    MarketHistory,
    SapPurchase,
    MarketStats,
    Item,

    Friendship,
    ClaimLink,
    UserClaim,

    Tile,
    Island,

    Chat,
    ChatMessage,
    ChatParticipant,
  ],
  controllers: [
    AuthController,
    UserController,
    GameController,
    AdminController,
    MarketController,
    ReportController,
    ChatController,
  ],
  getUser: (req) => req.session!.user,
  admin: true, // UI Interface for admins
})

```

---
### File: src/server/controllers/AdminController.ts
---

```ts
import { BackendMethod, remult } from 'remult'
import { seedMarketData } from '../_seedMarket'
import {
  Achievement,
  FlowerSpecies,
  FlowerStatus,
  Item,
  User,
  UserAchievement,
  UserFlower,
  UserItem,
} from '@/shared'
import { ModerationLog } from '@/shared/analytics/ModerationLog'

export class AdminController {
  @BackendMethod({ allowed: 'admin' })
  static async populateMarket() {
    const isDebug = process.env.DEBUG === '1'

    console.log('Debug Mode:', isDebug)

    if (isDebug) {
      await seedMarketData()
      return 'Market Populated!'
    } else {
      throw new Error('Not allowed in production')
    }
  }

  @BackendMethod({ allowed: ['admin'] })
  static async banUser(userId: string, reason: string) {
    const userRepo = remult.repo(User)
    const logRepo = remult.repo(ModerationLog)

    const user = await userRepo.findId(userId)
    if (!user) throw new Error('User not found')

    user.banned = true
    await userRepo.save(user)

    // 2. Log Action
    await logRepo.insert({
      targetUserId: userId,
      moderatorId: remult.user!.id,
      action: 'BAN',
      reason: reason,
    })

    return { success: true, message: `User ${user.tag} has been banned.` }
  }

  @BackendMethod({ allowed: 'admin' })
  static async giveItem(userId: string, itemSlug: string, quantity: number) {
    const itemRepo = remult.repo(Item)
    const userItemRepo = remult.repo(UserItem)

    const definition = await itemRepo.findFirst({ slug: itemSlug })
    if (!definition) throw new Error('Item definition not found')

    let userItem = await userItemRepo.findFirst({ userId, itemDefinitionId: definition.id })

    if (userItem) {
      userItem.quantity += quantity
      await userItemRepo.save(userItem)
    } else {
      await userItemRepo.insert({
        userId,
        itemDefinitionId: definition.id,
        quantity,
      })
    }
    return { success: true, message: `Gave ${quantity}x ${definition.name}` }
  }

  @BackendMethod({ allowed: 'admin' })
  static async giveFlower(userId: string, speciesSlug: string, quality: number) {
    const speciesRepo = remult.repo(FlowerSpecies)
    const flowerRepo = remult.repo(UserFlower)

    const species = await speciesRepo.findFirst({ slugName: speciesSlug })
    if (!species) throw new Error('Species not found')

    await flowerRepo.insert({
      ownerId: userId,
      speciesId: species.id,
      status: FlowerStatus.SEED,
      quality: quality, // 0.0 to 1.0
      waterLevel: 100,
      plantedAt: new Date(),
    })

    return { success: true, message: `Created ${species.name} Seed (Q${quality * 100})` }
  }

  @BackendMethod({ allowed: 'admin' })
  static async giveAchievement(userId: string, achievementSlug: string) {
    const achRepo = remult.repo(Achievement)
    const userAchRepo = remult.repo(UserAchievement)

    const def = await achRepo.findFirst({ slug: achievementSlug })
    if (!def) throw new Error('Achievement not found')

    const existing = await userAchRepo.findFirst({ userId, achievementId: def.id })
    if (existing) throw new Error('User already has this achievement')

    await userAchRepo.insert({
      userId,
      achievementId: def.id,
      unlockedAt: new Date(),
    })

    return { success: true, message: `Unlocked: ${def.name}` }
  }
}

```

---
### File: src/server/controllers/AuthController.ts
---

```ts
import { BackendMethod, Controller, remult, type FindOptions } from 'remult'
import express from 'express'
import { sanitizeUser, User } from '@/shared/user/User' // Assure-toi du chemin
import { Role } from '@/shared'
import slugify from 'slugify'

declare module 'remult' {
  export interface RemultContext {
    request?: express.Request
  }
}

@Controller('auth')
export class AuthController {
  // ... (login, signup, googleLogin restent identiques à ton code, je ne les répète pas pour être concis) ...
  @BackendMethod({ allowed: true })
  static async login(tagOrEmail: string, passwd: string, rememberMe: boolean = false) {
    // ... Ton code existant ...
    // Juste un rappel : assure-toi que sanitizeUser renvoie bien tout l'objet User sans le mot de passe
    // pour que le frontend ait accès aux 'sap'.
    const users = remult.repo(User)
    const user = await users.findFirst({
      $or: [{ tag: tagOrEmail }, { email: tagOrEmail }],
    })
    if (!user) throw 'Invalid tag or email'
    const bcrypt = await import('bcrypt')
    const match = await bcrypt.compare(passwd, user.passwordHash!)
    if (!match) throw 'Invalid password'

    // Mise à jour date login
    user.lastLogin = new Date()
    await users.save(user) // Save déclenchera les triggers s'il y en a

    remult.user = sanitizeUser(user)
    const req = remult.context.request!
    req.session!['user'] = remult.user

    // Gestion cookie...
    if (rememberMe) {
      req.session!.maxAge = 1000 * 60 * 60 * 24 * 30
    } else {
      req.session!.expires = undefined
    }

    return { success: true, user: req?.session!.user }
  }

  // ... (signup, googleLogin, logout ... restent identiques) ...
  @BackendMethod({ allowed: true })
  static async signup(tag: string, email: string, passwd: string, passwdConfirm: string) {
    // ... Ton code existant ...
    // Je le remets pour le contexte si besoin, mais pas de changement de logique
    const users = remult.repo(User)
    if (await users.findFirst({ tag: tag })) throw 'A user with this tag already exists.'
    if (await users.findFirst({ email: email })) throw 'A user with this email already exists.'
    if (passwd !== passwdConfirm) throw 'Passwords do not match.'
    if (passwd.length < 6) throw 'Password must be at least 6 characters.'

    const bcrypt = await import('bcrypt')
    const hashedPassword = await bcrypt.hash(passwd, 10)
    const newUser = await users.insert({ tag, email, passwordHash: hashedPassword })

    const req = remult.context!.request!
    req.session!.user = sanitizeUser(newUser)
    return { success: true, user: req?.session!.user }
  }

  @BackendMethod({ allowed: true })
  static async googleLogin(idToken: string) {
    // ... Ton code existant ...
    const { OAuth2Client } = await import('google-auth-library')
    const client = new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID)
    const userRepo = remult.repo(User)
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.VITE_GOOGLE_CLIENT_ID,
    })
    const payload = ticket.getPayload()
    if (!payload || !payload.email || !payload.sub) throw new Error('Invalid Google Token')

    const email = payload.email.toLowerCase()
    const googleId = payload.sub
    const name = payload.name || email.split('@')[0]

    let user = await userRepo.findFirst({ googleId })
    if (!user) {
      user = await userRepo.findFirst({ email })
      if (user) {
        user.googleId = googleId
        await userRepo.save(user)
      } else {
        let tag = slugify(name, { lower: true, strict: true })
        let counter = 1
        while (await userRepo.findFirst({ tag })) {
          tag = `${slugify(name, { lower: true, strict: true })}${counter}`
          counter++
        }
        user = await userRepo.insert({ tag, email, googleId, roles: [Role.USER] })
      }
    }
    const req = remult.context!.request!
    req.session!.user = sanitizeUser(user)
    return { success: true, user: req.session!.user }
  }

  @BackendMethod({ allowed: true })
  static async logout() {
    // ... Ton code existant ...
    const req = remult.context!.request
    if (req?.session) req.session = null
  }

  // --- LE CHANGEMENT IMPORTANT EST ICI ---
  @BackendMethod({ allowed: true })
  static async getSessionUser() {
    if (!remult.user) return null

    const user = await remult.repo(User).findId(remult.user.id)
    return user ? sanitizeUser(user) : null
  }

  @BackendMethod({
    allowed: () => {
      const r = remult.user?.roles ?? []
      return r.includes(Role.ADMIN) ?? false
    },
  })
  static async listUsers(options: FindOptions<User>) {
    return await remult.repo(User).find(options)
  }
}

```

---
### File: src/server/controllers/ChatController.ts
---

```ts
import { BackendMethod, remult, SubscriptionChannel } from 'remult'
import { Chat } from '@/shared/chat/Chat'
import { ChatParticipant } from '@/shared/chat/ChatParticipant'
import { ChatMessage } from '@/shared/chat/ChatMessage'
import { User } from '@/shared/user/User'

export class ChatController {
  @BackendMethod({ allowed: true })
  static async sendMessage(payload: { chatId?: string; targetUserId?: string; content: string }) {
    if (!remult.user) throw new Error('Not authenticated')
    if (!payload.content.trim()) throw new Error('Message cannot be empty')

    const chatRepo = remult.repo(Chat)
    const partRepo = remult.repo(ChatParticipant)
    const msgRepo = remult.repo(ChatMessage)

    let chatId = payload.chatId

    // 1. Find or Create Chat
    if (!chatId && payload.targetUserId) {
      const myParts = await partRepo.find({ where: { userId: remult.user.id } })
      const theirParts = await partRepo.find({ where: { userId: payload.targetUserId } })
      const existingPart = myParts.find((mp) => theirParts.some((tp) => tp.chatId === mp.chatId))

      if (existingPart) {
        chatId = existingPart.chatId
      } else {
        const newChat = await chatRepo.insert({
          createdAt: new Date(),
          lastMessageAt: new Date(),
          lastMessagePreview: 'Start of conversation',
        })
        await partRepo.insert({
          chatId: newChat.id,
          userId: remult.user.id,
          joinedAt: new Date(),
          lastReadAt: new Date(),
        })
        await partRepo.insert({
          chatId: newChat.id,
          userId: payload.targetUserId,
          joinedAt: new Date(),
        })
        chatId = newChat.id
      }
    }

    if (!chatId) throw new Error('Chat not found')

    // 2. Check Access
    const myPart = await partRepo.findFirst({ chatId, userId: remult.user.id })
    if (!myPart) throw new Error('Access denied')

    // 3. Save Message
    const rawMessage = await msgRepo.insert({
      chatId,
      senderId: remult.user.id,
      content: payload.content.trim(),
      createdAt: new Date(),
    })

    // 4. Update Chat Metadata
    const chat = await chatRepo.findId(chatId)
    if (chat) {
      chat.lastMessageAt = new Date()
      chat.lastMessagePreview = payload.content.substring(0, 50)
      await chatRepo.save(chat)
    }

    // 5. Update Read Status
    myPart.lastReadAt = new Date()
    await partRepo.save(myPart)

    // 6. Real-Time: Fetch FULL message with Sender details
    // We do this server-side so the client receives the avatar/name without querying API
    const fullMessage = await msgRepo.findFirst(
      { id: rawMessage.id },
      { include: { sender: true } },
    )

    // 7. Publish to Chat Channel (for active chat windows)
    const chatChannel = new SubscriptionChannel(`chat:${chatId}`)
    await chatChannel.publish(fullMessage!)

    // 8. Publish to User Channels (for inbox refresh)
    const participants = await partRepo.find({ where: { chatId } })
    for (const p of participants) {
      // Send a signal to refresh inbox
      const userChannel = new SubscriptionChannel(`user:${p.userId}`)
      await userChannel.publish({ type: 'INBOX_UPDATE' })
    }

    return fullMessage!
  }

  @BackendMethod({ allowed: true })
  static async getMessages(chatId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    // Manual Security Check
    const isParticipant = await remult
      .repo(ChatParticipant)
      .count({ chatId, userId: remult.user.id })
    if (!isParticipant) throw new Error('Access denied')

    // Fetch messages (allowed because we are in BackendMethod)
    return await remult.repo(ChatMessage).find({
      where: { chatId },
      include: { sender: true },
      orderBy: { createdAt: 'asc' },
      limit: 50,
    })
  }

  @BackendMethod({ allowed: true })
  static async getMyInbox() {
    if (!remult.user) throw new Error('Not authenticated')
    const partRepo = remult.repo(ChatParticipant)

    const myParts = await partRepo.find({
      where: { userId: remult.user.id },
      include: { chat: true },
    })
    if (myParts.length === 0) return []

    const chatIds = myParts.map((p) => p.chatId)
    const allParts = await partRepo.find({
      where: { chatId: { $in: chatIds } },
      include: { user: true },
    })

    const result = myParts.map((myPart) => {
      const otherPart = allParts.find(
        (p) => p.chatId === myPart.chatId && p.userId !== remult.user!.id,
      )
      const lastRead = myPart.lastReadAt ? new Date(myPart.lastReadAt) : new Date(0)
      const lastMsg = myPart.chat?.lastMessageAt ? new Date(myPart.chat.lastMessageAt) : new Date(0)

      return {
        chatId: myPart.chatId,
        chat: myPart.chat,
        otherUser: otherPart?.user,
        hasUnread: lastMsg > lastRead,
      }
    })

    return result.sort((a, b) => {
      const dateA = a.chat?.lastMessageAt?.getTime() || 0
      const dateB = b.chat?.lastMessageAt?.getTime() || 0
      return dateB - dateA
    })
  }

  @BackendMethod({ allowed: true })
  static async markAsRead(chatId: string) {
    if (!remult.user) throw new Error('Not authenticated')
    const partRepo = remult.repo(ChatParticipant)
    const part = await partRepo.findFirst({ chatId, userId: remult.user.id })
    if (part) {
      part.lastReadAt = new Date()
      await partRepo.save(part)

      // Notify myself to update badges locally
      const userChannel = new SubscriptionChannel(`user:${remult.user.id}`)
      await userChannel.publish({ type: 'INBOX_UPDATE' })
    }
  }

  @BackendMethod({ allowed: true })
  static async searchUsers(query: string) {
    if (!remult.user) throw new Error('Not authenticated')
    if (!query || query.length < 2) return []
    return await remult.repo(User).find({
      where: { tag: { $contains: query }, id: { $ne: remult.user.id } },
      limit: 5,
    })
  }
}

```

---
### File: src/server/controllers/GameController.ts
---

```ts
import {
  Achievement,
  DiscoverySource,
  FlowerAvailability,
  FlowerSpecies,
  FlowerStatus,
  Island,
  Tile,
  User,
  UserAchievement,
  UserFlower,
  UserItem,
  FlowerDTO,
} from '@/shared'
import { BackendMethod, remult } from 'remult'
import { PRICES } from '../ext'
import { FlowerDiscovery } from '@/shared/analytics/FlowerDiscovery'

export class GameController {
  // --- READ ACTIONS ---

  @BackendMethod({ allowed: true })
  static async getIslandDetails(ownerId: string) {
    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const island = await islandRepo.findFirst({ ownerId })

    if (!island) {
      return null
    }

    const tiles = await tileRepo.find({
      where: { islandId: island.id },
    })

    const flowerIds = tiles.map((t) => t.flowerId).filter((id) => !!id)

    const flowers = await flowerRepo.find({
      where: { id: { $in: flowerIds } },
      include: { species: true },
    })

    const enrichedTiles = tiles.map((t) => {
      const flower = flowers.find((f) => f.id === t.flowerId)
      return { ...t, flower }
    })

    return { island, tiles: enrichedTiles }
  }

  @BackendMethod({ allowed: true })
  static async getUserBalance(tag: string) {
    const userRepo = remult.repo(User)
    const user = await userRepo.findFirst({ tag: tag })

    if (!user) throw new Error('User could not be found.')

    return user.sap
  }

  @BackendMethod({ allowed: true })
  static async getUserInventory() {
    if (!remult.user) throw new Error('Not authenticated')

    const flowerRepo = remult.repo(UserFlower)
    const itemRepo = remult.repo(UserItem)

    const flowers = await flowerRepo.find({
      where: { ownerId: remult.user.id, status: FlowerStatus.SEED },
      include: { species: true },
    })

    const items = await itemRepo.find({
      where: { userId: remult.user.id },
      include: { definition: true },
    })

    return { flowers, items }
  }

  @BackendMethod({ allowed: true })
  static async getFloradex() {
    const user = remult.user
    if (!user) throw new Error('Not authenticated')

    const speciesRepo = remult.repo(FlowerSpecies)
    const discoveryRepo = remult.repo(FlowerDiscovery)

    const allSpecies = await speciesRepo.find({
      orderBy: { rarity: 'asc', name: 'asc' },
    })

    const myDiscoveries = await discoveryRepo.find({
      where: { userId: user.id },
    })

    const floradexData = allSpecies.map((s) => {
      const discovery = myDiscoveries.find((d) => d.speciesId === s.id)

      return {
        ...s,
        discovered: !!discovery,
        discoveryDate: discovery?.discoveredAt,
        discoverySource: discovery?.source,
        initialQuality: discovery?.initialQuality,
      }
    })

    return floradexData
  }

  static getFlowerAssetUrl(
    flowerSlugName: string,
    status: FlowerStatus = FlowerStatus.MATURE,
    type: 'icon' | 'sprite' = 'icon',
  ) {
    return `/api/images/flowers/${flowerSlugName}/${status.toLowerCase()}/${type.toLowerCase()}`
  }

  // --- NEW MODAL ACTIONS (DTO BASED) ---

  @BackendMethod({ allowed: true })
  static async getTileData(x: number, z: number, islandId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findFirst({ x, z }, { where: { islandId } })
    if (!tile) return null

    let flowerDTO: FlowerDTO | null = null

    if (tile.flowerId) {
      const flower = await flowerRepo.findId(tile.flowerId, { include: { species: true } })
      if (flower) {
        flowerDTO = GameController.toFlowerDTO(flower)
      }
    }

    return { tile, flower: flowerDTO }
  }

  @BackendMethod({ allowed: true })
  static async getAvailableSeeds(): Promise<FlowerDTO[]> {
    if (!remult.user) return []

    const seeds = await remult.repo(UserFlower).find({
      where: {
        ownerId: remult.user.id,
        status: FlowerStatus.SEED,
      },
      include: { species: true },
    })

    return seeds.map((s) => GameController.toFlowerDTO(s))
  }

  @BackendMethod({ allowed: true })
  static async plantSeed(tileId: string, flowerId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findId(tileId, { include: { island: true } })
    if (!tile) throw new Error('Tile not found')
    if (tile.island.ownerId !== remult.user.id) throw new Error('Not your land')
    if (tile.flowerId) throw new Error('Tile is already occupied')

    const flower = await flowerRepo.findId(flowerId)
    if (!flower) throw new Error('Seed not found')
    if (flower.ownerId !== remult.user.id) throw new Error('Not your seed')
    if (flower.status !== FlowerStatus.SEED) throw new Error('Item is not a seed')

    flower.status = FlowerStatus.SPROUT1
    flower.plantedAt = new Date()
    flower.waterLevel = 50
    // Optional: set grid position if you use it for other logic
    flower.gridX = tile.x
    flower.gridY = tile.z

    await flowerRepo.save(flower)

    tile.flowerId = flower.id
    await tileRepo.save(tile)

    return { success: true }
  }

  @BackendMethod({ allowed: true })
  static async waterFlower(tileId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findFirst({ id: tileId }, { include: { island: true } })

    if (!tile || tile.island.ownerId !== remult.user.id) throw new Error('Invalid tile')
    if (!tile.flowerId) throw new Error('Nothing to water here')

    const flower = await flowerRepo.findId(tile.flowerId)
    if (!flower) throw new Error('Flower data missing')

    const newLevel = Math.min(100, (flower.waterLevel || 0) + 25)

    flower.waterLevel = newLevel
    flower.lastWateredAt = new Date()
    await flowerRepo.save(flower)

    return { level: newLevel }
  }

  // --- WRITE ACTIONS ---

  @BackendMethod({ allowed: true })
  static async startAdventure() {
    const user = remult.user
    if (!user) throw new Error('Not connected.')

    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)

    const existing = await islandRepo.findFirst({ ownerId: user.id })
    if (existing) throw new Error('Adventure has already started !')

    const island = await islandRepo.insert({
      ownerId: user.id,
      name: `${user?.tag || 'Unknown'}'s Island`,
    })

    const initialTiles = []
    for (let x = -2; x <= 2; x += 2) {
      for (let z = -2; z <= 2; z += 2) {
        initialTiles.push({
          islandId: island.id,
          x: x,
          z: z,
          type: 'land',
        })
      }
    }

    // Insert loop
    for (const t of initialTiles) {
      await tileRepo.insert(t as any)
    }

    return island
  }

  @BackendMethod({ allowed: true })
  static async buyLand(x: number, z: number) {
    const currentUser = remult.user
    if (!currentUser) throw new Error('Not Authenticated')

    const tileRepo = remult.repo(Tile)
    const islandRepo = remult.repo(Island)

    const island = await islandRepo.findFirst({ ownerId: currentUser.id })
    if (!island) throw new Error('Island not found')

    const currentCount = await tileRepo.count({ islandId: island.id })

    if (currentCount >= currentUser.maxPlots) {
      throw new Error(
        `Limit reached! You can only own ${currentUser.maxPlots} plots. Level up to expand.`,
      )
    }

    const existing = await tileRepo.findFirst({
      islandId: island.id,
      x: x,
      z: z,
    })
    if (existing) throw new Error('This land is already owned.')

    await GameController.removeSap(PRICES.LAND_PLOT)

    return await tileRepo.insert({
      islandId: island.id,
      x: x,
      z: z,
      type: 'land',
      createdAt: new Date(),
    })
  }

  @BackendMethod({ allowed: true })
  static async getUserAchievements(targetUserId: string) {
    const achRepo = remult.repo(Achievement)
    const userAchRepo = remult.repo(UserAchievement)

    const allAchievements = await achRepo.find({
      orderBy: { rewardSap: 'asc' },
    })

    const userUnlocked = await userAchRepo.find({
      where: { userId: targetUserId },
    })

    const unlockedMap = new Map(userUnlocked.map((ua) => [ua.achievementId, ua.unlockedAt]))

    return allAchievements.map((ach) => ({
      ...ach,
      unlocked: unlockedMap.has(ach.id),
      unlockedAt: unlockedMap.get(ach.id),
    }))
  }

  // --- INTERNAL HELPERS ---

  private static toFlowerDTO(flower: UserFlower): FlowerDTO {
    const species = flower.species!

    return {
      id: flower.id,
      status: flower.status,
      waterLevel: flower.waterLevel,
      quality: flower.quality,
      plantedAt: flower.plantedAt,
      isShiny: flower.isShiny,
      species: {
        name: species.name,
        slugName: species.slugName,
        rarity: species.rarity,
        description: species.description,
        description_lore: species.description_lore,
        waterNeeds: species.waterNeeds,
        growthDuration: species.growthDuration,
        preferredSeason: species.preferredSeason,
      },
    }
  }

  static async removeSap(amount: number) {
    const user = remult.user
    if (!user) throw new Error('Not Authenticated')

    const userRepo = remult.repo(User)
    const dbUser = await userRepo.findId(user.id)
    if (!dbUser) throw new Error('User not found')

    if (dbUser.sap < amount) {
      throw new Error('Insufficient funds')
    }

    dbUser.sap -= amount
    await userRepo.save(dbUser)
    return dbUser.sap
  }

  static async registerDiscovery(
    userId: string,
    speciesId: string,
    quality: number,
    source: DiscoverySource,
  ) {
    const discRepo = remult.repo(FlowerDiscovery)

    const existing = await discRepo.findFirst({
      userId,
      speciesId,
    })

    if (!existing) {
      await discRepo.insert({
        userId,
        speciesId,
        initialQuality: quality,
        source,
        discoveredAt: new Date(),
      })
      return true
    }

    return false
  }
}

```

---
### File: src/server/controllers/MarketController.ts
---

```ts
import {
  MarketHistory,
  MarketListing,
  MarketStats,
  User,
  UserFlower,
  FlowerSpecies,
} from '@/shared'
import { BackendMethod, remult } from 'remult'
import { FlowerAvailability, FlowerRarity } from '@/shared/types'

export class MarketController {
  @BackendMethod({ allowed: true })
  static async buyListing(listingId: string) {
    const user = remult.user
    if (!user) throw new Error('Not authenticated')

    const listingRepo = remult.repo(MarketListing)
    const userRepo = remult.repo(User)
    const flowerRepo = remult.repo(UserFlower)
    const historyRepo = remult.repo(MarketHistory)

    const listing = await listingRepo.findId(listingId, { include: { flower: true } })
    const buyer = await userRepo.findId(user.id)

    if (!listing) throw new Error('This listing is no longer available.')
    if (!buyer) throw new Error('Buyer account not found.')
    if (listing.sellerId === buyer.id) throw new Error('You cannot buy your own listing.')

    if (buyer.sap < listing.price) {
      throw new Error(`Insufficient funds. You need ${listing.price} Sap.`)
    }

    // Process Transaction
    buyer.sap -= listing.price

    const seller = await userRepo.findId(listing.sellerId)
    if (seller) {
      seller.sap += listing.price
      await userRepo.save(seller)
    }
    await userRepo.save(buyer)

    // Transfer Ownership
    if (listing.flower) {
      listing.flower.ownerId = buyer.id
      // Reset any specific status if needed
      await flowerRepo.save(listing.flower)
    }

    // Record History
    await historyRepo.insert({
      speciesId: listing.flower?.speciesId || '',
      price: listing.price,
      soldAt: new Date(),
    })

    // Update Daily Stats
    if (listing.flower?.speciesId) {
      await MarketController.updateDailyStats(listing.flower.speciesId, listing.price)
    }

    await listingRepo.delete(listing)

    return { success: true, message: `Successfully purchased for ${listing.price} Sap!` }
  }

  @BackendMethod({ allowed: true })
  static async addListing(flowerId: string, price: number) {
    const user = remult.user
    if (!user) throw new Error('Not authenticated')

    const flowerRepo = remult.repo(UserFlower)
    const listingRepo = remult.repo(MarketListing)

    const flower = await flowerRepo.findId(flowerId)
    if (!flower) throw new Error('Flower not found.')
    if (flower.ownerId !== user.id) throw new Error('You do not own this flower.')

    const listing = listingRepo.create({
      flower: flower,
      sellerId: user.id,
      price: price,
      listedAt: new Date(),
    })

    await listingRepo.insert(listing)

    return { success: true, message: 'Listing added successfully.' }
  }

  @BackendMethod({ allowed: true })
  static async getFlowerMarketMetrics(speciesId: string) {
    const listingRepo = remult.repo(MarketListing)

    const listings = await listingRepo.find({
      where: { flowerId: speciesId },
    })

    if (listings.length === 0) {
      return { count: 0, lowestPrice: null }
    }

    let min = Infinity
    for (const l of listings) {
      if (l.price < min) min = l.price
    }

    return {
      count: listings.length,
      lowestPrice: min === Infinity ? null : min,
    }
  }

  @BackendMethod({ allowed: true })
  static async getMarketplaceData() {
    const speciesRepo = remult.repo(FlowerSpecies)
    const listingRepo = remult.repo(MarketListing)

    const listings = await listingRepo.find({
      include: { flower: true, seller: true },
    })

    const activeIds = Array.from(
      new Set(listings.map((l) => l.flower?.speciesId).filter((id) => !!id)),
    ) as string[]

    const speciesList = await speciesRepo.find({
      where: {
        $or: [
          { id: { $in: activeIds } },
          {
            availability: {
              $in: [FlowerAvailability.WILD, FlowerAvailability.SHOP_ONLY],
            },
          },
        ],
      },
      orderBy: { name: 'asc' },
    })

    return { listings, speciesList }
  }

  @BackendMethod({ allowed: true })
  static async getSpeciesMarketStats(speciesId: string, options: { after?: Date; before?: Date }) {
    const statsRepo = remult.repo(MarketStats)

    const afterDate = options.after ? new Date(options.after) : undefined
    const beforeDate = options.before ? new Date(options.before) : undefined

    const dateFilter: any = {}

    if (afterDate) {
      dateFilter.$gte = afterDate
    }

    if (beforeDate) {
      dateFilter.$lte = beforeDate
    }

    return await statsRepo.find({
      where: {
        speciesId: speciesId,
        date: dateFilter,
      },
      orderBy: { date: 'asc' },
    })
  }

  @BackendMethod({ allowed: true })
  static async getLastSaleStat(speciesId: string, beforeDate: Date) {
    const statsRepo = remult.repo(MarketStats)
    const dateLimit = new Date(beforeDate)

    return await statsRepo.findFirst(
      {
        speciesId,
        date: { $lt: dateLimit },
      },
      { orderBy: { date: 'desc' } }, // The latest known price of a flower
    )
  }

  /**
   * Calculates the recommended selling price for a specific flower
   * based on its Rarity, Quality, and current Market Conditions.
   */
  @BackendMethod({ allowed: true })
  static async getRecommendedPrice(speciesId: string, quality: number) {
    const statsRepo = remult.repo(MarketStats)
    const speciesRepo = remult.repo(FlowerSpecies)

    const species = await speciesRepo.findId(speciesId)
    if (!species) return 0

    const BASE_PRICES: Record<string, number> = {
      [FlowerRarity.COMMON]: 50,
      [FlowerRarity.UNCOMMON]: 150,
      [FlowerRarity.RARE]: 400,
      [FlowerRarity.EPIC]: 1000,
      [FlowerRarity.LEGENDARY]: 3000,
    }

    const VOLATILITY: Record<string, number> = {
      [FlowerRarity.COMMON]: 0.5,
      [FlowerRarity.UNCOMMON]: 1.0,
      [FlowerRarity.RARE]: 2.0,
      [FlowerRarity.EPIC]: 4.0,
      [FlowerRarity.LEGENDARY]: 8.0,
    }

    const lastStat = await statsRepo.findFirst({ speciesId }, { orderBy: { date: 'desc' } })

    let pivotPrice = lastStat?.averagePrice || BASE_PRICES[species.rarity] || 50

    const minFloor = (BASE_PRICES[species.rarity] || 50) * 0.2
    if (pivotPrice < minFloor) pivotPrice = minFloor

    const K = VOLATILITY[species.rarity] || 0.5
    const numerator = 1 + K * Math.pow(quality, 2)
    const denominator = 1 + K * Math.pow(0.5, 2)

    const multiplier = numerator / denominator

    return Math.round(pivotPrice * multiplier)
  }

  // Internal helper
  static async updateDailyStats(speciesId: string, price: number) {
    const statsRepo = remult.repo(MarketStats)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    let stat = await statsRepo.findFirst({ speciesId, date: today })

    if (!stat) {
      stat = statsRepo.create({
        speciesId,
        date: today,
        minPrice: price,
        maxPrice: price,
        averagePrice: price,
        volume: 1,
      })
    } else {
      const totalValue = stat.averagePrice * stat.volume + price
      stat.volume += 1
      stat.averagePrice = Math.round(totalValue / stat.volume)
      stat.minPrice = Math.min(stat.minPrice, price)
      stat.maxPrice = Math.max(stat.maxPrice, price)
    }

    await statsRepo.save(stat)
  }
}

```

---
### File: src/server/controllers/ReportController.ts
---

```ts
import { BackendMethod, remult } from 'remult'
import { ReportType } from '@/shared/types'
import { UserReport } from '@/shared/analytics/UserReport'

export class ReportController {
  @BackendMethod({ allowed: true }) // Autorisé à tout utilisateur connecté
  static async submitReport(data: { type: ReportType; title: string; description: string }) {
    // 1. Validation de sécurité (Backend)
    if (!remult.user) throw new Error('You must be logged in to submit a report.')

    if (!data.title || data.title.trim().length < 5) {
      throw new Error('Title is too short (min 5 characters).')
    }
    if (!data.description || data.description.trim().length < 10) {
      throw new Error('Description is too short. Please provide details.')
    }

    // 2. Anti-spam (Optionnel : vérifier le dernier rapport de cet user)
    const repo = remult.repo(UserReport)

    // Exemple simple : Empêcher de poster plus de 1 rapport toutes les 30 secondes
    const lastReport = await repo.findFirst(
      { reporterId: remult.user.id },
      { orderBy: { createdAt: 'desc' } },
    )

    if (lastReport && lastReport.createdAt) {
      const diff = new Date().getTime() - lastReport.createdAt.getTime()
      if (diff < 30 * 1000) {
        throw new Error('Please wait 30 seconds before sending another report.')
      }
    }

    // 3. Insertion en base
    const report = await repo.insert({
      reporterId: remult.user.id,
      type: data.type,
      title: data.title.trim(),
      description: data.description.trim(),
      createdAt: new Date(),
      status: 'OPEN',
    })

    return report
  }
}

```

---
### File: src/server/controllers/UserController.ts
---

```ts
import { BackendMethod, Controller, remult } from 'remult'
import express from 'express'

import { User } from '@/shared/user/User'

declare module 'remult' {
  export interface RemultContext {
    request?: express.Request
  }
}

@Controller('user')
export class UserController {
  @BackendMethod({ allowed: true })
  static async getUserByTag(tag: string) {
    if (!tag) return

    const userRepo = remult.repo(User)

    const user = await userRepo.findFirst({ tag: tag })

    if (!user) throw 'User could not be found.'

    return {
      success: true,
      user: user,
    }
  }
}

```

---
### File: src/server/ext.ts
---

```ts
export const PRICES = {
  LAND_PLOT: 1000,
}

```

---
### File: src/server/index.ts
---

```ts
import express from 'express'
import session from 'cookie-session'
import path from 'path'
import fs from 'fs'
import { remult } from 'remult'
import { api } from './api'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import dotenv from 'dotenv'
import { UserFlower, FlowerSpecies } from '@/shared'
dotenv.config({
  path: './src/server/.env',
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(
  session({
    name: 'session',
    keys: [process.env.SECRET || 'dev-key'],
  }),
)
app.use(express.json())

// Route updated to use :slugName instead of :speciesId
app.get('/api/images/flowers/:slugName/:status/:type', async (req, res) => {
  await api.withRemult(req, res, async () => {
    const { slugName, status, type } = req.params
    const noFallback = req.query.noFallback === 'true' || req.query.noFallback === 'True'

    const validTypes = ['icon', 'sprite']
    const validStages = ['seed', 'sprout1', 'sprout2', 'growing1', 'growing2', 'mature', 'withered']

    if (!validTypes.includes(type) || !validStages.includes(status)) {
      return res
        .status(404)
        .send(
          'Invalid image type (icon, sprite) or flower status (seed, planted, mature, withered)',
        )
    }

    const secureDir = path.join(__dirname, '../private/assets/flowers')
    const fileName = `${status}.png`
    const realPath = path.join(secureDir, slugName, type, fileName)
    const unknownPath = path.join(secureDir, 'unknown.png')

    let allowed = false

    if (remult.user) {
      const speciesRepo = remult.repo(FlowerSpecies)
      const species = await speciesRepo.findFirst({ slugName })

      if (species) {
        const count = await remult.repo(UserFlower).count({
          ownerId: remult.user.id,
          speciesId: species.id,
        })
        if (count > 0) allowed = true
      }
    }

    if (allowed && fs.existsSync(realPath)) {
      return res.sendFile(realPath)
    }

    if (noFallback) {
      return res.status(404).send('Image not found')
    }

    return res.sendFile(unknownPath)
  })
})

app.use(api)

app.get('/api', (_, res) => {
  res.json({ message: 'Hello from the server!' })
})

app.listen(3002, () => console.log('Server is running on port 3002'))

```

---
### File: src/shared/analytics/FlowerDiscovery.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { FlowerSpecies } from '../flowers/FlowerSpecies'
import { DiscoverySource } from '../types'

@Entity('flower_discoveries', {
  allowApiCrud: false,
  defaultOrderBy: { discoveredAt: 'desc' },
})
export class FlowerDiscovery {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string

  @Relations.toOne(() => User, 'userId')
  user?: User

  @Fields.string()
  speciesId!: string

  @Relations.toOne(() => FlowerSpecies, 'speciesId')
  species?: FlowerSpecies

  @Fields.createdAt()
  discoveredAt?: Date

  @Fields.string()
  source: DiscoverySource = DiscoverySource.UNKNOWN

  @Fields.number()
  initialQuality: number = 0
}

```

---
### File: src/shared/analytics/ModerationLog.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'

@Entity('moderation_logs', {
  allowApiCrud: 'admin',
})
export class ModerationLog {
  @Fields.uuid()
  id!: string

  @Fields.string()
  targetUserId!: string

  @Relations.toOne(() => User, 'targetUserId')
  targetUser?: User

  @Fields.string()
  moderatorId!: string

  @Relations.toOne(() => User, 'moderatorId')
  moderator?: User

  @Fields.string()
  action!: 'BAN' | 'WARN' | 'KICK' | 'UNBAN'

  @Fields.string()
  reason!: string

  @Fields.createdAt()
  createdAt?: Date
}

```

---
### File: src/shared/analytics/UserReport.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { ReportStatus, ReportType } from '../types'

@Entity('reports', {
  allowApiCrud: 'admin',
})
export class UserReport {
  @Fields.uuid()
  id!: string

  @Fields.string()
  reporterId!: string

  @Relations.toOne(() => User, 'reporterId')
  reporter?: User

  @Fields.string()
  type: ReportType = ReportType.BUG

  @Fields.string()
  title!: string

  @Fields.string()
  description!: string

  @Fields.string()
  status: ReportStatus = ReportStatus.OPEN

  @Fields.createdAt()
  createdAt?: Date

  @Fields.date()
  resolvedAt?: Date
}

```

---
### File: src/shared/chat/Chat.ts
---

```ts
import { Entity, Fields } from 'remult'

@Entity('chats', {
  allowApiCrud: false,
})
export class Chat {
  @Fields.uuid()
  id!: string

  @Fields.createdAt()
  createdAt?: Date

  @Fields.date()
  lastMessageAt?: Date

  @Fields.string()
  lastMessagePreview: string = ''
}

```

---
### File: src/shared/chat/ChatMessage.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { Chat } from './Chat'

@Entity('chat_messages', {
  allowApiCrud: false,
  defaultOrderBy: { createdAt: 'asc' },
})
export class ChatMessage {
  @Fields.uuid()
  id!: string

  @Fields.string()
  chatId!: string

  @Relations.toOne(() => Chat, 'chatId')
  chat?: Chat

  @Fields.string()
  senderId!: string

  @Relations.toOne(() => User, 'senderId')
  sender?: User

  @Fields.string()
  content!: string

  @Fields.createdAt()
  createdAt?: Date
}

```

---
### File: src/shared/chat/ChatParticipant.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { Chat } from './Chat'

@Entity('chat_participants', {
  allowApiCrud: false,
})
export class ChatParticipant {
  @Fields.uuid()
  id!: string

  @Fields.string()
  chatId!: string

  @Relations.toOne(() => Chat, 'chatId')
  chat?: Chat

  @Fields.string()
  userId!: string

  @Relations.toOne(() => User, 'userId')
  user?: User

  @Fields.createdAt()
  joinedAt?: Date

  @Fields.date()
  lastReadAt?: Date
}

```

---
### File: src/shared/economy/Item.ts
---

```ts
import { Entity, Fields } from 'remult'
import { ItemType } from '../types'

@Entity('item_definitions', { allowApiCrud: 'admin' })
export class Item {
  @Fields.uuid()
  id!: string

  @Fields.string()
  slug!: string // ex: 'fertilizer_basic', 'fence_wood'

  @Fields.string()
  name!: string

  @Fields.string()
  description: string = ''

  @Fields.string()
  type: ItemType = ItemType.RESOURCE

  @Fields.integer()
  basePrice: number = 0

  @Fields.json()
  effects: any = {}

  @Fields.string()
  assetUrl!: string

  @Fields.boolean()
  isTradable: boolean = true

  @Fields.integer()
  maxStackSize: number = 50
}

```

---
### File: src/shared/economy/MarketHistory.ts
---

```ts
import { Entity, Fields } from 'remult'

@Entity('market_history', { allowApiCrud: 'admin' })
export class MarketHistory {
  @Fields.uuid()
  id!: string

  @Fields.string()
  speciesId!: string

  @Fields.integer()
  price!: number

  @Fields.createdAt()
  soldAt?: Date
}

```

---
### File: src/shared/economy/MarketListing.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { UserFlower } from '../flowers/UserFlower'

@Entity('market_listings', { allowApiCrud: 'admin' })
export class MarketListing {
  @Fields.uuid()
  id!: string

  @Fields.string()
  sellerId!: string

  @Relations.toOne(() => User, 'sellerId')
  seller?: User

  @Fields.string()
  flowerId!: string

  @Relations.toOne(() => UserFlower, 'flowerId')
  flower?: UserFlower

  @Fields.integer()
  price: number = 0 // Price in Sap

  @Fields.createdAt()
  listedAt?: Date

  // TODO: Add backend validation to ensure flower.status === SEED
}

```

---
### File: src/shared/economy/MarketStat.ts
---

```ts
import { Entity, Fields } from 'remult'

@Entity('market_stats', {
  allowApiCrud: 'admin',
  defaultOrderBy: { date: 'desc' },
})
export class MarketStats {
  // works by the day

  @Fields.uuid()
  id!: string

  @Fields.string()
  speciesId!: string

  @Fields.dateOnly()
  date!: Date

  @Fields.number()
  averagePrice: number = 0

  @Fields.integer()
  minPrice: number = 0

  @Fields.integer()
  maxPrice: number = 0

  @Fields.integer()
  volume: number = 0 // nb of sells today
}

```

---
### File: src/shared/economy/SapPurchase.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'

@Entity('sap_purchases', { allowApiCrud: 'admin' })
export class SapPurchase {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string
  @Relations.toOne(() => User, 'userId')
  user?: User

  @Fields.integer()
  amountSap!: number

  @Fields.number()
  amountFiat!: number // e.g. 9.99

  @Fields.string()
  currency: string = 'EUR'

  @Fields.string()
  providerTransactionId!: string // Stripe ID

  @Fields.createdAt()
  purchasedAt?: Date
}

```

---
### File: src/shared/flowers/FlowerSpecies.ts
---

```ts
import { Entity, Fields } from 'remult'
import {
  FlowerAvailability,
  FlowerRarity,
  FlowerWaterConsumption,
  PreferredSeasons,
} from '../types'

@Entity('flower_species', { allowApiCrud: 'admin' })
export class FlowerSpecies {
  @Fields.uuid()
  id!: string

  @Fields.string()
  name!: string

  @Fields.string()
  slugName!: string

  @Fields.string()
  description: string = ''

  @Fields.string()
  preferredSeason: PreferredSeasons = PreferredSeasons.NO

  @Fields.string()
  description_lore: string = '' // a more poetic description

  @Fields.string() // Enum
  rarity: FlowerRarity = FlowerRarity.COMMON

  @Fields.string() // Enum
  availability: FlowerAvailability = FlowerAvailability.WILD

  @Fields.json()
  attributes = {}

  @Fields.integer()
  growthDuration: number = 60 * 60 // In seconds (default 1h)

  @Fields.string() // Enum
  waterNeeds: FlowerWaterConsumption = FlowerWaterConsumption.NORMAL
}

```

---
### File: src/shared/flowers/UserFlower.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { FlowerSpecies } from './FlowerSpecies'
import { FlowerStatus } from '../types'

@Entity('user_flowers', { allowApiCrud: 'admin' })
export class UserFlower {
  @Fields.uuid()
  id!: string

  @Fields.string()
  ownerId!: string

  @Relations.toOne(() => User, 'ownerId')
  owner?: User

  @Fields.string()
  speciesId!: string

  @Relations.toOne(() => FlowerSpecies, 'speciesId')
  species?: FlowerSpecies

  @Fields.string()
  status: FlowerStatus = FlowerStatus.SEED

  @Fields.number()
  quality: number = 0.5

  @Fields.date()
  plantedAt?: Date // Null if SEED

  @Fields.number()
  waterLevel: number = 100 // 0-100%

  @Fields.boolean()
  isShiny: boolean = false

  @Fields.integer()
  fertilizerCharges: number = 0

  @Fields.date()
  lastWateredAt?: Date

  // Isometric Grid Position (Null if SEED)
  @Fields.integer()
  gridX?: number

  @Fields.integer()
  gridY?: number

  // Helper to check if it's in inventory
  get isInInventory() {
    return this.status === FlowerStatus.SEED
  }
}

```

---
### File: src/shared/gameTime.ts
---

```ts
export const GAME_SPEED = 10000

export const GAME_CYCLE_DURATION = (24 * 60 * 60 * 1000) / GAME_SPEED

export const GAME_EPOCH = new Date('2024-01-01T00:00:00Z').getTime()

export interface GameTime {
  progress: number
  hour: number
  minute: number
  isDay: boolean
  isNight: boolean
  speed: number
}

export function calculateGameTime(): GameTime {
  const now = Date.now()
  const elapsed = now - GAME_EPOCH
  const progress = (elapsed % GAME_CYCLE_DURATION) / GAME_CYCLE_DURATION

  const totalMinutes = progress * 24 * 60
  const hour = Math.floor(totalMinutes / 60)
  const minute = Math.floor(totalMinutes % 60)

  const isDay = hour >= 6 && hour < 20
  const isNight = !isDay

  return {
    progress,
    hour,
    minute,
    isDay,
    isNight,
    speed: GAME_SPEED,
  }
}

```

---
### File: src/shared/index.ts
---

```ts
// Types
export * from './types'

// Map
export * from './map/Tile'
export * from './map/Island'

// User
export * from './user/User'
export * from './user/Achievement'
export * from './user/UserAchievement'

// Flowers
export * from './flowers/FlowerSpecies'
export * from './flowers/UserFlower'
export * from './user/UserItem'

// Economy
export * from './economy/MarketListing'
export * from './economy/MarketHistory'
export * from './economy/SapPurchase'
export * from './economy/MarketStat'
export * from './economy/Item'

// Social
export * from './social/Friendship'
export * from './social/ClaimLink'
export * from './social/UserClaim'

```

---
### File: src/shared/map/Island.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { Tile } from './Tile'

@Entity('islands', {
  allowApiCrud: 'admin',
})
export class Island {
  @Fields.uuid()
  id!: string

  @Fields.string()
  name: string = 'New Island'

  // Relation Back-Reference
  @Relations.toMany(() => Tile, { field: 'islandId' })
  tiles?: Tile[]

  @Fields.createdAt()
  createdAt?: Date

  @Fields.string()
  ownerId!: string

  @Relations.toOne(() => User, { field: 'ownerId' })
  owner?: User
}

```

---
### File: src/shared/map/Tile.ts
---

```ts
import { Entity, Field, Fields, Relations } from 'remult'
import { Island } from './Island'
import { TileType } from '../types'
import { FlowerSpecies } from '../flowers/FlowerSpecies'

@Entity('tiles', {
  allowApiCrud: 'admin', // TODO: Restrict logic later
})
export class Tile {
  @Fields.uuid()
  id!: string

  @Fields.integer()
  x!: number

  @Fields.integer()
  z!: number

  @Fields.string()
  type: TileType = 'land'

  @Fields.createdAt()
  createdAt?: Date

  // Relation : Une tuile appartient à une île
  @Fields.string()
  islandId!: string

  @Relations.toOne(() => Island, { field: 'islandId' })
  island?: Island

  @Fields.string()
  flowerId?: string

  @Relations.toOne(() => FlowerSpecies, { field: 'flowerId' })
  flower?: FlowerSpecies
}

```

---
### File: src/shared/social/ClaimLink.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { FlowerSpecies } from '../flowers/FlowerSpecies'

@Entity('claim_links', { allowApiCrud: 'admin' })
export class ClaimLink {
  @Fields.uuid()
  id!: string

  @Fields.string()
  code!: string

  @Fields.string()
  rewardSpeciesId!: string

  @Relations.toOne(() => FlowerSpecies, 'rewardSpeciesId')
  rewardSpecies: FlowerSpecies

  @Fields.integer()
  maxUses: number = 1

  @Fields.integer()
  currentUses: number = 0

  @Fields.date()
  expirationDate?: Date
}

```

---
### File: src/shared/social/Friendship.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { FriendshipStatus } from '../types'

@Entity('friendships', { allowApiCrud: 'admin' })
export class Friendship {
  @Fields.uuid()
  id!: string

  @Fields.string()
  requesterId!: string

  @Relations.toOne(() => User, 'requesterId')
  requester?: User

  @Fields.string()
  receiverId!: string

  @Relations.toOne(() => User, 'receiverId')
  receiver?: User

  @Fields.string()
  status: FriendshipStatus = FriendshipStatus.PENDING

  @Fields.createdAt()
  since?: Date
}

```

---
### File: src/shared/social/UserClaim.ts
---

```ts
import { Entity, Fields } from 'remult'

@Entity('user_claims', { allowApiCrud: 'admin' })
export class UserClaim {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string

  @Fields.string()
  claimLinkId!: string

  @Fields.createdAt()
  claimedAt?: Date
}

```

---
### File: src/shared/types.ts
---

```ts
export const Role = {
  USER: 'user',
  ADMIN: 'admin',
} as const

export type Role = (typeof Role)[keyof typeof Role]

export interface FlowerDTO {
  id: string
  status: FlowerStatus
  waterLevel: number
  quality: number
  plantedAt?: Date
  isShiny: boolean
  species: {
    name: string
    slugName: string
    rarity: FlowerRarity
    description?: string
    description_lore?: string
    waterNeeds: FlowerWaterConsumption
    growthDuration: number
    preferredSeason: PreferredSeasons
  }
}

export const FlowerRarity = {
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  EPIC: 'EPIC',
  LEGENDARY: 'LEGENDARY',
} as const

export type FlowerRarity = (typeof FlowerRarity)[keyof typeof FlowerRarity]

export const FlowerAvailability = {
  WILD: 'WILD', // Can be found randomly
  BREEDING_ONLY: 'BREEDING_ONLY', // Result of fusion
  EVENT_ONLY: 'EVENT_ONLY', // Hidden/Link only
  SHOP_ONLY: 'SHOP_ONLY', // Bought with Sap
} as const

export type FlowerAvailability = (typeof FlowerAvailability)[keyof typeof FlowerAvailability]

export const FlowerStatus = {
  SEED: 'SEED',
  SPROUT1: 'SPROUT1',
  SPROUT2: 'SPROUT2',
  GROWING1: 'GROWING1',
  GROWING2: 'GROWING2',
  MATURE: 'MATURE',
  WITHERED: 'WITHERED',
} as const

export type FlowerStatus = (typeof FlowerStatus)[keyof typeof FlowerStatus]

export const PreferredSeasons = {
  SPRING: 'SPRING',
  SUMMER: 'SUMMER',
  AUTUMN: 'AUTUMN',
  WINTER: 'WINTER',
  NO: null,
} as const

export type PreferredSeasons = (typeof PreferredSeasons)[keyof typeof PreferredSeasons]

export const FlowerWaterConsumption = {
  VERY_LOW: 'VERY_LOW',
  LOW: 'LOW',
  NORMAL: 'NORMAL',
  HIGH: 'HIGH',
  VERY_HIGH: 'VERY_HIGH',
} as const

export type FlowerWaterConsumption =
  (typeof FlowerWaterConsumption)[keyof typeof FlowerWaterConsumption]

export const FriendshipStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  BLOCKED: 'BLOCKED',
} as const

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]

export const TileType = {
  LAND: 'land',
  WATER: 'water',
  FOREST: 'forest',
} as const

export type TileType = (typeof TileType)[keyof typeof TileType]

export const ItemType = {
  CONSUMABLE: 'CONSUMABLE', // Fertilizer, potions
  RESOURCE: 'RESOURCE', // Wood, stone (for tool crafting)
  TOOL: 'TOOL', // Improved watering can, shovel, rake
} as const

export type ItemType = (typeof ItemType)[keyof typeof ItemType]

export const ReportType = {
  BUG: 'BUG',
  FEATURE: 'FEATURE',
  PLAYER_REPORT: 'PLAYER_REPORT',
  OTHER: 'OTHER',
} as const
export type ReportType = (typeof ReportType)[keyof typeof ReportType]

export const ReportStatus = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED',
} as const
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]

export const DiscoverySource = {
  WILD: 'WILD',
  BREEDING: 'BREEDING',
  MARKET: 'MARKET',
  GIFT: 'GIFT',
  UNKNOWN: 'UNKNOWN',
} as const

export type DiscoverySource = (typeof DiscoverySource)[keyof typeof DiscoverySource]

```

---
### File: src/shared/user/Achievement.ts
---

```ts
import { Entity, Fields } from 'remult'

@Entity('achievements', { allowApiCrud: 'admin' }) // Admin managed only
export class Achievement {
  @Fields.uuid()
  id!: string

  @Fields.string()
  slug!: string // e.g. "first_planting"

  @Fields.string()
  name!: string

  @Fields.string()
  description!: string

  @Fields.integer()
  rewardSap: number = 0
}

```

---
### File: src/shared/user/User.ts
---

```ts
import { Entity, Fields } from 'remult'
import { Role } from '../types'

export const sanitizeUser = (user: User) => {
  const { passwordHash, email, ...sanitized } = user
  return sanitized
}

@Entity('users', {
  allowApiCrud: 'admin', // TODO : restrict this later to
})
export class User {
  @Fields.uuid()
  id!: string

  @Fields.string()
  tag!: string

  @Fields.string({ includeInApi: false })
  email!: string

  @Fields.string()
  description: string = ''

  @Fields.string({ includeInApi: false })
  passwordHash!: string

  @Fields.number()
  sap: number = 0

  @Fields.integer()
  level: number = 1

  @Fields.integer()
  xp: number = 0

  @Fields.integer()
  score: number = 0

  @Fields.integer()
  maxPlots: number = 9

  @Fields.boolean()
  enableAds: boolean = false

  @Fields.date()
  lastAdRevenue?: Date

  @Fields.date()
  lastLogin?: Date

  @Fields.string()
  googleId: string = ''

  @Fields.createdAt()
  createdAt?: Date

  @Fields.json()
  roles: Role[] = [Role.USER]

  @Fields.boolean()
  banned: boolean = false
}

```

---
### File: src/shared/user/UserAchievement.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from './User'
import { Achievement } from './Achievement'

@Entity('user_achievements', { allowApiCrud: 'admin' })
export class UserAchievement {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string

  @Relations.toOne(() => User, 'userId')
  user?: User

  @Fields.string()
  achievementId!: string

  @Relations.toOne(() => Achievement, 'achievementId')
  achievement?: Achievement

  @Fields.createdAt()
  unlockedAt?: Date
}

```

---
### File: src/shared/user/UserItem.ts
---

```ts
import { Entity, Fields, Relations } from 'remult'
import { User } from '../user/User'
import { Item } from '../economy/Item'

@Entity('user_items', { allowApiCrud: 'admin' })
export class UserItem {
  @Fields.uuid()
  id!: string

  @Fields.string()
  userId!: string

  @Relations.toOne(() => User, 'userId')
  owner?: User

  @Fields.string()
  itemDefinitionId!: string

  @Relations.toOne(() => Item, 'itemDefinitionId')
  definition?: Item

  @Fields.integer()
  quantity: number = 0
}

```

---
### File: src/stores/auth.ts
---

```ts
import { AuthController } from '@/server/controllers/AuthController'
import { defineStore } from 'pinia'
import { User } from '@/shared/user/User' // On importe l'entité complète, pas juste UserInfo
import { router } from '@/routes' // Importe ton instance de routeur exportée (pas le hook)
import { remult } from 'remult'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // On type avec User pour avoir accès à .sap, .level, etc.
    user: null as null | User,
    returnURL: null as string | null,
  }),
  actions: {
    async login(tagOrEmail: string, password: string, rememberMe: boolean) {
      const res = await AuthController.login(tagOrEmail.toLowerCase(), password, rememberMe)

      // On caste le résultat car le Controller renvoie l'objet complet
      this.user = res.user as User

      if (this.returnURL) {
        // On utilise l'instance importée directement
        router.push(this.returnURL)
        this.returnURL = null
      }
    },

    async logout() {
      await AuthController.logout()
      this.user = null
      router.push('/login')
    },

    async signUp(tag: string, email: string, password: string, passwordConfirm: string) {
      const res = await AuthController.signup(
        tag.toLowerCase(),
        email.toLowerCase(),
        password,
        passwordConfirm,
      )
      this.user = res.user as User
    },

    async googleLogin(googleId: string) {
      const res = await AuthController.googleLogin(googleId)
      this.user = res.user as User
    },

    // Cette fonction sert maintenant de "Refresh" universel
    async fetchSessionUser() {
      // Appelle le AuthController modifié qui va chercher les données fraîches en DB
      const freshUser = await AuthController.getSessionUser()
      remult.user = freshUser as User
      this.user = freshUser as User
    },
  },
})

```

---
### File: src/stores/breakpoints.ts
---

```ts
import { defineStore } from 'pinia'

export const useBreakpoints = defineStore('breakpoints', {
  state: () => ({
    phone: '' as string,
    sm: '' as string,
    md: '' as string,
    lg: '' as string,
    xl: '' as string,
  }),
  actions: {
    getBreakpoints() {
      const styles = getComputedStyle(document.documentElement)
      this.phone = styles.getPropertyValue('--breakpoint-phone').trim()
      this.sm = styles.getPropertyValue('--breakpoint-sm').trim()
      this.md = styles.getPropertyValue('--breakpoint-md').trim()
      this.lg = styles.getPropertyValue('--breakpoint-lg').trim()
      this.xl = styles.getPropertyValue('--breakpoint-xl').trim()
    },
  },
})

```

---
### File: src/stores/chat.ts
---

```ts
import { defineStore } from 'pinia'
import { ref, computed, onUnmounted } from 'vue'
import { SubscriptionChannel } from 'remult'
import { Chat } from '@/shared/chat/Chat'
import { ChatMessage } from '@/shared/chat/ChatMessage'
import { User } from '@/shared/user/User'
import { ChatController } from '@/server/controllers/ChatController'
import { useAuthStore } from './auth'

export interface ChatUI extends Chat {
  otherUser?: User
  hasUnread: boolean
}

export const useChatStore = defineStore('chat', () => {
  const auth = useAuthStore()

  const isOpen = ref(false)
  const activeChatId = ref<string | null>(null)
  const searchQuery = ref('')

  const myChats = ref<ChatUI[]>([])
  const currentMessages = ref<ChatMessage[]>([])
  const globalSearchResults = ref<User[]>([])

  let unsubscribeInbox: (() => void) | null = null
  let unsubscribeChatChannel: (() => void) | null = null

  const activeChat = computed(() => {
    return myChats.value.find((c) => c.id === activeChatId.value)
  })

  const filteredChats = computed(() => {
    if (!Array.isArray(myChats.value)) return []
    if (!searchQuery.value) return myChats.value
    const q = searchQuery.value.toLowerCase()
    return myChats.value.filter((c) => {
      const tagName = c.otherUser?.tag
      return tagName && tagName.toLowerCase().includes(q)
    })
  })

  async function init() {
    if (!auth.user) return

    // 1. Initial Load
    await fetchInbox()

    // 2. Subscribe to "User Channel" (Inbox updates)
    if (unsubscribeInbox) unsubscribeInbox()

    // Note: SubscriptionChannel is instantiated, then we call subscribe
    const userChannel = new SubscriptionChannel(`user:${auth.user.id}`)

    // The promise returns the unsubscribe function
    unsubscribeInbox = await userChannel.subscribe((msg: any) => {
      if (msg && msg.type === 'INBOX_UPDATE') {
        fetchInbox()
      }
    })
  }

  async function fetchInbox() {
    try {
      const chats = await ChatController.getMyInbox()
      myChats.value = chats.map((c) => ({
        ...c.chat!,
        otherUser: c.otherUser,
        hasUnread: c.hasUnread,
      })) as ChatUI[]
    } catch (e) {
      console.error('Inbox load error', e)
    }
  }

  async function openChat(chatId: string) {
    activeChatId.value = chatId
    currentMessages.value = []

    if (unsubscribeChatChannel) {
      unsubscribeChatChannel()
      unsubscribeChatChannel = null
    }

    await ChatController.markAsRead(chatId)

    try {
      currentMessages.value = await ChatController.getMessages(chatId)
    } catch (e) {
      console.error(e)
    }

    // Subscribe to specific Chat Channel
    const chatChannel = new SubscriptionChannel(`chat:${chatId}`)
    unsubscribeChatChannel = await chatChannel.subscribe((newMessage: ChatMessage) => {
      // Add message if not present
      if (!currentMessages.value.some((m) => m.id === newMessage.id)) {
        currentMessages.value.push(newMessage)
        // Mark read if window is focused/open
        if (activeChatId.value === chatId) {
          ChatController.markAsRead(chatId)
        }
      }
    })
  }

  async function startChatWithUser(targetUserId: string) {
    try {
      const message = await ChatController.sendMessage({
        targetUserId,
        content: '👋',
      })
      await openChat(message.chatId)
      searchQuery.value = ''
      globalSearchResults.value = []
    } catch (e) {
      console.error(e)
    }
  }

  function closeConversation() {
    activeChatId.value = null
    if (unsubscribeChatChannel) {
      unsubscribeChatChannel()
      unsubscribeChatChannel = null
    }
    currentMessages.value = []
  }

  async function sendMessage(text: string) {
    if (!activeChatId.value || !text.trim()) return
    try {
      const msg = await ChatController.sendMessage({
        chatId: activeChatId.value,
        content: text,
      })
      // Optimistic update
      currentMessages.value.push(msg)
    } catch (e) {
      console.error('Failed to send', e)
    }
  }

  async function performSearch() {
    try {
      if (!searchQuery.value) {
        globalSearchResults.value = []
        return
      }
      globalSearchResults.value = await ChatController.searchUsers(searchQuery.value)
    } catch (e) {
      console.error(e)
    }
  }

  function toggle() {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      init()
    }
  }

  onUnmounted(() => {
    if (unsubscribeInbox) unsubscribeInbox()
    if (unsubscribeChatChannel) unsubscribeChatChannel()
  })

  return {
    isOpen,
    toggle,
    searchQuery,
    performSearch,
    myChats,
    filteredChats,
    globalSearchResults,
    activeChatId,
    activeChat,
    currentMessages,
    openChat,
    startChatWithUser,
    closeConversation,
    sendMessage,
    init,
  }
})

```

---
### File: src/stores/game.ts
---

```ts
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { remult } from 'remult'
import { GameController } from '@/server/controllers/GameController'
import { Island, Tile } from '@/shared'
import { useModalStore } from './modal'

// UI Helper Type
export interface TileInteraction {
  x: number
  z: number
  id?: string
  isOwned: boolean
  isAdjacentToLand: boolean
}

export const useGameStore = defineStore('game', () => {
  const currentIsland = ref<Island | null>(null)
  const tiles = ref<Tile[]>([])

  const hoveredTile = ref<TileInteraction | null>(null)
  const selectedTile = ref<TileInteraction | null>(null)

  const isLoading = ref(false)
  const playerBalance = ref(0)

  const selectedEntity = computed(() => {
    if (!selectedTile.value) return null
    return (
      tiles.value.find((t) => t.x === selectedTile.value?.x && t.z === selectedTile.value?.z) ||
      null
    )
  })

  // --- ACTIONS ---

  async function fetchIslandData(userId: string) {
    isLoading.value = true
    currentIsland.value = null
    tiles.value = []

    try {
      const result = await GameController.getIslandDetails(userId)

      if (result) {
        currentIsland.value = result.island
        tiles.value = result.tiles
      }
    } catch (e) {
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  async function startAdventure() {
    isLoading.value = true
    try {
      await GameController.startAdventure()
      if (remult.user) {
        await fetchIslandData(remult.user.id)
        await fetchBalance()
      }
    } catch (e: any) {
      alert(e.message)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchBalance() {
    if (!remult.user) return
    try {
      playerBalance.value = await GameController.getUserBalance(remult.user.tag)
    } catch (error) {
      console.error('Error fetching balance:', error)
    }
  }

  async function buyTile(x: number, z: number) {
    if (!currentIsland.value) return

    isLoading.value = true

    try {
      const newTile = await GameController.buyLand(x, z)
      tiles.value.push(newTile)

      if (selectedTile.value && selectedTile.value.x === x && selectedTile.value.z === z) {
        selectedTile.value.isOwned = true
        selectedTile.value.id = newTile.id
      }

      await fetchBalance()
    } catch (e: any) {
      const modal = useModalStore()
      modal.open({
        title: 'Purchase Failed',
        message: e.message,
        type: 'error',
      })
    } finally {
      isLoading.value = false
    }
  }

  function getTileAt(x: number, z: number) {
    return tiles.value.find((t) => t.x === x && t.z === z)
  }

  function setHoveredTile(t: TileInteraction | null) {
    hoveredTile.value = t
  }

  function selectTile(t: TileInteraction | null) {
    selectedTile.value = t
  }

  return {
    currentIsland,
    tiles,
    hoveredTile,
    selectedTile,
    selectedEntity,
    playerBalance,
    isLoading,
    fetchIslandData,
    fetchBalance,
    startAdventure,
    buyTile,
    getTileAt,
    setHoveredTile,
    selectTile,
  }
})

```

---
### File: src/stores/modal.ts
---

```ts
import { router } from '@/routes'
import { defineStore } from 'pinia'
import { ref, markRaw, type Component } from 'vue'

export type ModalType = 'info' | 'success' | 'warning' | 'error'
export type ModalSize = 'standard' | 'large' | 'fullscreen'

export interface ModalAction {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
}

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)
  const type = ref<ModalType>('info')
  const title = ref('')
  const message = ref('')
  const size = ref<ModalSize>('standard')
  const component = ref<Component | null>(null)
  const componentProps = ref<Record<string, any>>({})
  const actions = ref<ModalAction[]>([])
  const sideBarMargin = ref(false)

  const previousPath = ref<string | null>(null)
  const closingPath = ref<string | null>(null)

  function open(payload: {
    title: string
    message?: string
    type?: ModalType
    size?: ModalSize
    component?: Component
    componentProps?: Record<string, any>
    actions?: ModalAction[]
    path?: string // false url shown when the modal is opened
    closingPath?: string // url the modal should return to when closed
    sideBarMargin?: boolean
  }) {
    title.value = payload.title
    message.value = payload.message || ''
    type.value = payload.type || 'info'
    size.value = payload.size || 'standard'
    sideBarMargin.value = payload.sideBarMargin || false
    closingPath.value = payload.closingPath || null

    // Gestion du composant
    if (payload.component) {
      component.value = markRaw(payload.component)
      componentProps.value = payload.componentProps || {}
    } else {
      component.value = null
      componentProps.value = {}
    }

    // Gestion des actions
    if (payload.actions && payload.actions.length > 0) {
      actions.value = payload.actions
    } else {
      actions.value = [
        {
          label: 'Fermer',
          onClick: () => close(),
          variant: 'primary',
        },
      ]
    }

    // --- GESTION DE L'URL (ENDPOINT) ---
    if (payload.path) {
      previousPath.value = window.location.pathname
      window.history.pushState({ modalOpen: true }, '', payload.path)
    } else {
      previousPath.value = null
    }

    isOpen.value = true
  }

  function close() {
    isOpen.value = false

    // --- RESTAURATION DE L'URL ---
    if (previousPath.value) {
      window.history.pushState({}, '', previousPath.value)
      previousPath.value = null
    } else if (closingPath.value) {
      router.push(closingPath.value)
    }

    setTimeout(() => {
      title.value = ''
      message.value = ''
      size.value = 'standard'
      component.value = null
      componentProps.value = {}
      actions.value = []
    }, 300)
  }

  return {
    isOpen,
    type,
    title,
    message,
    size,
    component,
    componentProps,
    sideBarMargin,
    actions,
    open,
    close,
  }
})

```

---
### File: src/stores/theme.ts
---

```ts
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'light',
  }),
  actions: {
    setTheme(val: 'light' | 'dark') {
      this.theme = val
      document.documentElement.setAttribute('data-theme', val)
      localStorage.setItem('theme', val)
    },
    toggle() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light')
    },
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.theme)
    },
  },
})

```

---
### File: src/stores/time.ts
---

```ts
import { defineStore } from 'pinia'
import { ref, onUnmounted } from 'vue'
import { calculateGameTime, type GameTime } from '@/shared/gameTime'

export const useTimeStore = defineStore('time', () => {
  const now = ref<GameTime>(calculateGameTime())
  let intervalId: ReturnType<typeof setInterval> | null = null

  function start() {
    if (intervalId) return
    update()
    intervalId = setInterval(update, 1000)
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  function update() {
    now.value = calculateGameTime()
  }

  onUnmounted(() => {
    stop()
  })

  return {
    now,
    start,
    stop,
  }
})

```

---
### File: src/stores/ui.ts
---

```ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const isSidebarOpen = ref(false)
  const isSidebarHovered = ref(false)

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function closeSidebar() {
    isSidebarOpen.value = false
  }

  return {
    isSidebarOpen,
    isSidebarHovered,
    toggleSidebar,
    closeSidebar,
  }
})

```

---
### File: src/views/AboutView.vue
---

```vue
<script setup lang="ts">

</script>

<template>
    <h1>Empty View</h1>
</template>
```

---
### File: src/views/ContactView.vue
---

```vue
<script setup lang="ts">

</script>

<template>
    <h1>Empty View</h1>
</template>
```

---
### File: src/views/HomeView.vue
---

```vue
<script setup lang="ts">
import HomeMarketTicker from '@/components/HomeMarketTicker.vue';

const getRarityGlowStyle = (rarity: string) => {
    const colors: Record<string, string> = {
        'COMMON': '#94a3b8',
        'UNCOMMON': '#34d399',
        'RARE': '#60a5fa',
        'EPIC': '#c084fc',
        'LEGENDARY': '#fbbf24'
    };
    const color = colors[rarity] || colors['COMMON'];
    return {
        boxShadow: `0 0 30px ${color}20`,
        borderColor: `${color}60`,
        color: color
    };
};
</script>

<template>
    <div
        class="w-screen max-w-[100vw] min-h-screen bg-slate-950 text-slate-200 font-sans overflow-x-hidden selection:bg-emerald-500/30">

        <header class="relative w-full pt-24 pb-12 phone:pt-32 phone:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none z-0">
                <div
                    class="absolute top-10 -right-20 phone:right-0 w-48 h-48 phone:w-96 phone:h-96 bg-emerald-500/30 rounded-full blur-[60px] phone:blur-[100px]">
                </div>
                <div
                    class="absolute bottom-10 -left-20 phone:left-0 w-40 h-40 phone:w-72 phone:h-72 bg-blue-600/20 rounded-full blur-[60px] phone:blur-[100px]">
                </div>
            </div>

            <div
                class="max-w-7xl mx-auto px-4 phone:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                <div class="space-y-6 phone:space-y-8 text-center lg:text-left">

                    <div
                        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/50 text-xs font-medium text-emerald-400 shadow-sm">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Closed Economy Alpha Live
                    </div>

                    <h1
                        class="text-4xl phone:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white break-words">
                        Cultivate your <br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Digital Paradise
                        </span>
                    </h1>

                    <p class="text-base phone:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Plant seeds, nurture rare flowers, and trade them in a fully player-driven economy.
                        Design your island and discover the secrets of botany in BloomScape.
                    </p>

                    <div class="flex flex-col phone:flex-row gap-4 justify-center lg:justify-start w-full">
                        <button
                            class="btn btn-lg w-full phone:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-900 border-none font-bold px-8 shadow-xl shadow-emerald-500/20 transition-all active:scale-95 hover:scale-105 hover:-translate-y-1">
                            Start Your Garden
                        </button>
                        <button
                            class="btn btn-lg w-full phone:w-auto btn-outline border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600">
                            Explore Market
                        </button>
                    </div>

                    <div
                        class="pt-8 flex flex-col phone:flex-row items-center justify-center lg:justify-start gap-6 phone:gap-8 border-t border-slate-800/60 w-full">
                        <div class="text-center lg:text-left">
                            <div class="text-2xl font-bold text-white">12k+</div>
                            <div class="text-xs text-slate-500 uppercase tracking-wider font-bold">Active Plots</div>
                        </div>
                        <div class="text-center lg:text-left">
                            <div class="text-2xl font-bold text-white">850k</div>
                            <div class="text-xs text-slate-500 uppercase tracking-wider font-bold">Sap Traded</div>
                        </div>
                        <div class="text-center lg:text-left">
                            <div class="text-2xl font-bold text-white">142</div>
                            <div class="text-xs text-slate-500 uppercase tracking-wider font-bold">Species</div>
                        </div>
                    </div>
                </div>

                <div class="relative group perspective-1000 hidden lg:block w-full max-w-lg mx-auto">
                    <div
                        class="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl transform group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div
                        class="relative bg-slate-900 border border-slate-700/80 rounded-2xl p-3 shadow-2xl transform rotate-y-12 rotate-x-6 transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-3">
                        <div class="aspect-[4/3] bg-slate-950 rounded-xl overflow-hidden relative shadow-inner">
                            <div class="absolute inset-0"
                                style="background-image: linear-gradient(rgba(51, 65, 85, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.3) 1px, transparent 1px); background-size: 40px 40px; transform: scale(1.5) rotateX(45deg) rotateZ(45deg); opacity: 0.5;">
                            </div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="relative">
                                    <div class="text-8xl filter drop-shadow-lg animate-float">
                                        <img src="/bloomscape_logo.png" width="100">
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-4 left-4 right-4 flex justify-between">
                                <div class="h-2 w-24 bg-slate-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-emerald-500 w-2/3"></div>
                                </div>
                                <div
                                    class="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-mono rounded border border-amber-500/20">
                                    5,420 Sap
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <HomeMarketTicker class="w-full max-w-full" />

        <section class="py-16 phone:py-24 bg-slate-950 relative w-full overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 phone:px-6">
                <div class="text-center mb-12 phone:mb-16">
                    <h2 class="text-3xl phone:text-4xl font-bold text-white mb-4">Grow, Gather, Gain</h2>
                    <p class="text-slate-400 max-w-2xl mx-auto text-sm phone:text-base">
                        BloomScape isn't just about clicking flowers. It's a complex ecosystem where soil quality, water
                        levels, and real-time market trends determine your success.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 phone:gap-8">
                    <div
                        class="group p-6 phone:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-900/20">
                        <div
                            class="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                            💧
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                            Dynamic Gardening</h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Every tile matters. Manage water levels and soil quality to boost the purity of your
                            flowers. Higher quality means higher selling prices.
                        </p>
                    </div>

                    <div
                        class="group p-6 phone:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
                        <div
                            class="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                            📈
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Live
                            Economy</h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            The market never sleeps. Prices fluctuate based on player supply and demand. Buy low, sell
                            high, and try to corner the market.
                        </p>
                    </div>

                    <div
                        class="group p-6 phone:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20">
                        <div
                            class="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                            🧬
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                            Genetics System</h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            From Common daisies to Legendary void-flowers. Cross-breed species to discover secret
                            combinations and unlock value.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 phone:py-32 relative overflow-hidden bg-slate-900/30 border-y border-slate-800/50 w-full">
            <div class="max-w-7xl mx-auto px-6 relative z-10">
                <div class="flex flex-col md:flex-row items-center justify-between gap-12 phone:gap-16">

                    <div class="md:w-1/2 text-center md:text-left">
                        <h2 class="text-3xl phone:text-4xl font-bold text-white mb-6 leading-tight">
                            Collect the <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">Unattainable</span>
                        </h2>
                        <p class="text-slate-400 mb-8 text-base phone:text-lg leading-relaxed">
                            Some flowers are wild, others must be engineered. Will you be the first botanist to
                            stabilize the genome of the Legendary <span class="text-amber-400 font-bold">Solar
                                Lotus</span>?
                        </p>
                        <div class="space-y-4 max-w-md mx-auto md:mx-0 text-left">
                            <div
                                class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                                <div
                                    class="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-lg font-bold">
                                    1</div>
                                <h4 class="text-white font-bold text-sm">Harvest Seeds</h4>
                            </div>
                            <div
                                class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                                <div
                                    class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-lg font-bold">
                                    2</div>
                                <h4 class="text-white font-bold text-sm">Cross-Breed</h4>
                            </div>
                            <div
                                class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                                <div
                                    class="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 text-lg font-bold">
                                    3</div>
                                <h4 class="text-white font-bold text-sm">Profit</h4>
                            </div>
                        </div>
                    </div>

                    <div
                        class="md:w-1/2 relative h-96 w-full flex items-center justify-center perspective-1000 scale-65 phone:scale-100">
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-72 bg-slate-800 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 hover:translate-y-[-120px] hover:rotate-0 hover:z-30 cursor-pointer shadow-xl"
                            style="transform: translate(-60px, 10px) rotate(-12deg);"
                            :style="getRarityGlowStyle('EPIC')">
                            <div class="text-6xl mb-4 opacity-90">🌸</div>
                            <div class="font-bold text-purple-400">Lunar Orchid</div>
                            <div class="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">EPIC</div>
                        </div>

                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-80 bg-slate-900 rounded-2xl border flex flex-col items-center justify-center shadow-2xl z-20 hover:scale-105 transition-all duration-300"
                            :style="getRarityGlowStyle('LEGENDARY')">
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent rounded-2xl pointer-events-none">
                            </div>
                            <div class="text-7xl mb-6 drop-shadow-2xl filter brightness-110 animate-float">⚜️</div>
                            <div class="font-bold text-amber-400 text-2xl font-serif">Golden Rose</div>
                            <div
                                class="mt-4 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-[10px] text-amber-300 font-bold tracking-[0.2em]">
                                LEGENDARY</div>
                        </div>

                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-72 bg-slate-800 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 hover:translate-y-[-120px] hover:rotate-0 hover:z-30 cursor-pointer shadow-xl"
                            style="transform: translate(60px, 10px) rotate(12deg);" :style="getRarityGlowStyle('RARE')">
                            <div class="text-6xl mb-4 opacity-90">🌺</div>
                            <div class="font-bold text-blue-400">Frost Hibiscus</div>
                            <div class="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">RARE</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
/* Page-specific animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 4s ease-in-out infinite;
}

.perspective-1000 {
    perspective: 1000px;
}

.rotate-y-12 {
    transform: rotateY(-12deg) rotateX(5deg);
}
</style>
```

---
### File: src/views/WikiView.vue
---

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { FlowerRarity } from '@/shared/types'

// --- NAVIGATION STATE ---
type WikiCategory = 'OVERVIEW' | 'TOOLS' | 'ECONOMY' | 'MECHANICS'
const activeCategory = ref<WikiCategory>('OVERVIEW')
const searchQuery = ref('')

// --- MOCK DATA ---

const itemDatabase = [
    { name: 'Rusty Can', type: 'Tool', desc: 'Basic watering can. Holds 10L.', cost: 'Free' },
    { name: 'Cloud Sprinkler', type: 'Tool', desc: 'Automatically waters a 3x3 area.', cost: '5,000 Sap' },
    { name: 'Nutrient Mix', type: 'Consumable', desc: 'Instantly restores soil quality by 20%.', cost: '200 Sap' },
    { name: 'Genetic Analyzer', type: 'Tool', desc: 'Reveals hidden genes of a seed before planting.', cost: '1,500 Sap' },
]

const mechanics = [
    {
        title: 'Soil Quality',
        content: 'Soil quality starts at 100% and degrades by 10% after every harvest. Low quality soil increases the chance of "Withered" flowers. Use Fertilizer to restore it.'
    },
    {
        title: 'Cross-Breeding',
        content: 'Planting two different species next to each other gives a 15% chance to spawn a hybrid seed in an adjacent empty tile. Hybrids often possess higher rarity traits.'
    },
    {
        title: 'Market Fluctuations',
        content: 'Prices update every 4 hours based on global player sales. If everyone sells Moon Roses, their value drops. Scarcity drives profit.'
    }
]

// --- HELPERS ---

const getRarityColor = (rarity: string) => {
    switch (rarity) {
        case 'COMMON': return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
        case 'UNCOMMON': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
        case 'RARE': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        case 'EPIC': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
        case 'LEGENDARY': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
        default: return 'text-slate-400';
    }
}

</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 flex flex-col lg:flex-row">

        <aside
            class="w-full lg:w-64 bg-slate-900 border-r border-slate-800 flex-shrink-0 lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 overflow-y-auto">
            <div class="p-6">
                <h2 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Wiki Navigation</h2>
                <nav class="space-y-1">
                    <button @click="activeCategory = 'OVERVIEW'"
                        class="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        :class="activeCategory === 'OVERVIEW' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                        Overview
                    </button>
                    <button @click="activeCategory = 'TOOLS'"
                        class="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        :class="activeCategory === 'TOOLS' ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                        Items & Tools
                    </button>
                    <button @click="activeCategory = 'MECHANICS'"
                        class="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        :class="activeCategory === 'MECHANICS' ? 'bg-purple-500/10 text-purple-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                        Game Mechanics
                    </button>
                    <button @click="activeCategory = 'ECONOMY'"
                        class="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        :class="activeCategory === 'ECONOMY' ? 'bg-amber-500/10 text-amber-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                        Economy Guide
                    </button>
                </nav>
            </div>

            <div class="px-6 pb-6 mt-auto">
                <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <div class="text-xs font-bold text-emerald-400 mb-1">💡 Pro Tip</div>
                    <p class="text-xs text-slate-400">
                        Watering flowers at night reduces evaporation by 30%.
                    </p>
                </div>
            </div>
        </aside>

        <main class="flex-1 p-6 lg:p-10 overflow-y-auto">

            <div
                class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-slate-800">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">
                        {{ activeCategory === 'OVERVIEW' ? 'Welcome to BloomScape' :
                            activeCategory === 'TOOLS' ? 'Equipment & Items' :
                                activeCategory === 'MECHANICS' ? 'Advanced Mechanics' : 'Economic Theory' }}
                    </h1>
                    <p class="text-slate-400">The official guide to cultivating your digital paradise.</p>
                </div>
            </div>

            <div v-if="activeCategory === 'OVERVIEW'" class="space-y-8 animate-fade-in">
                <div class="prose prose-invert max-w-none">
                    <p class="text-lg leading-relaxed text-slate-300">
                        BloomScape is a <strong>real-time gardening simulation</strong> connected to a live player
                        economy.
                        Your goal is to transform a barren island into a thriving nursery, discover rare genetic
                        variants,
                        and amass a fortune in <span class="text-emerald-400 font-mono">Sap</span>.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors cursor-pointer"
                        @click="activeCategory = 'TOOLS'">
                        <div class="text-4xl mb-4">💧</div>
                        <h3 class="font-bold text-white mb-2">Mastering Tools</h3>
                        <p class="text-sm text-slate-400">From rusty cans to automated irrigation systems.</p>
                    </div>
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-colors cursor-pointer"
                        @click="activeCategory = 'ECONOMY'">
                        <div class="text-4xl mb-4">🪙</div>
                        <h3 class="font-bold text-white mb-2">Making Profit</h3>
                        <p class="text-sm text-slate-400">Understanding supply, demand, and market crashes.</p>
                    </div>
                </div>
            </div>

            <div v-if="activeCategory === 'TOOLS'" class="animate-fade-in">
                <div class="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                    <table class="w-full text-left">
                        <thead class="bg-slate-950 text-xs uppercase text-slate-500">
                            <tr>
                                <th class="px-6 py-4 font-bold">Item Name</th>
                                <th class="px-6 py-4 font-bold">Type</th>
                                <th class="px-6 py-4 font-bold">Description</th>
                                <th class="px-6 py-4 font-bold text-right">Cost</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800">
                            <tr v-for="item in itemDatabase" :key="item.name"
                                class="hover:bg-slate-800/50 transition-colors">
                                <td class="px-6 py-4 font-bold text-white">{{ item.name }}</td>
                                <td class="px-6 py-4">
                                    <span
                                        class="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                                        {{ item.type }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm text-slate-400">{{ item.desc }}</td>
                                <td class="px-6 py-4 text-right font-mono text-emerald-400">{{ item.cost }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div v-if="activeCategory === 'MECHANICS'" class="animate-fade-in space-y-6">
                <div v-for="(mech, i) in mechanics" :key="i"
                    class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h3 class="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                        <span
                            class="text-sm bg-purple-500/10 px-2 py-1 rounded text-purple-400 border border-purple-500/20">0{{
                                i + 1 }}</span>
                        {{ mech.title }}
                    </h3>
                    <p class="text-slate-300 leading-relaxed">{{ mech.content }}</p>
                </div>
            </div>

            <div v-if="activeCategory === 'ECONOMY'" class="animate-fade-in">
                <div class="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
                    <div class="text-6xl mb-6">📉 📈</div>
                    <h2 class="text-2xl font-bold text-white mb-4">The Closed Economy</h2>
                    <div class="prose prose-invert max-w-2xl mx-auto text-left">
                        <p>
                            BloomScape operates on a <strong>closed economy model</strong>. This means the game server
                            does not buy flowers infinitely.
                            If you sell a flower, another player (or a limited NPC collector) must buy it.
                        </p>
                        <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-400">
                            <li><strong>Sap</strong> is generated by completing daily quests and selling to NPCs.</li>
                            <li><strong>Inflation</strong> is controlled by land taxes and tool degradation.</li>
                            <li><strong>Prices</strong> are determined by the average of the last 24h of
                                player-to-player trades.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Custom Scrollbar for Sidebar */
aside::-webkit-scrollbar {
    width: 6px;
}

aside::-webkit-scrollbar-track {
    background: transparent;
}

aside::-webkit-scrollbar-thumb {
    background-color: #334155;
    border-radius: 20px;
}
</style>
```

---
### File: src/views/admin/DBManagerView.vue
---

```vue
<script setup lang="ts">
import { AdminController } from '@/server/controllers/AdminController';

</script>

<template>
    <button @click="AdminController.populateMarket()" class="btn btn-primary">Seed DB</button>
</template>
```

---
### File: src/views/admin/ManagerView.vue
---

```vue
<script setup lang="ts">

import AdminSideBar, { MenuItem } from '@/components/admin/AdminSideBar.vue'

import AdminConfig from '@/components/admin/integrated_views/AdminConfig.vue'
import AdminDatabase from '@/components/admin/integrated_views/AdminDatabase.vue'
import AdminLogs from '@/components/admin/integrated_views/AdminLogs.vue'
import AdminModeration from '@/components/admin/integrated_views/AdminModeration.vue'
import AdminOverview from '@/components/admin/integrated_views/AdminOverview.vue'
import AdminReports from '@/components/admin/integrated_views/AdminReports.vue'
import AdminUsers from '@/components/admin/integrated_views/AdminUsers.vue'

import { ref, computed } from 'vue'

// --- NAVIGATION CONFIG ---
const activeTabId = ref('OVERVIEW')

const menuItems: MenuItem[] = [
    { id: 'OVERVIEW', label: 'Stats & Analytics' },
    { id: 'MODERATION', label: 'Moderation Queue' },
    { id: 'REPORTS', label: 'Player Reports' },
    { id: 'USERS', label: 'User Management' },
    { id: 'DATABASE', label: 'Database Editor' },
    { id: 'CONFIG', label: 'Game Config' },
    { id: 'LOGS', label: 'System Logs' }
]

// Dynamic Component Lookup
const currentView = computed(() => {
    switch (activeTabId.value) {
        case 'OVERVIEW': return AdminOverview
        case 'MODERATION': return AdminModeration
        case 'REPORTS': return AdminReports
        case 'USERS': return AdminUsers
        case 'DATABASE': return AdminDatabase
        case 'CONFIG': return AdminConfig
        case 'LOGS': return AdminLogs
        default: return AdminOverview
    }
})

const activeTitle = computed(() =>
    menuItems.find(i => i.id === activeTabId.value)?.label ?? 'Admin'
)
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 flex font-sans">

        <AdminSideBar :active-tab="activeTabId" :menu-items="menuItems" @update:tab="(id) => activeTabId = id" />

        <main class="flex-1 ml-64 p-8 bg-slate-950 min-h-screen">
            <header class="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
                <h1 class="text-2xl font-bold text-white">
                    {{ activeTitle }}
                </h1>
            </header>

            <Transition name="fade" mode="out-in">
                <component :is="currentView" />
            </Transition>
        </main>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
```

---
### File: src/views/errors/404View.vue
---

```vue
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="w-screen min-h-[50vw] bg-slate-950 relative flex items-center justify-center overflow-hidden font-sans">

        <div class="absolute inset-0 pointer-events-none">
            <div
                class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_60%)] animate-drift-slow opacity-60">
            </div>
            <div
                class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.8)_0%,transparent_70%)]">
            </div>
            <div class="particle p1"></div>
            <div class="particle p2"></div>
            <div class="particle p3"></div>
        </div>

        <div class="relative z-10 text-center px-6">

            <div class="mb-8 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"
                    class="w-48 h-48 text-emerald-500/80 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-float">
                    <path fill="currentColor" d="M100 160l-60-30v-40l60-30 60 30v40z" class="text-slate-800" />
                    <path fill="currentColor" d="M40 90l60 30 60-30-60-30z" class="text-slate-700" />
                    <path fill="currentColor" d="M110 60l20-10 10 20-20 10z" class="text-slate-600 animate-pulse-slow"
                        style="animation-delay: 0.5s" />
                    <path fill="currentColor" d="M60 100l-20 10-10-20 20-10z"
                        class="text-slate-600 animate-pulse-slow" />
                    <path fill="currentColor" d="M140 130l15-5 5 15-15 5z" class="text-slate-700 animate-pulse-slow"
                        style="animation-delay: 1s" />
                    <path stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"
                        d="M100 70l-10 20 15 10-20 30 5 15" class="text-emerald-400" />
                </svg>
            </div>

            <h1
                class="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 via-emerald-600 to-slate-900 drop-shadow-2xl">
                404
            </h1>

            <h2 class="text-2xl md:text-3xl font-bold text-white mt-6 tracking-wide uppercase">
                Uncharted Territory
            </h2>

            <p class="text-slate-400 mt-4 max-w-md mx-auto text-lg leading-relaxed">
                You've sailed past the known world. This island seems to have crumbled into the void, or perhaps it
                never existed on our charts at all.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
                <button @click="router.push('/')"
                    class="btn bg-emerald-600 hover:bg-emerald-500 text-white border-none font-bold px-8 shadow-lg shadow-emerald-900/50 group relative overflow-hidden">
                    <span class="relative z-10">Return to Safety</span>
                    <div
                        class="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10">
                    </div>
                </button>

                <button @click="router.go(-1)" class="btn btn-ghost text-slate-300 hover:text-white hover:bg-slate-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Go Back
                </button>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Custom animations not provided by default Tailwind */

/* Floating effect for the main icon */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Slow pulse for broken parts */
@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.6;
        transform: scale(1);
    }

    50% {
        opacity: 1;
        transform: scale(1.05);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
}

/* Background fog drifting */
@keyframes drift {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }

    50% {
        transform: translate(-5%, -5%) rotate(2deg);
    }

    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}

.animate-drift-slow {
    animation: drift 30s ease-in-out infinite;
}

/* Tiny floating particles in background */
.particle {
    position: absolute;
    border-radius: 50%;
    background: rgba(16, 185, 129, 0.3);
    /* Emeraldish */
    animation: float-up linear infinite;
}

.p1 {
    width: 4px;
    height: 4px;
    left: 20%;
    bottom: -10px;
    animation-duration: 15s;
}

.p2 {
    width: 6px;
    height: 6px;
    left: 60%;
    bottom: -20px;
    animation-duration: 20s;
    animation-delay: 2s;
    opacity: 0.2;
}

.p3 {
    width: 3px;
    height: 3px;
    left: 80%;
    bottom: -10px;
    animation-duration: 12s;
    animation-delay: 5s;
}

@keyframes float-up {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
    }

    10% {
        opacity: 0.5;
    }

    90% {
        opacity: 0.5;
    }

    100% {
        transform: translateY(-100vh) translateX(20px);
        opacity: 0;
    }
}
</style>
```

---
### File: src/views/game/FloraDexView.vue
---

```vue
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { GameController } from '@/server/controllers/GameController'
import { DiscoverySource, FlowerRarity } from '@/shared/types'
import FlowerImage from '@/components/FlowerImage.vue'

// Updated Interface
interface FloradexEntry {
    id: string
    name: string
    slugName: string
    description: string
    rarity: FlowerRarity
    discovered: boolean
    discoveryDate?: string
    discoverySource?: typeof DiscoverySource[keyof typeof DiscoverySource]
    initialQuality?: number
}

const floradex = ref<FloradexEntry[]>([])
const isLoading = ref(true)
const searchQuery = ref('')
const sortOption = ref<'RARITY_DESC' | 'RARITY_ASC' | 'NAME_ASC' | 'DISCOVERED' | 'DATE_DESC'>('RARITY_DESC')

const RARITY_WEIGHT: Record<string, number> = {
    'LEGENDARY': 5,
    'EPIC': 4,
    'RARE': 3,
    'UNCOMMON': 2,
    'COMMON': 1
}

const stats = computed(() => {
    const total = floradex.value.length
    const found = floradex.value.filter(f => f.discovered).length
    return { total, found, percent: total > 0 ? Math.round((found / total) * 100) : 0 }
})

const processedFloradex = computed(() => {
    let list = [...floradex.value]

    if (searchQuery.value) {
        const q = searchQuery.value.toLowerCase()
        list = list.filter(f => f.name.toLowerCase().includes(q))
    }

    return list.sort((a, b) => {
        switch (sortOption.value) {
            case 'NAME_ASC':
                return a.name.localeCompare(b.name)
            case 'RARITY_ASC':
                return (RARITY_WEIGHT[a.rarity] - RARITY_WEIGHT[b.rarity]) || a.name.localeCompare(b.name)
            case 'RARITY_DESC':
                return (RARITY_WEIGHT[b.rarity] - RARITY_WEIGHT[a.rarity]) || a.name.localeCompare(b.name)
            case 'DISCOVERED':
                if (a.discovered === b.discovered) return 0;
                return a.discovered ? -1 : 1;
            case 'DATE_DESC':
                const dateA = a.discoveryDate ? new Date(a.discoveryDate).getTime() : 0;
                const dateB = b.discoveryDate ? new Date(b.discoveryDate).getTime() : 0;
                return dateB - dateA;
            default: return 0
        }
    })
})

const fetchFloradex = async () => {
    isLoading.value = true
    try {
        floradex.value = await GameController.getFloradex() as any
    } catch (e) {
        console.error(e)
    } finally {
        isLoading.value = false
    }
}

onMounted(fetchFloradex)

const getRarityColor = (rarity: FlowerRarity) => {
    const colors: Record<string, string> = {
        'COMMON': 'text-slate-400 border-slate-700',
        'UNCOMMON': 'text-emerald-400 border-emerald-500/50',
        'RARE': 'text-blue-400 border-blue-500/50',
        'EPIC': 'text-purple-400 border-purple-500/50',
        'LEGENDARY': 'text-amber-400 border-amber-500/50'
    }
    return colors[rarity] || colors['COMMON']
}

const getRarityBg = (rarity: FlowerRarity) => {
    const colors: Record<string, string> = {
        'COMMON': 'bg-slate-800/50',
        'UNCOMMON': 'bg-emerald-900/20',
        'RARE': 'bg-blue-900/20',
        'EPIC': 'bg-purple-900/20',
        'LEGENDARY': 'bg-amber-900/20'
    }
    return colors[rarity] || 'bg-slate-800/50'
}

// Helper to format source nicely
const getSourceLabel = (source?: string) => {
    switch (source) {
        case 'WILD': return 'Found in Wild';
        case 'BREEDING': return 'Cross-Bred';
        case 'MARKET': return 'Bought';
        case 'GIFT': return 'Gifted';
        default: return 'Unknown';
    }
}
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 p-6 pb-20">

        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row items-end lg:items-center justify-between mb-8 gap-6">
                <div class="w-full lg:w-auto ml-5">
                    <h1
                        class="text-4xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-3">
                        FloraDex
                    </h1>
                    <p class="text-slate-400 flex justify-center lg:justify-start">Track your botanical discoveries.</p>
                </div>

                <div
                    class="w-full lg:w-auto flex flex-col sm:flex-row gap-4 bg-slate-900/80 p-2 rounded-xl border border-slate-800 backdrop-blur-sm">
                    <div class="relative flex-1 sm:w-100">
                        <span class="absolute left-3 top-2.5 text-slate-500 text-xs">🔍</span>
                        <input v-model="searchQuery" type="text" placeholder="Search species..."
                            class="input input-sm w-full min-w-20 bg-slate-950 border-slate-700 focus:border-emerald-500 text-slate-200" />
                    </div>

                    <select v-model="sortOption"
                        class="select select-sm bg-slate-950 border-slate-700 text-slate-200 focus:border-emerald-500">
                        <option value="RARITY_DESC">Rarity (High to Low)</option>
                        <option value="RARITY_ASC">Rarity (Low to High)</option>
                        <option value="NAME_ASC">Name (A-Z)</option>
                        <option value="DATE_DESC">Date Discovered</option>
                        <option value="DISCOVERED">Discovered Status</option>
                    </select>
                </div>
            </div>

            <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-800 w-full mb-8">
                <div class="flex justify-between text-sm mb-2">
                    <span class="text-slate-400 font-medium">Collection Progress</span>
                    <span class="text-emerald-400 font-bold font-mono">{{ stats.found }} / {{ stats.total }}</span>
                </div>
                <div class="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 ease-out"
                        :style="{ width: `${stats.percent}%` }"></div>
                </div>
            </div>

            <div v-if="isLoading" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                <div v-for="i in 10" :key="i" class="h-64 bg-slate-900 rounded-xl animate-pulse"></div>
            </div>

            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                <div v-for="flower in processedFloradex" :key="flower.id"
                    class="group relative bg-slate-900 rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    :class="flower.discovered ? getRarityBg(flower.rarity) + ' ' + getRarityColor(flower.rarity) : 'border-slate-800 bg-slate-900'">

                    <div v-if="flower.discovered"
                        class="absolute top-3 right-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur border border-white/10 shadow-sm">
                        {{ flower.rarity }}
                    </div>

                    <div class="aspect-square relative p-6 flex items-center justify-center bg-slate-950/30">
                        <FlowerImage :slug="flower.slugName" status="MATURE" type="icon" size="100%"
                            class="transition-all duration-500"
                            :class="flower.discovered
                                ? 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] group-hover:scale-110'
                                : 'brightness-0 opacity-20 grayscale blur-[2px] group-hover:blur-0 group-hover:opacity-40'" />

                        <div v-if="!flower.discovered"
                            class="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div
                                class="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center text-slate-500 border border-slate-700">
                                🔒
                            </div>
                        </div>
                    </div>

                    <div class="p-4 border-t border-white/5 flex flex-col h-full">
                        <div v-if="flower.discovered">
                            <h3 class="font-bold text-white truncate">{{ flower.name }}</h3>
                            <p class="text-xs text-white/50 line-clamp-2 mt-1 mb-2 min-h-[2.5em]">{{ flower.description
                                }}</p>

                            <div class="mt-auto pt-2 border-t border-white/5 space-y-1">
                                <div class="flex justify-between items-center text-[10px] text-slate-400">
                                    <span class="uppercase tracking-wider">Date</span>
                                    <span class="font-mono text-slate-200">
                                        {{ flower.discoveryDate ? new Date(flower.discoveryDate).toLocaleDateString() :
                                            '-' }}
                                    </span>
                                </div>
                                <div class="flex justify-between items-center text-[10px] text-slate-400">
                                    <span class="uppercase tracking-wider">Source</span>
                                    <span class="text-emerald-400 font-bold">
                                        {{ getSourceLabel(flower.discoverySource) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <h3 class="font-bold text-slate-600">Unknown Species</h3>
                            <p class="text-xs text-slate-700 mt-1">Discover this flower to unlock its data.</p>
                        </div>
                    </div>
                </div>

                <div v-if="!searchQuery"
                    class="relative bg-slate-950 rounded-xl border border-slate-800 border-dashed flex flex-col items-center justify-center text-center p-6 group cursor-help overflow-hidden min-h-[250px]">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    </div>
                    <div class="relative z-10 transform transition-transform group-hover:scale-110 duration-500">
                        <div
                            class="text-6xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity filter blur-[1px] group-hover:blur-0">
                            🧬
                        </div>
                    </div>
                    <div class="relative z-10">
                        <h3 class="font-bold text-slate-500 group-hover:text-purple-400 transition-colors">Secret
                            Variations</h3>
                        <p class="text-xs text-slate-600 mt-2 group-hover:text-slate-400 transition-colors">
                            Rare mutations & event exclusives hide in the shadows.
                        </p>
                    </div>
                </div>

                <div v-if="processedFloradex.length === 0 && searchQuery"
                    class="col-span-full py-12 text-center text-slate-500 italic">
                    No flowers found matching "{{ searchQuery }}"
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.brightness-0 {
    filter: brightness(0);
}
</style>
```

---
### File: src/views/game/LandView.vue
---

```vue
<script setup lang="ts">
import { computed, defineComponent, h, markRaw, onMounted, ref } from 'vue';
import LandScene from '@/components/game/LandScene.vue';
import SideBar from '@/components/game/SideBar.vue';
import TopBar from '@/components/game/TopBar.vue';
import { useGameStore } from '@/stores/game';
import { useAuthStore } from '@/stores/auth';
import { useRoute } from 'vue-router';
import { UserController } from '@/server/controllers/UserController';
import { useModalStore } from '@/stores/modal';
import TileManagerInModal from '@/components/game/modal_features/TileManagerInModal.vue';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';

const gameStore = useGameStore();
const auth = useAuthStore();
const route = useRoute();
const userId = ref<string | null>(null);

onMounted(async () => {
    await auth.fetchSessionUser();
    userId.value = route.params.tag
        ? (await UserController.getUserByTag(route.params.tag as string)).user.id
        : auth.user?.id;
});

const formatCoord = (n: number) => n.toString().padStart(2, '0');
const activeTile = computed(() => gameStore.selectedTile || gameStore.hoveredTile);

</script>

<template>
    <div class="relative w-screen h-screen overflow-hidden bg-slate-900 text-slate-200 z-0 overflow-hidden">

        <LandScene v-if="userId" quality="high" :user-id="userId" />

        <div v-else class="absolute inset-0 flex items-center justify-center text-slate-500 z-0">
            <p>Rendering engine is out of fertilizer. If you just logged in, <b><button
                        onclick="window.location.reload()">reload</button></b> the page :)</p>
        </div>

        <div class="absolute inset-0 z-10 pointer-events-none">
            <SideBar />
            <TopBar :user-tag="route.params.tag || auth.user?.tag || ''" />

            <transition name="slide-up">
                <div v-if="activeTile"
                    class="fixed bottom-0 w-screen phone:w-fit phone:bottom-8 phone:right-8 pointer-events-auto">
                    <div class="phone:card w-full phone:w-72 glass-card shadow-2xl border-white/10">
                        <div class="card-body p-5">

                            <div class="flex justify-between items-start phone:mb-2">
                                <div class="flex gap-4 items-center phone:block">
                                    <h2 class="card-title text-base font-bold" :class="{
                                        'text-emerald-300': activeTile.isOwned,
                                        'text-slate-400': !activeTile.isOwned
                                    }">
                                        {{ activeTile.isOwned ? 'Occupied Slot' : 'International Waters' }}
                                    </h2>
                                    <span class="text-xs font-mono text-slate-400">
                                        X:{{ formatCoord(activeTile.x) }} | Z:{{ formatCoord(activeTile.z) }}
                                    </span>
                                </div>
                                <div class="badge badge-xs"
                                    :class="activeTile.isOwned ? 'badge-success' : 'badge-ghost'">
                                    {{ activeTile.isOwned ? 'OWNED' : 'WILD' }}
                                </div>
                            </div>

                            <div class="text-xs text-slate-300 flex flex-col gap-2 my-2 hidden phone:block">
                                <p v-if="activeTile.isOwned">
                                    Occupied Land.
                                    <span v-if="gameStore.selectedEntity?.createdAt">
                                        Founded on {{ new Date(gameStore.selectedEntity.createdAt).toLocaleDateString()
                                        }}.
                                    </span>
                                </p>
                                <p v-else>
                                    Wild waters. Expand your territory here.
                                </p>
                            </div>

                            <div class="card-actions justify-end mt-2 pt-4 border-white/5"
                                v-if="gameStore.selectedTile">

                                <button v-if="activeTile.isOwned"
                                    class="btn btn-sm btn-primary w-full text-white shadow-lg shadow-emerald-500/20"
                                    @click="() => {
                                        const componentWithProps = defineComponent({
                                            render() {
                                                return h(TileManagerInModal, {
                                                    x: activeTile.x,
                                                    z: activeTile.z,
                                                    islandId: gameStore.currentIsland.id
                                                })
                                            }
                                        })

                                        const modal = useModalStore();
                                        modal.open({
                                            title: 'Tile Manager',
                                            component: markRaw(componentWithProps),
                                            size: 'large',
                                            path: ROUTES.TILE_MANAGER.pathDyn(activeTile.x, activeTile.z),
                                            sideBarMargin: true,
                                        });
                                    }">
                                    Manage
                                </button>

                                <button v-else-if="!activeTile.isOwned && activeTile.isAdjacentToLand"
                                    @click="gameStore.buyTile(activeTile.x, activeTile.z)"
                                    :disabled="gameStore.isLoading"
                                    class="btn btn-sm btn-outline btn-accent w-full group">

                                    <span v-if="gameStore.isLoading">Processing...</span>
                                    <span v-else>
                                        Buy Plot <span class="group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </button>

                                <button v-else-if="!activeTile.isOwned" disabled
                                    class="btn btn-sm btn-disabled w-full opacity-50 cursor-not-allowed">
                                    Too far from land
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </div>
</template>

<style scoped>
.glass-card {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(40px) scale(0.95);
    opacity: 0;
}
</style>
```

---
### File: src/views/game/LeaderboardView.vue
---

```vue

```

---
### File: src/views/game/MarketView.vue
---

```vue
<script setup lang="ts">
import MarketInModal from '@/components/game/modal_features/MarketInModal.vue';

</script>

<template>
    <MarketInModal></MarketInModal>
</template>
```

---
### File: src/views/game/UserProfileView.vue
---

```vue
<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { UserController } from '@/server/controllers/UserController';
import { GameController } from '@/server/controllers/GameController';
import { User } from '@/shared/user/User';
import { Role, FlowerRarity } from '@/shared/types';
import { ROUTES_ENUM as ROUTES } from '@/routes/routes_enum';

const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

// --- STATE ---
const isLoading = ref(true);
const user = ref<User | null>(null);
const hasIsland = ref(false);
const userInventory = ref<any>(null);
const achievements = ref<any[]>([]); // Real data
const stats = ref({
    joinedAt: '',
    completionRate: 0,
});

// --- COMPUTED ---
const isOwnProfile = computed(() => (auth.user?.tag === route.params.tag) || (!route.params.tag && auth.user));

const levelProgress = computed(() => {
    if (!user.value) return 0;
    return Math.min(100, (user.value.xp / (user.value.level * 1000)) * 100);
});

// --- ACTIONS ---
async function fetchUserProfile() {
    isLoading.value = true
    let targetTag = route.params.tag as string

    if (!targetTag) {
        targetTag = auth.user?.tag || ''
    }

    // Safety check if direct access without auth
    if (!targetTag && !auth.user) {
        router.push(ROUTES.LOGIN.path);
        return;
    }

    try {
        const res = await UserController.getUserByTag(targetTag)

        if (res && res.user) {
            user.value = res.user
            stats.value.joinedAt = new Date(res.user.createdAt!).toLocaleDateString()

            // Parallel fetching for performance
            const [islandDetails, achievementList] = await Promise.all([
                GameController.getIslandDetails(res.user.id),
                GameController.getUserAchievements(res.user.id)
            ]);

            hasIsland.value = !!islandDetails
            achievements.value = achievementList

            // Mock Inventory (replace with real Controller call when ready)
            userInventory.value = {
                bestFlower: { name: 'Void Tulip', rarity: FlowerRarity.RARE }
            }
        } else {
            router.push({ name: ROUTES.NOT_FOUND.name })
        }
    } catch (e) {
        console.error(e)
        router.push(ROUTES.HOME.path)
    } finally {
        isLoading.value = false
    }
}

function getRarityColor(rarity: FlowerRarity | string) {
    const colors: Record<string, string> = {
        [FlowerRarity.COMMON]: 'text-slate-400 bg-slate-800',
        [FlowerRarity.UNCOMMON]: 'text-emerald-400 bg-emerald-900/30 border-emerald-500/30',
        [FlowerRarity.RARE]: 'text-blue-400 bg-blue-900/30 border-blue-500/30',
        [FlowerRarity.EPIC]: 'text-purple-400 bg-purple-900/30 border-purple-500/30',
        [FlowerRarity.LEGENDARY]: 'text-amber-400 bg-amber-900/30 border-amber-500/30'
    };
    return colors[rarity] || colors[FlowerRarity.COMMON];
}

function navigateToLand() {
    if (!user.value) return;
    router.push(ROUTES.USER_LAND.pathDyn!(user.value.tag));
}

function navigateToSettings() {
    if (!user.value) return;
    router.push(ROUTES.SETTINGS.pathDyn!(user.value.tag));
}

watch(() => route.params.tag, () => {
    user.value = null;
    fetchUserProfile();
});

onMounted(async () => {
    if (!auth.user) await auth.fetchSessionUser()
    fetchUserProfile();
});
</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 pb-20">

        <div v-if="isLoading" class="flex items-center justify-center h-screen">
            <span class="loading loading-spinner text-emerald-500 loading-lg"></span>
        </div>

        <div v-else-if="user" class="animate-fade-in relative">

            <div class="relative h-64 w-full overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-slate-900/80 to-slate-950 z-0">
                </div>
                <div class="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]"></div>
                <div class="absolute top-10 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

                <div
                    class="absolute bottom-0 left-0 w-full p-6 phone:p-10 flex flex-col md:flex-row items-end md:items-center gap-6 z-10">

                    <div class="relative group">
                        <div
                            class="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-800 border-4 border-slate-950 shadow-2xl flex items-center justify-center text-4xl overflow-hidden relative">
                            <span class="z-10">{{ user.tag.substring(0, 2).toUpperCase() }}</span>
                            <div class="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-700"></div>
                        </div>
                        <div class="absolute -bottom-2 -right-2 badge badge-lg border-slate-950 font-bold shadow-lg"
                            :class="user.roles.includes(Role.ADMIN) ? 'badge-error text-white' : 'badge-primary text-slate-900'">
                            Lv. {{ user.level }}
                        </div>
                    </div>

                    <div class="flex-1 mb-2">
                        <h1 class="text-3xl md:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
                            {{ user.tag }}
                            <span v-if="user.roles.includes(Role.ADMIN)" class="tooltip tooltip-right"
                                data-tip="Administrator">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-red-500">
                                    <path fill-rule="evenodd"
                                        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.65-.759-3.84a.75.75 0 00-.713-.507 11.215 11.215 0 01-7.76-3.234zM9.53 9.53a.75.75 0 000 1.06l1.97 1.97l3.97-3.97a.75.75 0 10-1.06-1.06L11.5 10.44l-1.47-1.47a.75.75 0 00-1.06 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </h1>
                        <p class="text-slate-400 mt-1 max-w-xl text-sm md:text-base line-clamp-2">
                            {{ user.description || "No bio provided yet." }}
                        </p>
                    </div>

                    <div class="flex gap-3 w-full md:w-auto">
                        <button v-if="hasIsland" @click="navigateToLand"
                            class="btn btn-primary flex-1 md:flex-none shadow-lg shadow-emerald-900/20">
                            Visit Island
                        </button>

                        <button v-if="isOwnProfile" @click="navigateToSettings"
                            class="btn btn-outline border-slate-700 text-slate-300 hover:text-white hover:border-slate-500">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 phone:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div class="space-y-6">
                    <div class="card bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
                        <div class="card-body p-6">
                            <div class="flex justify-between items-center mb-2">
                                <span
                                    class="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience</span>
                                <span class="text-xs font-mono text-emerald-400">{{ user.xp }} / {{ user.level * 1000 }}
                                    XP</span>
                            </div>
                            <progress class="progress progress-success w-full bg-slate-800 h-3" :value="levelProgress"
                                max="100"></progress>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="mb-2 text-emerald-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                            </div>
                            <div class="text-lg font-bold text-white font-mono">{{ user.sap.toLocaleString() }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Net Worth</div>
                        </div>

                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="mb-2 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                </svg>
                            </div>
                            <div class="text-lg font-bold text-white font-mono">{{ user.maxPlots }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Plots Owned</div>
                        </div>

                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="mb-2 text-amber-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a3.375 3.375 0 10-6.75 0v9.75m6.75 0h2.094a1.875 1.875 0 001.875-1.875v-9m-9 0H3.562a1.875 1.875 0 00-1.875 1.875v9" />
                                </svg>
                            </div>
                            <div class="text-lg font-bold text-white font-mono">{{ user.score }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Score</div>
                        </div>

                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="mb-2 text-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                            </div>
                            <div class="text-lg font-bold text-white font-mono text-sm leading-6 mt-1">{{ stats.joinedAt
                                }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Joined</div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-2 space-y-8">

                    <div>
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span class="w-1 h-6 bg-purple-500 rounded-full"></span>
                            Achievements
                        </h3>
                        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">

                            <div v-if="achievements.length === 0" class="text-center text-slate-500 italic py-4">
                                No achievements defined.
                            </div>

                            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div v-for="ach in achievements" :key="ach.id"
                                    class="flex items-center gap-4 p-3 rounded-lg border transition-all" :class="ach.unlocked
                                        ? 'bg-slate-800/50 border-slate-700/50'
                                        : 'bg-slate-950/50 border-transparent opacity-50 grayscale'">
                                    <div>
                                        <div class="font-bold text-sm"
                                            :class="ach.unlocked ? 'text-white' : 'text-slate-500'">
                                            {{ ach.name }}
                                        </div>
                                        <div class="text-xs text-slate-500">{{ ach.description }}</div>
                                        <div v-if="ach.unlocked && ach.unlockedAt"
                                            class="text-[10px] text-emerald-500 mt-1">
                                            Unlocked {{ new Date(ach.unlockedAt).toLocaleDateString() }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="userInventory">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span class="w-1 h-6 bg-amber-500 rounded-full"></span>
                            Showcase
                        </h3>
                        <div
                            class="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center min-h-[200px]">

                            <div v-if="userInventory.bestFlower" class="relative group cursor-pointer perspective-1000">
                                <div
                                    class="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-all">
                                </div>
                                <div class="relative bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-2xl flex flex-col items-center gap-4 w-64 transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105"
                                    :class="getRarityColor(userInventory.bestFlower.rarity).split(' ')[2]">

                                    <div class="text-6xl filter drop-shadow-lg animate-float text-pink-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="font-bold text-white text-lg">{{ userInventory.bestFlower.name }}
                                        </div>
                                        <div class="badge badge-sm mt-2 border-none font-bold tracking-widest"
                                            :class="getRarityColor(userInventory.bestFlower.rarity)">
                                            {{ userInventory.bestFlower.rarity }}
                                        </div>
                                    </div>

                                    <div class="w-full h-px bg-slate-800 my-1"></div>
                                    <div class="text-xs text-slate-500">Discovered on {{ stats.joinedAt }}</div>
                                </div>
                            </div>
                            <p v-else class="text-slate-500 italic">No rare flowers discovered yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-fade-in {
    animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
```

---
### File: src/views/user/LoginView.vue
---

```vue
<script setup lang="ts">

</script>

<template>
    <h1>Empty View</h1>
</template>
```

---
### File: src/views/user/SettingsView.vue
---

```vue
<script setup lang="ts">

</script>

<template>
    <h1>Empty View</h1>
</template>
```

---
### File: src/views/user/SignupView.vue
---

```vue
<script setup lang="ts">

</script>

<template>
    <h1>Empty View</h1>
</template>
```

---
### File: src/views/user/SupportView.vue
---

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ReportController } from '@/server/controllers/ReportController';
import { ReportType } from '@/shared/types';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

// --- STATE ---
const isSubmitting = ref(false);
const submitStatus = ref<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');
const errorMessage = ref('');

const formData = ref({
    type: ReportType.BUG,
    title: '',
    description: ''
});

// --- CONFIG ---
const REPORT_TYPES = [
    {
        id: ReportType.BUG,
        label: 'Bug Report',
        desc: 'Glitches & Errors',
        activeClass: 'border-red-500/50 bg-red-500/10 text-red-400 ring-1 ring-red-500/50',
        iconPath: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' // Warning Triangle
    },
    {
        id: ReportType.FEATURE,
        label: 'Feature Idea',
        desc: 'Feedback & Suggestions',
        activeClass: 'border-purple-500/50 bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/50',
        iconPath: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18' // Lightbulb
    },
    {
        id: ReportType.PLAYER_REPORT,
        label: 'Player Report',
        desc: 'Conduct & Abuse',
        activeClass: 'border-amber-500/50 bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/50',
        iconPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' // Shield Check
    },
    {
        id: ReportType.OTHER,
        label: 'General Inquiry',
        desc: 'Other questions',
        activeClass: 'border-blue-500/50 bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/50',
        iconPath: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z' // Chat
    },
];

const FAQS = [
    { q: 'How do I earn Sap?', a: 'Sap is earned by selling flowers to other players or completing daily objectives.' },
    { q: 'Can I move my plots?', a: 'Once a plot is purchased, it is fixed to the grid. You cannot move it, but you can change the soil type later.' },
    { q: 'I found a bug!', a: 'Please use the form on the right to report it. Include as much detail as possible.' },
];

// --- ACTIONS ---
async function submitForm() {
    if (!auth.user) {
        submitStatus.value = 'ERROR';
        errorMessage.value = 'You must be logged in to submit a ticket.';
        return;
    }

    isSubmitting.value = true;
    submitStatus.value = 'IDLE';
    errorMessage.value = '';

    try {
        await ReportController.submitReport({
            type: formData.value.type,
            title: formData.value.title,
            description: formData.value.description
        });

        submitStatus.value = 'SUCCESS';
        formData.value.title = '';
        formData.value.description = '';
        formData.value.type = ReportType.BUG;

    } catch (e: any) {
        submitStatus.value = 'ERROR';
        errorMessage.value = e.message || 'An error occurred.';
    } finally {
        isSubmitting.value = false;
    }
}
</script>

<template>
    <div class="min-h-screen bg-slate-950 text-slate-200 pt-24 pb-12 px-4 phone:px-8 relative overflow-hidden">

        <div
            class="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none">
        </div>
        <div
            class="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto relative z-10">

            <div class="text-center mb-16 animate-fade-in">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Support Center</h1>
                <p class="text-slate-400 max-w-2xl mx-auto text-lg">
                    Need help with your garden? Have a suggestion for the economy?
                    Our team is here to help.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                <div class="space-y-12 animate-slide-right">

                    <div class="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                        <h3 class="text-xl font-bold text-white mb-4">Community Channels</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <a href="#"
                                class="btn btn-outline border-indigo-500/30 text-indigo-400 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white gap-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                                </svg>
                                Discord
                            </a>
                            <a href="#"
                                class="btn btn-outline border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white gap-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                Twitter
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                        <div class="space-y-2">
                            <div v-for="(item, i) in FAQS" :key="i"
                                class="collapse collapse-arrow bg-slate-900 border border-slate-800 rounded-xl">
                                <input type="radio" name="my-accordion-2" :checked="i === 0" />
                                <div class="collapse-title text-sm font-medium text-slate-200">{{ item.q }}</div>
                                <div class="collapse-content text-sm text-slate-400">
                                    <p>{{ item.a }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animate-slide-left">
                    <div
                        class="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">

                        <div v-if="submitStatus === 'SUCCESS'"
                            class="absolute inset-0 z-20 bg-slate-900 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                            <div
                                class="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-2">Report Submitted</h3>
                            <p class="text-slate-400 mb-8 max-w-sm">Thanks for your feedback. We will review it shortly.
                            </p>
                            <button @click="submitStatus = 'IDLE'"
                                class="btn btn-outline border-slate-700 text-white hover:bg-slate-800">Send
                                Another</button>
                        </div>

                        <h2 class="text-2xl font-bold text-white mb-2">Submit a Ticket</h2>
                        <p class="text-slate-500 text-sm mb-6">Select a category and describe your issue.</p>

                        <form @submit.prevent="submitForm" class="space-y-6">

                            <div class="grid grid-cols-2 gap-3">
                                <label v-for="type in REPORT_TYPES" :key="type.id"
                                    class="cursor-pointer relative group">
                                    <input type="radio" :value="type.id" v-model="formData.type" class="peer sr-only" />

                                    <div class="p-4 rounded-xl border border-slate-800 bg-slate-950/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 flex flex-col gap-3 h-full"
                                        :class="formData.type === type.id ? type.activeClass : 'text-slate-400'">

                                        <div
                                            class="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    :d="type.iconPath" />
                                            </svg>
                                        </div>

                                        <div>
                                            <div class="text-sm font-bold"
                                                :class="formData.type === type.id ? 'text-white' : 'text-slate-300'">{{
                                                    type.label }}</div>
                                            <div class="text-[10px] opacity-70 leading-tight">{{ type.desc }}</div>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div class="space-y-6">
                                <div class="group">
                                    <label
                                        class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">
                                        Subject
                                    </label>
                                    <input type="text" v-model="formData.title" placeholder="Brief summary..."
                                        class="input w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200" />
                                </div>

                                <div class="group">
                                    <label
                                        class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">
                                        Description
                                    </label>
                                    <textarea v-model="formData.description" rows="5" placeholder="Provide details..."
                                        class="textarea w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 leading-relaxed focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 resize-none"></textarea>
                                </div>
                            </div>

                            <div v-if="submitStatus === 'ERROR'"
                                class="alert alert-error text-sm py-2 rounded-lg bg-red-900/20 border border-red-500/20 text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-5 w-5"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{{ errorMessage }}</span>
                            </div>

                            <div class="pt-2">
                                <button type="submit" :disabled="isSubmitting"
                                    class="btn btn-primary w-full text-slate-900 font-bold shadow-lg shadow-emerald-500/10 border-none hover:bg-emerald-400">
                                    <span v-if="isSubmitting" class="loading loading-spinner"></span>
                                    <span v-else>Submit Ticket</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-right {
    animation: slideRight 0.6s ease-out forwards;
    opacity: 0;
    animation-delay: 0.2s;
}

.animate-slide-left {
    animation: slideLeft 0.6s ease-out forwards;
    opacity: 0;
    animation-delay: 0.4s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideRight {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideLeft {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
```

---
### File: tsconfig.app.json
---

```json
// tsconfig.app.json (Fichier Frontend)
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": true,

    "module": "node20"
  },
  "include": ["src/App.vue", "src/**/*.ts", "src/**/*.vue"],
  "exclude": ["src/server/**/*.ts"]
}

```

---
### File: tsconfig.json
---

```json
{
  "references": [],
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    },
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}

```

---
### File: tsconfig.node.json
---

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}

```

---
### File: vite.config.ts
---

```ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      // Méthode moderne compatible ESM
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

```

