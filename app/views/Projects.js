import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main>
    <Helmet title='Projects' />
    <article className='post' id='projects'>
      <header>
        <div className='title'>
          <h2>
            <Link to='/projects'>Projects</Link>
          </h2>
          <p>A selection of my recent work</p>
        </div>
      </header>
      <div>
        <p><i>I have a couple of exciting full-stack projects currently in development, which I'll add to this page after they're complete, so please be sure to check back here in the coming weeks.</i> </p>
      </div>
      {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
