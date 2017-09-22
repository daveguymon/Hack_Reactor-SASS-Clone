import React from 'react';

export default function Testimonials (props) {

  return (
    <main className="testimonials">
      <div className="quote-grid quote-grid-left">
        <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/quotes/krystal-raphael.jpg" alt="former student"/>
        <div className="testimonial-container testimonial-left">
          <div className="arrow-up"></div>
          <p className="student-quote">“If you have the opportunity to attend, you should definitely make the commitment.”</p>
          <p className="student-name">Krystal Raphael — Paypal</p>
        </div>
      </div>

      <div className="quote-grid quote-grid-middle">
        <div className="testimonial-container testimonial-middle">
          <p className="student-quote">“This has been the best three<br />
          months ever.”</p>
          <p className="student-name">Charlie Harrington — LendUp</p>
          <div className="arrow-up"></div>
        </div>
        <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/quotes/charlie-harrington.jpg" alt="former student" />
      </div>

      <div className="quote-grid quote-grid-right">
        <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/quotes/julie-knowles.jpg" alt="former student" />
        <div className="testimonial-container testimonial-right">
          <div className="arrow-up"></div>
          <p className="student-quote">“I love my job for the
          <br />first time in my life.”</p>
          <p className="student-name">Julie Knowles — KnuVerse</p>
        </div>
      </div>

    </main>
  )
}
