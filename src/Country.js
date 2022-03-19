import { useState, useEffect } from 'react'

const Country = cc => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`)
        if (res.ok) {
          const data = await res.json()
          setInfo(data)
        }
      } catch (e) {
        alert(e.message)
      }
    }
    fetchInfo()
  }, [])
  console.log(info)
  return <p className="uk-text-center">Capital: {info.capital}</p>
}
export default Country
