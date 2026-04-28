import { useEffect } from 'react'

export default function Contact() {
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
      {/* Header Banner */}
      <div className="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="6" data-background="/img/import/why1.png">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90" data-aos="fade-up" data-aos-duration="850" data-aos-once="true">
              <h5>Get in touch</h5>
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row mb-90">
            <div className="col-md-6 mb-60" data-aos="fade-right" data-aos-duration="750" data-aos-delay="400" data-aos-once="true">
              <h3>Master Immo</h3>
              <p>Notre équipe vous accompagne dans votre projet immobilier. Contactez-nous pour bénéficier d'un conseil personnalisé.</p>
              <div className="contact-detail-cards">
                <div className="contact-detail-card reservations">
                  <div className="icon"><span className="flaticon-call"></span></div>
                  <div className="text">
                    <p className="text-start">Téléphone</p>
                    <a href="tel:+261343701804">+261 34 37 018 04</a>
                  </div>
                </div>
                <div className="contact-detail-card reservations">
                  <div className="icon"><span className="flaticon-envelope"></span></div>
                  <div className="text">
                    <p className="text-start">Email Info</p>
                    <a href="mailto:contact@masterimmo.mg">contact@masterimmo.mg</a>
                  </div>
                </div>
                <div className="contact-detail-card reservations">
                  <div className="icon"><span className="flaticon-location-pin"></span></div>
                  <div className="text">
                    <p className="text-start">Adresse</p>
                    Antananarivo, Madagascar
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-30 offset-md-1" data-aos="fade-left" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">
              <h3>Get in touch</h3>
              <form method="post" className="contact__form" action="mail.php">
                <div className="row">
                  <div className="col-12">
                    <div className="alert alert-success contact__msg" style={{ display: 'none' }} role="alert">Your message was sent successfully.</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input name="name" type="text" placeholder="Your Name *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="email" type="email" placeholder="Your Email *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="phone" type="text" placeholder="Your Number *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="subject" type="text" placeholder="Subject *" required />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea name="message" id="message" cols="30" rows="4" placeholder="Message *" required></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="butn-dark2"><span>Send Message</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* App promo Facebook */}
        <div className="contact-app-promo-surface">
          <div className="container">
            <div className="row contact-app-promo-row align-items-center">
              <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0 text-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
                <div className="contact-app-promo-visual">
                  <img src="/img/import/phone1.png" alt="Application Master Immo sur smartphone" width="520" height="620" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
                <div className="contact-app-promo-copy text-start">
                  <p className="contact-app-promo-eyebrow">Page Facebook officielle</p>
                  <h2 className="contact-app-promo-title">
                    <span className="contact-app-promo-title-line">Toute l'actualité Master Immo,</span>
                    <span className="contact-app-promo-title-line contact-app-promo-title-line--accent">sur Facebook</span>
                  </h2>
                  <p className="contact-app-promo-lead">Retrouvez notre page Facebook pour découvrir nos terrains, suivre nos événements, voir nos nouvelles offres et rester connecté avec notre communauté.</p>
                  <ul className="contact-app-promo-grid list-unstyled">
                    <li className="contact-app-promo-item">
                      <span className="contact-app-promo-item-icon" aria-hidden="true"><i className="ti-layers"></i></span>
                      <span className="contact-app-promo-item-text">Nouveaux terrains et opportunités publiés régulièrement</span>
                    </li>
                    <li className="contact-app-promo-item">
                      <span className="contact-app-promo-item-icon" aria-hidden="true"><i className="ti-headphone"></i></span>
                      <span className="contact-app-promo-item-text">Échanges rapides avec notre équipe via Messenger</span>
                    </li>
                    <li className="contact-app-promo-item">
                      <span className="contact-app-promo-item-icon" aria-hidden="true"><i className="ti-announcement"></i></span>
                      <span className="contact-app-promo-item-text">Actualités, annonces et informations en temps réel</span>
                    </li>
                    <li className="contact-app-promo-item">
                      <span className="contact-app-promo-item-icon" aria-hidden="true"><i className="ti-bell"></i></span>
                      <span className="contact-app-promo-item-text">Rappels d'événements et publications importantes</span>
                    </li>
                  </ul>
                  <div className="button-main mt-30">
                    <a href="https://www.facebook.com/masterimmo1" className="button-1" target="_blank" rel="noopener noreferrer">
                      Page Facebook <i></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="container">
          <div className="row">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="320" data-aos-once="true">
              <div className="section-subtitle">Localisation</div>
              <h3>Emplacement sur la carte</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 map" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.7164082780682!2d47.53407567481758!3d-18.909715507349347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07df9c3196275%3A0xfb2bc801bb9a3c5d!2sMASTER%20IMMO!5e1!3m2!1sfr!2smg!4v1775392812304!5m2!1sfr!2smg"
                width="100%" height="600" style={{ border: 0 }} allowFullScreen loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
