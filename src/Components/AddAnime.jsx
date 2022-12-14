import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services/api';


const AddAnime = () => {
    const navigate = useNavigate()
    const initialFormValues = { 
        name: '', 
        image: '', 
        details: ''
    };
    const [formValues, setFormValues] = useState(initialFormValues)
  
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
          const res = await axios.post(`${BASE_URL}/api/anime`, formValues)
          navigate('/anime')
    }
  
  return (
    <div className='add-anime-page'>
      <div className='addAnime-header'>
        <h3>Add A New Anime Show</h3>
        <div className='add-anime-form'>
            <form onSubmit={handleSubmit}>
                Name: 
                <input 
                onChange={handleChange} 
                name="name"
                value={formValues.name} 
                type="text" 
                required
                />
                Image-URL: 
                <input 
                onChange={handleChange} 
                name="image"
                value={formValues.image} 
                type="text" 
                required
                />  
                Details: 
                <input 
                onChange={handleChange} 
                name="details"
                value={formValues.details} 
                type="text" 
                required
                />
                <button>Submit</button>
            </form>
          </div>
      </div>
    </div>
)
}


export default AddAnime