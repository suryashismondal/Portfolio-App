import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const Aboutme = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center bg-blue-600 h-[20vh] '>
            <h1 className='text-4xl text-white font-bold'>About Me</h1>
            <div className='flex'>
                <button className='text-white text-xs'><Link to={'/'}>Home></Link></button>
                <button className='text-white text-xs'><Link to={'/Projects'}>Projects</Link></button>
            </div>
        </div>
        <div className='flex justify-center items-center bg-slate-100 h-[60vh]'>
            <div className='flex items-center pr-5'>
                <img className='h-72 w-72 rounded-full' src='Profile1.png'alt=''/>
            </div>
            <div className='h-[52vh] w-[60vw] pl-5 flex flex-col justify-center'>
                <h1 className='text-black text-sm my-2'>-About me</h1>
                <div className='flex mb-3'>
                    <h1 className='text-black text-4xl font-semibold pr-2 '>Who is</h1>
                    <h1 className='text-black text-4xl font-light '>S Mondal ?</h1>
                </div>
                <p className='text-black pr-[13vw] mb-4'>Suryashis Mondal is a student at Nshm college who is currently pursuing his Bachelor's degree in Computer Applications (BCA)</p>
                <div className='flex justify-between pr-20 mb-5'>
                    <ul className=''>
                        <li className='text-black text-4xl'>10+</li>
                        <li className='text-black cursor-pointer'>Projects completed</li>
                        </ul>
                        <ul>
                        <li className='text-black text-4xl'>3+</li>
                        <li className='text-black cursor-pointer'>Industry Covered</li>
                        </ul>
                        <ul>
                        <li className='text-black text-4xl'>5+</li>
                        <li className='text-black cursor-pointer'>Years of Experience</li>
                    </ul>
                    </div>
                    <div className='flex justify-between items-center py-[2px] px-4 cursor-pointer bg-blue-600 shadow-xl hover:bg-blue-500 rounded-full w-[15vw]'>
                        <h1 className='text-white font-medium  '>Download CV</h1>    
                        <button className='bg-white m-[2px] px-1 text-blue-600 rounded-full hover:text-blue-500 ' >🡲</button>
                    </div>
            </div>
        </div>
        <div>
            <div className='flex flex-col items-center mt-20'>
                <h1 className='text-sm'>-Education and work</h1>
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-medium'>My Academic and</h1>
                    <div className='flex'>
                        <h1 className='text-3xl pr-4 font-bold'>Professional</h1>
                        <h1 className='text-3xl text-blue-600 font-bold'>journey</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-16'>
                <Card name='Education' text1='10 jan 2013-20 jul 2021'text2='Secondary school certificate (CGPA-8.2)'text3='S.R.Vidyapith,Kolkata'text4='10 aug 2021-30 april 2023'text5='Higher Secondary Certificate (CGPA-7.1)'text6='S.R.Vidyapith,Kolkata'text7='30 jul 2023-30 may 2027'text8='Graduation Certificate'text9='NSHM college,Kolkata'/>
                <Card name='Skills' text1='30 jul 2023-10 feb 2024'text2='Programming with C language'text3='Nshm college, 1st sem'text4='20 feb 2024-30 may 2024'text5='Web Devolopment/Design skill'text6='NSHM college, 2nd sem'text7='30 aug 2024-20 feb 2025'text8='Python and SQL Database Skill'text9='NSHM college, 3rd Sem'/>
            </div>
            <div className='flex justify-center mb-10'>
                <div className='flex justify-between items-center py-[2px] px-3 cursor-pointer bg-blue-600 shadow-xl hover:bg-blue-500 rounded-full w-[13vw]'>
                    <h1 className='text-white font-medium '>Show More</h1>    
                    <button className='bg-white m-[2px] px-1 text-blue-600 rounded-full hover:text-blue-500 ' >🡲</button>
                </div>
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

export default Aboutme