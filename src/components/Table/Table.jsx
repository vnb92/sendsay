import React from 'react';
import PropTypes from 'prop-types';
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

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Table.defaultProps = {
  className: '',
};

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
