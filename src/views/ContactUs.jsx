import React, { useState } from 'react'
import { motion } from 'framer-motion'
import icons from '../images/undraw_contact-us_kcoa.svg'
import Footer from './Footer'

const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name,
        email,
        message,
    };

    try {
      const response = await fetch('https://backend-detaling-site.vercel.app//send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
    } else {
        console.error('Error sending message.');
    }
} catch (error) {
    console.error('Error sending message.');
}
};

  return (
    <>
    <div className='w-screen min-h-[75vh] my-10 flex flex-col lg:flex-row'>
      <motion.div className="left w-96 lg:w-[50%] min-h-72 lg:min-h-fit flex  justify-center items-center " initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }} >
        <img className=' w-96 lg:w-[40vw] ml-3 lg:ml-0' src={icons}/>
      </motion.div>
      <motion.div className="right w-screen lg:w-[50%]  lg:min-h-fit flex items-center pt-4  flex-col"  initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }} >
        <div className="flex flex-col my-4">
          <label className='mb-2 font-semibold'>Name</label>
          <input type='text' value={name}  onChange={(e) => setName(e.target.value)} className='w-80 lg:w-[35vw] py-2  px-4 border  border-cyan-700 rounded' placeholder='Enter your name...' required/>
        </div>
        <div className="flex flex-col my-4">
          <label className='mb-2 font-semibold'>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className=' w-80 lg:w-[35vw] py-2  px-4 border border-cyan-700 rounded' placeholder='Enter your email...' required/>
        </div>
        <div className="flex flex-col my-4">
          <label className='mb-2 font-semibold'>Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-80 lg:w-[35vw] py-2 h-40 px-4 border border-cyan-700 rounded' placeholder='Type your message here...'></textarea>
        </div>
        <div className="btn mb-3">
          <button onClick={handleSubmit} className='w-80 lg:w-[35vw] py-2  px-4 bg-slate-500 transition ease-in-out delay-75 text-[#ffff] hover:bg-cyan-500 rounded'>Submit</button>
        </div>
      </motion.div>
    </div>
     <Footer/>
     
    </>
  )
}

export default ContactUs
