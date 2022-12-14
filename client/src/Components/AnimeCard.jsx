import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const AnimeCard = ({name, image, details, id, api}) => {

    const BASE_URL = 'http://localhost:3001/api' 
    
    const handleDelete = async (id) => {
        let confirm = window.confirm('Delete Anime?')
        if ( confirm === true ){
        await axios.delete(`${BASE_URL}/anime/${id}`)
        api()
    }
    }



  return (
    <div>
        <ul>
         <li>  
        <Link id='anime-card' to={`/anime/${id}`}>
            <img src={image}/>
            <h2>{name}</h2>
            <p>{details}</p>
        </Link>
        </li> 
        <li>
        <Link id='updateAnime' to={`/anime/${id}/updateAnime`}>
            <button>Update</button>
        </Link>
        </li>
        <li>
        <button id='deleteAnime' onClick={() => handleDelete(id)}>Delete</button>
        </li>
        </ul>
    </div>
  )
}

export default AnimeCard
