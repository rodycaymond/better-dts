import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';



function NewTrip ({setTripData}) {
  const [tripName, setTripName] = useState('');
  const [depCity, setDepCity] = useState('');
  const [depState, setDepState] = useState('');
  const [depAirport, setDepAirport] = useState('');
  const [depDate, setDepDate] = useState('');
  const [destCity, setDestCity] = useState('');
  const [destState, setDestState] = useState('');
  const [destAirport, setDestAirport] = useState('');
  const [returnDate, setReturnDate] = useState('');
//useState above is using hooks to hold information

  const history = useHistory();

  function handleClick(event){
    event.preventDefault()
    //the preventDefault prevents refresh upon click submit of form (single page app)
    let tripData = {
      tripName: tripName,
      depCity: depCity,
      depState: depState,
      depAirport: depAirport,
      depDate: depDate,
      destCity: destCity,
      destState: destState,
      destAirport:destAirport,
      returnDate: returnDate

    };
    setTripData(tripData);
    history.push('/Trip');
  }

  return (
    <Card className="form-wrapper">
      <form className='NewTripForm'>
        <TextField required variant='outlined' type='text' id='depLoc' label='Trip Name' value={tripName} onChange={(event) => setTripName(event.target.value)}/>
        <br/><br/>
        <TextField required variant='outlined' type='text' id='depLoc' label='Departure City' value={depCity} onChange={(event) => setDepCity(event.target.value)}/>
        <TextField required variant='outlined' type='text' id='depLoc' label='Departure State' value={depState} onChange={(event) => setDepState(event.target.value)}/>
        <TextField required variant='outlined' type='text' id='depLoc' label='Departure Airport' value={depAirport} onChange={(event) => setDepAirport(event.target.value)}/>
        <TextField required variant='outlined' InputLabelProps={{shrink: true}} type='date' id='depLoc' label='Departure Date' value={depDate} onChange={(event) => setDepDate(event.target.value)}/>
        <br/><br/>
        <TextField required variant='outlined' type='text' id='depLoc' label='Destination City' value={destCity} onChange={(event) => setDestCity(event.target.value)}/>
        <TextField required variant='outlined' type='text' id='depLoc' label='Destination State' value={destState} onChange={(event) => setDestState(event.target.value)}/>
        <TextField required variant='outlined' type='text' id='depLoc' label='Destination Airport' value={destAirport} onChange={(event) => setDestAirport(event.target.value)}/>
        <TextField required variant='outlined' InputLabelProps={{shrink: true}} type='date' id='depLoc' label='Return Date' value={returnDate} onChange={(event) => setReturnDate(event.target.value)}/>
        <br/><br/>
        <button style={{backgroundColor: 'rgb(63,81,181)', border: '1px solid rgb(63,81,181)', borderRadius: '5px', color: 'white', padding: '5px 10px', cursor: 'pointer'}} type='submit' onClick={(event) => handleClick(event)}>Submit</button>
      </form>
    </Card>
  )
}
export default NewTrip;