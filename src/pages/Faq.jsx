import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  { q: "Qu'est-ce qu'un terrain « viabilisé » ?", a: "Un terrain viabilisé dispose des réseaux ou raccordements nécessaires pour construire dans de bonnes conditions — en général l'eau et l'électricité, parfois l'assainissement ou la voirie selon le secteur. Un terrain « à viabiliser » peut être intéressant en prix, mais prévoit des travaux et des délais supplémentaires. Nous vous indiquons clairement le niveau de viabilisation pour chaque annonce." },
  { q: "Quels documents dois-je vérifier avant d'acheter ?", a: "Outre l'identité du vendeur et le prix, il est essentiel de regarder le titre (propriété, limites), la situation d'urbanisme (constructibilité, emprise, règlement local ou lotissement), et le cas échéant un bornage récent. Nous vous aidons à identifier les pièces utiles et à poser les bonnes questions aux notaires ou experts adaptés." },
  { q: "Puis-je visiter le terrain avant de m'engager ?", a: "Oui, et c'est même recommandé. Les visites se font en général sur rendez-vous pour que vous puissiez voir les accès, l'ensoleillement, le voisinage et le relief. C'est aussi l'occasion de valider si le terrain correspond à votre projet de maison ou d'investissement." },
  { q: "Le prix affiché est-il négociable ?", a: "Les annonces indiquent souvent un prix de référence ou une fourchette ; la négociation dépend du vendeur, de l'état du marché local et des conditions de vente. Nous vous accompagnons pour formuler une offre cohérente et structurer les échanges de manière transparente." },
  { q: "Comment savoir si je peux construire une maison sur la parcelle ?", a: "La constructibilité dépend du zonage, du plan local d'urbanisme (ou équivalent), et parfois d'un règlement de lotissement. Une parcelle annoncée « constructible » doit toujours être recoupée avec ces documents. Nous vous orientons sur ces vérifications avant tout engagement ferme." },
  { q: "Lotissement ou parcelle isolée : quelle différence ?", a: "En lotissement, plusieurs lots partagent souvent une voirie, des règles d'aspect ou d'implantation communes, ce qui peut sécuriser le cadre du quartier. Une parcelle isolée offre parfois plus de liberté mais impose de vérifier seule toutes les contraintes d'urbanisme et d'accès. Les deux peuvent convenir selon votre projet." },
  { q: "Combien de temps peut prendre un achat de terrain ?", a: "Les délais varient selon la réactivité des parties, la réunion des documents, et le passage chez le notaire. Sans complication majeure, plusieurs semaines à quelques mois sont courants. Nous vous donnons une fourchette réaliste dès que nous connaissons le bien et votre situation." },
  { q: "Proposez-vous un accompagnement après la visite ?", a: "Oui : mise en relation avec des interlocuteurs compétents, préparation des questions pour le notaire, lecture des points sensibles du dossier, et suivi jusqu'à ce que vous soyez à l'aise pour décider. Notre objectif est de rendre chaque étape lisible, sans vous précipiter." },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 750, once: true, offset: 72, easing: 'ease-out-cubic' })
        window.AOS.refresh()
      }, 700)
    }
    if (window.$) {
      window.$('.bg-img, section').each(function () {
        const bg = window.$(this).attr('data-background')
        if (bg) window.$(this).css('background-image', 'url(' + bg + ')')
      })
    }
  }, [])

  return (
    <>
      <div className="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="6" data-background="/img/import/hero3.webp">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90" data-aos="fade-up" data-aos-duration="850" data-aos-once="true">
              <h5>Master Immo</h5>
              <h1>Questions fréquentes</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding lands-faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 text-center lands-faq-intro-wrap" data-aos="fade-up" data-aos-duration="750" data-aos-delay="60" data-aos-once="true">
              <p className="lands-faq-intro">Achat de parcelle, viabilisation, documents et visites : les réponses aux questions les plus courantes. Pour un cas précis, <Link to="/contact">contactez-nous</Link>.</p>
            </div>
            <div className="col-lg-10 col-md-12">
              <ul className="accordion-box clearfix lands-faq-accordion">
                {faqs.map((faq, i) => (
                  <li key={i} className={`accordion block${openIndex === i ? ' active-block' : ''}`} data-aos="fade-up" data-aos-duration="700" data-aos-delay="0" data-aos-once="true">
                    <div
                      className={`acc-btn${openIndex === i ? ' active' : ''}`}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                      {faq.q}
                    </div>
                    <div className="acc-content" style={{ display: openIndex === i ? 'block' : 'none' }}>
                      <div className="content">
                        <div className="text">{faq.a}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
