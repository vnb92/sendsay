import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './PendingMessage.scss';

export const PendingMessage = () => {
  const { t } = useTranslation();
  const recipientEmail = useSelector(state => state.form.recipient.email);
  const isPending = useSelector(state => state.form.isPending);

  return (
    <>
      {isPending
        ? (
          <div className="pending-message">
            <span className="pending-message__title">
              {t('messageInPending')}
            </span>
            <span className="pending-message__description">
              {t('mescriptionMessageInPending', { email: recipientEmail })}
            </span>
          </div>
        )
        : null}
    </>
  );
};
