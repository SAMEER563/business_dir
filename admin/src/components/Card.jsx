// Card.js
import React from 'react';

const Card = ({ name, description, imgUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-40 object-cover" src={imgUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      
    </div>
  );
};


export default Card;
