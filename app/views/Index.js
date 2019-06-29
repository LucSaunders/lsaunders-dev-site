import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className='post' id='index'>
      <header>
        <div className='title'>
          {/* <h2><Link to="/">About this site</Link></h2> */}
          <p>A responsive React app.</p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. You can read <Link to='/about'>about me</Link>,
        or check out my <Link to='/resume'>resume</Link>,{' '}
        <Link to='/projects'>projects</Link>, or view my{' '}
        <Link to='/stats'> personal stats</Link>.
        {/* or <Link to="/contact">contact</Link> me. */}
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href='https://github.com/lucsaunders/lsaunders-dev-site'>here</a>.
      </p>
    </article>
  </Main>
);

export default Index;