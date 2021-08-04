import Flights from './Flights.js'
import Weather from './Weather.js'
import Covid from './Covid.js'

function Trip () {
  return (
    <div>
      <p>Name Of Trip Maybe?</p>
      <Flights/>
      <Weather/>
      <Covid/>
    </div>
  )
}

export default Trip