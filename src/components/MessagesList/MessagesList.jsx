import React from 'react';
import { Table } from '../Table/Table';
import './MessagesList.scss'

export const MessagesList = () => (
  <div className="messages-list">
    <h2 className="messages-list__title">Отправленные сообщения</h2>
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell className="table__date">Дата</Table.Cell>
          <Table.Cell className="table__topic">Тема</Table.Cell>
          <Table.Cell className="table__status">Статус</Table.Cell>
        </Table.Row>
      </Table.Head>

      <Table.Body>

        <Table.Row>
          <Table.Cell className="table__date">30 сентября</Table.Cell>
          <Table.Cell className="table__topic">Тема письма, которая не поместиться в эту строку, потому что ffffff</Table.Cell>
          <Table.Cell className="table__status table__status-complete">Отправленно</Table.Cell>
        </Table.Row>

      </Table.Body>
    </Table>
  </div>
);
