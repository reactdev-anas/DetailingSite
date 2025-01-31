import React from 'react'
import BeforeAfterBike from '../../images/AfterBefore_Bike_image.jpg'
import SteamWashing from '../../images/Steam_washing_image.jpg'

const OurWorkImages = () => {
  return (
    <div className='w-screen h-[80vh] flex flex-col lg:flex lg:flex-row bg-[#ffff]  lg:items-center lg:justify-evenly'>
    <div className=" w-screen lg:w-96 mt-3 h-72 lg:mt-0 lg:h-80 lg:shadow-2xl overflow-hidden ">
    <img
      src={BeforeAfterBike}
      className=" w-72 lg:w-full h-full mx-auto lg:mx-0 transform duration-300 cursor-pointer hover:scale-105 hover:shadow-lg rounded transition delay-75 ease-in-out"
      alt="Bike_image"
    />
  </div>
  <div className="w-screen  lg:w-96 mt-10 lg:mt-0  h-72 lg:h-80  lg:shadow-2xl   overflow-hidden ">
    <img
      src={SteamWashing}
      className=" w-72 mx-auto lg:mx-0 lg:w-full h-full transform duration-300 cursor-pointer hover:scale-105 hover:shadow-lg rounded transition delay-75 ease-in-out"
      alt="Bike_image"
    />
  </div>
  </div>
  )
}

export default OurWorkImages