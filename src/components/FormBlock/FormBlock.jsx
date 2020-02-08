import React from 'react';
import PropTypes from 'prop-types';
import './FormBlock.scss';

export const FormBlock = ({ label, children }) => (
  <div className="form-block">
    <span className="form-block__label">{label}</span>
    {children}
  </div>
);

FormBlock.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

FormBlock.defaultProps = {
  label: '',
  children: null,
};
