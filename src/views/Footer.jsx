import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Footer_logo from '../images/Car_logo_image.jpg'

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
      <motion.div className="flex justify-center space-x-6 mb-2"  initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1 }}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-cyan-600 "/> {/* Replace with actual Instagram icon */}
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
          <FaWhatsapp alt="Facebook" className="text-2xl text-cyan-600 " /> {/* Replace with actual Facebook icon */}
        </a>
        <a href="mailto:someone@example.com" >
          <MdOutlineEmail alt="Email" className="text-2xl text-cyan-600 " /> {/* Replace with actual Email icon */}
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;



