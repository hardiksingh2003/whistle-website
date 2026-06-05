import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ClinicBanner from './components/ClinicBanner/ClinicBanner'
import Marquee from './components/Marquee/Marquee'
import DreamSmiles from './components/DreamSmiles/DreamSmiles'
import Results from './components/Results/Results'
import WhyWhistle from './components/WhyWhistle/WhyWhistle'
import WhistleDifference from './components/WhistleDifference/WhistleDifference'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        /* Simulating an API fetch with a slight delay.
           Using local JSON because dental aligner content
           does not map to any available public API. */
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve(null), 800)
        })
        const mockData = await import('./data/mockData.json')
        setData(mockData.default || mockData)
        setError(null)
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (!data) {
    return <ErrorMessage message="No data available." />
  }

  return (
    <div className="app">
      <Header />
      <Hero data={data.hero} />
      <ClinicBanner data={data.clinicBanner} />
      <Marquee items={data.marquee} />
      <DreamSmiles data={data.dreamSmiles} />
      <Results data={data.results} />
      <WhyWhistle data={data.whyWhistle} />
      <WhistleDifference data={data.whistleDifference} />
    </div>
  )
}

export default App