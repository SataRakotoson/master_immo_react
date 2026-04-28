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

export default function EspaceFournisseurDashboard() {
  return (
    <div className="supplier-layout">
      <FournisseurSidebar />
      <section className="supplier-main">
        <header className="supplier-topbar">
          <div>
            <p className="supplier-topbar__kicker">Portail principal</p>
            <h1 className="supplier-topbar__title">Tableau de bord fournisseur</h1>
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
        <main className="supplier-content" aria-label="Contenu principal">
          <section className="supplier-dashboard-top">
            <section className="supplier-welcome">
              <h2>Bienvenue dans votre espace partenaire</h2>
              <p>Déposez vos terrains, suivez la validation de vos dossiers et échangez avec notre équipe depuis une interface simple et centralisée.</p>
              <div className="supplier-actions">
                <div className="butn-light"><Link to="/espace-fournisseur/depot-terrain"><span>Ajouter un terrain</span></Link></div>
              </div>
              <img className="supplier-welcome__ornament" src="/img/import/ornament1.png" alt="" aria-hidden="true" />
            </section>
            <section className="supplier-metrics" aria-label="Aperçu rapide">
              {[
                { icon: 'ti-map-alt', label: 'Terrains déposés', value: '12' },
                { icon: 'ti-check-box', label: 'En validation', value: '4' },
                { icon: 'ti-files', label: 'Dossiers complets', value: '8' },
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
            <aside className="supplier-list-card" aria-label="Liste des terrains en validation">
              <div className="supplier-list-card__head">
                <h3>Terrains déposés</h3>
                <Link to="/espace-fournisseur/depot-terrain" className="supplier-list-card__link">Voir tout</Link>
              </div>
              <ul>
                {['Terrain résidentiel - Ivato', 'Parcelle agricole - Talatamaty', 'Lotissement - Ambatobe'].map((name, i) => (
                  <li key={i}>
                    <span className="supplier-list-card__name">{name}</span>
                    <span className="supplier-list-card__status">En cours de validation</span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>
        </main>
      </section>
    </div>
  )
}
