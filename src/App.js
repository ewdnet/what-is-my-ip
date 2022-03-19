import { useEffect, useState } from 'react'
import Header from './Header'
import Map from './Map'

const { REACT_APP_IPIFY_KEY } = process.env
const url = 'https://geo.ipify.org/api/v2/country,city?apiKey='
const ipAdd = '&ipAddress='

const App = () => {
  const [loading, setLoading] = useState(false)
  const [userIP, setUserIP] = useState('')
  const [userData, setUserData] = useState()
  const [errors, setErrors] = useState()

  useEffect(() => {
    fetchIP()
  }, [])

  useEffect(() => {
    fetchData(userIP)
  }, [userIP])

  const fetchIP = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${url}${REACT_APP_IPIFY_KEY}`)
      if (res.ok) {
        const data = await res.json()
        setUserIP(data.ip)
      } else {
        setErrors('Fetch IP Error!')
      }
    } catch (e) {
      setErrors(e.message)
    }
  }

  const fetchData = async ip => {
    setLoading(true)
    try {
      const res = await fetch(`${url}${REACT_APP_IPIFY_KEY}${ipAdd}${ip}`)
      if (res.ok) {
        const data = await res.json()
        setUserData(data)
        setLoading(false)
      } else {
        setErrors('Data Error!')
      }
    } catch (e) {
      setErrors(e.message)
    }
  }

  const showErrors = () => (
    <div data-uk-alert>
      <h3>Error:</h3>
      <p>{errors}</p>
    </div>
  )

  const spinner = () => (
    <p className="uk-text-center">
      <span className="uk-text-warning" data-uk-spinner="ratio: 12"></span>
    </p>
  )

  const showMap = () => {
    if (userData) return <Map userData={userData} />
  }

  return (
    <>
      <header className="uk-section uk-section-primary uk-padding-small">
        <Header getUserIP={inpt => setUserIP(inpt)} userData={userData} />
      </header>
      <main className="uk-flex-auto uk-section">
        {errors && showErrors}
        {(loading && spinner()) || showMap()}
      </main>
      <footer className="uk-section uk-section-primary uk-padding-small">
        <p className="uk-container uk-text-center">
          <small>
            <span className="uk-margin-small-right uk-icon" data-uk-icon="user"></span>Emil | WDPT#006 - NOV 2021
          </small>
        </p>
      </footer>
    </>
  )
}

export default App
