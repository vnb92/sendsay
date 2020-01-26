import React from 'react';
import './Button.scss';

export const Button = ({text, ...others }) => (
  <button className="button" {...others} >{text}</button>
);
