import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between  pl-7 pr-5  items-center m-6 mx-14 w-[90vw] h-14 rounded-full bg-slate-100 shadow-md '>
        <div className=''>
            <img className='h-8 w-10' src="Iconimage.png"alt=""/>
        </div>
        <div className=' w-[40vw]'>
            <ul className='flex mx-5 my-3 justify-between'>
                <li className='font-medium text-xl text-gray-400 hover:text-blue-600 cursor-pointer hover:font-semibold'><Link to={'/'}>Home</Link></li>
                <li className='font-medium text-xl text-gray-400 hover:text-blue-600 cursor-pointer hover:font-semibold'><Link to={'/About'}>About me</Link></li>
                <li className='font-medium text-xl text-gray-400 hover:text-blue-600 cursor-pointer hover:font-semibold'><Link to={'/Projects'}>Projects</Link></li>
                <li className='font-medium text-xl text-gray-400 hover:text-blue-600 cursor-pointer hover:font-semibold'>Linkdin</li>
            </ul>
        </div>
        <div className=' '>
            <button className=' bg-blue-600 shadow-sm shadow-slate-500 p-1 px-2 rounded-full text-white hover:bg-blue-500 '><Link to={'/Contact'}>Contact me</Link></button>
        </div>
    </div>
  )
}

export default Navbar