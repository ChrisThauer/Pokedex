import React from 'react';

import StatBlockItem from './StatBlockItem/StatBlockItem';

import './StatBlock.css';

const StatBlock = ({ stats }) => {
  return (
    <div className="stat-block">
      {stats.map(stat => (
        <StatBlockItem key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
      ))}
    </div>
  )
}

export default StatBlock;