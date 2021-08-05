import Flights from './Flights.js'
import Weather from './Weather.js'
import Covid from './Covid.js'
import {useState, useEffect} from 'react'


const flightsURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-09-01?inboundpartialdate=2021-09-04"





function Trip () {
  const [quotesData, setQuotesData] = useState({})


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
    <div>
      <p>Name Of Trip Maybe?</p>
      <Flights quotes={quotesData}/>
      <Weather/>
      <Covid/>
    </div>
  )
}

export default Trip