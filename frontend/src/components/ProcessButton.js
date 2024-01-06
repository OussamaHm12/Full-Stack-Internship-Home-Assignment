// ProcessButton.js
import React from 'react';

const ProcessButton = ({ onProcessClick, disabled }) => {
  return (
    <div>
      <button onClick={onProcessClick} disabled={disabled}>
        Process
      </button>
    </div>
  );
};

export default ProcessButton;
