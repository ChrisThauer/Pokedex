import React from 'react';

import TypeBox from '../TypeBox/TypeBox';

import './DisplayBox.css';

const DisplayBox = ({ data }) => {

  if (!data) {
    return <div className="display-box"></div>
  }

  return (
    <div className="display-box">
      <div className="display-data">
        <div className="name">{data.name}  #{data.id}</div>
        <div className="size">Weight: {data.weight} / Height: {data.height}</div>
      </div>
      <div className="img-container">
        <img className="pokemon-img" src={data.sprites.front_default} alt="Pokemon"/>
      </div>
      <div className="types">
        {
          data.types.map(item => (
            <TypeBox key={item.slot} type={item.type.name} />
          ))
        }
      </div>
    </div>
  )
}

export default DisplayBox;