import React from 'react'

export const CharacterCard = ({ name, image, details}) => {
  return (
    <div>
        <img id='character-card' src={image}/>
        <h2>{name}</h2>
        <p>{details}</p>
    </div>
  )
}

export default CharacterCard
