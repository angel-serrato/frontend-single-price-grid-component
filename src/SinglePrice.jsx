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

      <div className="subscription-card__pricing">
        <h2 className="subscription-card__pricing-title">Monthly Subscription</h2>
        <div className="subscription-card__pricing-info">
          <p className="subscription-card__pricing-amount">$29</p>
          <p className='subscription-card__pricing-period'>per month</p>
        </div>
        <p className="subscription-card__pricing-note">Full access for less than $1 a day</p>
        <button className="subscription-card__pricing-button">Sign Up</button>
      </div>

      <div className="subscription-card__features">
        <h3 className="subscription-card__features-title">Why Us</h3>
        <ul className="subscription-card__features-list">
          <li className="subscription-card__feature-item">Tutorials by industry experts</li>
          <li className="subscription-card__feature-item">Peer & expert code review</li>
          <li className="subscription-card__feature-item">Coding exercises</li>
          <li className="subscription-card__feature-item">Access to our GitHub repos</li>
          <li className="subscription-card__feature-item">Community forum</li>
          <li className="subscription-card__feature-item">Flashcard decks</li>
          <li className="subscription-card__feature-item">New videos every week</li>
        </ul>
      </div>
    </div>
  )
}

export default SinglePrice
