import React, { useState } from 'react';
import { Link } from 'react-router'; // Update import for routing

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-black w-screen min-h-[7vh] md:min-h-[9vh] lg:min-h-[9vh]  text-white font-semibold flex justify-between items-center px-10'>
      <h2 className='text-2xl'>Logo</h2>
      {/* Hamburger Icon for Mobile */}
      <div className='lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
       <button className='text-white'>
         {isMenuOpen ? (
            // Cross Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=' mt-2 w-8 h-8'>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // 3 Dot Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=' mt-2 w-8 h-8'>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className={` ${isMenuOpen ? 'block ' : 'hidden'} flex flex-col items-center lg:justify-start lg:flex lg:flex-row bg-black absolute lg:static  lg:bg-transparent top-[7vh] h-[90vh] lg:h-auto  left-0 w-screen lg:w-auto z-30`}>
        <Link
        onClick={() => setIsMenuOpen(false)}
          className='mr-9 text-xl font-normal relative group py-2 lg:py-0'
          to='/'
        >
          Home
          <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-500 group-hover:w-full'></span>
        </Link>
        <Link
        onClick={() => setIsMenuOpen(false)}
          className='mr-9 text-xl font-normal relative group py-2 lg:py-0'
          to='/services'
        >
          Services
          <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
        </Link>
        <Link
        onClick={() => setIsMenuOpen(false)}
          className='mr-9 text-xl font-normal relative group py-2 lg:py-0'
          to='/ourWork'
        >
          Our Work
          <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
        </Link>
        <Link
        onClick={() => setIsMenuOpen(false)}
          className='mr-9 text-xl font-normal relative group py-2 lg:py-0'
          to='/contact'
        >
          Contact Us
          <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className='bg-slate-950 w-screen min-h-[9vh] text-white font-semibold flex justify-between items-center px-10'>
//       <h2 className='text-2xl'>Logo</h2>
      
//       {/* Hamburger Icon or Cross Icon for Mobile */}
//       <div className='lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         <button className='text-white'>
//           {isMenuOpen ? (
//             // Cross Icon
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-8 h-8'>
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             // 3 Dot Icon
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-8 h-8'>
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <nav 
//         className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} absolute lg:static bg-slate-950 lg:bg-transparent w-full top-0 left-0 lg:h-auto flex-col justify-center items-center lg:flex-row z-50`}>
//         <Link
//           className='text-xl font-normal relative group py-2 lg:py-0 mb-4'
//           to='/'
//         >
//           Home
//           <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-500 group-hover:w-full'></span>
//         </Link>
//         <Link
//           className='text-xl font-normal relative group py-2 lg:py-0 mb-4'
//           to='/services'
//         >
//           Services
//           <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
//         </Link>
//         <Link
//           className='text-xl font-normal relative group py-2 lg:py-0 mb-4'
//           to='/ourWork'
//         >
//           Our Work
//           <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
//         </Link>
//         <Link
//           className='text-xl font-normal relative group py-2 lg:py-0 mb-4'
//           to='/contact'
//         >
//           Contact Us
//           <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Header;


// <div className='lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
//        <button className='text-white'>
//          {isMenuOpen ? (
//             // Cross Icon
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-8 h-7'>
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             // 3 Dot Icon
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-8 h-7'>
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
//             </svg>
//           )}
//         </button>
//       </div>


