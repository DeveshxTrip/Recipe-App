import React, { useState } from 'react'
import { auth, db } from '../Firebase.config'

import Video from '../assets/cooking.mp4'
import Navbar from './Navbar'
import { toast } from 'react-toastify'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'

const Recipe = () => {
  const [username,setUsername] = useState("");
  const [recipe,setRecipe] = useState("");
  const [date,setDate] = useState("");
  const [instructions,setInstructions] = useState("");
  const [steps,setSteps] = useState("");

  const data = collection(db,"Recipe")

  const handleSubmit = async(e)=>{
 
    try{
      e.preventDefault();
      await setDoc(doc(data), {
        name: username,
        recipe: recipe,
        date:date,
        instructions:instructions,
        steps:steps,
      });
  toast.success("data sent")
  console.log("data sent successfully")
} catch(err){
  console.log(err.message)
}
  }
  
    
    
  return (
    <>
   
    <div id='main' className='md:min-h-screen object-cover h-screen w-full flex flex-col'>
    <Navbar/>
        


    <video className='md:min-h-screen h-screen object-cover w-screen' src={Video} autoPlay loop muted/>

  {/* component */}
  <div className='absolute lg:w-screen min-w-full top-0 flex flex-col justify-center items-center'> 
 
  <section className="max-w-4xl p-4 mx-auto rounded-md shadow-md lg:mt-28">
    <h1 className="text-xl font-bold capitalize text-black">
      ADD Recipe
    </h1>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label className="text-white text-xl dark:text-gray-900" htmlFor="username">
            Username
          </label>
          <input
            value={username}
            required
            onChange={(e)=>setUsername(e.target.value)}
            id="username"
            type="text"
            className="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-transparent dark:text-gray-900 focus:border-[#f38ba8] dark:focus:border-[#f38ba8] focus:outline-none"
          />
        </div>
        <div>
          <label
            className="text-white text-xl dark:text-gray-900"
          >
            Recipe Name
          </label>
          <input
          value={recipe}
          required
          onChange={(e)=>setRecipe(e.target.value)}
            type="name"
            className="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-transparent dark:text-gray-900 focus:border-[#f38ba8] dark:focus:border-[#f38ba8] focus:outline-none"
          />
        </div>
        <div>
          <label
            className="text-white text-xl lg:text-gray-900"
          >
            Date
          </label>
          <input
            id="date"
            required
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            type="date"
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-transparent lg:text-gray-900 text-white focus:border-[#f38ba8] dark:focus:border-[#f38ba8] focus:outline-none"
          />
        </div>
        <div>
          <label
            className="text-white text-xl lg:text-gray-900"
          >
            Instructions
          </label>
          <input
          value={instructions}
          required
          onChange={(e)=>setInstructions(e.target.value)}
            type="text"
            className="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-transparent lg:text-gray-900 text-white focus:border-[#f38ba8] dark:focus:border-[#f38ba8] focus:outline-none"
          />
        </div>
        <div>
          <label
            className="text-white text-xl"
       
          >
            Steps
          </label>
          <input
          value={steps}
          required
          onChange={(e)=>setSteps(e.target.value)}
            type="steps"
            className="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-transparent dark:text-white focus:border-[#f38ba8] dark:focus:border-[#f38ba8] focus:outline-none"
          />
        </div>
        <div>
          <label className="block font-medium sm:text-white text-white text-xl">Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-white">
                <label
                  className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                >
                  <span className="">Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1 text-white">or drag and drop</p>
              </div>
              <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
          Save
        </button>
      </div>
    </form>
  </section>
  </div>
  


    {/* <button onClick={Logout}> 
        logout
    </button> */}
    </div>
    </>
  )
}

export default Recipe