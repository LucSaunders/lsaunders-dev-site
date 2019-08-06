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
          <h2>Projects</h2>
          <p>A selection of my recent work</p>
        </div>
      </header>
      <section className='blurb'>
        <p>
          I have a couple of exciting, original full-stack projects in
          development, which I'll add to this page once they're complete. Please
          be sure to check back here in the coming weeks.
        </p>
      </section>
      {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
