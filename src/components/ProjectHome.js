import React from 'react';

export default function ProjectHome (props) {

  return (
    <main className="project-home">
      <section className="project-contents">
        <header>
          <div className="sass-logo"></div>
          <div className="project-title">
            <h1>Homepage Gallery</h1>
            <p>Pixel-perfect clones of high-quality homepages.</p>
          </div>
        </header>

        <div className="thumbnail-container">
          <div className="homepage-thumbnail hack-reactor">
          </div>
          <div className="homepage-thumbnail hack-reactor"></div>
          <div className="homepage-thumbnail hack-reactor"></div>
        </div>
      </section>
    </main>
  )
}
