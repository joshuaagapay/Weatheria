import React from 'react'
import Notification from './Notification'
import WeatherDetails from './WeatherDetails'
import Loader from './Loader'
import { connect } from 'react-redux'
import { getWeather, getLocation } from '../actions/weatherActions'

class Weather extends React.Component {

  constructor() {
    super();
    this.state = {
      showWeatherDetails: false
    }
  }

  componentDidMount() {
    this.props.getLocation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      const { location } = this.props;
      this.props.getWeather(location.latitude, location.longitude);
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className="weather container">
        <div className="weather-name"><h2><p>Weatheria</p></h2></div>
        <WeatherDetails data={data} />
      </div>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getLocation: () => { dispatch(getLocation()) },
    getWeather : (latitude, longitude) => { dispatch(getWeather(latitude, longitude)) }
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    data: state.data
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Weather)