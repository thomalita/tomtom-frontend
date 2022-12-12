import React from 'react'

export const AnimeCard = ({name, image, details}) => {
  return (
    <div>
        <img id='anime-card' src={image}/>
        <h2>{name}</h2>
        <p>{details}</p>
    </div>
  )
}

export default AnimeCard
