import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center bg-blue-600 h-[20vh] '>
            <h1 className='text-4xl text-white font-bold'>My Projects</h1>
            <div>
              <button className='text-white text-xs'><Link to={'/About'}>About></Link></button>
              <button className='text-white text-xs'><Link to={'/Contact'}>Contact</Link></button>
            </div>
        </div>
        <div className='flex justify-center my-[20vh]'>
          <div className='h-[46vh] w-[30vw] bg-slate-200 rounded-lg shadow-md mx-12'>
            <img className='m-3 w-[28vw] rounded-md'src='Hotelbooking.jpg'alt=''/>
            <h1 className='m-3 text-blue-600 text-lg font-semibold'>Hotel booking page</h1>
            <div className='m-3'>
              <button className='bg-blue-600 rounded-lg py-1 px-1 mr-3 shadow-lg text-white'>Github🡲</button>
              <button className='bg-blue-600 rounded-lg py-1 px-1 mr-3 shadow-lg text-white'>Open🡲</button>
            </div>
          </div>
          <div className='h-[46vh] w-[30vw] bg-slate-200 rounded-lg shadow-md mx-12'>
            <img className='m-3 w-[28vw] rounded-md'src='Portfolio.jpg'alt=''/>
            <h1 className='m-3 text-blue-600 text-lg font-semibold'>Portfolio Website</h1>
            <div  className='m-3'>
              <button className='bg-blue-600 rounded-lg py-1 px-1 mr-3 shadow-lg text-white'>Github🡲</button>
              <button className='bg-blue-600 rounded-lg py-1 px-1 mr-3 shadow-lg text-white'>Open🡲</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects