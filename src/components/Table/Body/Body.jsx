import React from 'react';
import cx from 'classnames';
import './Body.scss';

export const Body = ({ className, children, ...others }) => (
  <tbody className={cx('table__body', className)} {...others}>
    {children}  
  </tbody>
);
