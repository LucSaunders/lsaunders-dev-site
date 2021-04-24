import React from 'react';
import PropTypes from 'prop-types';

const Certificate = ({ data, last }) => (
  <li className='certificate-container'>
    <a href={data.link}>
      <h4 className='certificate-name'>{data.name}:</h4>
    </a>
    {!last && (
      <div className='certificate-dot'>
        <p className='certificate-name'> &#8226;</p>
      </div>
    )}
  </li>
);

Certificate.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool
};

Certificate.defaultProps = {
  last: false
};

export default Certificate;
