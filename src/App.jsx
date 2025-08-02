import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  
  return (
    <div>
      <Nav/>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App
