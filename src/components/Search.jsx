import React from 'react'
import Video from '../assets/cooking.mp4'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div id='main' className='md:min-h-screen object-cover h-screen w-full flex flex-col'>
    <Navbar/>
    <video className='md:min-h-screen h-screen object-cover w-screen' src={Video} autoPlay loop muted/>
    <div className='font-bold text-4xl absolute lg:w-screen min-w-full mt-40 flex flex-col justify-center items-center'>
    <>
  {/* component */}
  <div className="max-w-full mx-auto">
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        className="peer h-full w-96 outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.."
        required
      />
      <button type="submit" className="text-white absolute end-2.5 bottom-2.2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  </div>
</>
<div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    <div className='flex flex-col rounded-md bg-black overflow-hidden p-3'></div>
</div>

    </div>
    </div>
  )
}

export default Search