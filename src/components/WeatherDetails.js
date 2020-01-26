import React from 'react'
import logo from '../assets/unknown.png'

class WeatherDetails extends React.Component {

  render() {
    // if(this.props.showWeatherDetails){
    //   console.log(this.props.data.result.sys.country);
    // }
    return (
      <div className="weather-details">
        {this.props.data.result.sys.country}
        {/* <div className="weather-icon"><img src={`../assets/${this.props}`} /></div> */}
        <div className="temperature-value"><h2><p>-°<span>C</span></p></h2></div>
        <div className="temperature-description"><p>-</p></div>
        <div className="location"><p>-</p></div>
      </div>
    )
  }
}

export default WeatherDetails