import React from 'react';

import SearchBox from '../SearchBox/SearchBox';
import DisplayBox from '../DisplayBox/DisplayBox';
import StatBlock from '../StatBlock/StatBlock';

import './Card.css';

const Card = ({ onSearch, data }) => {

  return (
    <div className="card">
      <SearchBox onSearch={onSearch}/>
      <DisplayBox data={data}/>
      {data && <StatBlock stats={data.stats}/>}
    </div>
  )
}

export default Card;