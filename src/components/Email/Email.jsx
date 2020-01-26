import React from 'react';
import { FormBlock } from '../FormBlock/FormBlock';
import { Input } from '../Input/Input';
import './Email.scss';

export const Email = (props) => (
  <FormBlock label={props.label}>
    <div className="email">
      <Input type="text" placeholder="Имя" />
      <Input type="email" placeholder="Email" />
    </div>
  </FormBlock>
);
