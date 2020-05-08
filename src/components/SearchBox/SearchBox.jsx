import React, { useState } from 'react';
import axios from 'axios';

import './SearchBox.css';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const onInputChange = event => {
    setSearchTerm(event.target.value);
  }

  const onSearch = event => {
    event.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    setSearchTerm('');
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