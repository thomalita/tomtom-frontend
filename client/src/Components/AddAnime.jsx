import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddAnime = () => {
    const navigate = useNavigate()
    const initialState = { name: '', image: '', details: ''};
    const [formValues, setFormValues] = useState(initialState)
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      await newClass({
        name: formValues.name    })
      setFormValues(initialState)
      window.location.reload()
    }
  
  
    return (
      <div className='addAnime-header'>Add a New Anime
        <div className='add-anime-form'>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange} 
                name="name"
                value={formValues.name} 
                type="text" 
                placeholder='name'
                required
                />
                <input 
                onChange={handleChange} 
                image="image"
                value={formValues.image} 
                type="text" 
                placeholder='image-url'
                required
                />  
                <input 
                onChange={handleChange} 
                details="details"
                value={formValues.details} 
                type="text" 
                placeholder='details'
                required
                />
                <button>Submit</button>
            </form>
          </div>
      </div>
    )
  }



// export const newAnime = async (data) => {
//     try {
//         const res = await Client.post('/anime', data)
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }




export default AddAnime