import * as EmailValidator from 'email-validator';
import i18n from '../../i18n';
import { ENV } from '../../config';

const validators = {
  sender,
  recipient,
  topic,
  message,
  files,
};

export const validateForm = form => {
  const formFields = Object.entries(form);

  const formErrors = formFields.reduce((acc, [formField, value]) => {
    const validator = validators[formField];

    if (!validator) return acc;

    const errors = validator(value);
    return {
      ...acc,
      [formField]: errors,
    };
  }, {});

  return formErrors;
};

export const getHasError = errorsObject => {
  let hasError = false;

  const checkErrors = object => {
    const objectNodes = Object.values(object);

    objectNodes.forEach(node => {
      if (typeof node === 'object') {
        checkErrors(node);
      } else {
        // выход из рекурсии
        const hasSomeError = Boolean(node);
        if (hasSomeError) {
          hasError = true;
        }
      }
    });
  };

  checkErrors(errorsObject);

  return hasError;
};

function sender(field) {
  return validateEmailBlock(field);
}

function recipient(field) {
  return validateEmailBlock(field);
}

function topic(field) {
  return isEmptyString(field) ? i18n.t('emptyTopicError') : '';
}

function message(field) {
  return isEmptyString(field) ? i18n.t('emptyMessageError') : '';
}

function files(attachFiles) {
  let error = '';

  const defaultTotalSize = 0;
  const totalSize = attachFiles.reduce((acc, file) => {
    if (totalSize > ENV.MAX_FILE_SIZE_MB) {
      error = i18n.t('maxFileSizeError', { size: ENV.MAX_FILE_SIZE_MB });
    }

    return acc + file.size;
  }, defaultTotalSize);

  if (totalSize > ENV.MAX_TOTTAL_FILE_SIZE_MB) {
    error = i18n.t('maxTotalFilesSizeError', { size: ENV.MAX_TOTAL_FILE_SIZE_MB });
  }

  return error;
}

function validateEmailBlock({ name, email }) {
  const errors = {};

  const isEmptyName = isEmptyString(name);
  if (isEmptyName) {
    errors.name = i18n.t('emptyNameError');
  }

  const isValidEmail = EmailValidator.validate(email);
  if (!isValidEmail) {
    errors.email = i18n.t('invalidEmail');
  }

  return errors;
}

function isEmptyString(value) {
  return Boolean(!value.trim());
}
