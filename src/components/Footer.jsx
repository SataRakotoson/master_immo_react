import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-column footer-about" style={{ textAlign: 'center' }}>
                <img src="/img/import/logo.png" alt="Master Immo" style={{ maxWidth: '10rem', height: 'auto', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                <p className="footer-about-text mt-3">Master Immo développe des projets immobiliers modernes et durables à Madagascar.</p>
                <div className="footer-language" style={{ display: 'inline-block', marginTop: '1rem' }}>
                  <i className="lni ti-world"></i>
                  <select onChange={(e) => { if (e.target.value !== '#') window.location.href = e.target.value }}>
                    <option value="/">Français</option>
                    <option value="#">Malagasy</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-3 offset-md-1">
              <div className="footer-column footer-explore clearfix">
                <h3 className="footer-title">Liens utiles</h3>
                <ul className="footer-explore-list list-unstyled">
                  <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/terrains">Terrains</Link></li>
                  <li><Link to="/a-propos">A propos</Link></li>
                  <li><Link to="/evenements">Événements</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/temoignages">Témoignages</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-column footer-contact">
                <h3 className="footer-title">Contact</h3>
                <p className="footer-contact-text">Antsakaviro Antananarivo<br />Madagascar</p>
                <div className="footer-contact-info">
                  <p className="footer-contact-phone"><span className="flaticon-call"></span> 033 37 018 04</p>
                  <p className="footer-contact-mail">contact@masterimmo.mg</p>
                </div>
                <div className="footer-about-social-list">
                  <a href="#"><i className="ti-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="ti-youtube"></i></a>
                  <a href="#"><i className="ti-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-bottom-inner">
                <p className="footer-bottom-copy-right">© Copyright 2026 by <a href="#">Master Immo</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
