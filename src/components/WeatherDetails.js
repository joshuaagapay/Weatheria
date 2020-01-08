import React from 'react'
import logo from '../assets/unknown.png'
import { getWeather } from '../actions/weatherActions'

class WeatherDetails extends React.Component {

  componentDidUpdate(prevProps) {
    if(this.props.location !== prevProps.location){
      console.log(this.props.location);
    }
    console.log("HELLLLLLLLLLOOOOOOOOOO");
  }

  render() {
    console.log("WEEEEEEEEEe");
    return (
      <div className="weather-details" style={{display: this.props.data.showWeatherDetails ? 'block' : 'none'}}>
        <div className="weather-icon"><img src={logo} /></div>
        <div className="temperature-value"><h2><p>-°<span>C</span></p></h2></div>
        <div className="temperature-description"><p>-</p></div>
        <div className="location"><p>-</p></div>
      </div>
    )
  }
}

export default WeatherDetails