import React, { useRef, useEffect } from 'react';
import './DragAndDrop.scss';

export const DragAndDrop = ({ handleDrop }) => {
  const dnd = useRef(null)

  useEffect(() => {
    dnd.current.addEventListener('drop', handleDrop);
  }, [])

  return (
    <div className="drag-and-drop" ref={dnd}>
      <p className="drag-and-drop__wrapper">
        <span className="drag-and-drop__title">Бросайте файлы сюда, я ловлю</span>
        <span className="drag-and-drop__description">Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</span>
      </p>
    </div>
  )
}
