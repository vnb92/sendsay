import React from 'react';
import { Icon } from '../Icon/Icon';
import './File.scss';

export const File = ({ file, onRemove }) => (
  <div className="file">
    {file.size > 10000
      ? (
        <div className="file__error-limit">файл превышает макс. размер 5МБ</div>
      )
      : null
    }
    <Icon
      name="clip"
      className="file__icon-clip"
      width={34}
      height={30}
    />

    <span className="file__name" >{ file.name }</span>

    <button
      type="button"
      className="file__trash"
      onClick={onRemove}
    >
      <Icon
        name="trash"
        className="file__trash-icon"
        width={13}
        height={16}
      />
      <span className="file__trash-title">Удалить</span>
    </button>
  </div>
);

File.defaultProps = {
  name: 'Имя файла'
}
