import './DreamSmiles.css'

function DreamSmiles({ data }) {
  return (
    <section className="dream-section">
      <div className="dream-inner">
        <div className="dream-left">
          <h2 className="dream-headline">Dream smiles<br />achieved secretly</h2>
          <p className="dream-desc">{data.description1}</p>
          <p className="dream-desc dream-desc-pricing">{data.description2}</p>
        </div>
        <div className="product-card">
          <div className="product-card-top">
            <div className="product-info">
              <h3 className="product-name">{data.product.name}</h3>
              <p className="product-original-price">{data.product.originalPrice}</p>
              <p className="product-sale-line">
                starting at{' '}
                <span className="product-sale-price">{data.product.salePrice}</span>
              </p>
              <p className="product-price-note">{data.product.priceNote}</p>
            </div>
            <div className="product-image">
              <img
                src={new URL('../../assets/aligner-product.png', import.meta.url).href}
                alt="Whistle Aligners"
              />
            </div>
          </div>
          <div className="product-features">
            {data.product.features.map((feature, index) => (
              <div key={index} className="product-feature">
                <span className="feature-check">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#22c55e"/>
                    <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <a href="#" className="learn-more-link">
            Learn more <span className="arrow">→</span>
          </a>
        </div>
        <p className="product-pricing-note-mobile">{data.description2}</p>
      </div>
    </section>
  )
}

export default DreamSmiles