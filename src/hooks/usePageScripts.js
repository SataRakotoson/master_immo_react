import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook global: réinitialise après chaque navigation les comportements
 * qui dépendent du DOM (bg-img, AOS, header scroll, progress bar).
 */
export function usePageScripts() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 1. Appliquer les fonds d'images data-background (custom.js ne tourne qu'une fois)
    if (window.$) {
      window.$('.bg-img, [data-background]').each(function () {
        const bg = window.$(this).attr('data-background')
        if (bg) window.$(this).css('background-image', 'url(' + bg + ')')
      })
    }

    // 2. Header au top
    const threshold = 48
    function syncHeaderTop() {
      const y = window.scrollY || document.documentElement.scrollTop
      document.body.classList.toggle('header-at-top', y <= threshold)
    }
    syncHeaderTop()
    window.addEventListener('scroll', syncHeaderTop, { passive: true })

    // 3. AOS
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({ duration: 2400, easing: 'ease', once: false })
        window.AOS.refresh()
      }, 150)
    }

    // 4. ScrollTrigger refresh
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh()
    }

    // 5. Progress bar scroll (re-init seulement si custom.js n'a pas encore tourné)
    const progressPath = document.querySelector('.progress-wrap path')
    if (progressPath && window.$ && !progressPath.style.strokeDashoffset) {
      try {
        const pathLength = progressPath.getTotalLength()
        progressPath.style.transition = 'none'
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
        progressPath.style.strokeDashoffset = pathLength
        progressPath.getBoundingClientRect()
        progressPath.style.transition = 'stroke-dashoffset 10ms linear'
        function updateProgress() {
          const scroll = window.$(window).scrollTop()
          const height = window.$(document).height() - window.$(window).height()
          const progress = pathLength - (scroll * pathLength / height)
          progressPath.style.strokeDashoffset = progress
        }
        updateProgress()
        window.$(window).off('scroll.progress').on('scroll.progress', updateProgress)
      } catch (e) { /* ignore */ }
    }

    return () => {
      window.removeEventListener('scroll', syncHeaderTop)
    }
  }, [pathname])
}
