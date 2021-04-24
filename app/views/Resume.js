import React from 'react';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Certifications from '../components/Resume/Certifications';
// import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import certifications from '../data/resume/certifications';

const sections = [' Education ', ' Experience ', ' Skills ', ' Certifications'];

const Resume = () => (
  <Main>
    <Helmet title='Resume' />
    <article className='post' id='resume'>
      <header>
        <div className='title'>
          <h2>Resume</h2>
          <div className='link-container'>
            {sections.map(sec => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <br />
      <Experience data={positions} />
      <br />
      <Skills skills={skills} categories={categories} />
      <br />
      <Certifications data={certifications} />
      <br />
      {/* <References /> */}
      <br />
    </article>
  </Main>
);

export default Resume;
