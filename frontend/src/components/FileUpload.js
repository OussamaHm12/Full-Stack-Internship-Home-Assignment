// FileUpload.js
import React, { useState } from 'react';

const FileUpload = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    onFileSelect(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
