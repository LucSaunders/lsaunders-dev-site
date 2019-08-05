import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => (
  <Main>
    <Helmet title='Stats' />
    <article className='post' id='stats'>
      <header>
        <div className='title'>
          <h2>Stats</h2>
          <p>Data of a personal nature</p>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;
