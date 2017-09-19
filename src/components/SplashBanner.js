import React from 'react';

export default function SplashBanner (props){

  return (
    <main className="splash-banner">
      <h1 className="splash-title-text">Don’t just Learn to Code:<br />
      Think Like a Software Engineer</h1>
      <h2 className="splash-subtitle-text">Reinvent Your Career in 12 weeks</h2>
      <div className="buttons-container">
        <div className="start-learning-btn">
          <p>Start Learning For Free</p>
        </div>
        <div className="who-we-are-btn">
          <p>See Who We Are <span><div className="play-circle"><i className="fa fa-play" aria-hidden="true"></i></div></span></p>
        </div>
      </div>
    </main>
  )
}
