import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function FlightQuote () {
  return (
    <Grid container>
      <Grid item xs={12} sm={3}><Paper>Quote ID</Paper></Grid>
      <Grid item xs={12} sm={3}><Paper>Departure Airport</Paper></Grid>
      <Grid item xs={12} sm={3}><Paper>Arrival Airport</Paper></Grid>
      <Grid item xs={12} sm={3}><Paper>Price</Paper></Grid>
    </Grid>
  )
}

function Flights () {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper>Departure</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Return</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FlightQuote/>
      </Grid>
       <Grid item xs={12} sm={6}>
        <FlightQuote/>
      </Grid>
    </Grid>
  )
}

export default Flights;
/*
departure airport: ex JFK-sky
arrival airport: ex: SFO-sky


Example Fetch Code

fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-09-01?inboundpartialdate=2021-09-04", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "06f4486042msheba41241ae42587p15a9e9jsn120b62a31903",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
*/