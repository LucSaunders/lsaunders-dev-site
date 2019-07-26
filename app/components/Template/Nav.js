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
      <p>
        Hi, I&apos;m Luc. I like solving problems through creativity and code. I
        work primarily in React and Node, with relational and
        NoSQL databases. I&apos;m a graduate of the{' '}
        <a href='https://www.unc.edu/'>
          University of North Carolina at Chapel Hill
        </a>{' '}
        and the <a href='https://www.projectshift.io/'>Project Shift</a>{' '}
        Software Engineering Fellowship.
      </p>
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
