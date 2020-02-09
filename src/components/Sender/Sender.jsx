import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { EmailBlock } from '../EmailBlock/EmailBlock';
import {
  inputNameSender,
  inputEmailSender,
  unsetFormErrors,
} from '../../store/actions/form';
import './Sender.scss';

export const Sender = () => {
  const { t } = useTranslation();
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

  const handleFocus = e => {
    e.stopPropagation();
    dispatch(unsetFormErrors());
  };

  return (
    <EmailBlock
      label={t('from')}
      name={sender.name}
      onInputName={handleInputName}
      onFocusName={handleFocus}
      email={sender.email}
      onInputEmail={handleInputEmail}
      onFocusEmail={handleFocus}
      errors={errors}
    />
  );
};
