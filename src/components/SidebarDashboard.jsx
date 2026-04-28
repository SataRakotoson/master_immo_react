import { Link, useLocation } from 'react-router-dom'

const CLIENT_LINKS = [
  { to: '/espace-client', icon: 'ti-layout-grid2', label: 'Tableau de bord' },
  { to: '/espace-client/mes-terrains', icon: 'ti-map-alt', label: 'Mes terrains' },
  { to: '#', icon: 'ti-receipt', label: 'Factures' },
  { to: '#', icon: 'ti-wallet', label: 'Reçus de paiement' },
  { to: '#', icon: 'ti-calendar', label: 'Mensualités' },
  { to: '#', icon: 'ti-clipboard', label: 'Suivi de dossier' },
  { to: '#', icon: 'ti-pulse', label: "Simulation d'achat" },
]

export default function SidebarDashboard() {
  const { pathname } = useLocation()

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
        {CLIENT_LINKS.map((link, index) => (
          <Link
            key={index}
            className={`supplier-nav__item${pathname === link.to ? ' is-active' : ''}`}
            to={link.to}
          >
            <i className={link.icon}></i>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
      <Link className="supplier-logout" to="/connexion">
        <i className="ti-power-off"></i>
        <span>Déconnexion</span>
      </Link>
    </aside>
  )
}
