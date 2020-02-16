import React from 'react'
import ErrorMessage from './ErrorMessage'
import WeatherDetails from './WeatherDetails'
import Loader from './Loader'
import { connect } from 'react-redux'
import { getWeather, convertTemp } from '../actions/weatherActions'
import { getLocation } from '../actions/locationActions'


class Weather extends React.Component {

  constructor() {
    super()
    this.state = {
      showWeatherDetails: false,
      
    }
  }

  componentDidMount() {
    this.props.getLocation();
    const checkRes = setInterval(() => {
      if (this.props.weatherDetails.isLoaded) {
        this.setState({ showWeatherDetails: true });
        clearInterval(checkRes);
      }
    }, 3000)
  }

  componentDidUpdate(prevProps) {

    if (prevProps.location.isLocated !== this.props.location.isLocated) {
      const { location } = this.props;
      this.props.getWeather(location.latitude, location.longitude);
    }
  }

  render() {
    const { error } = this.props.location;
    const { weatherDetails } = this.props;

    if (error) {
      return (
        <div className="weather container">
          <div className="weather-name"><p>Weatheria</p></div>
          <ErrorMessage message={error} />
        </div>
      )
    }

    const weather = this.state.showWeatherDetails ? <WeatherDetails data={weatherDetails} convertTemp={this.props.convertTemp} /> : <Loader />
    return (
      <div className="weather">
        <div className="weather-name"><p>Weatheria</p></div>
        {weather}
      </div>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getLocation: () => { dispatch(getLocation()) },
    getWeather: (latitude, longitude) => { dispatch(getWeather(latitude, longitude)) },
    convertTemp : (unit) => { dispatch(convertTemp(unit))}
  }
}

const mapStateToProps = state => {
  
  return {
    location: state.location,
    weatherDetails: state.weather
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Weather)
