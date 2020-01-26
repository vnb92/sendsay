import React from 'react';
import './AttachFile.scss';
import  '../../../public/clip.svg';

export const AttachFile = (props) => (
  <div className="attach-file">
    <label
      className="attach-file__label"
      htmlFor="file"
    >
      <img
        className="attach-file__image"
        src="clip.svg"
        alt="clip" 
      />

      <span className="attach-file__text" >Прикрепить файл</span>

      <input
        type="file"
        className="attach-file__input-hidden"
        id="file"
        name="file"
      />
    </label>
  </div>
);
