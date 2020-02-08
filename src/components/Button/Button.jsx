/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ text, ...others }) => (
  <button
    className="button"
    {...others}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};
