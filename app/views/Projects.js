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
          <p>A selection of recently completed work</p>
        </div>
      </header>
      <section className='blurb'>
        <p> 
          The COVID-19 pandemic accelerated my work on the Twilio Platform and its flagship, Twilio Flex. I have built healthcare
          contact centers with call prioritization and automated vaccine scheduling for patients; IT support-desk integrations for medical professionals; 
          bilingual chatbots and automated billing for retail clients; and analytics reporting with custom data views for monitoring Key 
          Performance Indicators (KPIs).
          </p>
          <p>My current projects implement omnichannel communication capabilities, with a focus on
          Interactive Voice Response flows (IVRs) and Natural Language Processing (NLP).
        </p>
      </section>
      {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
      
    </article>
  </Main>
);

export default Projects;
