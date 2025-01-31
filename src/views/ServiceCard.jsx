// const ServiceCard = ({ service }) => {
//     return (
//       <div className=" cursor-pointer hover:shadow-lg  shadow-xl card w-80 h-96 rounded mx-auto text-gray-500">
//         <img className="w-full h-52 " src={service.image} alt={service.name} />
//         <h3>{service.name}</h3>
//         {service.price && typeof service.price === "object" ? (
//           <div className="price">
//             <p>Hatchback: ₹{service.price.hatchback}</p>
//             <p>SUV: ₹{service.price.suv}</p>
//           </div>
//         ) : (
//             <div className="price">
//               <p>₹{service.price}</p>
//             </div>
//           )}
//           {service.details ? (
//             <div className="details">
//               <ul>
//                 {service.details.map((detail, index) => (
//                   <li key={index}>
//                      {detail.service}: ₹{detail.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default ServiceCard;

// const ServiceCard = ({ service }) => {
//     // Accessing image conditionally based on whether 'plans' exists
//     const serviceImage = service.image || (service.plans?.[0]?.image);
  
//     return (
//       <div className="cursor-pointer hover:shadow-lg shadow-xl card w-80 h-96 rounded mx-auto text-gray-500">
//         {/* Displaying the image correctly */}
//         <img className="w-full h-52" src={serviceImage} alt={service.name} />
  
//         <h3>{service.name}</h3>
  
//         {/* Checking if service has 'plans' for Graphene / Ceramic Coating */}
//         {service.plans ? (
//           <div className="price">
//             {service.plans.map((plan, index) => (
//               <div key={index}>
//                 <h4>{plan.type}</h4>
//                 {Object.keys(plan.price).map((key) => (
//                   <p key={key}>
//                     {key.charAt(0).toUpperCase() + key.slice(1)}: ₹{plan.price[key]}
//                   </p>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Displaying price for other services (like Wax Coat or Full Detailing Work)
//           service.price && typeof service.price === "object" ? (
//             <div className="price">
//               {Object.keys(service.price).map((key) => (
//                 <p key={key}>
//                   {key.charAt(0).toUpperCase() + key.slice(1)}: ₹{service.price[key]}
//                 </p>
//               ))}
//             </div>
//           ) : (
//             <div className="price">
//               <p>₹{service.price}</p>
//             </div>
//           )
//         )}
  
//         {/* Displaying additional service details if available */}
//         {service.details ? (
//           <div className="details">
//             <ul>
//               {service.details.map((detail, index) => (
//                 <li key={index}>
//                   {detail.service}: ₹{detail.price}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : null}
//       </div>
//     );
//   };
  
//   export default ServiceCard;

const ServiceCard = ({ service }) => {
    // Accessing image conditionally based on whether 'plans' exists
    const serviceImage = service.image || (service.plans?.[0]?.image);
  
    return (
      <div className="cursor-pointer hover:shadow-xl  ease-in-out delay-100 912:w-96 1280:w-80 1280:h-80 768:w-80 1024:w-96 transition shadow-2xl 540:w-[420px]  w-80  h-96 rounded mx-auto text-gray-600">
        {/* Displaying the image correctly */}
        <img className="w-full h-[55%]  transform duration-300 cursor-pointer hover:scale-105 
         rounded transition delay-75 ease-in-out  object-center" src={serviceImage} alt={service.name} />
  
        <h3 className="mt-2 text-xl font-semibold ml-3">{service.name}</h3>
        {/* Checking if service has 'plans' for Graphene / Ceramic Coating */}
        {service.plans ? (
          <div className="price mt-2">
            {service.plans.map((plan, index) => (
              <div key={index}>
                <h4 className="font-semibold ml-3">{plan.type}</h4>
                {Object.keys(plan.price).map((key) => (
                  <p className="ml-3 my-2 font-semibold" key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: ₹ {plan.price[key]}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          // Displaying price for other services (like Wax Coat or Full Detailing Work)
          service.price && typeof service.price === "object" ? (
            <div className="price mt-2">
              {Object.keys(service.price).map((key) => (
                <p className="ml-3 font-semibold" key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: ₹ {service.price[key]}
                </p>
              ))}
            </div>
          ) : (
            <div className="price mt-2 ml-3">
              <p className="font-semibold">₹ {service.price}</p>
            </div>
          )
        )}
  
        {/* Displaying additional service details for 'Full Detailing Work' */}
        {service.services && (
          <div className="details mt-2">
            <ul className="list-disc pl-5">
              {service.services.map((subService, index) => (
                <span className="font-semibold mr-3" key={index}>{subService}</span>
              ))}
            </ul>
          </div>
        )}
  
        {/* Displaying additional service details if available */}
        {service.details && (
          <div className="details mt-2">
            <ul className="list-disc pl-5">
              {service.details.map((detail, index) => (
                <li key={index}>
                  {detail.service}: ₹{detail.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default ServiceCard;
  
  