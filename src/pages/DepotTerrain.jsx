import { Link, useLocation } from 'react-router-dom'

function FournisseurSidebar() {
  const { pathname } = useLocation()
  const links = [
    { to: '/espace-fournisseur', icon: 'ti-layout-grid2', label: 'Tableau de bord' },
    { to: '/espace-fournisseur/depot-terrain', icon: 'ti-map-alt', label: 'Dépôt de terrain' },
    { to: '#', icon: 'ti-files', label: 'Documents fonciers' },
    { to: '#', icon: 'ti-check-box', label: 'Validation' },
    { to: '#', icon: 'ti-bar-chart', label: "Suivi d'étude" },
    { to: '#', icon: 'ti-comments', label: "Échanges avec l'équipe" },
  ]
  return (
    <aside className="supplier-sidebar">
      <div className="supplier-logo">
        <span className="supplier-logo__mark" aria-hidden="true">
          <img src="/img/import/logo-color.png" alt="" />
        </span>
        <div>
          <h2>Master Immo</h2>
          <p>Espace Fournisseur</p>
        </div>
      </div>
      <nav className="supplier-nav" aria-label="Menu fournisseur">
        {links.map((l, i) => (
          <Link key={i} className={`supplier-nav__item${pathname === l.to ? ' is-active' : ''}`} to={l.to}>
            <i className={l.icon}></i><span>{l.label}</span>
          </Link>
        ))}
      </nav>
      <Link className="supplier-logout" to="/connexion"><i className="ti-power-off"></i><span>Déconnexion</span></Link>
    </aside>
  )
}

const terrains = [
  { img: '/img/import/hero2.webp', alt: 'Terrain résidentiel à Ivato', title: 'Terrain résidentiel - Ivato', desc: "Parcelle plate de 900 m², accès praticable, zone en croissance et proche des commodités." },
  { img: '/img/import/hero3.webp', alt: 'Terrain à fort potentiel à Andravoahangy', title: 'Terrain à fort potentiel - Andravoahangy', desc: "Emplacement stratégique pour projet locatif ou revente, forte demande locale." },
  { img: '/img/import/hero4.webp', alt: 'Lotissement secteur résidentiel', title: 'Lotissement sécurisé - Ambatobe', desc: "Cadre calme, voies d'accès établies, parfait pour un projet familial à moyen terme." },
]

export default function DepotTerrain() {
  return (
    <div className="supplier-layout">
      <FournisseurSidebar />
      <section className="supplier-main">
        <header className="supplier-topbar">
          <div>
            <p className="supplier-topbar__kicker">Espace fournisseur</p>
            <h1 className="supplier-topbar__title">Dépôt de terrain</h1>
          </div>
        </header>
        <main className="supplier-content" aria-label="Contenu dépôt terrain">
          <div className="supplier-land-panel">
            <section className="supplier-section-head">
              <h2>Vos terrains déposés</h2>
              <p>Chaque carte présente un terrain avec son visuel, son titre et sa description synthétique.</p>
            </section>
            <div className="supplier-land-toolbar">
              <div className="supplier-search" role="search" aria-label="Rechercher un terrain">
                <i className="ti-search" aria-hidden="true"></i>
                <input type="search" placeholder="Rechercher un terrain, une zone, une référence..." />
              </div>
              <div className="butn-dark supplier-land-toolbar__cta">
                <a href="#"><span><i className="ti-plus" aria-hidden="true"></i> Ajouter un nouveau terrain</span></a>
              </div>
            </div>
            <section className="supplier-land-grid" aria-label="Liste des terrains">
              {terrains.map((t, i) => (
                <article key={i} className="supplier-land-card">
                  <img src={t.img} alt={t.alt} />
                  <div className="supplier-land-card__body">
                    <h3>{t.title}</h3>
                    <p>{t.desc}</p>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </main>
      </section>
    </div>
  )
}
