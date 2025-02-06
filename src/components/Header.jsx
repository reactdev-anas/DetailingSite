import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeaderLogo from '../images/Header_logo_image-removebg-preview.png'
import { Link } from 'react-router';
import { useNavigate } from 'react-router'; 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleHome=()=>{
    return navigate('/')
  }

  return (
    <div className='bg-black w-screen min-h-[7vh] md:min-h-[9vh] lg:min-h-[9vh]  text-white font-semibold flex justify-between items-center px-9 sm:px-9 md:px-10  lg:px-10'>
        <motion.img onClick={handleHome} src={HeaderLogo} initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }} alt='header_logo' className=' w-20 h-16 sm:w-28 sm:h-16 md:w-28 md:h-16 lg:w-28 lg:h-20 cursor-pointer'/>
      {/* Hamburger Icon for Mobile */}
      <motion.div className='lg:hidden' initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
       <button className='text-white'>
         {isMenuOpen ? (
            // Cross Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=' mt-2 w-8 h-8'>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // 3 Dot Icon
            <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=' mt-2 w-8 h-8 '>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
            </motion.svg>
          )}
        </button>
      </motion.div>

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





