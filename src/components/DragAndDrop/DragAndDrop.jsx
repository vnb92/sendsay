import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { unsetDragAndDrop } from '../../store/actions/isDragAndDrop';
import { addDragAndDropEventListenersForOtherNodes } from './helpers';
import { handleFiles } from '../../helpers/handleFiles';
import './DragAndDrop.scss';

export const DragAndDrop = () => {
  const { t } = useTranslation();
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
        <span className="drag-and-drop__title">{t('dropFiles')}</span>
        <span className="drag-and-drop__description">{t('fileFormatsMessage')}</span>
      </p>
    </div>
  );
};
