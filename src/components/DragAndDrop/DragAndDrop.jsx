import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import cx from 'classnames';
import { unsetDragAndDrop } from '../../store/actions/isDragAndDrop';
import { addDragAndDropEventListenersForOtherNodes } from './helpers';
import { handleFiles } from '../../helpers/handleFiles';
import './DragAndDrop.scss';

export const DragAndDrop = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const isDragAndDrop = useSelector(state => state.isDragAndDrop);

  useEffect(() => {
    addDragAndDropEventListenersForOtherNodes(store);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = [...e.dataTransfer.files];
    handleFiles(dispatch, files);

    dispatch(unsetDragAndDrop());
  };

  const disableEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className={cx(
        'drag-and-drop',
        isDragAndDrop && 'drag-and-drop--show',
      )}
      onDragEnter={disableEvent}
      onDragLeave={disableEvent}
      onDragOver={disableEvent}
      onDrop={handleDrop}
    >
      <p className="drag-and-drop__wrapper">
        <span className="drag-and-drop__title">Бросайте файлы сюда, я ловлю</span>
        <span className="drag-and-drop__description">Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</span>
      </p>
    </div>
  );
};
