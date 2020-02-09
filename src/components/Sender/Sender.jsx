import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EmailBlock } from '../EmailBlock/EmailBlock';
import { inputNameSender, inputEmailSender } from '../../store/actions/form';
import './Sender.scss';

export const Sender = () => {
  const dispatch = useDispatch();
  const sender = useSelector(state => state.form.sender);
  const errors = useSelector(state => state.form.errors.sender);

  const handleInputName = e => {
    e.stopPropagation();
    dispatch(inputNameSender(e.target.value));
  };

  const handleInputEmail = e => {
    e.stopPropagation();
    dispatch(inputEmailSender(e.target.value));
  };

  return (
    <EmailBlock
      label="От кого"
      name={sender.name}
      onInputName={handleInputName}
      email={sender.email}
      onInputEmail={handleInputEmail}
      errors={errors}
    />
  );
};
