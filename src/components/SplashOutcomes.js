import React from 'react';

export default function SplashOutcomes(props){

  return (
    <main className="splash-outcomes">
      <section className="outcomes-content">
        <h1 className="outcomes-heading">The Leading Coding Bootcamp<br />
        in Program Quality & Student Outcomes</h1>
        <div className="bottom-contents">
          <section className="bottom-left">
            <div className="popout-box">
              <h2 className="popout-heading">Trustable, Verifiable Outcomes</h2>
              <div className="median-salary-cirr">
                <div className="median-salary-container">
                  <h1 className="salary-fig">$105k</h1>
                  <h3 className="sf-median">San Francisco<br />
                  Median Salary</h3>
                </div>
                <div className="cirr-container">
                  <div className="cirr-logo"></div>
                </div>
              </div>
              <div className="outcomes-stats">
                <p>Percentage of reported salaries displayed: 100%</p>
                <br />
                <p>Percentage of job obtainers who reported salaries: 80%</p>
              </div>

              <div className="outcomes-btn">
                <p>See Our Outcomes</p>
              </div>
            </div>
          </section>

          <section className="bottom-right">
            <p>Hack Reactor invests heavily in outcomes. Not only are we the leader in <strong>outcomes transparency</strong>, but also <strong>outcomes performance</strong>. How do we do it? In a sentence, we backwards-engineered our immersive coding bootcamps to produce top talent.</p>
            <br />
            <p>Our curriculum designers are former Engineering & Hiring Managers from some of top tech companies, now training people they would hire. We teach industry-relevant skills and engineering practices, and we go beyond coding. Hack Reactor builds heavily from Computer Science fundamentals & first principles - teaching you to not just code, but to truly think like an engineer.</p>
            <br />
            <p>The results show. As a founding member of CIRR, the largest coalition to standardized results reporting, truth and transparency are key attributes to our program and part of our devotion to quality for our students.</p>
          </section>
        </div>
      </section>
    </main>
  )
}
