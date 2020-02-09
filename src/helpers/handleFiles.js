import { addFile } from '../store/actions/form';

export const handleFiles = (dispatch, files) => {
  files.forEach(file => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = e => handleOnLoad(e, file);
    reader.onerror = e => console.log('error', e.target.error);
  });

  function handleOnLoad(e, file) {
    const fileToSend = convertFile(e, file);
    dispatch(addFile(fileToSend));
  }

  function convertFile(e, file) {
    const { name, size } = file;
    const content = window.btoa(e.target.result);

    const fileToSend = {
      name,
      size,
      content,
      encoding: 'base64',
    };

    return fileToSend;
  }
};
