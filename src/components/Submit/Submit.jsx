import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { sendMessage } from '../../api/sendMessage';

export const Submit = () => {
  const form = useSelector(state => state.form);

  const handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();

    sendMessage(form);
  };

  return (
    <Button
      type="button"
      text="Отправить"
      onClick={handleSubmit}
    />
  );
};
