import React from 'react';

import './WarningBox.css';

const WarningBox = ({ message }) => (
  <div className="warning-box">
    <p>{message}</p>
  </div>
);

export default WarningBox;