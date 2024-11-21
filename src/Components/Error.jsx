import React from 'react'
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom'
import img from '../Images/error.jpg'

const Error = () => {
  return (
    <>
    <div className='grid place-items-center'>
        <img src={img} alt="image" width={400} height={400}/>
    <p className='text-2xl font-bold mb-2'>Page is Not Found!</p>
    <Link to='/home'>
    <button className='flex justify-between gap-1 mt-2 hover:text-white bg-primary p-2  text-white text-center rounded-md'><MdHome size={20}/> Go to Home </button></Link>
    
    </div>
   
    </>
  )
}

export default Error;