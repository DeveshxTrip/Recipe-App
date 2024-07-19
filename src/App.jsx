import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Recipe from './components/AddRecipe'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'


const App = () => {
 
  return (
    <BrowserRouter>
   <>
   <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Recipe' element={<Recipe/>}/>
    <Route path='/Navbar' element={<Navbar/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Search' element={<Search/>}/>
   </Routes>
   </>
   </BrowserRouter>
  )
}

export default App