import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Recipe from './pages/Recipe'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Cards from './components/Cards'


const App = () => {
 
  return (
    <BrowserRouter>
   <>
   <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/recipe' element={<Recipe/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/cards' element={<Cards/>}/>
   </Routes>
   </>
   </BrowserRouter>
  )
}

export default App