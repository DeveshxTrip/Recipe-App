import React, { useState } from 'react';
import { auth } from '../Firebase.config'
import { signOut } from 'firebase/auth'
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import Home from '../pages/Home';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };
  const Logout = async() =>{
    try{
      await signOut(auth);
      window.location.href="/Login";
      console.log("User Logged Out Successfully")
    } catch(err){
      toast.error(err.message)
      console.log(err.message)
    }
  }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white capitalize'>
      <div>
        <NavLink to="/Home"><h1 className={logo ? 'hidden' : 'block'}>Recipe.</h1></NavLink>
      </div>
      <ul className='hidden md:flex'>
        <NavLink to="/Home"><li>Home</li></NavLink>
        <NavLink to="/Recipe"><li>Add Recipe</li></NavLink>
        <NavLink to="/Search"><li>View Recipe</li></NavLink>
 
      </ul>
      <div className='hidden gap-4 md:flex'>
      <button onClick={Logout} className='text-white px-5 py-2 rounded-full cursor-pointer'>Logout</button>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div  className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1 className='capitalize'>Recipe.</h1>
          <NavLink to="/Home"><li>Home</li></NavLink>
          <NavLink to="/Recipe"><li>Add Recipe</li></NavLink>
          <NavLink to="/Search"><li>View</li></NavLink>
          <div className='flex flex-col'>
            <button onClick={Logout} className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Logout</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;