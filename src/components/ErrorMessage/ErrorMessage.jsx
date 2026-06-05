import './ErrorMessage.css'

function ErrorMessage({ message }) {
  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h2 className="error-title">Oops! Something went wrong</h2>
      <p className="error-text">{message}</p>
      <button className="error-retry-btn" onClick={handleRetry}>
        Try Again
      </button>
    </div>
  )
}

export default ErrorMessage