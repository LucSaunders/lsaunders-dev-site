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
        <h3>Luc Saunders</h3>
        {/* <p>
          <a href='mailto:lucsaunders@gmail.com'>lucsaunders@gmail.com</a>
        </p> */}
      </header>
    </section>

    <section className='blurb'>
      <p>
        Hi, I&apos;m Luc. I like solving problems through creativity and code. I
        work primarily in React and Node, with relational and non-relational
        databases.{' '}
        {/* I also like to write, with a focus on psychology, digital anthropology, and personal growth.  */}
        I&apos;m a graduate of the{' '}
        <a href='https://www.unc.edu/'>
          University of North Carolina at Chapel Hill
        </a>{' '}
        and the <a href='https://www.projectshift.io/'>Project Shift</a>{' '}
        Software Engineering Fellowship.
      </p>

      <ul className='actions'>
        <li>
          {window.location.pathname !== `${BASE_PATH}/about` ? (
            <Link to='/about' className='button'>
              Learn more
            </Link>
          ) : (
            <Link to='/resume' className='button'>
              Learn more
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
      <p className='copyright'>
        &copy; Luc Saunders <Link to='/'>lucsaunders.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
