import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const HEADER_BY_PATH = {
  '/espace-client': {
    kicker: 'Portail client',
    title: 'Tableau de bord',
  },
  '/espace-client/mes-terrains': {
    kicker: 'Portail client',
    title: 'Mes terrains',
  },
  '/espace-fournisseur': {
    kicker: 'Portail principal',
    title: 'Tableau de bord fournisseur',
  },
  '/espace-fournisseur/depot-terrain': {
    kicker: 'Espace fournisseur',
    title: 'Dépôt de terrain',
  },
}

export default function HeaderDashboard() {
  const { pathname } = useLocation()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)
  const header = HEADER_BY_PATH[pathname] ?? {
    kicker: 'Dashboard',
    title: 'Tableau de bord',
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="supplier-topbar">
      <div>
        <p className="supplier-topbar__kicker">{header.kicker}</p>
        <h5 className="supplier-topbar__title">{header.title}</h5>
      </div>

      <div className="supplier-topbar__actions">
        <button className="supplier-icon-btn" type="button" aria-label="Notifications">
          <i className="ti-bell"></i>
          <span className="supplier-icon-btn__badge">1</span>
        </button>
        <button className="supplier-icon-btn" type="button" aria-label="Paramètres">
          <i className="ti-settings"></i>
        </button>

        <div
          className={`client-user-menu ${isUserMenuOpen ? 'is-open' : ''}`}
          ref={userMenuRef}
        >
          <button
            className="supplier-profile"
            type="button"
            aria-label="Menu profil"
            aria-expanded={isUserMenuOpen}
            onClick={() => setIsUserMenuOpen((isOpen) => !isOpen)}
          >
            <img
              src="https://i.pravatar.cc/88?img=32"
              alt="Profil utilisateur"
            />
          </button>

          <div className="client-user-menu__dropdown">
            <a href="#profil">
              <i className="ti-user"></i>
              Profil
            </a>
            <a href="#support">
              <i className="ti-headphone-alt"></i>
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
