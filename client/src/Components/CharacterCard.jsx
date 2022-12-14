import React from 'react'
import { Link } from 'react-router-dom'

export const CharacterCard = ({ name, image, details}) => {
  return (
    <div>
        <img id='character-card' src={image}/>
        <h2>{name}</h2>
        <p>{details}</p>
        <Link id='addCharacter' to='/anime/:id'>
        <h4>Add Character</h4>
        </Link>
    </div>
  )
}

export default CharacterCard
