import React from 'react';
import cx from 'classnames';
import './Input.scss';

export const Input = ({ className, error, ...other }) => (
  <div className="input">
    <input className={cx('input__field', className)} {...other} />
    <span className="input__error">{error}</span>
  </div>
);

Input.defaultProps = {
  error: ''
}