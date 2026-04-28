import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import ScrollProgress from './ScrollProgress'
import WhatsAppFloat from './WhatsAppFloat'
import { usePageScripts } from '../hooks/usePageScripts'

export default function Layout() {
  const { pathname } = useLocation()
  usePageScripts()

  useEffect(() => {
    // scroll to top on route change
    window.scrollTo(0, 0)
    // Update body class based on route
    document.body.className = 'js fixed-header header-at-top'
  }, [pathname])

  return (
    <div className="fixed-header header-at-top">
      <Preloader />
      <ScrollProgress />
      <Header />
      <main>
        <Outlet />
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  )
}
