import React from 'react'
import OurWorkImages from './OurWorkImages'
import { motion } from 'framer-motion'
// {Images for Cars}
import Car1 from '../../images/Hyundai_front_image.jpg'
import Car2 from '../../images/image.jpg'
import Car3 from '../../images/RangeRover_Back_image.jpg'
import Car4 from '../../images/RangeRover_front_image.jpg'
import Car5 from '../../images/RangeRover_frontTyre_image.jpg'
import Car6 from '../../images/RangeRover_image.jpg'
import Car7 from '../../images/RangeRover_SideGlasses_image.jpg'
import Car8 from '../../images/Tigor_Back_image.jpg'
import Car9 from '../../images/Tigor_Sideglasses_image.jpg'
import Car10 from '../../images/SideGlasses_image.jpg'

// {* Images for Scooty*}
import Scooty from '../../images/Activa_5g_image.jpg'
import Scooty1 from '../../images/Scooty_Back_image.jpg'
import Scooty2 from '../../images/Scooty_Front_image.jpg'
import Scooty3 from '../../images/Scooty_Mask_image.jpg'
import Scooty4 from '../../images/Scooty_Mirror_image.jpg'


const OurWorkHeader = () => {
  const carImages = [Car1, Car2, Car3, Car4, Car5, Car6, Car7, Car8, Car9,Car10]
  const scootyImages = [Scooty, Scooty1, Scooty2,Scooty3,Scooty4]
  return (
    <>
    <motion.div className='w-full my-6 sm:my-1 md:my-2 lg:my-1 text-center h-16 flex justify-center items-center font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-3xl' initial={{ y: -50, opacity: 0 }}whileInView={{ y:0,opacity:1 }}
        transition={{ duration: 0.6 }}>Your Vehicle Deserves a Shine Till the End</motion.div>
    <OurWorkImages carImages={carImages} scootyImages={scootyImages} />
    </>
  )
}

export default OurWorkHeader