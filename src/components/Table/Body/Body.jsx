import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Body.scss';

export const Body = ({ className, children, ...others }) => (
  <tbody className={cx('table__body', className)} {...others}>
    {children}
  </tbody>
);

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Body.defaultProps = {
  className: '',
};
