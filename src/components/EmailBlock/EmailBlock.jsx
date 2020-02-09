import React from 'react';
import PropTypes from 'prop-types';
import { FormBlock } from '../FormBlock/FormBlock';
import { Input } from '../Input/Input';
import './EmailBlock.scss';

export const EmailBlock = ({
  label,
  name,
  email,
  onInputName,
  onInputEmail,
  errors,
}) => (
  <FormBlock label={label}>
    <div className="email-block">
      <Input
        type="text"
        placeholder="Имя"
        value={name}
        onInput={onInputName}
        error={errors.name}
        isDual
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onInput={onInputEmail}
        error={errors.email}
        isDual
      />
    </div>
  </FormBlock>
);

EmailBlock.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  onInputName: PropTypes.func,
  onInputEmail: PropTypes.func,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

EmailBlock.defaultProps = {
  label: '',
  name: '',
  email: '',
  onInputName: () => {},
  onInputEmail: () => {},
};
