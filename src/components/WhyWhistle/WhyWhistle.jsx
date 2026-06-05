import './WhyWhistle.css'

function WhyWhistle({ data }) {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Whistle?</h2>
      <div className="why-grid">
        {data.map((item) => (
          <div key={item.id} className="why-card">
            <div className="why-card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="why-card-content">
              <h4 className="why-card-title">{item.title}</h4>
              <p className="why-card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyWhistle