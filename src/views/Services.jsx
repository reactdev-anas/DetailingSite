import React from 'react'
import ServiceCard from './ServiceCard'
import WaxCoatImage from '../images/Wax_coat_image.jpg';
import FullDetailingWork from '../images/Full_detailing_image.jpg'
import GrapheneCeramatic from '../images/Ceramic_coat_image.jpg'
import Chemicalwash from '../images/Chemical_wash_image.jpg'
import EngineCoat from '../images/Rodent_image.jpg'
import SteamWashing from '../images/Steam_washing_image.jpg'
import InteriorDetail from '../images/interior_detail_image.jpg'
const Services = () => {
// Sample JSON data
const data = {
  services: [
    {
      name: "Wax Coat / Teflon Coat",
      price: { hatchback: 1199, suv: 1499 },
      // image: "https://th.bing.com/th/id/OIP.G60hP9RbTtlpL2gFOIARAgHaFj?rs=1&pid=ImgDetMain",
      image : WaxCoatImage
    },
    // {
    //   name: "Interior Cleaning",
    //   details: [
    //     {
    //       service: "Side Gate Cleaning",
    //       price: 249,
    //       // image: "https://lirp.cdn-website.com/11cf55b3/dms3rep/multi/opt/cleaning-a-wooden-gate-with-a-power-washer-min-1920w.jpg",
    //       image : InteriorDetail
    //     },
    //     {
    //       service: "Seat Cover Cleaning",
    //       price: 249,
    //       image: "https://example.com/images/seat-cover-cleaning.jpg",
    //     },
    //     {
    //       service: "Car Base Cleaning",
    //       price: 99,
    //       image: "https://example.com/images/car-base-cleaning.jpg",
    //     },
    //     {
    //       service: "AC Vent Cleaning",
    //       price: 149,
    //       image: "https://example.com/images/ac-vent-cleaning.jpg",
    //     },
    //     {
    //       service: "Roof Cleaning",
    //       price: 499,
    //       type: "Dry Clean, Steam Washing",
    //       image: "https://example.com/images/roof-cleaning.jpg",
    //     },
    //   ],
    // },
    {
      name: "Full Detailing Work",
      price: 1299,
      services: [
        "Rubbing",
        "Polish",
        "Step Compounding",
        "Chrome Part Cleaning",
        "Glass Polish",
        "Buffing",
      ],
      image: FullDetailingWork,
    },
    {
      name: "Graphene / Ceramic Coating",
      plans: [
        {
          type: "1 Time Plan",
          price: { hatchback: 3999, suv: 4499, bike: 1199 },
          image: GrapheneCeramatic,
        },
      ],
    },
    {
      name: "Full Chemical Wash",
      price: 349,
      type: "Interior + Exterior",
      image: Chemicalwash,
    },
    {
      name: "Engine Coat + Rodent",
      price: { car: 599, bike: 399 },
      image: EngineCoat,
    },
    {
      name: "Steam Washing for Full Interior",
      price: 1799,
      image: SteamWashing,
    },
  ],
}
  return (
    <div className='pt-4'>
      <div className='text-center overflow-y-hidden my-5'>  <span className='text-red-600 text-4xl my-4 font-semibold'>3M </span> <span className='text-4xl my-4'>Product work</span></div>
    <div className=" grid grid-cols-1 sm:grid-cols-2 1280:grid-cols-3 1024:grid-cols-2 gap-10 text-white w-screen h-auto  p-3 ">
    {data.services.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
    </div>
    </div>
      
  )
}



export default Services