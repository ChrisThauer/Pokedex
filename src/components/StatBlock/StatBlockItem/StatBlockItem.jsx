import React from 'react';

import './StatBlockItem.css';

const StatBlockItem = ({ name, value }) => (
  <div className="stat-block-item">
    <div className="stat-information">
      {name}: {value}
    </div>
    <div className="stat-bar" style={{width: `${value / 255 * 100}%`}}></div>
  </div>
)

export default StatBlockItem;