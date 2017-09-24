import React from 'react';

export default function GettingAttention (props) {

  return (
    <main className="getting-attention">
      <h1>What’s Getting Attention at Hack Reactor?</h1>
      <div className="attention-tiles">
        <div className="tile tile1">
          <div className="tile-overlay">
            <div className="new-ribbon">NEW</div>
          </div>
        </div>
        <div className="tile tile2"></div>
        <div className="tile tile3"></div>
        <div className="tile tile4"></div>
      </div>
    </main>
  )
}
