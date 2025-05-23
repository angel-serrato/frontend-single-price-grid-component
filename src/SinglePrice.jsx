import './SinglePrice.css'

function SinglePrice() {
  return (
    <div className="subscription-card">
      <div className="subscription-card__header">
        <h1 className="subscription-card__title">Join our community</h1>
        <p className="subscription-card__guarantee">
          30-day, hassle-free money back guarantee
        </p>
        <p className="subscription-card__description">
          Gain access to our full library of tutorials along with expert code reviews. <br />
          Perfect for any developers who are serious about honing their skills.
        </p>
      </div>

      <div className="subscription-card__body">
        <div className="subscription-card__price-section">
          <h2 className="subscription-card__price-title">Monthly Subscription</h2>
          <p className="subscription-card__price">$29 per month</p>
          <p className="subscription-card__note">Full access for less than $1 a day</p>
          <button className="subscription-card__button">Sign Up</button>
        </div>
      </div>

      <div className="subscription-card__features">
        <h3 className="subscription-card__features-title">Why Us</h3>
        <ul className="subscription-card__features-list">
          <li className="subscription-card__feature">Tutorials by industry experts</li>
          <li className="subscription-card__feature">Peer & expert code review</li>
          <li className="subscription-card__feature">Coding exercises</li>
          <li className="subscription-card__feature">Access to our GitHub repos</li>
          <li className="subscription-card__feature">Community forum</li>
          <li className="subscription-card__feature">Flashcard decks</li>
          <li className="subscription-card__feature">New videos every week</li>
        </ul>
      </div>
    </div>
  )
}

export default SinglePrice
