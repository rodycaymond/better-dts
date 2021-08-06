import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function PreviousTrips ({previousTrips}) {
  console.log('these are our previous trip:', previousTrips)

  if (previousTrips.length <= 1) {
    return (
      <p>No Trips to display</p>
    )
  } else {
    return (
      <Grid style={{backgroundColor: 'white', width: '100%', margin: 'auto', borderRadius: 5}}container spacing={3} >
        <Grid item xs={12} sm={4}><Paper>Trip Name</Paper></Grid>
        <Grid item xs={12} sm={4}><Paper>Start Date</Paper></Grid>
        <Grid item xs={12} sm={4}><Paper>Return Date</Paper></Grid>
        <PrevTrip prevTrips={previousTrips}/>
      </Grid>
    )
  }
}



function PrevTrip ({prevTrips}) {
    return prevTrips.map(trip => {
     if (trip) {
       return (
          <Grid container>
            <Grid item xs={12} sm={4}><Paper>{trip.tripName}</Paper></Grid>
            <Grid item xs={12} sm={4}><Paper>{trip.depDate}</Paper></Grid>
            <Grid item xs={12} sm={4}><Paper>{trip.returnDate}</Paper></Grid>
          </Grid>
       )
    }
  })
}

export default PreviousTrips
