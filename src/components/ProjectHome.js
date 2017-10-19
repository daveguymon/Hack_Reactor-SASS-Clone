import React from 'react';
import {Link} from 'react-router-dom';

export default function ProjectHome (props) {

  return (
    <main className="project-home">
      <header>
        <img src="http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png" alt="sass logo"/>
      </header>

      <h1 className="project-description">I taught myself <span>SASS</span> to make my code even better.</h1>

      <div className="projects">
        <Link to="/hack-reactor">
        <div className="thumbnail-container hack-reactor-project">
        </div>
        </Link>


        <Link to="/mx">
        <div className="thumbnail-container mx-project"></div>
        </Link>

        <Link to="/uber">
        <div className="thumbnail-container uber-project">
        </div>
        </Link>
      </div>
    </main>
  )
}
