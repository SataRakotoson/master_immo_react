import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <div className="signin-shell">
      <main className="signin-panel">
        <div className="signin-card">
          <div className="signin-card__media">
            <Link to="/" className="signin-card__back"><span aria-hidden="true">←</span> Accueil</Link>
            <div className="signin-card__media-copy">
              <p className="signin-card__tag">Espace client</p>
              <h1 className="signin-card__media-title">Vos terrains et projets, au même endroit.</h1>
              <p className="signin-card__media-text">Accédez à vos favoris, alertes et documents sécurisés après connexion.</p>
            </div>
          </div>
          <div className="signin-card__body">
            <Link to="/" className="signin-card__logo">
              <img src="/img/import/logo-color.png" width="240" height="90" alt="Master Immo" />
            </Link>
            <h2 className="signin-card__heading">Connexion</h2>
            <p className="signin-card__sub">Entrez vos identifiants pour continuer.</p>
            <form action="#" method="post" noValidate>
              <div className="signin-field">
                <label htmlFor="signin-email">E-mail</label>
                <input type="email" id="signin-email" name="email" autoComplete="email" required placeholder="vous@exemple.com" />
              </div>
              <div className="signin-field">
                <label htmlFor="signin-password">Mot de passe</label>
                <input type="password" id="signin-password" name="password" autoComplete="current-password" required placeholder="••••••••" />
              </div>
              <div className="signin-row">
                <label className="signin-check">
                  <input type="checkbox" name="remember" value="1" />
                  Se souvenir de moi
                </label>
                <Link to="/mot-de-passe-oublie">Mot de passe oublié&nbsp;?</Link>
              </div>
              <div className="butn-dark"><button type="submit"><span>Se connecter</span></button></div>
            </form>
            <p className="signin-card__foot">
              Pas encore de compte&nbsp;? <Link to="/inscription">Inscrivez-vous</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
