import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormBlock } from '../FormBlock/FormBlock';
import { inputMessage } from '../../store/actions/form';
import './Message.scss';

export const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector(({ form }) => form.message);
  const error = useSelector((state) => state.form.errors.message);

  const hasError = Boolean(error);

  const handleInput = (e) => {
    e.stopPropagation();
    dispatch(inputMessage(e.target.value));
  };

  return (
    <FormBlock label="Сообщение">
      <textarea
        className="message"
        value={message}
        onInput={handleInput}
      />
      {hasError && <span className="message__error">{error}</span>}
    </FormBlock>
  );
};
