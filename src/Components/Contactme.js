import React from 'react'
import { Link } from 'react-router-dom'

const Contactme = () => {
  return (
    <div className='flex justify-center my-[10vh]'>
        <div>
            <h1 className='font-bold text-gray-500 mb-1 ml-2 '>-Contact me</h1>
            <h1 className=' flex text-4xl font-bold leading-9 [] '>Let's Talk for<p className='ml-3 text-blue-600'>Your</p></h1>
            <h1 className='  text-4xl font-bold text-blue-600 leading-9 mb-3'>Next Project</h1>
            <div className='w-[25vw]'><p className='text-gray-400 font-semibold leading-4 mb-7'>Lets Unlock the imagination of your idea together</p></div>
            
            <div className='flex items-center mb-3'>
                <img className='h-4 w-4 mr-1' src='phone.png'alt=''/>
                <h1 className=' text-gray-400  font-semibold text-sm '>(+123) 345-546-789</h1>
            </div>
            <div className='flex items-center mb-3'>
                <img className='h-4 w-4 mr-1' src='email.png'alt=''/>
                <h1 className='text-gray-400 font-semibold text-sm '>suryashismondal.45@personal.in</h1>
            </div>
        </div>
        <div className='flex flex-col justify-end ml-14'>
            <div className='flex my-2'>
                <div className='mr-4'>
                    <h1 className='font-semibold '>Your Name*</h1>
                    <input className='bg-slate-100 px-3 py-2 border-2 rounded-md border-gray-300' type='Text'placeholder='name'/>
                </div>
                <div className='ml-4'>
                    <h1 className='font-semibold '>Your email*</h1>
                    <input className='bg-slate-100 px-3 py-2 border-2 rounded-md border-gray-300' type='Text'placeholder='email'/>
                </div>
            </div>
            <div className='mb-4 my-2'>
                <h1 className='font-semibold '>Your Messeges*</h1>
                <input className='bg-slate-100 px-3 py-2 border-2 rounded-md border-gray-300 w-[35vw] h-[10vh]' type='text'placeholder='your messege here'/>
            </div>
            <div className='flex mb-3 space-x-4'> 
                <div className='flex justify-between items-center py-[2px] px-3 cursor-pointer bg-blue-600 shadow-xl hover:bg-blue-500 rounded-full w-[11vw]'>
                    <h1 className='text-white font-medium '>Connect</h1>    
                    <button className='bg-white m-[2px] px-1 text-blue-600 rounded-full hover:text-blue-500 ' >🡲</button>
                </div>
                <Link to={'/'}>
                <div className='flex justify-between items-center py-[2px] px-3 cursor-pointer bg-blue-600 shadow-xl hover:bg-blue-500 rounded-full w-[11vw]'>
                    <h1 className='text-white font-medium '>Home</h1>    
                    <button className='bg-white m-[2px] px-1 text-blue-600 rounded-full hover:text-blue-500 ' >🡲</button>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contactme