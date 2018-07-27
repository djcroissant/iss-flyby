import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handleClick }) => (
  <button className="button middle calculate" onclick={handleClick}>
    {text}
  </button>
);

export default Button