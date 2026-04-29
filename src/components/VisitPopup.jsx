export default function VisitPopup({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="lands-visit-popup" id="lands-visit-popup" role="dialog" aria-modal="true" aria-labelledby="lands-visit-popup-title">
      <div className="lands-visit-popup__panel">
        <button className="lands-visit-popup__close" type="button" aria-label="Fermer la fenêtre" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="lands-visit-popup__media">
          <img src="/img/import/shake.jpg" alt="Terrain Master Immo" />
          <div className="lands-visit-popup__media-copy">
            <p className="lands-visit-popup__media-kicker">Offre découverte</p>
            <p className="lands-visit-popup__media-text">Réservez votre visite gratuite et profitez d'un accompagnement personnalisé sur place.</p>
          </div>
        </div>
        <div className="lands-visit-popup__form-wrap">
          <h3 className="lands-visit-popup__title" id="lands-visit-popup-title">Réservez votre visite gratuite</h3>
          <form className="lands-visit-popup__form" action="#" method="post">
            <div className="register-grid">
              <div className="register-field">
                <label htmlFor="visit-nom">Nom</label>
                <input id="visit-nom" name="nom" type="text" autoComplete="family-name" />
              </div>
              <div className="register-field">
                <label htmlFor="visit-prenom">Prénom</label>
                <input id="visit-prenom" name="prenom" type="text" autoComplete="given-name" />
              </div>
            </div>
            <div className="register-field">
              <label htmlFor="visit-phone">Téléphone</label>
              <input id="visit-phone" name="telephone" type="tel" autoComplete="tel" />
            </div>
            <div className="register-field">
              <label htmlFor="visit-email">Email</label>
              <input id="visit-email" name="email" type="email" autoComplete="email" />
            </div>
            <div className="butn-dark register-butn-dark">
              <button className="lands-visit-popup__submit" type="submit"><span>Confirmer</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
