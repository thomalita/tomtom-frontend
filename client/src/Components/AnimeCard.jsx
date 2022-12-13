import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const AnimeCard = ({name, image, details, id, api}) => {

    const BASE_URL = 'http://localhost:3001/api' 
    
    const handleDelete = async (id) => {
        await axios.delete(`${BASE_URL}/anime/${id}`)
        api()
    }



  return (
    <div>
        <Link to={`/${id}`}>
            <img id='anime-card' src={image}/>
            <h2>{name}</h2>
            <p>{details}</p>
        </Link>
        <Link id='addAnime' to='/add-anime'>
            <button>Add</button>
        </Link>
        <Link id='updateAnime' to={`/anime/${id}/updateAnime`}>
            <button>Update</button>
        </Link>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default AnimeCard
