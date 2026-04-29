export default function VisitFloat({ onClick }) {
  return (
    <button
      type="button"
      className="visit-float"
      onClick={onClick}
      aria-label="Ouvrir la réservation de visite"
    >
      <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
    </button>
  )
}
