import React, { useState, useEffect } from 'react';
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
  const [isDragAndDrop, setIsDragAndDrop] = useState(false);

  const handleDragEnter = (e) => {
    if(isDragAndDrop) return
    setIsDragAndDrop(true)
  }

  const handleDragLeave = (e) => {
    if(e.target !== e.currentTarget) return
    setIsDragAndDrop(false)
  }

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
    }
  }

  useEffect(() => {
    const appNode = document.querySelector('.app')
    appNode.addEventListener('dragenter', handleDragEnter);
    appNode.addEventListener('dragleave', handleDragLeave);
  }, [])

  return (
    <form className="form">
      {isDragAndDrop && <DragAndDrop handleDrop={handleDrop} />}
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
