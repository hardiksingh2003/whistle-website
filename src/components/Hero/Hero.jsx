import { useState } from 'react'
import './Hero.css'

function Hero({ data }) {
  const [teethIssue, setTeethIssue] = useState(null)
  const [formData, setFormData] = useState({ name: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly to schedule your free scan.')
  }

  return (
    <section className="hero-section">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>
          Starting at{' '}
          <span className="original-price">{data.announcementBar.originalPrice}</span>{' '}
          <span className="sale-price">{data.announcementBar.salePrice}</span>.{' '}
          {data.announcementBar.message}
        </p>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-headline">{data.headline}</h1>
            <p className="hero-subtext">
              Book a Scan and avail a free<br />
              Orthodontist Consult{' '}
              <span className="offer-highlight">{data.offerHighlight}</span>
            </p>
          </div>
          <div className="hero-image">
            <img
              src={new URL('../../assets/hero-smile.png', import.meta.url).href}
              alt="Woman with beautiful smile"
            />
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="booking-section">
        <h3 className="booking-question">{data.bookingQuestion}</h3>

        <div className="radio-group">
          <label className={`radio-option ${teethIssue === 'yes' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="teethIssue"
              value="yes"
              checked={teethIssue === 'yes'}
              onChange={() => setTeethIssue('yes')}
            />
            <span className="radio-custom"></span>
            Yes
          </label>
          <label className={`radio-option ${teethIssue === 'no' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="teethIssue"
              value="no"
              checked={teethIssue === 'no'}
              onChange={() => setTeethIssue('no')}
            />
            <span className="radio-custom"></span>
            No
          </label>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label className="input-label">Full Name*</label>
              <input
                type="text"
                placeholder={data.formPlaceholders.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Mobile number*</label>
              <input
                type="tel"
                placeholder={data.formPlaceholders.phone}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
            </div>
            <button type="submit" className="cta-button cta-desktop">
              {data.ctaButton}
            </button>
          </div>
          <button type="submit" className="cta-button cta-mobile">
            {data.ctaButton}
          </button>
          <label className="consent-label">
            <input type="checkbox" className="consent-checkbox" />
            <span className="consent-text">{data.consent}</span>
          </label>
        </form>
      </div>
    </section>
  )
}

export default Hero