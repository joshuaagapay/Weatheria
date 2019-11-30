import React from 'react'
import Weather from './Weather'


class App extends React.Component {

  render() {
    console.log(process.env.API_KEY);
    return (
      <div className="container center">
        <div className="weather-name"><h2><p>Weatheria</p></h2></div>
        <div className="notification"><h4><p>No Notification</p></h4></div>
        <Weather />
      </div>
    )
  }
}

export default App