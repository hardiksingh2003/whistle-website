import './WhistleDifference.css'

function WhistleDifference({ data }) {
  return (
    <section className="difference-section">
      <div className="difference-inner">
        <div className="difference-left">
          <h2 className="difference-title">The Whistle Difference</h2>
          <div className="difference-features">
            {data.map((item) => (
              <div key={item.id} className="difference-item">
                <div className="difference-icon">
                  <img
                    src={new URL(`../../assets/difference-icon${item.id}.png`, import.meta.url).href}
                    alt={item.title}
                    className="difference-icon-img"
                  />
                </div>
                <div className="difference-text">
                  <h4 className="difference-item-title">{item.title}</h4>
                  <p className="difference-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="difference-right">
          <img
            src={new URL('../../assets/difference-3dprint.png', import.meta.url).href}
            alt="3D printing aligners"
            className="difference-image"
          />
        </div>
      </div>
    </section>
  )
}

export default WhistleDifference
