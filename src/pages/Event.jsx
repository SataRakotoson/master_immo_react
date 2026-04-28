import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Event() {
  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 750, once: true, offset: 80, easing: 'ease-out-cubic' })
        window.AOS.refresh()
      }, 700)
    }
  }, [])

  return (
    <>
      {/* Hero video */}
      <section className="banner-header section-padding valign event-hero">
        <video className="event-hero__video" autoPlay muted loop playsInline preload="metadata">
          <source src="/img/import/video1.mp4" type="video/mp4" />
        </video>
        <div className="event-hero__overlay" aria-hidden="true"></div>
        <div className="container event-hero__content">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90" data-aos="fade-up" data-aos-duration="850" data-aos-once="true">
              <h5>Master Immo Events</h5>
              <h1>Forum Foncier Antananarivo 2026</h1>
              <p className="event-hero__description">Une rencontre exclusive autour des tendances du marché, des opportunités de terrains et des conseils juridiques pour investir sereinement à Madagascar.</p>
              <div className="lands-banner-ctas event-hero__ctas">
                <div className="butn-dark"><a href="#"><span>S'inscrire</span></a></div>
                <div className="butn-light"><Link to="/contact"><span>Nous contacter</span></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Détail */}
      <section className="event-detail section-padding" aria-label="Détail de l'événement">
        <div className="container">
          <div className="event-detail__top">
            <article className="event-detail__intro" data-aos="fade-right" data-aos-duration="650">
              <h2>Forum Foncier Antananarivo 2026</h2>
              <p>Un rendez-vous dédié aux investisseurs, familles et partenaires qui souhaitent comprendre les opportunités foncières actuelles. Pendant cette journée, notre équipe partage des analyses du marché, des conseils pratiques pour sécuriser un projet et des retours concrets de clients ayant déjà concrétisé leur acquisition avec Master Immo. L'objectif est de repartir avec une vision claire, des contacts utiles et un plan d'action réaliste pour investir en toute confiance.</p>
            </article>
            <figure className="event-detail__hero-media" data-aos="fade-left" data-aos-duration="650">
              <img src="/img/import/hero3.webp" alt="Visuel principal de l'événement Master Immo" />
            </figure>
          </div>

          <div className="event-detail__content" data-aos="fade-up" data-aos-duration="650" data-aos-delay="300">
            <div className="event-detail__block">
              <h3>Programme de la journée</h3>
              <p>Des interventions d'experts fonciers, des retours d'expérience clients et une session spéciale sur les bonnes pratiques juridiques pour sécuriser un achat de terrain à Madagascar.</p>
            </div>
            <div className="event-detail__block">
              <h3>Opportunités &amp; networking</h3>
              <p>Rencontrez les équipes Master Immo, échangez avec des investisseurs et découvrez en avant-première nos nouvelles zones de développement ainsi que les offres disponibles en édition limitée.</p>
            </div>
          </div>

          <div className="event-detail__gallery" data-aos="fade-up" data-aos-duration="650" data-aos-delay="600">
            <figure className="event-detail__gallery-item">
              <img src="/img/import/paysage1.webp" alt="Ambiance événementielle Master Immo" />
            </figure>
            <figure className="event-detail__gallery-item">
              <img src="/img/import/paysage2.webp" alt="Participants à un événement immobilier" />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
