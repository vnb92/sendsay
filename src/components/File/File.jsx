import React from 'react';
import './File.scss';
import  '../../../public/clip.svg';
import  '../../../public/trash.svg';

export const File = ({ name }) => (
  <div className="file">
      <img
        className="file__image-clip"
        src="clip2.svg"
        alt="clip" 
      />

      <span className="file__name" >{ name }</span>

      <button>
        <img
          className="file__image-trash"
          src="trash.svg"
          alt="trash" 
        />
        <span>Удалить</span>
      </button>
  </div>
);

File.defaultProps = {
  name: 'Имя файла'
}
