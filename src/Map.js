import { Map, Marker } from 'pigeon-maps'
// import Country from './Country'

const MyMap = ({ userData }) => {
  const cc = userData.location.country.toLowerCase()

  const flag = `https://flagcdn.com/20x15/${cc}.png`
  const flagAlt = `Country Flag ${userData.location.country}`

  return (
    <article className="uk-container uk-container-xsmall uk-position-relative" data-uk-scrollspy="cls: uk-animation-top; target: .info; delay: 300; repeat: true">
      <p className="uk-text-center">
        Timezone: {userData.location.timezone} UTC, Lat: {userData.location.lat}, Lng: {userData.location.lng}
      </p>
      <Map height={300} defaultCenter={[userData.location.lat, userData.location.lng]} defaultZoom={11}>
        <Marker width={50} anchor={[userData.location.lat, userData.location.lng]} />
      </Map>
      <div className="uk-flex uk-flex-center">
        <p className="uk-text-center">
          {userData.location.postalCode} {userData.location.city}, {userData.location.region} ({userData.location.country}, <img src={flag} alt={flagAlt} />)
        </p>
        {/* <Country cc={cc} /> */}
      </div>
    </article>
  )
}
export default MyMap
