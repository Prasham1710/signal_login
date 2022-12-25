import React from 'react'
import Back from '../assets/background.jpg'
const Signup = () => {
  return (
    <div className='relative w-full h-screen  bg-blue-300 '><div className='hidden sm:block'></div>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Back} alt="/" />
    

     <div className='flex justify-center items-center h-full'>
     <form className='max-w-[500px]  w-full mx-auto border rounded-xl bg-white p-4'><h2 className='text-3xl font-bold text-center py-5 text-violet-600'>SIGNAL</h2>
     <div className=' relative font-bold'><h2 >Create your own signal account</h2></div>
     
     <div className=' flex  p-4  '>
            <input className=' w-80 border relative rounded-xl  p-1 bg-gray-100' type="text" placeholder='First Name' />
             <input className=' w-80 border relative  rounded-xl p-2 bg-gray-100' type="text" placeholder='Middle Name' /></div> 
            <div className=' flex flex-col p-4  '>
            <input className=' w-80 border relative  rounded-xl p-1 bg-gray-100' type="text" placeholder='last Name'/></div> 
            <div className=' flex flex-col p-4  '>
            <input className=' w-80 border relative  rounded-xl p-1 bg-gray-100' type="email" placeholder='username@gmail.com' /><div><button><p className=' text-blue-600 underline decoration-solid relative ' >use my current mail id </p></button></div>
            </div>
            <div className=' flex '>
            <input className=' w-80 border relative  rounded-xl p-1 bg-gray-100' type="text" placeholder='Password'/>
             <input className=' w-80 border relative  rounded-xl p-1 bg-gray-100' type="text" placeholder='Confirm password '/></div> 
               <div><p className='flex items-center'>
            <input className= 'mr-2 relative'type="checkbox"/> Save password </p></div>
            <div className='relative flex flex-col '><div><button  className=' w-15 text-blue-600 underline decoration-solid py-2' >sign in instead </button></div>
            <button className = 'relative border w-[30%] rounded-xl my-9 py-1  bg-blue-700 hover:bg-indigo-500 text-white'> Next </button></div>
            
            </form>  </div>
    </div> 
  )
}

export default Signup