import React from 'react'


const Home = () => {
  return (
    <div>  
      <div className='flex flex-row items-center px-14 justify-around h-[85vh] w-screen'>
        <div className='flex flex-col   h-[60vh] w-[50vw] p-3 '>
          <img className='h-10 w-24 mb-3' src='hello.png'alt=''/>
          <div className='flex mb-3'>
          <p className='text-4xl font-semibold  pr-4'>I'm</p>
          <p className='text-4xl font-semibold  text-blue-600 underline underline-offset-2 decoration-blue-600'>S Mondal,</p>
          </div>
          <p className='text-5xl font-bold mb-3'>Web Designer & Devoloper Enthusiast</p>
          <p className='text-sm font-medium text-gray-400 mb-5'>have a hands-on experience in web development, with a keen interest in creating clean, responsive websites.</p>
          <div className='flex '>
            <button className='bg-blue-600 rounded-full text-white font-medium p-[1px] px-5 text-lg mr-4 hover:bg-blue-500  shadow-lg'>Hire me</button>
            <button className=' border-2 border-blue-600 rounded-full p-[1px] px-5 font-medium text-lg text-blue-600 hover:text-blue-800 hover:bg-slate-200 hover:font-semibold shadow-lg'>Connect</button>
          </div>
        </div>
        <div className=' flex justify-center items-center h-[50vh] w-[50vw]'>
          <img className='h-[40vh] w-[35vw]' src='image.png'alt=''/>
        </div>
      </div>
      <div className=' flex justify-around items-center h-[8vh] w-screen mb px-8 bg-black'>
        <h1 className='text-white font-medium text-lg'>Website Design</h1>
        <img className='h-7 w-7'src='Iconstar.png'alt=''/>
        <h1 className='text-white font-medium text-lg'>Frontend Devolopment</h1>
        <img className='h-7 w-7'src='Iconstar.png'alt=''/>
        <h1 className='text-white font-medium text-lg'>Backend Scripting</h1>
        <img className='h-7 w-7'src='Iconstar.png'alt=''/>
        <h1 className='text-white font-medium text-lg'>Database Managment</h1>
      </div>
    </div>
  )
}

export default Home