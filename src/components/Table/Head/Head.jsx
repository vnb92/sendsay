import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Head.scss';

export const Head = ({ className, children, ...others }) => (
  <thead className={cx('table__head', className)} {...others}>
    {children}
  </thead>
);

Head.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Head.defaultProps = {
  className: '',
};
