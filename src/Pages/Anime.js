import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/api'
import AnimeCard from '../Components/AnimeCard'
import CharacterCard from '../Components/CharacterCard'

const Anime = ({getAnimes}) => {

    const [animes, setAnimes] = useState([])
    const { animeId } = useParams()
    let Navigate = useNavigate()

    const api = async () => {
      let res = await axios.get(`${BASE_URL}/api/anime`)
      setAnimes(res?.data)
    }

    useEffect(() => {
        api()
      }, [])


    
  return (
    <div className='anime-grid'>
        {animes.map((res) => {
            return (
                <div className='animeImage' key ={res.id}>
                
                    <AnimeCard name={res.name} image={res.image} details={res.details} id={res.id} api={api} />
                </div>
            )
        })}
    </div>
  )
}

export default Anime
