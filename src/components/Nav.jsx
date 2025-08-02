import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
   

  return (
   <div className='h-[100px] fixed w-full bg-blue-800 flex items-center justify-start px-7 '>
     <img className="filter invert"src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/c78e8c3250f4292c46817bc15b8314b9d08eb231/assets/restaurant_24px.svg"alt=""/>

      <h1 className='text-2xl text-white pl-3'>Food's Restaurant</h1>

      <div className="flex gap-4 text-white items-center pl-12 pt-1.5">
        <Link to='/register'>Sign</Link>
        <Link to='/login'>Login</Link>

      </div>
    </div>
  )
}

export default Nav
