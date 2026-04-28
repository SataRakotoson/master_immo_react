import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Lands() {
  const [mapActive, setMapActive] = useState(false)

  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 750, once: true, offset: 80, easing: 'ease-out-cubic' })
        window.AOS.refresh()
      }, 700)
    }
    // Apply bg-img backgrounds
    if (window.$) {
      window.$('.bg-img, section').each(function () {
        const bg = window.$(this).attr('data-background')
        if (bg) window.$(this).css('background-image', 'url(' + bg + ')')
      })
    }
  }, [])

  return (
    <>
      {/* Header Banner */}
      <div className="banner-header banner-header--tall section-padding valign bg-img bg-fixed" data-overlay-dark="6" data-background="/img/import/hero3.webp">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90">
              <h5 className="mb-0">Master Immo</h5>
              <h1>Terrains &amp; parcelles</h1>
              <p className="banner-slogan">Des emplacements sélectionnés pour votre maison ou votre investissement — viabilisés ou à fort potentiel, avec un accompagnement sur mesure. Du premier conseil à la visite sur place, nous sécurisons chaque étape : transparence sur le foncier, conseils d'urbanisme et solutions adaptées à votre budget.</p>
              <div className="lands-banner-ctas">
                <div className="butn-dark"><Link to="/contact"><span>Nous contacter</span></Link></div>
                <div className="butn-light"><a href="#terrains-annonces"><span>Voir les annonces</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire de recherche */}
      <div className="lands-booking-overlap">
        <div className="container">
          <div className="clearfix">
            <div className="booking-inner clearfix">
              <form className="form1 clearfix" action="#" method="get">
                <div className="col1 c1">
                  <div className="input1_wrapper">
                    <label>Zone ou ville</label>
                    <div className="input1_inner input1_inner--no-icon">
                      <input type="text" name="zone" className="form-control input" placeholder="Zone ou ville" autoComplete="address-level2" />
                    </div>
                  </div>
                </div>
                <div className="col1 c2">
                  <div className="select1_wrapper">
                    <label>Surface min.</label>
                    <div className="select1_inner">
                      <select name="surface_min" className="select2 select" style={{ width: '100%' }}>
                        <option value="">Surface min.</option>
                        <option value="200">200 m² et +</option>
                        <option value="300">300 m² et +</option>
                        <option value="500">500 m² et +</option>
                        <option value="1000">1 000 m² et +</option>
                        <option value="2000">2 000 m² et +</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col2 c3">
                  <div className="select1_wrapper">
                    <label>Surface max.</label>
                    <div className="select1_inner">
                      <select name="surface_max" className="select2 select" style={{ width: '100%' }}>
                        <option value="">Surface max.</option>
                        <option value="500">Jusqu'à 500 m²</option>
                        <option value="1000">Jusqu'à 1 000 m²</option>
                        <option value="2000">Jusqu'à 2 000 m²</option>
                        <option value="5000">Jusqu'à 5 000 m²</option>
                        <option value="999999">Plus de 5 000 m²</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col2 c4">
                  <div className="select1_wrapper">
                    <label>Budget max.</label>
                    <div className="select1_inner">
                      <select name="budget_max" className="select2 select" style={{ width: '100%' }}>
                        <option value="">Budget max.</option>
                        <option value="50000000">Moins de 50 M Ar</option>
                        <option value="100000000">Jusqu'à 100 M Ar</option>
                        <option value="200000000">Jusqu'à 200 M Ar</option>
                        <option value="500000000">Jusqu'à 500 M Ar</option>
                        <option value="999999999999">Plus de 500 M Ar</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col2 c5">
                  <div className="select1_wrapper">
                    <label>Viabilisation</label>
                    <div className="select1_inner">
                      <select name="viabilisation" className="select2 select" style={{ width: '100%' }}>
                        <option value="">Viabilisation</option>
                        <option value="viable">Viabilisé</option>
                        <option value="partiel">Partiellement viabilisé</option>
                        <option value="non-viable">Non viabilisé</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col3 c6">
                  <button type="submit" className="btn-form1-submit">Rechercher</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Annonces */}
      <section id="terrains-annonces" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              {/* Terrain 1 — Ambatobe */}
              <div className="rooms2 mb-90">
                <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0">
                  <div className={`lands-listing-media${mapActive ? ' is-map-active' : ''}`} id="terrain-ambatobe-media">
                    <div className="lands-listing-media__track">
                      <div className="lands-listing-media__panel">
                        <img src="/img/import/hero2.webp" alt="Terrain viabilisé à Ambatobe" className="img-fluid lands-listing-media__photo" />
                      </div>
                      <div className="lands-listing-media__panel lands-listing-media__panel--map">
                        <iframe
                          title="Carte — quartier Ambatobe, Antananarivo"
                          src={mapActive ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.8489498319213!2d47.55659198164249!3d-18.87500221377362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f08702cd8e1ec5%3A0x77c574efafb383eb!2sAmbatobe%2C%20Tananarive!5e1!3m2!1sfr!2smg!4v1775408339048!5m2!1sfr!2smg" : undefined}
                          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
                        </iframe>
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="caption" data-aos="fade-right" data-aos-duration="1150" data-aos-delay="0">
                  <div>
                    <h3>85 M Ar <span>/ lot</span></h3>
                    <h4><Link to="/contact">Terrain viabilisé — Ambatobe (Projet de maison)</Link></h4>
                    <p>Parcelle prête à bâtir dans un quartier calme et recherché. Réseaux en place, documentations disponibles. Idéal pour une résidence principale.</p>
                    <div className="room-facilities lands-facilities-wrap">
                      <ul className="lands-facilities-col lands-facilities-col--left list-unstyled">
                        <li><i className="flaticon-home"></i> 450 m²</li>
                        <li><i className="flaticon-location-pin"></i> Ambatobe</li>
                        <li><i className="flaticon-shield"></i> Eau &amp; électricité</li>
                      </ul>
                      <ul className="lands-facilities-col lands-facilities-col--right list-unstyled">
                        <li><i className="flaticon-car"></i> Accès goudronné</li>
                        <li><i className="flaticon-hotel"></i> Constructible</li>
                        <li><i className="flaticon-rating"></i> Viabilisé</li>
                      </ul>
                    </div>
                    <hr className="border-2" />
                    <div className="info-wrapper">
                      <div className="butn-light mx-2">
                        <button type="button" aria-expanded={mapActive} aria-controls="terrain-ambatobe-media" onClick={() => setMapActive(v => !v)}>
                          <i className="flaticon-location-pin" aria-hidden="true"></i>
                          <span>{mapActive ? 'Voir la photo' : 'Voir la localisation'}</span>
                        </button>
                      </div>
                      <div className="butn-dark"><Link to="/terrains/1"><span>Détails</span></Link></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terrain 2 — Ivato */}
              <div className="rooms2 mb-90 left">
                <figure data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0">
                  <img src="/img/import/hero2.webp" alt="Grande parcelle à Ivato" className="img-fluid" />
                </figure>
                <div className="caption" data-aos="fade-left" data-aos-duration="1150" data-aos-delay="0">
                  <h3>118 M Ar <span>/ lot</span></h3>
                  <h4><Link to="/contact">Grande parcelle — Ivato (Projet de maison)</Link></h4>
                  <p>Surface généreuse pour projet de maison avec jardin ou extension future. Secteur en développement, proximité des axes et commodités.</p>
                  <div className="room-facilities lands-facilities-wrap">
                    <ul className="lands-facilities-col lands-facilities-col--left list-unstyled">
                      <li><i className="flaticon-home"></i> 620 m²</li>
                      <li><i className="flaticon-location-pin"></i> Ivato</li>
                      <li><i className="flaticon-shield"></i> Viabilisation en cours</li>
                    </ul>
                    <ul className="lands-facilities-col lands-facilities-col--right list-unstyled">
                      <li><i className="flaticon-car"></i> Accès facilité</li>
                      <li><i className="flaticon-hotel"></i> Zone constructible</li>
                      <li><i className="flaticon-world"></i> Bon potentiel</li>
                    </ul>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    <div className="butn-dark"><Link to="/terrains/2"><span>Détails</span></Link></div>
                  </div>
                </div>
              </div>

              {/* Terrain 3 — Andravoahangy */}
              <div className="rooms2 mb-90">
                <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0">
                  <img src="/img/import/hero3.webp" alt="Terrain à fort potentiel Andravoahangy" className="img-fluid" />
                </figure>
                <div className="caption" data-aos="fade-right" data-aos-duration="1150" data-aos-delay="0">
                  <h3>62 M Ar <span>/ lot</span></h3>
                  <h4><Link to="/contact">Terrain à fort potentiel — Andravoahangy</Link></h4>
                  <p>Opportunité pour premier achat ou investissement à moyen terme. Parcelle à viabiliser selon votre rythme ; nous vous guidons sur les étapes.</p>
                  <div className="room-facilities lands-facilities-wrap">
                    <ul className="lands-facilities-col lands-facilities-col--left list-unstyled">
                      <li><i className="flaticon-home"></i> 320 m²</li>
                      <li><i className="flaticon-location-pin"></i> Andravoahangy</li>
                      <li><i className="flaticon-shield"></i> À viabiliser</li>
                    </ul>
                    <ul className="lands-facilities-col lands-facilities-col--right list-unstyled">
                      <li><i className="flaticon-car"></i> Voie d'accès</li>
                      <li><i className="flaticon-hotel"></i> Constructible</li>
                      <li><i className="flaticon-discount"></i> Prix attractif</li>
                    </ul>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    <div className="butn-dark"><Link to="/terrains/3"><span>Détails</span></Link></div>
                  </div>
                </div>
              </div>

              {/* Terrain 4 — Lotissement */}
              <div className="rooms2 left mb-90">
                <figure data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0">
                  <img src="/img/import/hero4.webp" alt="Lotissement secteur résidentiel" className="img-fluid" />
                </figure>
                <div className="caption" data-aos="fade-left" data-aos-duration="1150" data-aos-delay="160">
                  <h3>195 M Ar <span>/ lot</span></h3>
                  <h4><Link to="/contact">Lotissement — Secteur résidentiel</Link></h4>
                  <p>Lots dans un ensemble maîtrisé : harmonie du quartier, espaces verts et règlement d'urbanisme clair. Pour une construction sereine et durable.</p>
                  <div className="room-facilities lands-facilities-wrap">
                    <ul className="lands-facilities-col lands-facilities-col--left list-unstyled">
                      <li><i className="flaticon-home"></i> 1 000 m²</li>
                      <li><i className="flaticon-location-pin"></i> Grande couronne</li>
                      <li><i className="flaticon-shield"></i> Viabilisé</li>
                    </ul>
                    <ul className="lands-facilities-col lands-facilities-col--right list-unstyled">
                      <li><i className="flaticon-car"></i> Voirie lotissement</li>
                      <li><i className="flaticon-hotel"></i> Règlement PLU</li>
                      <li><i className="flaticon-world"></i> Cadre préservé</li>
                    </ul>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    <div className="butn-dark"><Link to="/contact"><span>Détails</span></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a className="btn-primary" href="#">Voir plus<i></i></a>
          </div>
        </div>
      </section>
    </>
  )
}
