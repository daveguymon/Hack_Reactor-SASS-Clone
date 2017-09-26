import React from 'react';

export default function Immersive (props){

  return(
    <main className="splash-immersive">
      <section className="prepare-immersive">
        <h2 className="immersive-header immersive-left">Prepare for Immersive</h2>
        <div className="immersive-img-container img-left"></div>
        <div className="immersive-text-container text-left">
        <p>Build your foundation to get into the most selective programming bootcamps.<br />
        SF • ATX • LA • NYC • REMOTE</p>
        </div>
        <div className="immersive-btn">
          <p className="learn-more">Learn More</p>
        </div>
      </section>

      <section className="onsite-immersive">
        <h2 className="immersive-header">Onsite Immersive</h2>
        <div className="immersive-img-container img-middle"></div>
        <div className="immersive-text-container text-middle">
        <p>Gain skills that last your whole career with the ultimate industry tested program.<br />
        SF • ATX • LA • NYC</p>
        </div>
        <div className="immersive-btn">
          <p className="learn-more">Learn More</p>
        </div>
      </section>

      <section className="remote-immersive">
        <h2 className="immersive-header  immersive-right">Remote Immersive</h2>
        <div className="immersive-img-container img-right"></div>
        <div className="immersive-text-container text-right">
          <p>Reinvent your career from anywhere with the ultimate live online coding school<br />
          LEARN ANYWHERE</p>
        </div>
        <div className="immersive-btn">
          <p className="learn-more">Learn More</p>
        </div>
      </section>
    </main>
  )
}
