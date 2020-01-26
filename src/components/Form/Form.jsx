import React from 'react';
import { FormBlock } from '../FormBlock/FormBlock';
import { Input } from '../Input/Input';
import { Email } from '../Email/Email';
import { AttachFile } from '../AttachFile/AttachFile';
import { Button } from '../Button/Button';
import './Form.scss'

export const Form = () => (
  <form className="form">
    <h2 className="form__title">Отправлялка сообщений</h2>

    <Email label="От кого" />

    <Email label="Кому" />

    <FormBlock label="Тема письма">
      <Input type="text" placeholder="Введите тему" />
    </FormBlock>

    <FormBlock label="Сообщение">
      <textarea className="message"></textarea>
    </FormBlock>

    <AttachFile />

    <Button
      type="submit"
      text="Отправить"
    />
  </form>
);
