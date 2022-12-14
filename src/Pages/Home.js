import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SignInUser } from '../services/auth'


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
    <div className='home'>
        <div className="loginPage">
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
    </div>
  )
}

export default Home

