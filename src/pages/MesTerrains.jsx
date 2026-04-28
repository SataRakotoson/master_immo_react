import HeaderDashboard from '../components/HeaderDashboard'
import SidebarDashboard from '../components/SidebarDashboard'

export default function MesTerrains() {
  const terrains = [
    { img: '/img/import/hero2.webp', alt: 'Terrain résidentiel à Ivato', title: 'Terrain résidentiel - Ivato', desc: "Parcelle plate de 900 m², accès praticable, zone en croissance et proche des commodités." },
    { img: '/img/import/hero3.webp', alt: 'Terrain à fort potentiel à Andravoahangy', title: 'Terrain à fort potentiel - Andravoahangy', desc: "Emplacement stratégique pour projet locatif ou revente, forte demande locale." },
    { img: '/img/import/hero4.webp', alt: 'Lotissement secteur résidentiel', title: 'Lotissement sécurisé - Ambatobe', desc: "Cadre calme, voies d'accès établies, parfait pour un projet familial à moyen terme." },
  ]

  return (
    <div className="supplier-layout">
      <SidebarDashboard />
      <section className="supplier-main">
        <HeaderDashboard />
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
