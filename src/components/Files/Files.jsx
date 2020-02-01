import React from 'react';
import { File } from '../File/File';
import './Files.scss';

const mockFiles = ['file1.jpg', 'file2.scs'];

export const Files = () => (
  <div className="files">
      {mockFiles.map(file => (
        <File
          name={file.name}
        />
      ))}
  </div>
);
