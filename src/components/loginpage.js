import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple, AiFillFacebook} from 'react-icons/ai'
import Back from '../assets/background.jpg'

const login = () => {
  return (
   <div className='relative w-full h-screen  bg-blue-300 '><div className='hidden sm:block'></div>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Back} alt="/" />
    

     <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto border rounded-xl bg-white p-4'>
                 <h2 className='text-3xl font-bold text-center py-5 text-violet-600'>SIGNAL</h2> 
                 <div className='flex justify-between py-8'>
                <button  className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-xl  '><a href='https://app.aafp.org/sf/services/auth/sso/Apple_SSO?startURL='><AiFillApple /> Apple</a></button>
                <button  className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-xl  '><a href='https://www.facebook.com/login/'><AiFillFacebook />Facebook</a></button>
                <button className='border shadow-lg hover:shadow-xl px-6 py-2 relative rounded-xl flex items-center'><a href='https://accounts.google.com/signin'><FcGoogle />Google </a> </button>
            </div>
           <div className=' flex flex-col p-4  '>
            <label >Username</label>
            <input className=' w-80 border relative  rounded-xl p-1 bg-gray-100' type="text" /></div>
           <div className=' flex flex-col  p-4'> 
            <label>Password</label>
           <input className=' w-80 border relative rounded-xl p-1 bg-gray-100' type="password" />
           </div>
            <button className='border w-[30%] rounded-xl relative my-5 py-1 bg-orange-300 
            hover:bg-indigo-500 text-black' >Sign In </button>
            <div><p className='flex items-center'>
            <input className= 'mr-2 relative'type="checkbox"/> Save password </p>
            New user?
            <button className='relative'><p >Create an account </p></button>
            </div>
        </form>
    </div>
    </div> 
        
  )
}

export default login