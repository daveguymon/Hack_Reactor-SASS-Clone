import React from 'react';

export default function ReasonsToRide (props) {

  return (
    <main className="reasons-to-ride">
      <div className="reasons-container">
        <div className="reason-content">
          <div className="reason-svg request-svg"></div>
          <h2>Easiest way around</h2>
          <p>One tap and a car comes directly to you.<br /> Hop in—your driver knows exactly<br /> where to go. And when you get there,<br /> just step out. Payment is completely<br /> seamless.</p>
        </div>

        <div className="reason-content">
          <div className="reason-svg drive-svg"></div>
          <h2>Anywhere, anytime</h2>
          <p>Daily commute. Errand across town.<br /> Early morning flight. Late night drinks.<br /> Wherever you’re headed, count on Uber<br /> for a ride—no reservations required.</p>
        </div>

        <div className="reason-content">
          <div className="reason-svg economy-svg"></div>
          <h2>Low-cost to luxury</h2>
          <p>Economy cars at everyday prices are<br /> always available. For special occasions,<br /> no occasion at all, or when you just need<br /> a bit more room, call a black car or SUV.</p>
        </div>
      </div>
    </main>
  )
}
