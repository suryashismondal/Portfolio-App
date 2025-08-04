import React from 'react'

function Card (props) {
  return (
    <div className='flex flex-col justify-center h-[58vh] w-[30vw] mx-8 bg-slate-100 rounded-lg shadow-md '>
      <div className='flex m-2  ml-2 items-center'>
        <img className='h-6 w-6 mr-2' src='Education.png'alt=''/>
        <h1 className='text-2xl font-semibold'>{props.name}</h1>
      </div>
      <div className='bg-white rounded-lg mx-2 mb-2 p-2'>
        <p className='text-gray-500 text-sm font-bold'>{props.text1}</p>
        <p className='font-bold'>{props.text2}</p>
        <p className='font-medium text-gray-400'>{props.text3}</p>
      </div>
      <div className='bg-white rounded-lg mx-2 mb-2 p-2'>
        <p className='text-gray-500 text-sm font-bold'>{props.text4}</p>
        <p className='font-bold'>{props.text5}</p>
        <p className='font-medium text-gray-400'>{props.text6}</p>
      </div>
      <div className='bg-white rounded-lg mx-2 mb-2 p-2'>
        <p className='text-gray-500 text-sm font-bold'>{props.text7}</p>
        <p className='font-bold'>{props.text8}</p>
        <p className='font-medium text-gray-400'>{props.text9}</p>
      </div>
    </div>
    
  )
}

export default Card