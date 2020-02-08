import React from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from '../Icon/Icon';
import './AttachFile.scss';
import { handleFiles } from '../../helpers/handleFiles';

export const AttachFile = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.stopPropagation();

    const files = [...e.target.files];

    handleFiles(dispatch, files);
  };

  return (
    <div className="attach-file">
      <label
        className="attach-file__label"
        htmlFor="file"
      >
        <Icon
          name="clip-mini"
          className="attach-file__clip-icon"
          width={17}
          height={15}
        />

        <span className="attach-file__text">Прикрепить файл</span>

        <input
          onChange={handleChange}
          type="file"
          className="attach-file__input-hidden"
          id="file"
          name="file"
          multiple
          accept=".jpg, .jpeg, .png, .md"
        />
      </label>
    </div>
  );
};
