import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id='sidebar'>
    <section id='intro'>
      <Link to='/' className='logo'>
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt='' />
      </Link>
      <header>
        <h2>Luc Saunders</h2>
        <p>
          <a href='mailto:lucsaunders@gmail.com'>lucsaunders@gmail.com</a>
        </p>
      </header>
    </section>

    <section className='blurb'>
      <h2>About</h2>
      <p>
        Hi, I&apos;m Luc. I like solving problems with creative logic. By
        iterating through a thoughtfully designed loop, for instance. I also
        like to create. That brings me joy. But some of the things I create, no
        matter what I do, inevitably include problems. Which I like to try to
        solve. With creative logic.
      </p>
      <p>
        I&apos;m a graduate of the University of North Carolina at Chapel Hill
        and the <a href='https://www.projectshift.io/'>Project Shift</a>{' '}
        Software Engineering Fellowship. Those educational experiences were
        invaluable, but through hard work and study, curiosity and play, and the
        gift of infinite teachers both online and in person, my learning
        continues...
      </p>
      <ul className='actions'>
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to='/resume' className='button'>
              Learn More
            </Link>
          ) : (
            <Link to='/about' className='button'>
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id='footer'>
      <ul className='icons'>
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
