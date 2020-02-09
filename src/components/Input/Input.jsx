import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Input.scss';

export const Input = ({ isDual, error, onChange, ...other }) => (
  <div
    className={cx(
      'input',
      isDual && 'input-dual',
    )}
  >
    <input
      className="input__field"
      onChange={onChange}
      {...other}
    />
    {Boolean(error) && <span className="input__error">{error}</span>}
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func,
  isDual: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  isDual: false,
  error: '',
};
