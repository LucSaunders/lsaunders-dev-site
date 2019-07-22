import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className='post' id='index'>
      <header>
        <div className='title'>
          <h2>
            <Link to='/'>About this site</Link>
          </h2>
          <p>A responsive React app</p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. You can read <Link to='/about'>about me </Link>
        or view my <Link to='/resume'>resume</Link>, my{' '}
        <Link to='/projects'>projects</Link>, or my{' '}
        <Link to='/stats'> personal stats</Link>.
      </p>
      <p>
        {' '}
        Site source code available{' '}
        <a href='https://github.com/lucsaunders/lsaunders-dev-site'>here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
