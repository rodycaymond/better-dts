import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


function NewTrip ({setTripData}) {
  const [destination, setDestination] = useState('');
  const [depCity, setDepCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
//useState above is using hooks to hold information

  const history = useHistory();

  function handleClick(event){
    event.preventDefault()
    //the preventDefault prevents refresh upon click
    let tripData = {
    dest: destination,
    depCity: depCity,
    startDate: startDate,
    returnDate: returnDate
    };
    setTripData(tripData);
    history.push('/Trip');
  }

  return (
    <div className="form-wrapper">
      <form className='NewTripForm'>

        <TextField variant='outlined' type='text' id='depLoc' label='Departure City' value={depLoc} onChange={(event) => setDepCity(event.target.value)}/>
        <TextField variant='outlined' type='text' id='depLoc' label='Departure State' value={depLoc} onChange={(event) => setDepState(event.target.value)}/>
        <TextField variant='outlined' type='text' id='depLoc' label='Departure Airport' value={depLoc} onChange={(event) => setDepAirport(event.target.value)}/>
        <TextField variant='outlined' type='date' id='depLoc' label='Departure Date' value={depLoc} onChange={(event) => setDepDate(event.target.value)}/>
        <TextField variant='outlined' type='text' id='depLoc' label='Destination City' value={depLoc} onChange={(event) => setDestCity(event.target.value)}/>
        <TextField variant='outlined' type='text' id='depLoc' label='Destination State' value={depLoc} onChange={(event) => setDestState(event.target.value)}/>
        <TextField variant='outlined' type='text' id='depLoc' label='Destination Airport' value={depLoc} onChange={(event) => setDestAirport(event.target.value)}/>
        <TextField variant='outlined' type='date' id='depLoc' label='Return Date' value={depLoc} onChange={(event) => setDestDate(event.target.value)}/>

        <label for='startDate'>Departure Date: </label>
        <input type='date' id='startDate' name='startDate' value={startDate} onChange={(event) => setStartDate(event.target.value)}></input><br></br><br></br>

        <label for='destination'>Destination Location: </label>
        <input type='text' id='destination' name='destination' value={destination} onChange={(event) => setDestination(event.target.value)}></input>

        <label for='returnDate'>Return Date: </label>
        <input type='date' id='returnDate' name='returnDate' value={returnDate} onChange={(event) => setReturnDate(event.target.value)}></input><br></br><br></br>

        <br></br>
        <button type='submit' onClick={(event) => handleClick(event)}>Submit</button>
      </form>
    </div>
  )
}
export default NewTrip;