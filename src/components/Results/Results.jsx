import './Results.css'

function Results({ data }) {
  return (
    <section className="results-section">
      <h2 className="results-title">Results You'll Love</h2>
      <div className="results-grid">
        {data.map((result) => (
          <div key={result.id} className="result-card">
            <div className="result-images">
              <div className="result-img-wrapper">
                <img src={result.beforeImage} alt="Before treatment" />
                <span className="img-label">Before</span>
              </div>
              <div className="result-img-wrapper">
                <img src={result.afterImage} alt="After treatment" />
                <span className="img-label">After</span>
              </div>
            </div>
            <div className="result-info">
              <div className="result-row">
                <span className="result-label">Concern</span>
                <span className="result-value">{result.concern}</span>
              </div>
              <div className="result-row">
                <span className="result-label">Treatment Duration</span>
                <span className="result-value">{result.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Results