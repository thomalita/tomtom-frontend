import React from 'react'


const CharacterCard = ({ name, image, details}) => {
  return (
    <div id='add-character'>
        <img id='character-card' src={image}/>
        <h2>{name}</h2>
        <p>{details}</p>
    </div>
  )
}

export default CharacterCard
