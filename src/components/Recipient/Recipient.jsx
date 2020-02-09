import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { EmailBlock } from '../EmailBlock/EmailBlock';
import {
  inputNameRecipient,
  inputEmailRecipient,
  unsetFormErrors,
} from '../../store/actions/form';
import './Recipient.scss';

export const Recipient = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const recipient = useSelector(({ form }) => form.recipient);
  const errors = useSelector(state => state.form.errors.recipient);

  const handleInputName = e => {
    e.stopPropagation();
    dispatch(inputNameRecipient(e.target.value));
  };

  const handleInputEmail = e => {
    e.stopPropagation();
    dispatch(inputEmailRecipient(e.target.value));
  };

  const handleFocus = e => {
    e.stopPropagation();
    dispatch(unsetFormErrors());
  };

  return (
    <EmailBlock
      label={t('to')}
      name={recipient.name}
      onInputName={handleInputName}
      onFocusName={handleFocus}
      email={recipient.email}
      onInputEmail={handleInputEmail}
      onFocusEmail={handleFocus}
      errors={errors}
    />
  );
};
