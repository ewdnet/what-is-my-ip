import { useRef } from 'react'

const Header = ({ userData, getUserIP }) => {
  const inputRef = useRef()

  const customData = event => {
    event.preventDefault()
    const inpt = inputRef.current.value
    if (inpt) {
      getUserIP(inpt)
    } else {
      alert('IP is required!')
    }
    inputRef.current.value = null
  }

  return (
    <div className="uk-container uk-container-xsmall uk-flex uk-flex-middle uk-flex-between">
      <div>
        <h1 className="uk-h4">My IP and Map</h1>
        <form onSubmit={customData}>
          <input ref={inputRef} className="uk-input uk-form-width-medium" required />
          <button className="uk-button uk-button-default">IP</button>
        </form>
      </div>
      {userData && (
        <ul className="uk-list">
          <li>ISP: {userData.isp}</li>
          <li>IP: {userData.ip}</li>
          <li>Route: {userData.as.route}</li>
          <li>Domain: {userData.as.domain}</li>
        </ul>
      )}
    </div>
  )
}
export default Header
