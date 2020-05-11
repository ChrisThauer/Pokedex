import React from 'react';

import './TypeBox.css';

const TypeBox = ({ type }) => {
  const formattedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  return (
    <div className={`type-box ${type}`}>
      {formattedType}
    </div>
  )
}

export default TypeBox;