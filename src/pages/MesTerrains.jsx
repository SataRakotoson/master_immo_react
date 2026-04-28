import { Link, useLocation } from 'react-router-dom'

function ClientSidebar() {
  const { pathname } = useLocation()
  const links = [
    { to: '/espace-client', icon: 'ti-layout-grid2', label: 'Tableau de bord' },
    { to: '/espace-client/mes-terrains', icon: 'ti-map-alt', label: 'Mes terrains' },
    { to: '#', icon: 'ti-receipt', label: 'Factures' },
    { to: '#', icon: 'ti-wallet', label: 'Reçus de paiement' },
    { to: '#', icon: 'ti-calendar', label: 'Mensualités' },
    { to: '#', icon: 'ti-clipboard', label: 'Suivi de dossier' },
    { to: '#', icon: 'ti-pulse', label: "Simulation d'achat" },
  ]
  return (
    <aside className="supplier-sidebar">
      <div className="supplier-logo">
        <span className="supplier-logo__mark" aria-hidden="true">
          <img src="/img/import/logo-color.png" alt="" />
        </span>
        <div>
          <h2>Master Immo</h2>
          <p>Espace Client</p>
        </div>
      </div>
      <nav className="supplier-nav" aria-label="Menu client">
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

export default function MesTerrains() {
  const terrains = [
    { img: '/img/import/hero2.webp', alt: 'Terrain résidentiel à Ivato', title: 'Terrain résidentiel - Ivato', desc: "Parcelle plate de 900 m², accès praticable, zone en croissance et proche des commodités." },
    { img: '/img/import/hero3.webp', alt: 'Terrain à fort potentiel à Andravoahangy', title: 'Terrain à fort potentiel - Andravoahangy', desc: "Emplacement stratégique pour projet locatif ou revente, forte demande locale." },
    { img: '/img/import/hero4.webp', alt: 'Lotissement secteur résidentiel', title: 'Lotissement sécurisé - Ambatobe', desc: "Cadre calme, voies d'accès établies, parfait pour un projet familial à moyen terme." },
  ]

  return (
    <div className="supplier-layout">
      <ClientSidebar />
      <section className="supplier-main">
        <header className="supplier-topbar">
          <div>
            <p className="supplier-topbar__kicker">Portail client</p>
            <h1 className="supplier-topbar__title">Mes terrains</h1>
          </div>
        </header>
        <main className="supplier-content" aria-label="Contenu mes terrains client">
          <div className="supplier-land-panel">
            <section className="supplier-section-head">
              <h2>Mes terrains</h2>
              <p>Liste des terrains associés à votre espace client.</p>
            </section>
            <div className="supplier-search" role="search" aria-label="Rechercher un terrain">
              <i className="ti-search" aria-hidden="true"></i>
              <input type="search" placeholder="Rechercher un terrain, une zone, une référence..." />
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
