import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Row.scss';

export const Row = ({ className, children, ...others }) => (
  <tr className={cx('table__row', className)} {...others}>
    {children}
  </tr>
);

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Row.defaultProps = {
  className: '',
};
