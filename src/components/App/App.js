import React, { useState } from 'react';
import axios from 'axios';

import Card from '../Card/Card';
import WarningBox from '../Shared/WarningBox/WarningBox';

import './App.css';

const App = () => {
  const [hasError, setHasError] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);

  const onSearch = searchTerm => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then(res => {
        setHasError(false);
        setPokemonData(res.data);
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
        setHasError(true);
        setTimeout(() => setHasError(false), 5000);
      });
  }

  return (
    <div className="app">
      {hasError && <WarningBox message="No Pokemon found!" />}
      <Card onSearch={onSearch} data={pokemonData} />
    </div>
  );
}

export default App;
