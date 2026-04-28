import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div className="forgot-shell">
      <main className="forgot-panel">
        <div className="forgot-card">
          <div className="forgot-card__body">
            <Link to="/" className="forgot-card__back forgot-card__back--inline"><span aria-hidden="true">←</span> Accueil</Link>
            <Link to="/" className="forgot-card__logo">
              <img src="/img/import/logo-color.png" width="240" height="90" alt="Master Immo" />
            </Link>
            <h2 className="forgot-card__heading">Mot de passe oublié</h2>
            <p className="forgot-card__sub">Indiquez l'adresse e-mail associée à votre compte.</p>
            <form action="#" method="post" noValidate>
              <div className="forgot-field">
                <label htmlFor="forgot-email">E-mail</label>
                <input type="email" id="forgot-email" name="email" autoComplete="email" required placeholder="vous@exemple.com" />
              </div>
              <p className="forgot-card__note">Le lien expire après quelques minutes pour des raisons de sécurité.</p>
              <div className="butn-dark forgot-butn-dark"><button type="submit"><span>Envoyer le lien</span></button></div>
            </form>
            <p className="forgot-card__foot">
              Vous avez retrouvé votre mot de passe&nbsp;? <Link to="/connexion">Retour à la connexion</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
