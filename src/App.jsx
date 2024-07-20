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
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Recipe' element={<Recipe/>}/>
    <Route path='/Navbar' element={<Navbar/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/cards' element={<Cards/>}/>
   </Routes>
   </>
   </BrowserRouter>
  )
}

export default App