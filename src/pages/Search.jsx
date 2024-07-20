import React, { useEffect, useState } from 'react'
import Video from '../assets/cooking.mp4'
import Navbar from '../components/Navbar'
import { collection, getDoc,query,onSnapshot,orderBy, QuerySnapshot, getDocs } from 'firebase/firestore'
import { auth, db } from '../Firebase.config'

const Search = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Recipe'));
      const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(dataList);
    };

    fetchData();
  }, []);

  return (
    
    <div id='main' className='md:min-h-screen lg:object-cover object-cover h-screen w-screen flex flex-col '>
    <Navbar/>
    <video className='h-screen lg:object-cover object-cover w-screen mix-blend-overlay' src={Video} autoPlay loop muted/>
    <div className='font-bold text-4xl absolute lg:w-screen w-screen sm:w-full md:w-full mt-40 flex flex-col justify-center items-center'>
  {/* Search bar */}
  
  
    
  
  <div className="overflow-clip m-20">  
  <table className="table text-white">
    <thead className='text-white'>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Dish</th>
        <th>date</th>
        <th>Instruction</th>
        <th>steps</th>
      </tr>
    </thead>
    <tbody>
      {
      data.map((item,index)=>(
      <tr key={item.id}>

    <td>{index+1}</td>
        <td>{item.name}</td>
        <td >{item.recipe}</td>
        <td >{item.date}</td>
        <td>{item.instructions}</td>
        <td>{item.steps}</td>
       
      </tr>
       ))
      }
    </tbody>
  </table>
 
</div>




    </div>
    </div>
  )
}

export default Search