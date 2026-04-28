import { useEffect } from 'react'

export default function Blog() {
  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 750, once: true, offset: 80, easing: 'ease-out-cubic' })
        window.AOS.refresh()
      }, 700)
    }
  }, [])

  const articles = [
    { img: 'hero3.webp', date: '2 avril 2026', time: '6 min', title: "Viabiliser avant d'acheter : ce qu'il faut vérifier sur une parcelle", excerpt: "Réseaux, accès, documents : les points à clarifier avant de vous engager sur un terrain à bâtir, pour éviter les mauvaises surprises.", delay: 0 },
    { img: 'slider/4.jpg', date: '28 mars 2026', time: '5 min', title: "Titre foncier et bornage : pourquoi ça compte pour votre projet maison", excerpt: "Comprendre les bases du dossier et les questions à poser en amont, avec ou sans architecte, pour avancer sereinement.", delay: 200 },
    { img: 'slider/2.jpg', date: '15 mars 2026', time: '4 min', title: "Lotissement ou parcelle seule : comment choisir selon votre budget", excerpt: "Cadre réglementé, voirie, charges et liberté d'implantation : les critères pratiques pour comparer deux types d'offres.", delay: 400 },
  ]

  return (
    <>
      {/* Header Banner */}
      <div className="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="6" data-background="/img/import/hero3.webp">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90" data-aos="fade-up" data-aos-duration="850" data-aos-once="true">
              <h5>Master Immo</h5>
              <h1>Blogs</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Articles featured */}
      <section className="blog-featured-section section-padding">
        <div className="container">
          <p className="blog-featured-intro" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            Actualités marché, conseils d'achat et projets de terrains : trois articles à la une. D'autres contenus arrivent prochainement.
          </p>
          <div className="row blog-featured-wrap">
            {articles.map((art, i) => (
              <div key={i} className="col-lg-4 col-md-6 blog-featured-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay={art.delay} data-aos-once="true">
                <article className="blog-featured-card__inner">
                  <a href="#" className="blog-featured-card__media d-block">
                    <img src={`/img/import/${art.img}`} alt={art.title} />
                  </a>
                  <div className="blog-featured-card__body">
                    <p className="blog-featured-card__meta">{art.date} <span>·</span> Lecture {art.time}</p>
                    <h2 className="blog-featured-card__title"><a href="#">{art.title}</a></h2>
                    <p className="blog-featured-card__excerpt">{art.excerpt}</p>
                    <a href="#" className="blog-featured-card__more">Lire la suite <i className="ti-arrow-right"></i></a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="blog-newsletter-cta" aria-labelledby="blog-newsletter-heading">
        <div className="container blog-newsletter-cta__container">
          <div className="row align-items-center blog-newsletter-cta__row">
            <div className="col-lg-6 blog-newsletter-cta__col-text" data-aos="fade-right" data-aos-duration="750" data-aos-once="true">
              <p className="blog-newsletter-cta__eyebrow">Vous voulez les actus Master Immo&nbsp;?</p>
              <h2 id="blog-newsletter-heading" className="blog-newsletter-cta__title">Inscrivez-vous à la liste et recevez les nouvelles directement.</h2>
              <form className="blog-newsletter-cta__form" action="#" method="post" noValidate>
                <label className="blog-newsletter-cta__sr-only" htmlFor="blog-newsletter-email">Votre adresse e-mail</label>
                <input type="email" id="blog-newsletter-email" name="email" className="blog-newsletter-cta__input" placeholder="Votre e-mail *" required autoComplete="email" inputMode="email" />
                <button type="submit" className="blog-newsletter-cta__submit">S'inscrire</button>
              </form>
            </div>
            <div className="col-lg-6 blog-newsletter-cta__col-visual mt-5 mt-lg-0" data-aos="fade-left" data-aos-duration="750" data-aos-delay="100" data-aos-once="true">
              <img src="/img/import/hero1.webp" alt="Résidence moderne et végétation" className="blog-newsletter-cta__img" width="800" height="520" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
