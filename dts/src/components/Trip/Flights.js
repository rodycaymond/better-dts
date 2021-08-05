import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function FlightQuote ({quote, quotes}) {
  let carrierID = quote.OutboundLeg.CarrierIds[0]
  let carrierArray = quotes.Carriers
  let placesArray = quotes.Places
  let price = quote.MinPrice
  let destID = quote.OutboundLeg.DestinationId
  let originID = quote.OutboundLeg.OriginId
  let carrierName = findCarrier (carrierID, carrierArray)
  let originName = findOrigin(originID, placesArray)
  let destName = findDestination(destID, placesArray)


  function findCarrier (carrierID, carrierArr) {
    let carrierObj = carrierArr.find(carrier => {
      if (carrier.CarrierId === carrierID) {
        return carrier
      }
    })
    //console.log('This is carrierObj', carrierObj)
    return carrierObj.Name
  }

  function findOrigin (originID, placesArr) {
    let placesObj = placesArr.find(place => {
      if (place.PlaceId === originID) {
        return place
      }
    })
    //console.log('This is placesObj', placesObj)
    return placesObj.Name
  }

  function findDestination (destID, placesArr) {
    let placesObj = placesArr.find(place => {
      if (place.PlaceId === destID) {
        return place
      }
    })
    //console.log('This is carrierObj', carrierObj)
    return placesObj.Name
  }

  console.log("Quote info: ",
              "Quote: ", quote.QuoteID,
              "CarrierID: ", carrierID,
              "Price: ", price,
              "Destination ID: ", destID,
              "Origin ID: ", originID,
              "Carrier Name: ", carrierName)
  return (
    <Grid container>
      <Grid item xs={12} sm={3}><Paper>{carrierName}</Paper></Grid>
      <Grid item xs={12} sm={3}><Paper>{price}</Paper></Grid>
      <Grid item xs={12} sm={3}><Paper>{originName}</Paper></Grid>
      <Grid item xs={12} sm={3}><Paper>{destName}</Paper></Grid>
    </Grid>
  )
}

//need to destructure data
function Flights ({quotes}) {
  console.log('This is inside of Flights: ', quotes)
  let quotesArr = quotes.Quotes //array of quotes

  let mapFlightQuotes = (quotesArr) => {
    if (quotesArr === undefined) {
      return <p>Loading</p>
    } else {
      return (
        quotesArr.map( (quote, index) => {
          //console.log("Maping Quotes Num", index, 'Quote info: ', quote)
          return (
            <Grid item xs={12} sm={12}>
              <FlightQuote quote={quote} quotes={quotes}/>
            </Grid>)
        })
      )
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Paper>Departure</Paper>
      </Grid>

      {
        mapFlightQuotes(quotesArr)
      }

    </Grid>
  )
}

export default Flights;