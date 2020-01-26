import React from 'react';
import './FormBlock.scss';

export const FormBlock = (props) => (
  <div className="form-block">
      <span className="form-block__label">{props.label}</span>
      {props.children}
  </div>
);
