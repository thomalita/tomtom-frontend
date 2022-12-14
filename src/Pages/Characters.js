import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import CharacterCard from '../Components/CharacterCard'
import { BASE_URL } from '../services/api'

export const Characters = () => {

    
    const [characters, setCharacters] = useState([])
    const { animeId } = useParams()
    
    useEffect(() => {
        const api = async () => {
            let res = await axios.get(`${BASE_URL}/api/characters/anime/${animeId}`)
            setCharacters(res?.data)
        }
        api()
        }, [])

  return (
    <div className='characters'>
    {characters.map((res) => {
        return (
            <div className='characterImage' key ={res.id}>
                <Link to={`${res.id}`} key={res.id}>
                <CharacterCard name={res.name} image={res.image} details={res.details}/>
                </Link>
            </div>
        )
    })}
</div>
  )
}

export default Characters
