import React from 'react';
import cx from 'classnames';
import './Cell.scss';

export const Cell = ({ className, children, ...others }) => (
  <td className={cx('table__cell', className)} {...others}>
    {children}  
  </td>
);
