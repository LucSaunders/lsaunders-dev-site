import React from 'react';
import PropTypes from 'prop-types';

import Certificate from './Certifications/Certificate';

const getRows = certifications =>
  certifications
    .sort((a, b) => {
      let ret = 0;
      if (a.university > b.university) ret = -1;
      else if (a.unversity < b.university) ret = 1;
      else if (a.number > b.number) ret = 1;
      else if (a.number < b.number) ret = -1;
      return ret;
    })
    .map((certificate, idx) => (
      <Certificate
        data={certificate}
        key={certificate.title}
        last={idx === certifications.length - 1}
      />
    ));

const Certifications = ({ data }) => (
  <div className='certifications'>
    <div className='link-to' id='certifications' />
    {/* <div className='name'> */}
    <div className='title'>
      <h3>Certifications</h3>
    </div>
    <ul className='certificate-list'>{getRows(data)}</ul>
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string
    })
  )
};

Certifications.defaultProps = {
  data: []
};

export default Certifications;
