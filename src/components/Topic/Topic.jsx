import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormBlock } from '../FormBlock/FormBlock';
import { Input } from '../Input/Input';
import { inputTopic } from '../../store/actions/form';
import './Topic.scss';

export const Topic = () => {
  const dispatch = useDispatch();
  const topic = useSelector(({ form }) => form.topic);
  const error = useSelector(({ form }) => form.errors.topic);

  const handleInput = (e) => {
    e.stopPropagation();
    dispatch(inputTopic(e.target.value));
  };

  return (
    <FormBlock label="Тема письма">
      <Input
        type="text"
        placeholder="Введите тему"
        value={topic}
        onInput={handleInput}
        error={error}
      />
    </FormBlock>
  );
};
