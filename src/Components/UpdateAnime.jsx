import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

export const UpdateAnime = () => {

    const [anime, setAnime] = useState(null)
    const navigate = useNavigate()
    const { animeId } = useParams()

    useEffect(() => {
        const getAnimeById = async () => {
        try {
            let res = await axios.get(`${BASE_URL}/api/anime/${animeId}`)
            setAnime(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    getAnimeById()
},[])

    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.put(`${BASE_URL}/api/anime/${animeId}`, anime)
        navigate('/anime')
    }
    
    const handleChange = (e) => {
        setAnime({ ...anime, [e.target.id]: e.target.value})
    }

  return (
    <div className='update'>
         <h3>Update Anime</h3>
        <div className='pdate-form'>
            {anime && 
            (<form onSubmit={ handleSubmit } key={anime.id}>
            <ul>
                <li>Name: <input type="text" value={anime.name} onChange={handleChange} id={'name'} placeholder={'name'}/></li>
                <li>Image-url: <input type="text" value={anime.image} onChange={handleChange} id={'image'} placeholder={'imgURL'}/></li>
                <li>Details: <input type="text-area" value={anime.details} onChange={handleChange} id={'details'} placeholder={'details'}/></li>
                <button>Submit</button>
            </ul>
            </form>)
    }
        </div>
    </div>
  )
}

export default UpdateAnime