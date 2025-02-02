import React from 'react'
import { motion } from 'framer-motion'
// {* Image for Bike*}
import Bike from '../../images/Pulsar_Bike_image.jpg'
const OurWorkImages = ({carImages, scootyImages}) => {
    
  return (
    <>
    <div className="container mx-auto px-4 py-6 shadow-md  ">
      <motion.h2 className='text-center text-2xl sm:text-3xl md:text-3xl  lg:text-4xl font-serif mb-5' initial={{ y: -50, opacity: 0 }}whileInView={{ y:0,opacity:1 }}
        transition={{ duration: 0.6 }}>Cars</motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {carImages.map((image, index) => (
          <motion.div key={index} className="group relative"  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: window.innerWidth < 540 ? 0.4 : 0.6, // Faster animation on small screens
            ease: "easeOut",
          }} 
          style={{ willChange: 'transform, opacity' }} // Performance optimization

          >
            <img
              src={image}
              alt={`Car ${index + 1}`}
              className="w-full h-64  object-cover rounded-lg shadow-md transition duration-300 transform group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
    <div className="container mx-auto px-4 py-6 shadow-md my-12 ">
      <motion.h2 className='text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-serif mb-5' initial={{ y: -50, opacity: 0 }}whileInView={{ y:0,opacity:1 }}
        transition={{ duration: 0.6 }}>Mopads</motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {scootyImages.map((image, index) => (
          <motion.div key={index} className="group relative "  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: window.innerWidth < 540 ? 0.4 : 0.6, // Faster animation on small screens
            ease: "easeOut",
          }} 
          style={{ willChange: 'transform, opacity' }} // Performance optimization
          >
            <img
              src={image}
              alt={`Car ${index + 1}`}
              className="w-full h-64  object-cover rounded-lg shadow-md transition duration-300 transform group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
    <div className='container mx-auto px-4 py-2 sm:py-6 md:py-6 lg:py-6 shadow-md'>
      <motion.h2 className='text-center text-2xl sm:text-3xl md:text-3xl  lg:text-4xl font-serif mb-5' initial={{ y: -40, opacity: 0 }}whileInView={{ y:0,opacity:1 }}
        transition={{ duration: 0.6 }}>Bike</motion.h2>
      <motion.img src={Bike} 
      alt='Bike_image'
     className=" w-full h-64  sm:w-[500px] md:w-[650px] lg:w-[600px] sm:h-96 md:h-96 lg:h-96 sm:mx-auto md:mx-auto lg:mx-auto  object-cover rounded-lg shadow-md transition duration-300 transform group-hover:scale-105"
     initial={{ opacity: 0, }}
     whileInView={{ opacity: 1,  }}
     transition={{ duration: 1.3, ease:'easeOut' }} />
    </div>
    </>
  )
}

export default OurWorkImages





// initial={{ opacity: 0, }}
//           whileInView={{ opacity: 1,  }}
//           transition={{ duration: 1.3, delay: index * 0.2,ease:'easeOut' }}