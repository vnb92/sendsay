import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { Table } from '../Table/Table';
import './MessagesList.scss';
import { checkMessageStatus } from '../../api/checkMessageStatus';
import { updateTrackStatus } from '../../store/actions/messages';
import { getTrackStatus } from '../../helpers/getTrackStatus';
import { ENV } from '../../config';

export const MessagesList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);
  const hasSentMessages = Boolean(messages.length);

  useEffect(() => {
    const timer = setInterval(() => {
      messages.forEach(async ({ id }) => {
        const trackStatus = await checkMessageStatus(id);

        const status = getTrackStatus(trackStatus);
        dispatch(updateTrackStatus({ id, status }));
      });
    }, ENV.UPDATE_TRACK_STATUS_INTERVAL_MS);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="messages-list">
      <h2 className="messages-list__title">{t('sentMessages')}</h2>
      {hasSentMessages
        ? (
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell className="table__date">{t('date')}</Table.Cell>
                <Table.Cell className="table__topic">{t('topic')}</Table.Cell>
                <Table.Cell className="table__status">{t('status')}</Table.Cell>
              </Table.Row>
            </Table.Head>

            <Table.Body>

              {messages.map(({ date, topic, status, id }) => (
                <Table.Row key={id}>
                  <Table.Cell className="table__date">{date}</Table.Cell>
                  <Table.Cell className="table__topic">{topic}</Table.Cell>
                  <Table.Cell className={cx(
                    'table__status',
                    `table__status-${status}`,
                  )}
                  >
                    {t(status)}
                  </Table.Cell>
                </Table.Row>
              ))}

            </Table.Body>
          </Table>
        )
        : t('notFoundSentMessages')}
    </div>
  );
};
