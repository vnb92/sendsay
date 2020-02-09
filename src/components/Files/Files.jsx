import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { File } from '../File/File';
import './Files.scss';
import { removeFile } from '../../store/actions/form';

export const Files = () => {
  const dispatch = useDispatch();
  const files = useSelector(state => state.form.files);
  const error = useSelector(state => state.form.errors.files);

  const showError = Boolean(error) && Boolean(files.length);

  const handleRemoveFile = (fileName) => () => dispatch(removeFile(fileName));

  return (
    <div className="files">
      {files.map(file => (
        <File
          key={file.name + file.size}
          file={file}
          onRemove={handleRemoveFile(file.name)}
        />
      ))}
      {showError && <span className="files__error">{error}</span>}
    </div>
  );
};
