import React from 'react';

export default function SplashLocations (props){

  return(
    <main className="splash-locations">
      <blockquote className="locations-bquote">
        “After the program I got hired at a startup in Venice. {"I'm"} now working at a better startup in West Hollywood. This is unreal.”
      </blockquote>
      <p className="cite">— Rodolfo Yabut, Hack Reactor LA Graduate</p>
      <div className="locations-container">
        <div className="location california"></div>
        <div className="location texas"></div>
        <div className="location newyork"></div>
        <div className="location remote">
          <div className="remote-overlay">
            <p>Remote Immersive<br /> Alumni from 210+ cities <i className="fa fa-angle-right" aria-hidden="true"></i></p>
          </div>
        </div>
      </div>
    </main>
  )
}
