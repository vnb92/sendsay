import React from 'react';
import { Message } from '../Message/Message';
import { Topic } from '../Topic/Topic';
import { AttachFile } from '../AttachFile/AttachFile';
import { DragAndDrop } from '../DragAndDrop/DragAndDrop';
import { Sender } from '../Sender/Sender';
import { Recipient } from '../Recipient/Recipient';
import { Files } from '../Files/Files';
import { Submit } from '../Submit/Submit';
import './Form.scss';
import { useSelector } from 'react-redux';

export const Form = () => {
  const isDragAndDrop = useSelector(state => state.isDragAndDrop)

  return (
    <form className="form">
      <DragAndDrop />

      <h2 className="form__title">Отправлялка сообщений</h2>

      <Sender />
      <Recipient />
      <Topic />
      <Message />
      <Files />
      <AttachFile />
      <Submit />
    </form>
  )
};
