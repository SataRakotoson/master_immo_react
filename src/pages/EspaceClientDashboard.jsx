import { Link } from 'react-router-dom'
import HeaderDashboard from '../components/HeaderDashboard'
import SidebarDashboard from '../components/SidebarDashboard'

export default function EspaceClientDashboard() {
  return (
    <div className="supplier-layout">
      <SidebarDashboard />
      <section className="supplier-main">
        <HeaderDashboard />

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
                  <span className="supplier-list-card__status supplier-list-card__status--complete">Titre délivré</span>
                </li>
                <li>
                  <span className="supplier-list-card__name">Terrain - Andravoahangy</span>
                  <span className="supplier-list-card__status supplier-list-card__status--payment">Dossier en cours</span>
                </li>
              </ul>
            </aside>
          </section>
        </main>
      </section>
    </div>
  )
}
