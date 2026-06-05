import './Marquee.css'

function Marquee({ items }) {
  const repeatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <span key={index} className="marquee-item">
            <span className="marquee-dot">•</span>
            {item.includes('₹') ? (
              <span>
                {item.split('worth')[0]}
                <strong>worth {item.split('worth')[1]}</strong>
              </span>
            ) : (
              <span>{item}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee