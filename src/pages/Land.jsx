import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const landData = {
  1: { title: 'Terrain viabilisé — Ambatobe', img: '/img/import/hero2.webp', price: '85 M Ar / lot', surface: '450 m²', zone: 'Ambatobe', desc: "Parcelle prête à bâtir dans un quartier calme et recherché. Réseaux en place, documentations disponibles. Idéal pour une résidence principale." },
  2: { title: 'Grande parcelle — Ivato', img: '/img/import/hero2.webp', price: '118 M Ar / lot', surface: '620 m²', zone: 'Ivato', desc: "Surface généreuse pour projet de maison avec jardin ou extension future. Secteur en développement, proximité des axes et commodités." },
  3: { title: 'Terrain à fort potentiel — Andravoahangy', img: '/img/import/hero3.webp', price: '62 M Ar / lot', surface: '320 m²', zone: 'Andravoahangy', desc: "Opportunité pour premier achat ou investissement à moyen terme. Parcelle à viabiliser selon votre rythme." },
}

export default function Land() {
  const { id } = useParams()
  const land = landData[id] || landData[1]

  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 750, once: true, offset: 80, easing: 'ease-out-cubic' })
        window.AOS.refresh()
      }, 300)
    }
    if (window.$) {
      window.$('.bg-img, section').each(function () {
        const bg = window.$(this).attr('data-background')
        if (bg) window.$(this).css('background-image', 'url(' + bg + ')')
      })
    }
  }, [id])

  return (
    <>
      <div className="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="6" data-background="/img/import/hero3.webp">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90" data-aos="fade-up" data-aos-duration="850" data-aos-once="true">
              <h5>Master Immo</h5>
              <h1>{land.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="rooms-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8" data-aos="fade-right" data-aos-duration="900">
              <div className="position-re o-hidden mb-30">
                <img src={land.img} alt={land.title} className="img-fluid" />
              </div>
              <h3>{land.title}</h3>
              <p>{land.desc}</p>
              <div className="room-facilities mt-30">
                <ul className="list-unstyled">
                  <li><i className="flaticon-home"></i> Surface : {land.surface}</li>
                  <li><i className="flaticon-location-pin"></i> Zone : {land.zone}</li>
                  <li><i className="flaticon-shield"></i> Eau &amp; électricité</li>
                  <li><i className="flaticon-car"></i> Accès goudronné</li>
                  <li><i className="flaticon-hotel"></i> Constructible</li>
                  <li><i className="flaticon-rating"></i> Viabilisé</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-duration="900">
              <div className="booking-box">
                <div className="head-box">
                  <h6>Prix</h6>
                  <h4>{land.price}</h4>
                </div>
                <div className="booking-inner clearfix">
                  <form action="#" method="post" className="form1 clearfix">
                    <div className="col-md-12">
                      <div className="input1_wrapper">
                        <label>Votre nom</label>
                        <div className="input1_inner">
                          <input type="text" className="form-control input" placeholder="Nom complet" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input1_wrapper">
                        <label>Téléphone</label>
                        <div className="input1_inner">
                          <input type="tel" className="form-control input" placeholder="N° téléphone" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input1_wrapper">
                        <label>Email</label>
                        <div className="input1_inner">
                          <input type="email" className="form-control input" placeholder="E-mail" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn-form1-submit mt-15">Demander une visite</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-30">
            <Link to="/terrains" className="button-1">← Retour aux terrains<i></i></Link>
          </div>
        </div>
      </section>
    </>
  )
}
