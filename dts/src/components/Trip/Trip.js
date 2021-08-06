import Flights from './Flights.js'
import Weather from './Weather.js'
import Covid from './Covid.js'
import {useState, useEffect} from 'react'








function Trip ({tripData}) {

  const [quotesData, setQuotesData] = useState({})

  let flightsURL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${tripData.depAirport}-sky/${tripData.destAirport}-sky/${tripData.depDate}?inboundpartialdate=${tripData.returnDate}`


  useEffect(() => {
    fetch(flightsURL,
      {
      "method": "GET",
      "headers": {
      "x-rapidapi-key": "06f4486042msheba41241ae42587p15a9e9jsn120b62a31903",
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(json => handleQuotes(json))
    .catch(err => console.error(err));
  }, [])

  function handleQuotes(qoutes) {
    setQuotesData(qoutes)
  }

  return (
    <div className="trip-card">
      <h2>{tripData.tripName}</h2>
      <Flights quotes={quotesData}/>
      <Weather tripData={tripData}/>
      <Covid tripData={tripData}/>
    </div>
  )
}

export default Trip