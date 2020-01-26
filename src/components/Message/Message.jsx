import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormBlock } from '../FormBlock/FormBlock';
import { inputMessage } from '../../store/actions/form';
import './Message.scss';

export const Message = (props) => {
  const dispatch = useDispatch();
  const message = useSelector(({ form }) => form.message);

  const handleInput = (e) => {
    e.stopPropagation()
    dispatch(inputMessage(e.target.value))
  }

  return (
    <FormBlock label="Сообщение">
      <textarea
        className="message"
        value={message}
        onInput={handleInput}
      />
    </FormBlock>
  )
};
