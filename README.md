# Master Immo — Application React

Migration complète du site statique `combinaison` vers **Vite + React (JavaScript)**.

## Démarrage

```bash
cd master-immo-react
npm install
npm run dev
```

L'application est disponible sur **http://localhost:5173**

## Build de production

```bash
npm run build
npm run preview   # prévisualisation locale du build
```

## Structure du projet

```
master-immo-react/
├── public/           # Assets statiques (copiés depuis combinaison/)
│   ├── css/          # Tous les fichiers CSS originaux
│   ├── js/           # jQuery, GSAP, AOS, Swiper, etc.
│   ├── img/          # Images
│   └── font/         # Polices Ringside
├── src/
│   ├── components/   # Composants partagés
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Preloader.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── pages/        # Une page par route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Lands.jsx
│   │   ├── Land.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Event.jsx
│   │   ├── Faq.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Signin.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── EspaceClientDashboard.jsx
│   │   ├── MesTerrains.jsx
│   │   ├── EspaceFournisseurDashboard.jsx
│   │   └── DepotTerrain.jsx
│   ├── hooks/
│   │   └── usePageScripts.js  # Hook global pour AOS, bg-img, progress bar
│   ├── App.jsx       # Router + routes
│   └── main.jsx      # Point d'entrée React
└── index.html        # CSS/JS chargés globalement (jQuery, GSAP, AOS, etc.)
```

## Mapping ancienne URL → nouvelle route React

| Ancienne URL HTML           | Route React                         |
|-----------------------------|-------------------------------------|
| `index.html`                | `/`                                 |
| `about.html`                | `/a-propos`                         |
| `lands.html`                | `/terrains`                         |
| `land.html`                 | `/terrains/:id`                     |
| `blog.html`                 | `/blog`                             |
| `contact.html`              | `/contact`                          |
| `event.html`                | `/evenements`                       |
| `faq.html`                  | `/faq`                              |
| `testimonials.html`         | `/temoignages`                      |
| `signin.html`               | `/connexion`                        |
| `register.html`             | `/inscription`                      |
| `forgot-password.html`      | `/mot-de-passe-oublie`              |
| `espace-client/index.html`  | `/espace-client`                    |
| `espace-client/mes-terrains.html` | `/espace-client/mes-terrains` |
| `espace-fournisseur/index.html` | `/espace-fournisseur`           |
| `espace-fournisseur/depot-terrain.html` | `/espace-fournisseur/depot-terrain` |

Les pages `/espace-client` et `/espace-client/mes-terrains` partagent désormais la même sidebar via le composant `src/components/SidebarDashboard.jsx` pour garantir une navigation cohérente et réutilisable.

## Stack technique

- **React 19** avec Vite 8
- **react-router-dom** v7 pour la navigation client-side
- **jQuery + plugins** (sobha-header.js, owl.carousel, etc.) — chargés via `index.html` pour compatibilité
- **GSAP + ScrollTrigger** — animations scroll (art-anim-sec, key numbers, about legacy)
- **AOS** — animations au scroll sur les pages secondaires
- **Swiper** — slider des nouvelles sorties (latest-launch)
- Tous les CSS originaux sont réutilisés sans modification
