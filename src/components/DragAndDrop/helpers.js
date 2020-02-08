import { setDragAndDrop, unsetDragAndDrop } from '../../store/actions/isDragAndDrop';

export const addDragAndDropEventListenersForOtherNodes = store => {
  const { dispatch } = store;

  const enableDropMode = () => {
    const { isDragAndDrop } = store.getState();
    if (isDragAndDrop) return;
    dispatch(setDragAndDrop());
  };

  const disableDropMode = (e) => {
    if (e.target !== e.currentTarget) return;
    dispatch(unsetDragAndDrop());
  };

  const appNode = document.querySelector('.app');
  appNode.addEventListener('dragenter', enableDropMode);
  appNode.addEventListener('dragleave', disableDropMode);
};
