import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    // AOS
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 750, once: true, offset: 72, easing: 'ease-out-cubic' })
        window.AOS.refresh()
      }, 500)
    }

    // Compteurs about-stats
    initAboutStatsCount()

    // Legacy scroll
    initLegacyScroll()

    // CEO scroll
    initCeoScroll()

    // Journey carousel
    initJourneyCarousel()
  }, [])

  function initAboutStatsCount() {
    const section = document.querySelector('.about-stats')
    if (!section) return
    const els = section.querySelectorAll('.count[data-count-to]')
    if (!els.length) return
    let ran = false
    function run() {
      if (ran) return; ran = true
      els.forEach(function (el, i) {
        const target = parseInt(el.getAttribute('data-count-to'), 10)
        if (isNaN(target)) return
        if (window.gsap) {
          const state = { n: 0 }
          window.gsap.to(state, { n: target, duration: 1.65, ease: 'power3.out', delay: i * 0.12, onUpdate: function () { el.textContent = String(Math.round(state.n)) } })
          return
        }
        const duration = 1650, delay = i * 120; let start = null
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
      entries.forEach(function (entry) { if (entry.isIntersecting) { run(); io.disconnect() } })
    }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0 })
    io.observe(section)
  }

  function initLegacyScroll() {
    const scroller = document.querySelector('[data-legacy-scroll]')
    const section = document.getElementById('about-legacy')
    if (!scroller || !section) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ticking = false, targetProgress = 0, currentProgress = 0, rafId = 0
    function clamp01(v) { return Math.max(0, Math.min(1, v)) }
    function computeTarget() {
      const rect = scroller.getBoundingClientRect()
      const total = scroller.offsetHeight - window.innerHeight
      targetProgress = total <= 0 ? 0 : clamp01(-rect.top / total)
    }
    function animate() {
      const delta = targetProgress - currentProgress
      currentProgress += delta * 0.08
      if (Math.abs(delta) < 0.0008) currentProgress = targetProgress
      section.style.setProperty('--legacy-progress', currentProgress.toFixed(4))
      section.classList.toggle('about-legacy--cover', currentProgress > 0.42)
      if (Math.abs(targetProgress - currentProgress) > 0.0008) { rafId = window.requestAnimationFrame(animate) } else { rafId = 0 }
    }
    function tick() {
      if (ticking) return; ticking = true
      window.requestAnimationFrame(function () { computeTarget(); if (!rafId) rafId = window.requestAnimationFrame(animate); ticking = false })
    }
    computeTarget()
    section.style.setProperty('--legacy-progress', '0')
    window.addEventListener('scroll', tick, { passive: true })
    window.addEventListener('resize', tick)
    return () => { window.removeEventListener('scroll', tick); window.removeEventListener('resize', tick) }
  }

  function initCeoScroll() {
    const section = document.getElementById('about-ceo')
    if (!section) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ticking = false, targetProgress = 0, currentProgress = 0, rafId = 0
    function clamp01(v) { return Math.max(0, Math.min(1, v)) }
    function updateTarget() {
      const rect = section.getBoundingClientRect()
      const start = window.innerHeight, end = -rect.height * 0.35
      targetProgress = clamp01((start - rect.top) / (start - end))
    }
    function animate() {
      const delta = targetProgress - currentProgress
      currentProgress += delta * 0.07
      if (Math.abs(delta) < 0.0008) currentProgress = targetProgress
      section.style.setProperty('--ceo-progress', currentProgress.toFixed(4))
      if (Math.abs(targetProgress - currentProgress) > 0.0008) { rafId = window.requestAnimationFrame(animate) } else { rafId = 0 }
    }
    function onScroll() {
      if (ticking) return; ticking = true
      window.requestAnimationFrame(function () { updateTarget(); if (!rafId) rafId = window.requestAnimationFrame(animate); ticking = false })
    }
    updateTarget()
    section.style.setProperty('--ceo-progress', '0')
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }

  function initJourneyCarousel() {
    const root = document.querySelector('[data-journey-carousel]')
    if (!root) return
    const items = Array.prototype.slice.call(root.querySelectorAll('.about-journey__item'))
    const viewport = root.querySelector('[data-journey-viewport]')
    const prevBtn = root.querySelector('[data-journey-prev]')
    const nextBtn = root.querySelector('[data-journey-next]')
    if (!items.length || !viewport || !prevBtn || !nextBtn) return
    let activeIndex = -1
    function setActive(index, shouldScroll) {
      if (index < -1) index = -1
      if (index >= items.length) index = items.length - 1
      activeIndex = index
      items.forEach(function (item, i) { item.classList.toggle('is-active', i === activeIndex) })
      if (shouldScroll && activeIndex >= 0) {
        const target = items[activeIndex]
        const left = target.offsetLeft - (viewport.clientWidth - target.clientWidth) / 2
        viewport.scrollTo({ left: Math.max(0, left), behavior: 'smooth' })
      }
    }
    items.forEach(function (item, i) {
      item.addEventListener('mouseenter', function () { setActive(i, false) })
      item.addEventListener('focus', function () { setActive(i, false) })
    })
    function paginate(direction) {
      const step = Math.max(220, Math.round(viewport.clientWidth * 0.82))
      viewport.scrollTo({ left: Math.max(0, viewport.scrollLeft + (direction * step)), behavior: 'smooth' })
      setActive(-1, false)
    }
    prevBtn.addEventListener('click', function () { paginate(-1) })
    nextBtn.addEventListener('click', function () { paginate(1) })
    setActive(-1, false)
  }

  return (
    <>
      {/* Legacy section */}
      <section className="about-legacy" id="about-legacy" aria-label="Legacy Master Immo">
        <div className="about-legacy__scroll" data-legacy-scroll>
          <div className="about-legacy__sticky">
            <article className="about-legacy__copy about-legacy__copy--left">
              <h1>10</h1>
              <h3>years of incredible legacy</h3>
            </article>
            <figure className="about-legacy__media">
              <img src="/img/import/land.jpg" alt="Projet immobilier Master Immo" />
            </figure>
            <article className="about-legacy__copy about-legacy__copy--right">
              <p>De la prospection à la signature, nous simplifions chaque étape. Notre équipe sécurise les démarches et vous aide à concrétiser un projet durable, en toute confiance.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats section-padding">
        <div className="container">
          <div className="row align-items-start about-stats__intro">
            <div className="col-lg-4 col-md-12">
              <h2 className="about-stats__title">Une expertise foncière construite dans la durée</h2>
            </div>
            <div className="col-lg-8 col-md-12">
              <p className="about-stats__lead">Chez Master Immo, nous appliquons des standards élevés sur la qualité des parcelles, la conformité documentaire et l'accompagnement client. Notre objectif est de rendre l'achat de terrain plus clair, plus sûr et plus rentable.</p>
            </div>
          </div>
          <div className="about-stats__grid">
            {[
              { icon: 'ti-map-alt', count: 420, suffix: '', label: 'Terrains vendus et accompagnés', delay: 0 },
              { icon: 'ti-location-pin', count: 12, suffix: ' zones', label: 'Secteurs fonciers couverts', delay: 200 },
              { icon: 'ti-check-box', count: 95, suffix: '%', label: 'Dossiers validés dès le premier audit', delay: 400 },
            ].map((s, i) => (
              <article key={i} className="about-stats__item" data-aos="fade-up" data-aos-duration="750" data-aos-delay={s.delay} data-aos-once="true">
                <span className="about-stats__icon"><i className={s.icon}></i></span>
                <div className="about-stats__content">
                  <h3><span className="count" data-count-to={s.count}>0</span>{s.suffix}</h3>
                  <p>{s.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="about-ceo section-padding" id="about-ceo">
        <div className="about-ceo__pin">
          <div className="container">
            <div className="row about-ceo__row">
              <div className="col-lg-6 col-md-12 about-ceo__quote-col" data-aos="fade-right" data-aos-duration="750">
                <div className="about-ceo__quote">
                  "Notre mission est de rendre l'achat de terrain plus transparent et plus serein, en combinant connaissance du marché, vérification rigoureuse et accompagnement humain."
                </div>
                <p className="about-ceo__signature">— Nomena Randria, CEO</p>
              </div>
              <div className="col-lg-6 col-md-12 about-ceo__media-col">
                <figure className="about-ceo__portrait">
                  <img src="/img/import/professional.png" alt="Portrait professionnel du CEO Master Immo" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="about-journey section-padding" id="about-journey">
        <div className="container">
          <div className="about-journey__head">
            <div>
              <p className="about-journey__eyebrow">Our Journey</p>
              <h2 className="about-journey__title">A journey through the times</h2>
            </div>
          </div>
          <div className="about-journey__carousel" data-journey-carousel>
            <button className="about-journey__arrow about-journey__arrow--prev" type="button" aria-label="Voir la date précédente" data-journey-prev>
              <span aria-hidden="true">&#8592;</span>
            </button>
            <div className="about-journey__viewport" data-journey-viewport>
              <div className="about-journey__track">
                {[
                  { year: '2010', img: 'paysagereel1.png', title: 'Premiers terrains structurés', text: "Lancement des premières opérations de vente accompagnée avec vérification foncière." },
                  { year: '2014', img: 'paysagereel2.png', title: 'Accélération régionale', text: "Ouverture de nouveaux secteurs et standardisation des audits documentaires." },
                  { year: '2018', img: 'land.jpg', title: 'Structuration commerciale', text: "Mise en place d'un parcours client complet de la visite terrain à la signature." },
                  { year: '2021', img: 'paysagereel3.png', title: 'Digitalisation des dossiers', text: "Suivi plus transparent des étapes administratives et amélioration des délais." },
                  { year: '2025', img: 'hero3.webp', title: 'Couverture élargie', text: "Développement d'un portefeuille de terrains résidentiels et patrimoniaux." },
                  { year: '2026', img: 'hero2.webp', title: 'Nouvelle étape de croissance', text: "Consolidation de l'expertise foncière et montée en gamme de l'accompagnement client." },
                ].map((item) => (
                  <article key={item.year} className="about-journey__item" tabIndex="0" data-year={item.year} style={{ '--journey-image': `url(/img/import/${item.img})` }}>
                    <div className="about-journey__overlay"></div>
                    <div className="about-journey__content">
                      <p className="about-journey__year">{item.year}</p>
                      <h3 data-year-active={item.year}>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <button className="about-journey__arrow about-journey__arrow--next" type="button" aria-label="Voir la date suivante" data-journey-next>
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
