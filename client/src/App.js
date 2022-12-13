import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession, SignInUser } from './services/auth'
import Anime from './Pages/Anime'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Register from './Pages/Register'
// import Login from './Pages/Login'
import AnimeCard from './Components/AnimeCard'
import Characters from './Pages/Characters'
import './index.css';
import CharacterCard from './Components/CharacterCard'
import AddAnime from './Components/AddAnime'
import UpdateAnime from './Components/UpdateAnime'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="nav">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
          <Route path="/anime" element={<Anime />} />
          <Route
            path="/anime/:animeId"
            element={<Characters user={user} authenticated={authenticated} />}
          />
          <Route path = "/add-anime" element={ <AddAnime/>} />
          <Route path="/register" element={<Register />} />
          <Route path = "/anime/:animeId/updateAnime" element={ <UpdateAnime/>}/>
          {/* <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
