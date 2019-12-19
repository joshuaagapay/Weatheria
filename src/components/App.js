import React from 'react'
import Weather from './Weather'


class App extends React.Component {

  render() {
    console.log(process.env.API_KEY);
    return (
      <div className="container center">
        <Weather />
      </div>
    )
  }
}

export default App