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

export default function EspaceClientDashboard() {
  return (
    <div className="supplier-layout">
      <ClientSidebar />
      <section className="supplier-main">
        <header className="supplier-topbar">
          <div>
            <p className="supplier-topbar__kicker">Portail client</p>
            <h1 className="supplier-topbar__title">Tableau de bord</h1>
          </div>
          <div className="supplier-topbar__actions">
            <button className="supplier-icon-btn" type="button" aria-label="Notifications">
              <i className="ti-bell"></i>
              <span className="supplier-icon-btn__badge">1</span>
            </button>
            <button className="supplier-icon-btn" type="button" aria-label="Paramètres">
              <i className="ti-settings"></i>
            </button>
          </div>
        </header>

        <main className="supplier-content" aria-label="Contenu principal client">
          <section className="supplier-dashboard-top">
            <section className="supplier-welcome">
              <h2>Bienvenue dans votre espace client</h2>
              <p>Retrouvez vos terrains, suivez vos paiements et consultez l'avancement de votre dossier en temps réel depuis un espace unique et sécurisé.</p>
              <div className="supplier-actions">
                <div className="butn-light"><Link to="/espace-client/mes-terrains"><span>Voir mes terrains</span></Link></div>
              </div>
              <img className="supplier-welcome__ornament" src="/img/import/ornament1.png" alt="" aria-hidden="true" />
            </section>

            <section className="supplier-metrics" aria-label="Aperçu rapide">
              {[
                { icon: 'ti-map-alt', label: 'Terrains acquis', value: '3' },
                { icon: 'ti-credit-card', label: 'Mensualités restantes', value: '9' },
                { icon: 'ti-check-box', label: 'Dossiers validés', value: '2' },
              ].map((m, i) => (
                <article key={i} className="supplier-card">
                  <span className="supplier-card__icon" aria-hidden="true"><i className={m.icon}></i></span>
                  <div className="supplier-card__text">
                    <p className="supplier-card__label">{m.label}</p>
                    <h3 className="supplier-card__value">{m.value}</h3>
                  </div>
                </article>
              ))}
            </section>

            <aside className="supplier-list-card" aria-label="Suivi des dossiers clients">
              <div className="supplier-list-card__head">
                <h3>Suivi de dossier</h3>
                <a href="#" className="supplier-list-card__link">Voir tout</a>
              </div>
              <ul>
                <li>
                  <span className="supplier-list-card__name">Terrain - Ivato</span>
                  <span className="supplier-list-card__status supplier-list-card__status--validation">Contrat en validation</span>
                </li>
                <li>
                  <span className="supplier-list-card__name">Terrain - Ambatobe</span>
                  <span className="supplier-list-card__status supplier-list-card__status--ok">Titre délivré</span>
                </li>
                <li>
                  <span className="supplier-list-card__name">Terrain - Andravoahangy</span>
                  <span className="supplier-list-card__status supplier-list-card__status--pending">Dossier en cours</span>
                </li>
              </ul>
            </aside>
          </section>
        </main>
      </section>
    </div>
  )
}
