// import React from 'react'
// import TeflonImage from '../../images/Teflon_card_image.jpg'
// import CeramicImage from '../../images/Ceramic_card_image.jpg'
// import InteriorImage from '../../images/Interior_card_image.jpg'
// import SteamImage from '../../images/Steam_card_image.jpg'
// import RodentImage from '../../images/Rodent_card_image.jpg'

// const HomeCards = () => {
//     const cardData =[
//         {id:1, image:TeflonImage, title:'Wax/Teflon Coating', descp: 'wax or Teflon coatings provide a smooth, glossy finish that helps repel water, dirt, and grime. They are ideal for enhancing the appearance of surfaces like cars and boats, offering some protection against UV damage and environmental contaminants.' },

//         {id:2, image:CeramicImage, title:'Ceramic/Graphene Coating', descp: 'Graphene ceramic coatings offer superior durability, scratch resistance, and hydrophobic properties. They provide longer-lasting protection, better heat resistance, and enhanced gloss, outperforming traditional ceramic coatings in strength and performance and it removes swell mark.'},

//         {id:3, image:InteriorImage, title:'Interior Dry Clean', descp: 'Interior dry cleaning uses specialized cleaning products to remove dirt, stains, and odors from upholstery, carpets, and fabrics without water. It preserves fabric integrity, preventing shrinkage and water damage, while ensuring cleanliness.'},

//         {id:4, image:SteamImage, title:'Steam Wash', descp: 'Car steam wash uses high-temperature steam to clean the vehicle’s exterior and interior. It effectively removes dirt, grime, and stains, sanitizes surfaces, and reduces water usage, offering an eco-friendly cleaning solution.'},

//         {id:5, image:RodentImage, title:'Engine Coat Rodent', descp: 'Engine coatings create a protective barrier against corrosion and heat, while also reducing the risk of rodent damage. Some coatings repel rodents by making engine components less attractive or harder to chew.'},
//     ]
//   return (
//     <>
//     <div className='bg-orange-600  w-screen  '>
//         {cardData.map((card)=>{
//             return <div key={card.id} className='bg-yellow-300 w-80 '>
//             <img src={card.image} className='w-64 h-64 ' alt='card_image'/>
//             <h2>{card.title}</h2> 
//             <p>{card.descp}</p>
//             </div>
//         })}
//     </div>
//     </>
//   )
// }

// export default HomeCards


// import React from 'react'
// import TeflonImage from '../../images/Teflon_card_image.jpg'
// import CeramicImage from '../../images/Ceramic_card_image.jpg'
// import InteriorImage from '../../images/Interior_card_image.jpg'
// import SteamImage from '../../images/Steam_card_image.jpg'
// import RodentImage from '../../images/Rodent_card_image.jpg'

// const HomeCards = () => {
//     const cardData = [
//         {id: 1, image: TeflonImage, title:'Wax/Teflon Coating', descp:'wax or Teflon coatings provide a smooth, glossy finish that helps repel water, dirt, and grime. They are ideal for enhancing the appearance of surfaces like cars and boats, offering some protection against UV damage and environmental contaminants.'},
//         {id: 2, image: CeramicImage, title: 'Ceramic/Graphene Coating', descp: 'Graphene ceramic coatings offer superior durability, scratch resistance, and hydrophobic properties. They provide longer-lasting protection, better heat resistance, and enhanced gloss, outperforming traditional ceramic coatings in strength and performance and it removes swell mark.'},
//         {id: 3, image: InteriorImage, title: 'Interior Dry Clean', descp: 'Interior dry cleaning uses specialized cleaning products to remove dirt, stains, and odors from upholstery, carpets, and fabrics without water. It preserves fabric integrity, preventing shrinkage and water damage, while ensuring cleanliness.'},
//         {id: 4, image: SteamImage, title: 'Steam Wash', descp: 'Car steam wash uses high-temperature steam to clean the vehicle’s exterior and interior. It effectively removes dirt, grime, and stains, sanitizes surfaces, and reduces water usage, offering an eco-friendly cleaning solution.'},
//         {id: 5, image: RodentImage, title: 'Engine Coat Rodent', descp: 'Engine coatings create a protective barrier against corrosion and heat, while also reducing the risk of rodent damage. Some coatings repel rodents by making engine components less attractive or harder to chew.'}
//     ]

//     return (
//         <div className=" py-10">
//             <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 overflow-hidden">
//                 {cardData.map((card) => {
//                     return (
//                         <div key={card.id} className=" w-96 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ">
//                             <img src={card.image} className="w-full h-48 object-cover rounded-md mb-4" alt="card_image" />
//                             <h2 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h2>
//                             <p className="text-sm text-gray-600">{card.descp}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default HomeCards;


import React from 'react'
import { motion } from 'framer-motion'
import TeflonImage from '../../images/Teflon_card_image.jpg'
import CeramicImage from '../../images/Ceramic_card_image.jpg'
import InteriorImage from '../../images/Interior_card_image.jpg'
import SteamImage from '../../images/Steam_card_image.jpg'
import RodentImage from '../../images/Rodent_card_image.jpg'

const HomeCards = () => {
    const cardData = [
        {id: 1, image: TeflonImage, title: 'Wax/Teflon Coating', descp: 'Wax or Teflon coatings provide a smooth, glossy finish that helps repel water, dirt, and grime. They are ideal for enhancing the appearance of surfaces like cars and boats, offering some protection against UV damage and environmental contaminants.'},
        {id: 2, image: CeramicImage, title: 'Ceramic/Graphene Coating', descp: 'Graphene ceramic coatings offer superior durability, scratch resistance, and hydrophobic properties. They provide longer-lasting protection, better heat resistance, and enhanced gloss, outperforming traditional ceramic coatings in strength and performance and it removes swell mark.'},
        {id: 3, image: InteriorImage, title: 'Interior Dry Clean', descp: 'Interior dry cleaning uses specialized cleaning products to remove dirt, stains, and odors from upholstery, carpets, and fabrics without water. It preserves fabric integrity, preventing shrinkage and water damage, while ensuring cleanliness.'},
        {id: 4, image: SteamImage, title: 'Steam Wash', descp: 'Car steam wash uses high-temperature steam to clean the vehicle’s exterior and interior. It effectively removes dirt, grime, and stains, sanitizes surfaces, and reduces water usage, offering an eco-friendly cleaning solution.'},
        {id: 5, image: RodentImage, title: 'Engine Coat Rodent', descp: 'Engine coatings create a protective barrier against corrosion and heat, while also reducing the risk of rodent damage. Some coatings repel rodents by making engine components less attractive or harder to chew.'}
    ]

    return (
        <div className="py-10 ">
            <div className="container  mx-auto px-4">
                {/* Responsive Grid Layout with controlled gap */}
                <motion.div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 1024:grid-cols-2 1280:grid-cols-3  md:gap-7 gap-8 overflow-hidden"  >
                    {cardData.map((card,index) => {
                        return (
                            <motion.div key={card.id} className="w-full  820:w-[375px] 912:w-96 1024:w-full sm:w-80 1280:w-[365px] lg:mb-3 mx-auto  p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration:0.6, delay: index * 0.1, ease:'easeOut'}}>
                                {/* Image */}
                                <img src={card.image} className="w-full h-48 object-cover rounded-md mb-4" alt="card_image" />
                                {/* Title */}
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h2>
                                {/* Full Description */}
                                <p className="text-sm text-gray-600 leading-relaxed tracking-wide`">{card.descp}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}

export default HomeCards;


