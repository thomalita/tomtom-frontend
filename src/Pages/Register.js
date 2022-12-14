import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const [pass, setPass] = useState("right")

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(formValues.password === formValues.confirmPassword){
    await RegisterUser({
      email: formValues.email,
      username: formValues.username,
      profilePic: formValues.profilePic,
      password: formValues.password,
      confirmPassword: formValues.password
    })
    setPass('right')
    setFormValues(initialFormValues)
    navigate('/')
  } else {
    console.log('nah')
    setPass('wrong')
  }
}
  return (
    <div id="register">
      <div className="register-form">
        <h1>Register to create account</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <ul>
                <li>
                  <label>Email: </label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formValues.email}
                    placeholder="email"
                    required
                  ></input>
                </li>
              </ul>
            </div>
            <div className="input-container">
              <ul>
                <li>
                  <label>Password: </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    value={formValues.password}
                    placeholder="password"
                    name="password"
                    required
                  />
                </li>
                <li>
                  <label>Confirm Password: </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    value={formValues.confirmPassword}
                    placeholder="password"
                    name="confirmPassword"
                    required
                  />
                </li>
                <li><p className={pass}>Passwords are not the same</p></li>
              </ul>
            </div>
            <div className="button-container">
              <ul>
                <input
                  type="submit"
                  disabled={!formValues.email || !formValues.password}
                />
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register