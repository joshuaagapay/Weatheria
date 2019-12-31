import React from 'react'
import Notification from './Notification'
import WeatherDetails from './WeatherDetails'
import Loader from './Loader'
import { connect } from 'react-redux'
import { getWeather, getLocation } from '../actions/weatherActions'

class Weather extends React.Component {

  componentDidMount() {
    this.props.getLocation();  
  }

  render() {
    const { location } = this.props;
    const { data } = this.props;
    const { showLoader } = this.props;
    return (
      <div className="weather container">
        <div className="weather-name"><h2><p>Weatheria</p></h2></div>  
        <Loader showLoader={showLoader} />
        <WeatherDetails location={location} data={data} />
      </div>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getLocation: () => {dispatch(getLocation())}
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
   location: state.location,
   showLoader: state.showLoader,
   data: state.data
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Weather)