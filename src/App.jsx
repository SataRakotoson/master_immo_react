import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Lands from './pages/Lands'
import Land from './pages/Land'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Event from './pages/Event'
import Faq from './pages/Faq'
import Testimonials from './pages/Testimonials'
import Signin from './pages/Signin'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import EspaceClientDashboard from './pages/EspaceClientDashboard'
import MesTerrains from './pages/MesTerrains'
import EspaceFournisseurDashboard from './pages/EspaceFournisseurDashboard'
import DepotTerrain from './pages/DepotTerrain'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages sans header/footer (auth) */}
        <Route path="/connexion" element={<Signin />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />

        {/* Pages de gestion sans header/footer public */}
        <Route path="/espace-client" element={<EspaceClientDashboard />} />
        <Route path="/espace-client/mes-terrains" element={<MesTerrains />} />
        <Route path="/espace-fournisseur" element={<EspaceFournisseurDashboard />} />
        <Route path="/espace-fournisseur/depot-terrain" element={<DepotTerrain />} />

        {/* Pages avec layout (header + footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/terrains" element={<Lands />} />
          <Route path="/terrains/:id" element={<Land />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/evenements" element={<Event />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/temoignages" element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
