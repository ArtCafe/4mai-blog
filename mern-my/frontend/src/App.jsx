import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import  Createpost from './pages/CreatePost/CreatePost'
//import ProfileM from './pages/Profile/ProfileM'
import Dashboard from './dashboard/Dashboard'
import Post from './pages/Post/Post.jsx'
import Seting from './pages/Seting/Seting'

export default function App() {
  return (
    <>
  <Router>
   
    <div className="w3-content" style={{maxwidth:"1400"}}>
        <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/post/:id' element={<Post/>} />
            <Route path ='/seting' element={<Seting/>} />
            <Route path='/dashboard/post/:id' element={<Post/>} />
            <Route path='/createpost' element={<Createpost />} />
            <Route path ='/dashboard' element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
     
    </>
  )
}
