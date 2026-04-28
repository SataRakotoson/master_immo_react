import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  function applyBgImages() {
    if (!window.$) return
    const pageSection = window.$('.bg-img, section')
    pageSection.each(function () {
      const bg = window.$(this).attr('data-background')
      if (bg) window.$(this).css('background-image', 'url(' + bg + ')')
    })
  }

  function initKeyNumbersCount() {
    const section = document.querySelector('.key-numbers-section')
    if (!section) return
    const els = section.querySelectorAll('.key-numbers-value[data-count-to]')
    if (!els.length) return
    let ran = false
    function run() {
      if (ran) return
      ran = true
      els.forEach(function (el, i) {
        const target = parseInt(el.getAttribute('data-count-to'), 10)
        if (isNaN(target)) return
        if (window.gsap) {
          const state = { n: 0 }
          window.gsap.to(state, {
            n: target, duration: 1.65, ease: 'power3.out', delay: i * 0.12,
            onUpdate: function () { el.textContent = String(Math.round(state.n)) }
          })
          return
        }
        const duration = 1650, delay = i * 120
        let start = null
        setTimeout(function () {
          function step(ts) {
            if (!start) start = ts
            const progress = Math.min(1, (ts - start) / duration)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = String(Math.round(target * eased))
            if (progress < 1) window.requestAnimationFrame(step)
          }
          window.requestAnimationFrame(step)
        }, delay)
      })
    }
    if (!('IntersectionObserver' in window)) { run(); return }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { run(); io.disconnect() }
      })
    }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0 })
    io.observe(section)
  }

  function initArtDetailAnimation() {
    if (!window.gsap || !window.ScrollTrigger) return
    window.gsap.registerPlugin(window.ScrollTrigger)
    window.gsap.to('.art-anim-sec', {
      scale: 1, borderRadius: 0, ease: 'power1.out',
      scrollTrigger: {
        trigger: '.art-of-detail-sec', start: 'top 50%', end: 'top 0%', scrub: 1
      }
    })
  }

  function initLatestLaunchScrollExpand() {
    if (!window.gsap || !window.ScrollTrigger) return
    window.gsap.registerPlugin(window.ScrollTrigger)
    const el = document.querySelector('.latest-launch-slider')
    if (!el) return
    let startScale = 0.7, endScale = 1, started = false

    function recalcEndScale() {
      let currentScale = window.gsap.getProperty(el, 'scale')
      if (!currentScale || currentScale === 0) currentScale = startScale
      window.gsap.set(el, { scale: 1, x: 0, y: 0 })
      const rect = el.getBoundingClientRect()
      if (rect.width && rect.height) {
        endScale = Math.max(window.innerWidth / rect.width, window.innerHeight / rect.height)
      }
      window.gsap.set(el, { scale: currentScale, x: 0, y: 0 })
    }

    window.gsap.set(el, { transformOrigin: 'center center', willChange: 'transform' })
    window.ScrollTrigger.create({
      trigger: el, start: 'top bottom', end: '+=500', scrub: true, invalidateOnRefresh: true,
      onRefresh: () => { started = false },
      onEnter: () => {
        recalcEndScale(); started = true
        window.gsap.set(el, { scale: startScale, x: 0, y: 0, zIndex: 50 })
      },
      onUpdate: (self) => {
        if (!started) { recalcEndScale(); started = true; window.gsap.set(el, { scale: startScale, x: 0, y: 0, zIndex: 50 }) }
        const p = self.progress
        const scale = startScale + (endScale - startScale) * p
        window.gsap.set(el, { scale, x: 0, y: 0, zIndex: 50 })
      },
      onLeave: () => window.gsap.set(el, { scale: endScale, x: 0, y: 0, zIndex: 50 }),
      onLeaveBack: () => { started = false; window.gsap.set(el, { scale: startScale, x: 0, y: 0, zIndex: '' }) }
    })
  }

  useEffect(() => {
    // Key numbers counter
    if (window.__keyNumbersCountInit) {
      window.__keyNumbersCountInit = false
    }
    initKeyNumbersCount()

    // Art detail scroll animation
    if (window.__artDetailAnimInit) {
      window.__artDetailAnimInit = false
    }
    initArtDetailAnimation()

    // Latest launch scroll expand
    if (window.__latestLaunchScrollExpandInit) {
      window.__latestLaunchScrollExpandInit = false
    }
    initLatestLaunchScrollExpand()

    // AOS init
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 2400, easing: 'ease', once: false })
        window.AOS.refresh()
      }, 300)
    }

    // bg-img backgrounds
    applyBgImages()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="home-banner video-img-div">
        <img className="impression-banner no-lazy only-desk homepage-banner-desk"
          src="/img/import/hero2.webp" alt="La résidence Havre Vert"
          loading="eager" fetchPriority="high" style={{ visibility: 'visible', display: 'block' }} />
        <img className="impression-banner no-lazy only-mob"
          src="/img/import/hero2.webp" alt="La résidence Havre Vert"
          loading="eager" fetchPriority="high" style={{ visibility: 'visible', display: 'block' }} />
        <div className="explore-more-arrow">
          <h2 className="homepage-hero-banner-heading" style={{ visibility: 'visible' }}>La résidence Havre Vert</h2>
          <p className="homepage-hero-banner-subheading" style={{ visibility: 'visible' }}>Tamatave</p>
          <a className="homepage-hero-banner-cta" style={{ visibility: 'visible' }} href="#" data-scroll-nav="1">Découvrir</a>
        </div>
      </section>

      {/* Art of Detail */}
      <div className="dummy-height"></div>
      <section className="art-of-detail-sec">
        <div className="art-anim-sec" style={{ backgroundImage: 'url(/img/import/image1.png)' }}>
          <div className="container">
            <div className="row h-100vh d-flex align-items-end align-items-lg-center">
              <div className="col-md-12 col-lg-6 artcontent-sec">
                <h2>Leader immobilier à Madagascar</h2>
                <p>Master Immo est une entreprise immobilière spécialisée dans la conception, le développement et la commercialisation de projets résidentiels, commerciaux et d'investissement à Madagascar.</p>
                <div className="button-main justify-content-center justify-content-lg-start">
                  <a href="#" className="button-1" data-scroll-nav="1">Découvrir<i></i></a>
                </div>
              </div>
              <div className="only-mob col-sm-12 artcontent-img">
                <img loading="lazy" className="img-100" alt="Master Immo" src="/img/import/image1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="key-numbers-section bg-white" aria-label="Chiffres clés" style={{ position: 'relative', zIndex: 3, backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-4 mb-5 mb-md-0 animate-box" data-animate-effect="fadeInUp">
              <div className="key-numbers-item">
                <span className="count key-numbers-value" data-count-to="34">0</span>
                <p className="key-numbers-label">Sites promus</p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0 animate-box" data-animate-effect="fadeInUp">
              <div className="key-numbers-item">
                <span className="count key-numbers-value" data-count-to="2997">0</span>
                <p className="key-numbers-label">Clients qui ont leur héritage</p>
              </div>
            </div>
            <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
              <div className="key-numbers-item">
                <span className="count key-numbers-value" data-count-to="2542">0</span>
                <p className="key-numbers-label">Titres délivrés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations Foncières */}
      <section className="rooms1 section-padding bg-white" data-scroll-index="1" style={{ position: 'relative', zIndex: 3, backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section">
                <h2 className="lines-on-sides heading-2">Nos Réalisations Foncières</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { img: 'portrait4.webp', zone: 'Ambatobe', title: 'Le Paradis vert', effect: 'fadeInUp', soldOut: false, availabilityLabel: '9 lots disponibles' },
              { img: 'portrait2.webp', zone: 'Ambohidratrimo', title: 'Résidence Belle Vue', effect: 'fadeInUp', soldOut: true },
              { img: 'portrait3.webp', zone: 'Betsizaraina', title: 'Résidence Betsizara', effect: 'fadeInUp', soldOut: true },
            ].map((item, i) => (
              <div key={i} className="col-md-4 animate-box" data-animate-effect={item.effect}>
                <div className="item">
                  <div className="position-re o-hidden"><img src={`/img/import/${item.img}`} alt="" /></div>
                  {item.soldOut
                    ? <span className="category"><Link to="/terrains">Sold out</Link></span>
                    : <span className="category category--available">{item.availabilityLabel}</span>
                  }
                  <div className="con">
                    <h6><a href="#">{item.zone}</a></h6>
                    <h5><a href="#">{item.title}</a></h5>
                    <div className="line"></div>
                    <div className="row facilities">
                      <div className="col col-md-7">
                        <ul>
                          <li><i className="flaticon-home" title="300 – 600 m²"></i></li>
                          <li><i className="flaticon-location-pin" title={item.zone}></i></li>
                          <li><i className="flaticon-shield" title="Eau & Électricité"></i></li>
                          <li><i className="flaticon-car" title="Accès goudronné"></i></li>
                        </ul>
                      </div>
                      <div className="col col-md-5 text-end">
                        <div className="permalink"><a href="#">Details <i className="ti-arrow-right"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {[
              { img: 'paysage1.webp', zone: 'Ivandry', title: "Résidence Les Jardins d'Émeraude", col: 'col-md-6', effect: 'fadeInLeft', soldOut: true },
              { img: 'paysage2.webp', zone: 'Alasora', title: 'Terrain Alasora', col: 'col-md-6', effect: 'fadeInRight', soldOut: false, availabilityLabel: '5 lots disponibles' },
            ].map((item, i) => (
              <div key={i} className={`${item.col} animate-box`} data-animate-effect={item.effect}>
                <div className="item">
                  <div className="position-re o-hidden"><img src={`/img/import/${item.img}`} alt="" /></div>
                  {item.soldOut
                    ? <span className="category"><Link to="/terrains">Sold out</Link></span>
                    : <span className="category category--available">{item.availabilityLabel}</span>
                  }
                  <div className="con">
                    <h6><a href="#">{item.zone}</a></h6>
                    <h5><a href="#">{item.title}</a></h5>
                    <div className="line"></div>
                    <div className="row facilities">
                      <div className="col col-md-7">
                        <ul>
                          <li><i className="flaticon-home" title="300 – 600 m²"></i></li>
                          <li><i className="flaticon-location-pin"></i></li>
                          <li><i className="flaticon-shield" title="Eau & Électricité"></i></li>
                          <li><i className="flaticon-car" title="Accès goudronné"></i></li>
                        </ul>
                      </div>
                      <div className="col col-md-5 text-end">
                        <div className="permalink"><a href="#">Details <i className="ti-arrow-right"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Master Immo */}
      <section className="facilties section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Notre expertise</div>
              <div className="section-title">Pourquoi choisir Master Immo ?</div>
            </div>
          </div>
          <div className="row">
            {[
              { icon: 'flaticon-location-pin', title: 'Emplacements stratégiques', text: 'Nous développons des projets situés dans des zones à fort potentiel de valorisation et de croissance urbaine.' },
              { icon: 'flaticon-shield', title: 'Sécurité foncière', text: "Tous nos terrains font l'objet d'une vérification rigoureuse garantissant des transactions fiables et sécurisées." },
              { icon: 'flaticon-hotel', title: 'Urbanisme maîtrisé', text: 'Nos projets sont conçus selon une vision moderne intégrant accessibilité, viabilisation et aménagement durable.' },
              { icon: 'ti-bar-chart', title: 'Investissement rentable', text: 'Nous proposons des opportunités immobilières offrant un potentiel réel de valorisation à moyen et long terme.' },
              { icon: 'flaticon-group', title: 'Expertise locale', text: 'Notre connaissance du marché malgache permet de développer des projets adaptés aux réalités économiques et sociales.' },
              { icon: 'flaticon-rating', title: 'Qualité & confiance', text: "Master Immo s'engage à offrir des projets fiables, modernes et répondant aux attentes de ses clients et partenaires." },
            ].map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="single-facility animate-box" data-animate-effect="fadeInUp">
                  <span className={f.icon} aria-hidden="true"></span>
                  <h5>{f.title}</h5>
                  <p>{f.text}</p>
                  <div className="facility-shape"><span className={f.icon} aria-hidden="true"></span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="testimonials">
        <div className="background bg-img bg-fixed section-padding pb-0 testimonials-bg-dark" data-background="/img/import/paysage1.webp" data-overlay-dark="3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="testimonials-box">
                  <div className="head-box">
                    <h6>Testimoniaux</h6>
                    <h4>Ils nous font confiance</h4>
                    <div className="line"></div>
                  </div>
                  <div className="testimonials-list">
                    {[
                      { img: 'client1.png', name: 'Mme Fanja', role: 'Propriétaire', dir: 'fade-right', delay: 80, text: "Grâce à Master Immo, j'ai pu acquérir un terrain parfaitement situé dans une zone en plein développement. L'équipe m'a accompagné avec professionnalisme et transparence à chaque étape. Aujourd'hui, je suis pleinement satisfait de mon investissement." },
                      { img: 'client2.png', name: 'Mme Tahiry', role: 'Cliente', dir: 'fade-left', delay: 140, reverse: true, text: "J'ai choisi Master Immo pour la qualité de leurs projets et leur sérieux. Les démarches ont été simples et sécurisées, et j'ai été conseillé de manière personnalisée. C'est un promoteur de confiance que je recommande sans hésiter." },
                      { img: 'client3.png', name: 'Mme Tatianah', role: 'Entrepreneure', dir: 'fade-right', delay: 200, text: "Master Immo se distingue par son expertise du marché immobilier malgache et la pertinence de ses emplacements. Mon terrain a rapidement pris de la valeur, ce qui confirme que j'ai fait le bon choix." },
                    ].map((t, i) => (
                      <article key={i} className={`testimonial-row${t.reverse ? ' testimonial-row--reverse' : ''}`} data-aos={t.dir} data-aos-duration="800" data-aos-delay={t.delay} data-aos-once="true">
                        <div className="testimonial-row__avatar">
                          <img src={`/img/import/${t.img}`} alt={`Photo de ${t.name}`} />
                        </div>
                        <div className="testimonial-row__content">
                          <p>{t.text}</p>
                          <div className="testimonial-row__meta">
                            <h6>{t.name}</h6>
                            <span>{t.role}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rejoignez-nous */}
      <section className="home-get-touch section-padding bg-white" style={{ position: 'relative', zIndex: 3, backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7" data-aos="fade-right" data-aos-duration="900" data-aos-delay="80" data-aos-once="true">
              <div className="home-get-touch__left">
                <h3 className="home-get-touch__title">Rejoignez-nous</h3>
                <p className="home-get-touch__lead">Rejoignez la liste privilégiée Master Immo et accédez en priorité aux terrains les plus recherchés.</p>
                <form className="home-get-touch__form" action="mail.php" method="post">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input id="home-touch-lastname" name="lastname" type="text" placeholder="Nom *" required />
                    </div>
                    <div className="col-md-6 form-group">
                      <input id="home-touch-firstname" name="firstname" type="text" placeholder="Prénom *" required />
                    </div>
                    <div className="col-md-12 form-group">
                      <input id="home-touch-phone" name="phone" type="tel" placeholder="Téléphone *" required />
                    </div>
                    <div className="col-md-12 form-group">
                      <input id="home-touch-email" name="email" type="email" placeholder="Email *" required />
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="butn-dark2"><span>S'inscrire</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left" data-aos-duration="900" data-aos-delay="140" data-aos-once="true">
              <div className="home-get-touch__card home-get-touch__card--newsletter bg-img" data-background="/img/import/shake2.jpg">
                <h3 className="home-get-touch__title">Our newsletter</h3>
                <p className="home-get-touch__lead">Recevez nos meilleures opportunités foncières, nos conseils d'achat et les nouveautés Master Immo directement par email.</p>
                <form className="home-get-touch__form" action="#" method="post">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input id="home-newsletter-email" name="newsletter_email" type="email" placeholder="Votre email" required />
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="butn-dark2"><span>Confirmer</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
