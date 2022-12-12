import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Client from '../services/api'


const Anime = ({ user, authenticated}) => {
    const BASE_URL = 'http://localhost:3001'

    const [anime, updateAnime] = useState([])
    const { animeId } = useParams()

    useEffect(() => {
        const api = async () => {
          let res = await axios.get(`${BASE_URL}/anime/${animeId}`)
          updateAnime(res.data)
        }
        api()
      }, [])

    const [users, updateUsers] = useState([]) 

    useEffect(() => {
        const api = async () => {
            let res = await axios.get(`${BASE_URL}/user`)
            updateUsers(res.data)
        }
        api()
    }, [])

    
  return (
    <div className='anime'>
        {anime.map((res) => {
            return (
                <div className='animeImage' key ={res.id}>
                    <img src = {res.image} alt={res.name}/>
                    <h2>{res.name}</h2>
                    <p>{res.details}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Anime
