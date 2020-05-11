import React, { useState } from 'react';

import './SearchBox.css';

const SearchBox = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = event => {
    setSearchTerm(event.target.value);
  }

  const onSearch = event => {
    event.preventDefault();
    if (searchTerm !== '') {
      props.onSearch(searchTerm.toLowerCase());
      setSearchTerm('');
    }
  }

  return (
    <div className="searchbox">
      <form className="searchbox-content" onSubmit={onSearch}>
        <span>PokeSearch:</span>
        <input
          className="searchbox-input"
          type="text"
          onChange={onInputChange}
          value={searchTerm}
        />
      </form>
    </div>
  )
}

export default SearchBox;