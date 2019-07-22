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
      </header>
    </section>

    <section className='blurb'>
      <h2>About</h2>
      <p>
        Hi, I&apos;m Luc. I like solving problems, and I like to create. I like
        to write, and I like to code. I work primarily in the MERN stack.
        I&apos;m a graduate of the{' '}
        <a href='https://www.unc.edu/'>
          University of North Carolina at Chapel Hill
        </a>{' '}
        and the <a href='https://www.projectshift.io/'>Project Shift</a>{' '}
        Software Engineering Fellowship.
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
