import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Input.scss';

export const Input = memo(({ className, error, ...other }) => (
  <div className="input">
    <input className={cx('input__field', className)} {...other} />
    <span className="input__error">{error}</span>
  </div>
));

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  error: '',
};
