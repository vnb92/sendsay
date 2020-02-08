import React from 'react';
import { useTranslation } from 'react-i18next';
import { Message } from '../Message/Message';
import { Topic } from '../Topic/Topic';
import { AttachFile } from '../AttachFile/AttachFile';
import { DragAndDrop } from '../DragAndDrop/DragAndDrop';
import { Sender } from '../Sender/Sender';
import { Recipient } from '../Recipient/Recipient';
import { Files } from '../Files/Files';
import { Submit } from '../Submit/Submit';
import './Form.scss';

export const Form = () => {
  const { t } = useTranslation();
  return (
    <form className="form">
      <DragAndDrop />
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
