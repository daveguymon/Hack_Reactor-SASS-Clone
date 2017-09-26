import React from 'react';
import {Link} from 'react-router-dom';

export default function ProjectHome (props) {

  return (
    <main className="project-home">
      <header>
        <img src="http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png" alt="sass logo"/>
        <p>a few <span>pixel perfect</span> homepage clones.</p>
      </header>

      <h1 className="project-description">I taught myself <span>SASS</span> to make my code even better.</h1>

      <div className="projects">
        <Link to="/hack-reactor">
        <div className="thumbnail-container hack-reactor-project">
        </div>
        </Link>

        <div className="thumbnail-container">
        </div>

        <div className="thumbnail-container">
        </div>
      </div>
    </main>
  )
}
