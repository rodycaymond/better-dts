import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


function NewTrip ({setTripData}) {
  const [destination, setDestination] = useState('');
  const [depLoc, setDepLoc] = useState('');
  const [startDate, setStartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
//useState above is using hooks to hold information

  const history = useHistory();

  function handleClick(event){
    event.preventDefault()
    //the preventDefault prevents refresh upon click
    let tripData = {
    dest: destination,
    depLoc: depLoc,
    startDate: startDate,
    returnDate: returnDate
    };
    setTripData(tripData);
    history.push('/Trip');
  }

  return (
    <div className="form-wrapper">
      <form className='NewTripForm'>
        <label for='depLoc'>Departure Location: </label>
        <input type='text' id='depLoc' name='depLoc' value={depLoc} onChange={(event) => setDepLoc(event.target.value)}></input>

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