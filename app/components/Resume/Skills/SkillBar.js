import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories }) => {
  const { category, title } = data;

  const titleStyle = {
    background: categories
      .filter(cat => category.includes(cat.name))
      .map(cat => cat.color)[0]
  };

  return (
    <div className='skillbar clearfix'>
      <div className='skillbar-title' style={titleStyle}>
        <span>{title}</span>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string
    })
  )
};

SkillBar.defaultProps = {
  categories: []
};

export default SkillBar;
