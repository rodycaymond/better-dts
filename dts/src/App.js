import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
} from '@material-ui/core';
import WindowModal from 'react-window-modal';
import PreviousTrips from './components/PreviousTrips.js';
import NewTrip from './components/NewTrip.js';
// import Paper from '@material-ui/core/Paper';
// import { styled } from '@material-ui/core/styles';



function App() {

  const [isNewTrip, setNewTrip] = useState(false)
  // setting state for whether we are adding newtrips or not to open modal
  const [previousTripsArray, setPreviousTrips] = useState([])
  // setting state for previous trips

  const useStyles = makeStyles({
    appbar:{display: 'flex', position: 'static', padding: '10px 0px',  justifyContent: 'space-around', flexDirection: 'row'},
    button: {width: '40%', border: 'black', background:'orange'},
    title: {width: '40%', padding: '10px', color: 'whitesmoke', backgroundColor: 'rgba(63,81,181,0)', boxShadow: '0 0 0'}
  })
  // lines above in useStyles create an object to be invoked by the classes variable below. the object keys are placed in the rendering of the html/jsx tags below to apply the styling
  const classes = useStyles();
  return (
      <div className="App">
        <AppBar className={classes.appbar}>
            <Card className={classes.title}>Better DTS</Card>
            <Link to='/newTrip'>
              <Button className={classes.button}>New Trip</Button>
            </Link>
        </AppBar>
        <Route exact path='/' component={PreviousTrips}/>
        <Route exact path='/newTrip' component={NewTrip}/>
      </div>
  );
}

// const MyButton = styled(Button)({
//   background: 'linear-gradient(90deg, #44FA34 30%, #FE45EE 70%)',
//   border: 0,
//   borderRadius: 50,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'Goldenrod',
//   fontSize: 36,
//   height: 72,
//   padding: '100px 50px',
//   //padding 'x is heightpx y is heightpx
// });


export default App;
