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
      <Grid container justifyContent='space-between'>
        <Grid item xs={12} sm={3}>Trip Name</Grid>
        <Grid item xs={12} sm={3}>Start Date</Grid>
        <Grid item xs={12} sm={3}>Return Date</Grid>
        <PrevTrip prevTrips={previousTrips}/>
      </Grid>
    )
  }
}



function PrevTrip ({prevTrips}) {
    return prevTrips.map(trip => {
     if (trip) {
       return (
        <Grid container justifyContent='space-between'>
          <Grid item xs={12} sm={3}>{trip.tripName}</Grid>
          <Grid item xs={12} sm={3}>{trip.depDate}</Grid>
          <Grid item xs={12} sm={3}>{trip.returnDate}</Grid>
        </Grid>
       )
    }
  })
}

export default PreviousTrips
