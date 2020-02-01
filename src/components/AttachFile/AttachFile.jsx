import React from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from '../Icon/Icon';
import './AttachFile.scss';
import { addFile } from '../../store/actions/form';

export const AttachFile = (props) => {
  const dispatch = useDispatch()

  const handleLoadFile = (e, file) => {
    const { name , size } = file;
    const content = window.btoa(e.target.result);

    const fileToSend = {
      name,
      size,
      content,
      encoding: 'base64'
    }

    dispatch(addFile(fileToSend))
  }

  const handleChange = (e) => {
    e.stopPropagation();

    const MB_MULTIPLIER = 1000000;
    const MAX_FILE_SIZE_MB = 5;

    const { files } = e.target;

    const filesToArray = Object.values(files);

    filesToArray.forEach(file => {
      const { size } = file;
      if (size * MB_MULTIPLIER > MAX_FILE_SIZE_MB) {
        console.log('big file')
      }

      const reader = new FileReader()
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => handleLoadFile(e, file);
      reader.onerror = (e) => console.log('error', e.target.error);
    });
  }

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
        />
      </label>
    </div>
  );
}
