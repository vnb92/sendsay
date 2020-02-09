import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FormBlock } from '../FormBlock/FormBlock';
import { Input } from '../Input/Input';
import './EmailBlock.scss';

export const EmailBlock = ({
  label,
  name,
  email,
  onInputName,
  onFocusName,
  onInputEmail,
  onFocusEmail,
  errors,
}) => {
  const { t } = useTranslation();

  return (
    <FormBlock label={label}>
      <div className="email-block">
        <Input
          type="text"
          placeholder={t('name')}
          value={name}
          onInput={onInputName}
          onFocus={onFocusName}
          error={errors.name}
          isDual
        />
        <Input
          type="email"
          placeholder={t('email')}
          value={email}
          onInput={onInputEmail}
          onFocus={onFocusEmail}
          error={errors.email}
          isDual
        />
      </div>
    </FormBlock>
  );
};

EmailBlock.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  onInputName: PropTypes.func,
  onInputEmail: PropTypes.func,
  onFocusName: PropTypes.func,
  onFocusEmail: PropTypes.func,
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
  onFocusName: () => {},
  onInputEmail: () => {},
  onFocusEmail: () => {},
};
