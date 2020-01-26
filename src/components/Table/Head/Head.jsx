import React from 'react';
import cx from 'classnames';
import './Head.scss';

export const Head = ({ className, children, ...others }) => (
  <thead className={cx('table__head', className)} {...others}>
    {children}  
  </thead>
);
