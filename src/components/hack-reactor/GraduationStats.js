import React from 'react';

export default function GraduationStats (props) {

  return (
    <main className="graduation-stats">
      <div className="graduation-stats-content">
        <div className="stats">
          <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3046/assets/images/icons/academic-cap--white.png" alt="graduation cap" />
          <p>3000+<br /><span>Alumni</span></p>
        </div>

        <div className="stats">
          <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3046/assets/images/icons/handshake--white.png" alt="handshake" />
          <p>300+<br /><span>Hiring Partners</span></p>
        </div>

        <div className="stats">
          <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3046/assets/images/icons/building--white.png" alt="school building" />
          <p>5<br /><span>Campuses</span></p>
        </div>
      </div>
    </main>
  )
}
