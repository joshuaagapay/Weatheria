import React from 'react'

function WeatherDetails(props) {

  const { data } = props;
  const { convertTemp } = props;

  function handleClick(e) {
    e.preventDefault();
    convertTemp(data.unit)
  }

  return (
    <div className="weather-details">
      <div className="location"><h5><p><b>{data.city}, {data.country}</b></p></h5></div>
      <div className="temperature-description"><p><b>{data.description}</b></p></div>
      <div className="weather-icon"><img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} /></div>
      <div className="temperature-result">
        <div className="temperature-value" onClick={handleClick}><a href="#"><p>{data.temperature}°</p></a></div>
        <div className="temperature-scale"><p>{data.unit}</p></div>
      </div>
      <div className="temperature-min-max"><p>{data.tempMin}° / {data.tempMax}° </p></div>

    </div>
  )

}

export default WeatherDetails