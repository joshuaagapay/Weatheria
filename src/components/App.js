import React from 'react'
import Weather from './Weather'

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="weather-name"><p>Weatheria</p></div>
        <div className="notification"></div>
        <Weather />
      </div>
    )
  }
}

export default App