import React from 'react';
import cx from 'classnames';
import './Row.scss';

export const Row = ({ className, children, ...others }) => (
  <tr className={cx('table__row', className)} {...others}>
    {children}  
  </tr>
);
