import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
  return (
   <div className='flex flex-col items-center justify-center pt-[120px]'>
         <h1 className='text-6xl text-black'>Welcome to Food's</h1>
         <h1 className='text-6xl text-black mt-3'>Kitchen</h1>
         <Link className='border text-xl mt-4 px-3 py-1.5 text-white bg-blue-800 rounded-md' to='/menu'>GO TO MENU</Link>
       </div>
  )
}

export default Home
