import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FormBlock } from '../FormBlock/FormBlock';
import { inputMessage, unsetFormErrors } from '../../store/actions/form';
import './Message.scss';

export const Message = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const message = useSelector(({ form }) => form.message);
  const error = useSelector((state) => state.form.errors.message);

  const hasError = Boolean(error);

  const handleInput = (e) => {
    e.stopPropagation();
    dispatch(inputMessage(e.target.value));
  };

  const handleFocus = (e) => {
    e.stopPropagation();
    dispatch(unsetFormErrors());
  };

  const mockHandleChange = () => {};

  return (
    <FormBlock label={t('message')}>
      <textarea
        className="message"
        value={message}
        onInput={handleInput}
        onFocus={handleFocus}
        onChange={mockHandleChange}
      />
      {hasError && <span className="message__error">{error}</span>}
    </FormBlock>
  );
};
