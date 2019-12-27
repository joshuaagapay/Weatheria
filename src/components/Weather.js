import React from 'react'
import Notification from './Notification'
import WeatherDetails from './WeatherDetails'
import Loader from './Loader'
import { connect } from 'react-redux'
import { getWeather } from '../actions/weatherActions'

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      // showWeatherDetails: false,
      // showLoader: true,

      notification: {
        message: ''
      },

      location: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.setState({ notification: { message: "Geolocation is not supported by this browser." } });
    }
  }

  showPosition = (position) => {
    const newLocation = {};

    newLocation.latitude = position.coords.latitude
    newLocation.longitude = position.coords.longitude

    this.setState({ location: newLocation });

    this.props.getWeather(this.state.location.latitude, this.state.location.longitude);
  }

  render() {
    return (
      <div className="weather container">
        <div className="weather-name"><h2><p>Weatheria</p></h2></div> 
        <Loader />
        <WeatherDetails />
      </div>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getWeather: (latitude, longitude) => { dispatch(getWeather(latitude, longitude)) }
  }
}

export default connect(null, mapDispatchtoProps)(Weather)