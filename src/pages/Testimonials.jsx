import { useEffect, useRef } from 'react'

const cards = [
  { img: '/img/clients/1.png', name: 'Rova A.', role: 'Entrepreneure', quote: "Équipe sérieuse et très disponible. Mon dossier a été validé rapidement et j'ai acheté en toute confiance." },
  { img: '/img/clients/2.png', name: 'Noro M.', role: 'Investisseur immobilier', quote: "Service clair du début à la fin. Les démarches ont été simples et bien expliquées." },
  { img: '/img/clients/3.png', name: 'Fanja R.', role: 'Mère de famille', quote: "Master Immo m'a aidé à trouver un terrain adapté à mon budget. Je recommande pour leur professionnalisme." },
  { img: '/img/clients/4.png', name: 'Toky H.', role: 'Jeune acquéreur', quote: "Les documents ont été vérifiés avec attention, ce qui m'a évité de mauvaises surprises." },
  { img: '/img/clients/5.png', name: 'Miora L.', role: 'Cadre en entreprise', quote: "Bonne communication, délais respectés et excellent suivi après la transaction." },
]

export default function Testimonials() {
  const viewportRef = useRef(null)

  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 750, once: true, offset: 80, easing: 'ease-out-cubic' })
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

  function paginate(dir) {
    const viewport = viewportRef.current
    if (!viewport) return
    const step = Math.max(280, Math.round(viewport.clientWidth * 0.82))
    viewport.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <>
      <div className="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="6" data-background="/img/import/shake.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90" data-aos="fade-up" data-aos-duration="850" data-aos-once="true">
              <h5>Témoignages</h5>
              <h1>Ce que nos clients disent</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="testimonials-cards section-padding" aria-label="Avis clients">
        <div className="container">
          <div className="testimonials-cards__layout" data-aos="fade-up" data-aos-duration="850" data-aos-delay="600">
            <div className="testimonials-cards__intro">
              <h2>Ils nous ont fait confiance</h2>
              <p>Chaque projet est unique. Nous accompagnons nos clients avec rigueur, transparence et proximité pour transformer leur achat de terrain en une décision sereine.</p>
            </div>
            <div className="testimonials-cards__viewport-wrap">
              <div className="testimonials-cards__viewport" ref={viewportRef}>
                <div className="testimonials-cards__track">
                  {cards.map((c, i) => (
                    <article key={i} className="testimonial-card">
                      <div className="testimonial-card__head">
                        <img className="testimonial-card__avatar" src={c.img} alt={`Photo de ${c.name}`} />
                        <div className="testimonial-card__identity">
                          <h3 className="testimonial-card__name">{c.name}</h3>
                          <p className="testimonial-card__meta">{c.role}</p>
                        </div>
                      </div>
                      <p className="testimonial-card__quote">"{c.quote}"</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="testimonials-cards__controls">
                <button className="about-journey__arrow about-journey__arrow--prev" type="button" aria-label="Voir la carte précédente" onClick={() => paginate(-1)}>
                  <span aria-hidden="true">&#8592;</span>
                </button>
                <button className="about-journey__arrow about-journey__arrow--next" type="button" aria-label="Voir la carte suivante" onClick={() => paginate(1)}>
                  <span aria-hidden="true">&#8594;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
