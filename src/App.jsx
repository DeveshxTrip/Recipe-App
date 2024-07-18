import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Recipe from './components/Recipe'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
 
  return (
    <BrowserRouter>
   <>
   <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Home' element={<Recipe/>}/>
   </Routes>
   </>
   </BrowserRouter>
  )
}

export default App