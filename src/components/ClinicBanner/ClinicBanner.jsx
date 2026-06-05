import { useState } from 'react'
import './ClinicBanner.css'

function ClinicBanner({ data }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="clinic-banner">
      <div className="clinic-banner-inner">
        <div className="clinic-banner-left">
          <h3 className="clinic-banner-title">
            Book a Free 3D Teeth Scan and Orthodontist Consult in a{' '}
            <br className="title-break" />
            Clove Dental Clinic near you.
          </h3>
        </div>
        <div className="clinic-banner-right">
          <div className="clove-logo">
            <img src={new URL('../../assets/clove-logo.png', import.meta.url).href} alt="Clove Dental" className="clove-logo-img" />
          </div>
          <button
            className="find-clinic-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {data.ctaText}{' '}
            <span className={`chevron ${expanded ? 'expanded' : ''}`}>^</span>
          </button>
        </div>
      </div>
      {expanded && (
        <div className="clinic-dropdown">
          <p className="clinic-dropdown-text">
            Clinics available in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, and 40+ cities.
          </p>
        </div>
      )}
    </section>
  )
}

export default ClinicBanner