import React from 'react';
import { useTranslation } from 'react-i18next';
import { DragAndDrop } from '../DragAndDrop/DragAndDrop';
import { PendingMessage } from '../PendingMessage/PendingMessage';
import { Sender } from '../Sender/Sender';
import { Recipient } from '../Recipient/Recipient';
import { Topic } from '../Topic/Topic';
import { Message } from '../Message/Message';
import { AttachFile } from '../AttachFile/AttachFile';
import { Files } from '../Files/Files';
import { Submit } from '../Submit/Submit';
import './Form.scss';

export const Form = () => {
  const { t } = useTranslation();
  return (
    <form className="form">
      <DragAndDrop />
      <PendingMessage />
      <h2 className="form__title">{t('messageSending')}</h2>
      <Sender />
      <Recipient />
      <Topic />
      <Message />
      <Files />
      <AttachFile />
      <Submit />
    </form>
  );
};
