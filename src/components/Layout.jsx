import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import WhatsAppFloat from './WhatsAppFloat'
import VisitFloat from './VisitFloat'
import VisitPopup from './VisitPopup'
import { usePageScripts } from '../hooks/usePageScripts'

export default function Layout() {
  const { pathname } = useLocation()
  const [isVisitPopupOpen, setIsVisitPopupOpen] = useState(false)
  usePageScripts()

  useEffect(() => {
    // scroll to top on route change
    window.scrollTo(0, 0)
    // Update body class based on route
    document.body.className = 'js fixed-header header-at-top'
  }, [pathname])

  return (
    <div className="fixed-header">
      <Preloader />
      <Header />
      <main>
        <Outlet />
      </main>
      <VisitPopup isOpen={isVisitPopupOpen} onClose={() => setIsVisitPopupOpen(false)} />
      <VisitFloat onClick={() => setIsVisitPopupOpen(true)} />
      <WhatsAppFloat />
      <Footer />
    </div>
  )
}
