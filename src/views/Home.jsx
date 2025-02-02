import React from 'react'
import CarLogo from '../images/Car_detailing_image.jpg'
import { motion } from 'framer-motion'
import HomeCards from '../components/HomeCards/HomeCards'

export const Home = () => {
  return (
    <>
    <div className=' bg-black min-h-[90vh] w-screen flex flex-col lg:flex-row '>
      <motion.div className="sm:w-screen md:w-[50%] lg:w-[50%]" initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }} >
      <img src={CarLogo} alt='Logo' className=' sm:w-screen md:w-[80%] lg:w-[80%] ml-auto mt-10 sm:h-[40vh] md:h-[70vh] lg:h-[70vh] '  />
      </motion.div>
      <motion.div className=" w-screen md:w-[50%] lg:w-[50%] h-inherit flex flex-col justify-center text-[#ffff]" initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }} >
          <h2 className='text-5xl mb-2 ml-5 lg:ml-0 py-3 font-semibold'>Detailing</h2>
          <p className=' w-[85%] lg:w-[80%] mb-3 lg:ml-0 ml-5  leading-relaxed tracking-wide'>Detailing is a thorough cleaning and restoration process, both inside 
            and outside the car, to maintain its appearance and condition. It includes washing, 
            waxing, polishing, and protecting the exterior, as well as vacuuming,shampooing,
             and deodorizing the interior. Detailing also addresses
             minor imperfections like scratches and stains, enhancing the vehicle’s
              aesthetic and preserving its value.</p>
      </motion.div>
    </div>
    <HomeCards/>
    </>
  )
}


export default Home;

