import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EmailBlock } from '../EmailBlock/EmailBlock';
import { inputNameRecipient, inputEmailRecipient } from '../../store/actions/form';
import './Recipient.scss';

export const Recipient = () => {
  const dispatch = useDispatch();
  const recipient = useSelector(({ form }) => form.recipient);

  const handleInputName = e => {
    e.stopPropagation();
    dispatch(inputNameRecipient(e.target.value));
  };

  const handleInputEmail = e => {
    e.stopPropagation();
    dispatch(inputEmailRecipient(e.target.value));
  };

  return (
    <EmailBlock
      label="Кому"
      name={recipient.name}
      onInputName={handleInputName}
      email={recipient.email}
      onInputEmail={handleInputEmail}
    />
  );
};
