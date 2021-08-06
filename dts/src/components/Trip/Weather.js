import React from 'react';


const API_KEY = 'srQGRtICj2lmL14d6uNtthm1Sez7Fi2U';
//functioning fetch api: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}%20{state}%20/{yyyy-m-d}/{yyyy-m-d}?unitGroup=us&key=SAARCEGA28N3C8YA7B2GYL45A

class Weather extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.tripData)
    this.state = {
      weather: [],
      city: this.props.tripData.destCity,
      state: this.props.tripData.destState,
      startDate: this.props.tripData.depDate,
      endDate: this.props.tripData.returnDate
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount(){
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.state.city}%20${this.state.state}%20/${this.state.startDate}/${this.state.endDate}?unitGroup=us&key=SAARCEGA28N3C8YA7B2GYL45A`)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        weather: data.days,
        city: this.state.city,
        state: this.state.state,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
    });
  }
  //get the api data
    //async in front makes function asyn
    //await is possible because of async function, it waits for the fetch to complete before it proceeds



  render(){

    let listOfWeatherCards = this.state.weather.map((item,index)=>{
      console.log(item)
      return <WeatherCard info={item}/>
      //item is for the map function passing the object through, info is how the props are passed down (props.info.(...))
    });


    return (
      <div className="weather-container">
        <h2 >Weather</h2>
        <div className="flex-weathercards">
          {listOfWeatherCards}
        </div>
      </div>
      )
    }

  }
function WeatherCard (props){
  let imgSrc = '';
  if (props.info.icon === 'partly-cloudy-day'){
// partly_cloudy
    imgSrc = "https://www.visualcrossing.com/weather/weatherdataservices/images/icons2/"+"skycover50"+".svg";
  } else if (props.info.icon === 'clear-day'){
    //sunny
    imgSrc = "https://www.visualcrossing.com/weather/weatherdataservices/images/icons2/"+"skycover00"+".svg";
  } else if (props.info.icon === 'rain'){
    imgSrc = "https://www.visualcrossing.com/weather/weatherdataservices/images/icons2/"+"precip"+".svg";
  } else if(props.info.icon === 'overcast'){
    //trying to include overcast in coding to catch the partly_cloudy image ... may not be right string for icon
    imgSrc = "https://www.visualcrossing.com/weather/weatherdataservices/images/icons2/"+"skycover50"+".svg";
  }
  else {
    //catching overcast to give it the partly_cloudy image ... can be improved. may be catching thunderstorms or snow inappropriately
    imgSrc = "https://www.visualcrossing.com/weather/weatherdataservices/images/icons2/"+"skycover50"+".svg";
  }
  return (
    <div className="box icon">
      {/* two class names, helps with css reference */}
      <p>{props.info.datetime.slice(5,props.info.datetime.length)}</p>


      <img src={imgSrc} alt="icon depicting state of the weather"></img>
      <p>{'High: '+Math.round(props.info.tempmax)+' | Low: '+Math.round(props.info.tempmin)}</p>
      <p>{props.info.conditions}</p>
      <p>Humidity: {props.info.humidity}%</p>
    </div>
  )
}


export default Weather;