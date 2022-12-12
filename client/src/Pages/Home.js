import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Client from '../services/api'
// import AnimeCard from '../Components/AnimeCard'
import { SignInUser } from '../services/auth'


// const Home = () => {
    // const BASE_URL = 'http://localhost:3001/api'
    
    //     const [animes, setAnimes] = useState([])
    //     const { animeId } = useParams()
    
    //     useEffect(() => {
        //         const api = async () => {
            //           let res = await axios.get(`${BASE_URL}/anime`)
            //           setAnimes(res?.data)
            //         }
            //         api()
            //       }, [])
            
            //     const [users, updateUsers] = useState([]) 
const Home = ({ setUser, toggleAuthenticated }) => {
    let Navigate = useNavigate()
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
      const payload = await SignInUser(formValues)
      console.log('test')
      setFormValues({ email: '', password: '' })
      setUser(payload)
      toggleAuthenticated(true)
      Navigate('/anime')
    }

    
  return (
        <div className="login">
          <div className="login-form">
            <h2>Login</h2>
            <div className="form">
              <div className="submit-form">
                <form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <label>Email: </label>
                    <input
                    value={formValues.email}
                      type="email"
                      placeholder='user@anime.com'
                      onChange={handleChange}
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label>Password: </label>
                    <input
                    value={formValues.password}
                      type="password"
                      placeholder='1234'
                      onChange={handleChange}
                      name="password"
                      required
                    />
                  </div>
                  <div className="button-container">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>



//     <div className='anime'>
//         {animes.map((res) => {
//             return (
//                 <div className='animeImage' key ={res.id}>
//                     <img src = {res.image} alt={res.name}/>
//                     <h2>{res.name}</h2>
//                     <p>{res.details}</p>
//                 </div>
//             )
//         })}
//     </div>
  )
}

export default Home

