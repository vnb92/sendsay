import React from 'react';
import { FormBlock } from '../FormBlock/FormBlock';
import { Input } from '../Input/Input';
import './EmailBlock.scss';

export const EmailBlock = ({
  label,
  name,
  email,
  onInputName,
  onInputEmail
}) => (
  <FormBlock label={label}>
    <div className="email-block">
      <Input
        type="text"
        placeholder="Имя"
        className="input-dual-left"
        value={name}
        onInput={onInputName}
      />
      <Input
        type="email"
        placeholder="Email"
        className="input-dual-right"
        value={email}
        onInput={onInputEmail}
      />
    </div>
  </FormBlock>
)

