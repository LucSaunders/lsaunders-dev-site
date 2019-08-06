import React from 'react';
import PropTypes from 'prop-types';

const CategoryButton = ({ active, label }) => <button>{label}</button>;

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  // handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired
};

export default CategoryButton;
