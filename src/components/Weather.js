import React from 'react'
import Notification from './Notification'
import WeatherDetails from './WeatherDetails'

class Weather extends React.Component {
  state = {
    loading: true
  }

  render() {
    const loading = this.state.loading;
    const com = loading ? <Notification/> : <WeatherDetails/>
    return (
      <div className="weather container">
        <div className="weather-name"><h2><p>Weatheria</p></h2></div>
        {com}
      </div>
    )
  }
}

export default Weather