import React from 'react';

export default function SplashImmersive (props){

  return(
    <main className="splash-immersive">
      <section className="prepare-immersive">
        <h2 className="immersive-header immersive-left">Prepare for Immersive</h2>
        <div className="immersive-img-container img-left"></div>
      </section>

      <section className="onsite-immersive">
        <h2 className="immersive-header">Onsite Immersive</h2>
        <div className="immersive-img-container img-middle"></div>
      </section>

      <section className="remote-immersive">
        <h2 className="immersive-header  immersive-right">Remote Immersive</h2>
        <div className="immersive-img-container img-right"></div>
      </section>
    </main>
  )
}
