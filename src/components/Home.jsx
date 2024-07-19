import React from 'react'
import Video from '../assets/cooking.mp4'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div id='main' className='md:min-h-screen object-cover h-screen w-full flex flex-col'>
    <Navbar/>
    <video className='md:min-h-screen h-screen object-cover w-screen' src={Video} autoPlay loop muted/>
    <div className='font-bold text-4xl absolute lg:w-screen min-w-full mt-60 flex flex-col justify-center items-center'>Hello My name is Devesh
        <h2>
            This is my Recipe App
        </h2>
    </div>
    </div>
  )
}

export default Home