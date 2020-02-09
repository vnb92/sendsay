import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FormBlock } from '../FormBlock/FormBlock';
import { Input } from '../Input/Input';
import { inputTopic, unsetFormErrors } from '../../store/actions/form';
import './Topic.scss';

export const Topic = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const topic = useSelector(({ form }) => form.topic);
  const error = useSelector(({ form }) => form.errors.topic);

  const handleInput = (e) => {
    e.stopPropagation();
    dispatch(inputTopic(e.target.value));
  };

  const handleFocus = (e) => {
    e.stopPropagation();
    dispatch(unsetFormErrors());
  };

  return (
    <FormBlock label={t('topic')}>
      <Input
        type="text"
        placeholder={t('enterTopic')}
        value={topic}
        onInput={handleInput}
        onFocus={handleFocus}
        error={error}
      />
    </FormBlock>
  );
};
