import React from 'react';
import { motion } from 'framer-motion';
import Footer_logo from '../images/Car_logo_image.jpg'
import EmailImage from '../images/email_logo.png'
import WatsappImage from '../images/Watsapp_logo.png'
import InstagramImage from '../images/Instagram_Logo-removebg-preview.png'

const Footer = () => {
  return (
    <footer className=" w-screen bg-black py-5">
      {/* Top Section - Name and Copyright */}
      <motion.div className="text-center mb-3" initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }} >
        <p className="text-lg text-[#ffff] font-semibold">Vensero Detailing © 2024</p>
      </motion.div>
      
      {/* Middle Section - Logo */}
      <motion.div className="flex justify-center mb-3"  initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        <img 
          src={Footer_logo} // Replace with your logo image URL
          alt="Logo "
          className="h-28 "
        />
      </motion.div>
      {/* Bottom Section - Social Media Icons */}
      <motion.div className="flex justify-center items-center space-x-6 mb-2"  initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1 }}>
        <a href="https://www.instagram.com/vensero_detailing_center?igsh=ZXFxMnVmMmJzemYx" target="_blank" rel="noopener noreferrer" className='overflow-y-hidden'>
          <motion.img src={InstagramImage} whileHover={{ scale: 1.1 }}
        transition={{ duration:0.3}} alt='Instagram_image' className='h-9 sm:h-10 md:h-10 lg:h-10 '/>
        </a>
        <a href="https://wa.me/7987205720" target="_blank" rel="noopener noreferrer"className='overflow-y-hidden' >
          <motion.img src={WatsappImage}  whileHover={{ scale: 1.1 }}
        transition={{ duration:0.3}} alt='Instagram_image' className=' h-9 sm:h-10 md:h-10 lg:h-10'/>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=venserodetailingcenter@gmail.com" className='overflow-y-hidden'>
          <motion.img src={EmailImage}  whileHover={{ scale: 1.1 }}
        transition={{ duration:0.3}} alt='Instagram_image' className=' h-7 sm:h-8 md:h-8 lg:h-8'/>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;



