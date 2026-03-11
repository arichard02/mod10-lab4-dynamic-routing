import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { useState, createContext } from 'react'

import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Home from './pages/Home'
import NavBar from './components/NavBar'

export const AuthContext = createContext();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </AuthContext.Provider>
  )
}

export default App