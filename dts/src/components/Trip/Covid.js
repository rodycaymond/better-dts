
import {useState, useEffect} from 'react'

function Covid ({tripData}) {
  console.log(tripData.destState)
  let queryState = tripData.destState
  const [confirmed, setConfirmed] = useState(0)
  const [deaths, setDeaths] = useState(0)
  
  
  useEffect(() => {
    fetch(`https://coronavirus-us-api.p.rapidapi.com/api/state/all?source=nyt&state=${queryState}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "06f4486042msheba41241ae42587p15a9e9jsn120b62a31903",
        "x-rapidapi-host": "coronavirus-us-api.p.rapidapi.com"
      }
    })
    .then(response => 
      response.json()
    )
    .then(json => {
      handleCovide(json)
    })
    .catch(err => {
    console.error(err);
    })
  },[])

  
  function handleCovide(json){
    console.log('This is the json data', json)
    setConfirmed(json.latest.confirmed)
    console.log("Cases:", confirmed)
    setDeaths(json.latest.deaths)
    console.log("Deaths:", deaths)
  }
  
  return (
    <div className="covid">
    <div>
      <h2 style={{backgroundColor: 'rgb(63,81,181)', color: 'white'}}>COVID DATA FOR DESTINATION</h2>
      <div>Cases: {confirmed}</div>
      <div>Deaths: {deaths}</div>

    </div>
    </div>
  )
}

export default Covid