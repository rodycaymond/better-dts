//Style imports
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

//React imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

//Material UI imports
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';

//Custom Components
import PreviousTrips from './components/PreviousTrips.js';
import NewTrip from './components/NewTrip.js';
import Trip from './components/Trip/Trip.js'





function App() {

  // setting state for whether we are adding newtrips or not to open modal
  const [previousTripsArray, setPreviousTrips] = useState([])
  const [tripData, setTripData] = useState()
  // setting state for previous trips

  useEffect(() => {
    setPreviousTrips(oldTrips => [...oldTrips, tripData])
  }, [tripData])

  const useStyles = makeStyles({
    appbar:{display: 'flex', position: 'static', padding: '10px 0px',  justifyContent: 'space-around', flexDirection: 'row'},
    button: {width: 'fit-content', border: 'black', background:'orange', textDecoration: 'none'},
    title: {width: '40%', padding: '10px', color: 'whitesmoke', backgroundColor: 'rgba(63,81,181,0)', boxShadow: '0 0 0', fontWeight: 'bold', fontSize: '1.5em'}
  })
  // lines above in useStyles create an object to be invoked by the classes variable below. the object keys are placed in the rendering of the html/jsx tags below to apply the styling
  const classes = useStyles();

  return (
      <div className="App">
        <AppBar className={classes.appbar}>
            <Card className={classes.title}>Trip Planner</Card>
            <Link to='/newTrip' style={{textDecoration: 'none'}}>
              <Button className={classes.button}>New Trip</Button>
            </Link>
            <Link to='/' style={{textDecoration: 'none'}}>
              <Button className={classes.button} >Home</Button>
            </Link>
        </AppBar>
        <div>
          <Route exact path='/' component={props => <PreviousTrips previousTrips={previousTripsArray}/>}/>
          <Route exact path='/newTrip' component={props => <NewTrip setTripData={setTripData}/>}/>
          <Route exact path='/Trip' component={props => <Trip tripData={tripData}/>}/>
        </div>
      </div>
  );
}

export default App;
