import React from 'react';

export default function GettingAttention (props) {

  return (
    <main className="getting-attention">
      <h1>What’s Getting Attention at Hack Reactor?</h1>
      <div className="attention-tiles">
        <div className="tile tile1">
          <div className="tile1-overlay">
            <div className="new-ribbon">NEW</div>
            <p>Scholarship Partner:<br />Optimizely</p>
          </div>
        </div>

        <div className="tile tile2">
          <div className="tile-overlay">
            <p>Diversity & Inclusion:<br />Telegraph Track</p>
          </div>
        </div>

        <div className="tile tile3">
          <div className="tile-overlay">
            <p>Prepare for Free</p>
          </div>
        </div>

        <div className="tile tile4">
          <div className="tile-overlay">
            <p>Student Projects</p>
          </div>
        </div>
      </div>
    </main>
  )
}
