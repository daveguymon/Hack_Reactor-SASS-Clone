import React from 'react';

export default function SplashLocations (props){

  return(
    <main className="splash-locations">
      <blockquote className="locations-bquote">
        “After the program I got hired at a startup in Venice. {"I'm"} now working at a better startup in West Hollywood. This is unreal.”
      </blockquote>
      <p className="cite">— Rodolfo Yabut, Hack Reactor LA Graduate</p>
      <div className="locations-container">
        <div className="location california">
          <div className="california1-overlay">
            <p>San Francisco<i className="fa fa-circle" aria-hidden="true"></i><br /> Campus <i className="fa fa-angle-right" aria-hidden="true"></i></p>
          </div>

          <div className="california2-overlay">
            <p>Los Angeles<i className="fa fa-circle" aria-hidden="true"></i><br /> Campus <i className="fa fa-angle-right" aria-hidden="true"></i></p>
          </div>
        </div>

        <div className="location texas">
          <div className="texas-overlay">
            <p>Austin<i className="fa fa-circle" aria-hidden="true"></i><br />Campus <i className="fa fa-angle-right" aria-hidden="true"></i></p>
          </div>
        </div>

        <div className="location newyork">
          <div className="newyork-overlay">
            <p>New York City<i className="fa fa-circle" aria-hidden="true"></i><br /> Campus <i className="fa fa-angle-right" aria-hidden="true"></i></p>
          </div>
        </div>

        <div className="location remote">
          <div className="remote-overlay">
            <p>Remote Immersive<br /> Alumni from 210+ cities <i className="fa fa-angle-right" aria-hidden="true"></i></p>
          </div>
        </div>
      </div>
    </main>
  )
}
