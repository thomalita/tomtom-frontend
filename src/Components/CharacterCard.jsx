import React from 'react'
import { Link } from 'react-router-dom'

export const CharacterCard = ({ name, image, details}) => {
  return (
    <div id='add-character'>
        <img id='character-card' src={image}/>
        <h2>{name}</h2>
        <p>{details}</p>
        <Link id='add-character' to='/anime/:id'>
        <h4>Add Character</h4>
        </Link>
    </div>
  )
}

export default CharacterCard
