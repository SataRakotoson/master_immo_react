import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  useEffect(() => {
    const threshold = 48
    const minDelta = 8
    const revealTop = 80
    let lastScrollTop = window.pageYOffset || 0

    function syncHeaderState() {
      const current = window.pageYOffset || document.documentElement.scrollTop || 0
      const slideNav = document.getElementById('slide-nav')
      const menuOpen = Boolean(slideNav && slideNav.classList.contains('show'))

      document.body.classList.toggle('header-at-top', current <= threshold)

      if (menuOpen || current <= revealTop) {
        document.body.classList.add('header-visible')
        document.body.classList.remove('header-hidden')
        lastScrollTop = current
        return
      }

      const delta = current - lastScrollTop
      if (Math.abs(delta) < minDelta) return

      if (delta > 0) {
        document.body.classList.add('header-hidden')
        document.body.classList.remove('header-visible')
      } else {
        document.body.classList.add('header-visible')
        document.body.classList.remove('header-hidden')
      }

      lastScrollTop = current
    }

    document.body.classList.add('header-visible')
    document.body.classList.remove('header-hidden')
    syncHeaderState()
    window.addEventListener('scroll', syncHeaderState, { passive: true })
    window.addEventListener('resize', syncHeaderState)
    return () => {
      window.removeEventListener('scroll', syncHeaderState)
      window.removeEventListener('resize', syncHeaderState)
    }
  }, [])

  function isActive(path) {
    return location.pathname === path ? 'level-1-menu active' : 'level-1-menu'
  }

  return (
    <>
      <div className="header-gradient"></div>
      <div className="search-main-sec" id="search-main">
        <div className="container d-flex align-items-center search-container">
          <form action="#" role="search" id="searchform-index" className="search-submit" noValidate>
            <div className="input-sec-search">
              <input type="text" className="form-control search_field" name="searchterm" placeholder="Rechercher" id="search" autoComplete="off" />
            </div>
            <div className="input-group-append button-1 submit-bttn-main">
              <input type="submit" id="btn_search" value="Rechercher" className="submit-bttn" /> <i></i>
            </div>
          </form>
          <div className="close-search only-laptop" id="closeSearch">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.178" height="17.178" viewBox="0 0 17.178 17.178">
              <g transform="translate(19834.207 8032.207)">
                <line x2="15.764" y2="15.764" transform="translate(-19833.5 -8031.5)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1"></line>
                <line x1="15.764" y2="15.764" transform="translate(-19833.5 -8031.5)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1"></line>
              </g>
            </svg>
          </div>
          <div className="close-search only-ipad" id="closeSearch-mob">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.178" height="17.178" viewBox="0 0 17.178 17.178">
              <g transform="translate(19834.207 8032.207)">
                <line x2="15.764" y2="15.764" transform="translate(-19833.5 -8031.5)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1"></line>
                <line x1="15.764" y2="15.764" transform="translate(-19833.5 -8031.5)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1"></line>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <header className="">
        <div className="container">
          <div className="row header-row menu-main-wrap" id="slide-nav">
            <div className="close-menu-div">
              <div className="close-menu" id="close-menu" role="button" tabIndex="0" aria-label="Fermer le menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.589" height="17.59" viewBox="0 0 17.589 17.59">
                  <g transform="translate(6902.914 -89.086)">
                    <path d="M-6903.579,90.579l14.761,14.761" transform="translate(2.079 -0.079)" fill="none" stroke="#00205b" strokeLinecap="round" strokeWidth="2"></path>
                    <path d="M-6888.819,90.579l-14.761,14.761" transform="translate(2.08 -0.079)" fill="none" stroke="#00205b" strokeLinecap="round" strokeWidth="2"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="menu-left menu-links col-12 col-lg-5">
              <ul className="nav-links">
                <li><Link className={isActive('/')} to="/">Accueil</Link></li>
                <li><Link className={isActive('/terrains')} to="/terrains">Terrains</Link></li>
                <li><Link className={isActive('/a-propos')} to="/a-propos">A propos</Link></li>
              </ul>
            </div>
            <div className="logo-sec col-12 col-lg-2 only-desk">
              <Link to="/"><img src="/img/import/logo-white.png" alt="Master Immo" style={{ width: 80, height: 'auto' }} /></Link>
            </div>
            <div className="menu-right menu-links col-12 col-lg-5">
              <ul className="nav-links">
                <li><Link className={isActive('/evenements')} to="/evenements">Événements</Link></li>
                <li><Link className={isActive('/blog')} to="/blog">Blog</Link></li>
                <li><Link className={isActive('/contact')} to="/contact">Contact</Link></li>
                <li className="only-mob"><Link className={isActive('/connexion')} to="/connexion">Se connecter</Link></li>
              </ul>
              <div className="account-dropdown only-desk">
                <details className="header-dropdown">
                  <summary className="header-dropdown-toggle" aria-label="Menu compte">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
                      <path d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                    <span className="header-dropdown-chevron" aria-hidden="true">▾</span>
                  </summary>
                  <ul className="header-dropdown-menu">
                    <li><Link to="/connexion">Se connecter</Link></li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
          <div className="row mobile-menu only-mob">
            <div className="col-4">
              <div className="hamburger" id="menu-toggle" role="button" tabIndex="0" aria-label="Ouvrir le menu" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18">
                  <g transform="translate(-19.5 -40.5)">
                    <line x2="23" transform="translate(20.5 41.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"></line>
                    <line x2="23" transform="translate(20.5 57.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"></line>
                    <line x2="14" transform="translate(20.5 49.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"></line>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
