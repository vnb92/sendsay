import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Cell.scss';

export const Cell = ({ className, children, ...others }) => (
  <td className={cx('table__cell', className)} {...others}>
    {children}
  </td>
);

Cell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

Cell.defaultProps = {
  className: '',
};
