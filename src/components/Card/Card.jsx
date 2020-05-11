import React from 'react';

import SearchBox from '../SearchBox/SearchBox';

import './Card.css';
import DisplayBox from '../DisplayBox/DisplayBox';

const Card = ({ onSearch, data }) => {

  return (
    <div className="card">
      <SearchBox onSearch={onSearch}/>
      <DisplayBox data={data} />
    </div>
  )
}

export default Card;