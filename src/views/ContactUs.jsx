import React from 'react'
import icons from '../images/undraw_contact-us_kcoa.svg'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <>
    <div className='w-screen min-h-[75vh] my-10 flex flex-col lg:flex-row'>
      <div className="left w-96 lg:w-[50%] min-h-72 lg:min-h-fit flex  justify-center items-center ">
        <img className=' w-96 lg:w-[40vw] ml-3 lg:ml-0' src={icons}/>
      </div>
      <div className="right w-screen lg:w-[50%]   lg:min-h-fit flex items-center pt-4  flex-col ">
        <div className="flex flex-col my-4">
          <label className='mb-2 font-semibold'>Name</label>
          <input type='text' className='w-80 lg:w-[35vw] py-2  px-4 border  border-cyan-700 rounded' placeholder='Enter your name...' required/>
        </div>
        <div className="flex flex-col my-4">
          <label className='mb-2 font-semibold'>Email</label>
          <input type='email' className=' w-80 lg:w-[35vw] py-2  px-4 border border-cyan-700 rounded' placeholder='Enter your email...' required/>
        </div>
        <div className="flex flex-col my-4">
          <label className='mb-2 font-semibold'>Message</label>
          <textarea className='w-80 lg:w-[35vw] py-2 h-40 px-4 border border-cyan-700 rounded' placeholder='Type your message here...'></textarea>
        </div>
        <div className="btn mb-3">
          <button className='w-80 lg:w-[35vw] py-2  px-4 bg-slate-500 transition ease-in-out delay-75 text-[#ffff] hover:bg-cyan-500 rounded'>Submit</button>
        </div>
      </div>
    </div>
     <Footer/>
    </>
  )
}

export default ContactUs
