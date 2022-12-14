import React from 'react'
import { Link } from 'react-router-dom'



const Nav = ({ authenticated, user, handleLogOut}) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="nav">
        <h2>Welcome {user?.email}!</h2>
        <Link to="/anime"><div><img id='logo'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lvXtkVe34wEPvJNstKlB3eD4bQs4Zs6jWQ&usqp=CAU' /></div></Link>
        <Link id="sign-out" onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }
  const openOptions = (
    <nav className="nav">
        <Link to="/"><div><img id='logo'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lvXtkVe34wEPvJNstKlB3eD4bQs4Zs6jWQ&usqp=CAU' /></div></Link>
        <Link to="/register">
      <h3>Register</h3>
        </Link>
    </nav>
  )


  return (
    <header className="navBar">

    <Link to ="/">
      </Link>
        {authenticated && user ? authenticatedOptions : openOptions}
      </header>
  )
}

export default Nav
