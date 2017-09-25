import React from 'react';

export default function InTheNews (props){

  return (
    <main className="in-the-news">
      <h1>Hack Reactor in the News</h1>
      <div className="news-content-container">

        <div className="news-thumbnail thumbnail-cnbc">
          <a href="https://www.cnbc.com/video/2016/08/24/boot-camp-for-coders.html" target="_blank" rel="noopener noreferrer">
          <div className="thumbnail-img-container">
            <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/press/cnbc.png" alt="CNBC" />
          </div>
          <p>98% of Hack Reactor Students<br />Land Jobs.</p>
          </a>
        </div>

        <div className="news-thumbnail thumbnail-bloomberg">
          <a href="https://www.bloomberg.com/news/articles/2015-05-07/coding-classes-attract-college-grads-who-want-better-jobs" target="_blank" rel="noopener noreferrer">
          <div className="thumbnail-img-container">
            <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/press/bloomberg.png" alt="Bloomberg" />
          </div>
          <p>Nice Ivy League Degree. Now if<br />You Want a Job, Go to Code<br />School.</p>
          </a>
        </div>

        <div className="news-thumbnail thumbnail-techcrunch">
          <a href="https://techcrunch.com/2013/09/02/hack-reactor-coding-bootcamp/" target="_blank" rel="noopener noreferrer">
          <div className="thumbnail-img-container">
            <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/press/tech-crunch.png" alt="TechCrunch" />
          </div>
          <p>Inside Hack Reactor, The<br />Coding Bootcamp That Wants<br />To Be The CS Degree Of The<br />Future.</p>
          </a>
        </div>

        <div className="news-thumbnail thumbnail-techco">
          <a href="https://tech.co/top-33-coding-bootcamps-2015-02" target="_blank" rel="noopener noreferrer">
          <div className="thumbnail-img-container">
            <img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/press/tech-co.png" alt="TechCo" />
          </div>
          <p>Top 33 Coding Bootcamps.</p>
          </a>
        </div>
      </div>
    </main>
  )
}
