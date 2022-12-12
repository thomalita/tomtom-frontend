import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Client from '../services/api'
import AnimeCard from '../Components/AnimeCard'
import CharacterCard from '../Components/CharacterCard'

const Anime = () => {
    const BASE_URL = 'http://localhost:3001/api'

    const [animes, setAnimes] = useState([])
    const { animeId } = useParams()
    let Navigate = useNavigate()

    useEffect(() => {
        const api = async () => {
          let res = await axios.get(`${BASE_URL}/anime`)
          setAnimes(res?.data)
        }
        api()
      }, [])

    //   const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     Navigate('/characters')
    //   }

    
  return (
    <div className='anime'>
        {animes.map((res) => {
            return (
                <div className='animeImage' key ={res.id}>
                    <Link to={`${res.id}`} key={res.id}>
                    <AnimeCard name={res.name} image={res.image} details={res.details}/>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default Anime
