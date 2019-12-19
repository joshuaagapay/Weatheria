import React from 'react'
import logo from '../assets/unknown.png'
import Notification from './Notification'

class Weather extends React.Component {

  render() {
    return (
      <div className="weather container">
        <div className="weather-name"><h2><p>Weatheria</p></h2></div>
        <Notification />
        <div className="weather-icon"><img src={logo} /></div>
        <div className="temperature-value"><h2><p>-°<span>C</span></p></h2></div>
        <div className="temperature-description"><p>-</p></div>
        <div className="location"><p>-</p></div>
      </div>
    )
  }
}

export default Weather