import React from 'react';
import cx from 'classnames';
import { Body } from './Body/Body';
import { Head } from './Head/Head';
import { Row } from './Row/Row';
import { Cell } from './Cell/Cell';
import './Table.scss';

export const Table = ({ className, children, ...others }) => (
  <table className={cx('table', className)} {...others}>
    {children}  
  </table>
);

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;