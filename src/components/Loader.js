import React from 'react'

class Loader extends React.Component {

  render() {
    return (
      <div className="weather-loader">
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loader