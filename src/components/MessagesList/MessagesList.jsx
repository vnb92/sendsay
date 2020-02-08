import React from 'react';
// import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table } from '../Table/Table';
import './MessagesList.scss';

export const MessagesList = () => {
  const { t } = useTranslation();
  // const messages = useSelector(state => state.messages);
  return (
    <div className="messages-list">
      <h2 className="messages-list__title">{t('sentMessages')}</h2>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell className="table__date">{t('date')}</Table.Cell>
            <Table.Cell className="table__topic">{t('topic')}</Table.Cell>
            <Table.Cell className="table__status">{t('status')}</Table.Cell>
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
  )
};
