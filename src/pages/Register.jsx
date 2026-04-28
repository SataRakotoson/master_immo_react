import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="register-shell">
      <main className="register-panel">
        <div className="register-card">
          <div className="register-card__media">
            <Link to="/" className="register-card__back"><span aria-hidden="true">←</span> Accueil</Link>
            <div className="register-card__media-copy">
              <p className="register-card__tag">Nouveau compte</p>
              <h1 className="register-card__media-title">Rejoignez Master Immo en quelques étapes.</h1>
              <p className="register-card__media-text">Créez votre espace personnel pour suivre vos terrains, alertes et demandes en temps réel.</p>
            </div>
          </div>
          <div className="register-card__body">
            <Link to="/" className="register-card__logo">
              <img src="/img/import/logo-color.png" width="240" height="90" alt="Master Immo" />
            </Link>
            <h2 className="register-card__heading">Inscription</h2>
            <p className="register-card__sub">Complétez les informations ci-dessous.</p>
            <form action="#" method="post" noValidate>
              <div className="register-grid">
                <div className="register-field">
                  <label htmlFor="register-lastname">Nom</label>
                  <input type="text" id="register-lastname" name="lastname" autoComplete="family-name" required placeholder="Votre nom" />
                </div>
                <div className="register-field">
                  <label htmlFor="register-firstname">Prénom</label>
                  <input type="text" id="register-firstname" name="firstname" autoComplete="given-name" required placeholder="Votre prénom" />
                </div>
              </div>
              <div className="register-field">
                <label htmlFor="register-email">E-mail</label>
                <input type="email" id="register-email" name="email" autoComplete="email" required placeholder="vous@exemple.com" />
              </div>
              <div className="register-grid">
                <div className="register-field">
                  <label htmlFor="register-password">Mot de passe</label>
                  <input type="password" id="register-password" name="password" autoComplete="new-password" required placeholder="••••••••" />
                </div>
                <div className="register-field">
                  <label htmlFor="register-password-confirm">Confirmation mot de passe</label>
                  <input type="password" id="register-password-confirm" name="password_confirmation" autoComplete="new-password" required placeholder="••••••••" />
                </div>
              </div>
              <div className="butn-dark register-butn-dark"><button type="submit"><span>S'inscrire</span></button></div>
            </form>
            <p className="register-card__foot">
              Déjà inscrit&nbsp;? <Link to="/connexion">Se connecter</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
