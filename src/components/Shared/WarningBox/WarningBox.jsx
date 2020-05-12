import React from 'react';

import './WarningBox.css';

const WarningBox = ({ message }) => {
  return (
    <div className="warning-box">
      <p>{message}</p>
    </div>
  )
};

export default WarningBox;