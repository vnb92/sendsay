import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';

export const Submit = () => {
  const form = useSelector(({ form })=> form);

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(form)
  }
  return (
    <Button
      type="button"
      text="Отправить"
      onClick={handleSubmit}
    />
  )
};
