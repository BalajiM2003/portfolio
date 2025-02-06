import React from 'react';
import { useForm } from 'react-hook-form';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-in-out', // Animation easing
    once: true, // Animation only happens once
});
const ContactPage = () => {


    return (
        <div className="max-w-screen-lg mx-auto px-4 py-20">
            <div className='flex justify-center'>
                <h1 className="text-2xl font-semibold text-center  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 mb-16" data-aos="fade-up">Get me here</h1>
                <img src='./src/assets/contact.png' className='h-10' data-aos="fade-up" />

            </div>

            {/* Social Media Links */}
            <div className="justify-items-center p-10  mb-8 space-y-20">
                <a href="https://github.com/BalajiM2003" data-aos="fade-right" target="_blank" rel="noopener noreferrer" className='h-60 w-full lg:w-1/2 md:w-1/2 sm:w-full flex justify-center items-center group bg-gradient-to-r from-black via-purple-800 to-black  rounded-lg'>
                    <div className="text-6xl  text-white">
                        <FaGithub />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/balaji-m-8a3765288" data-aos="fade-left" target="_blank" rel="noopener noreferrer" className='h-60  w-full lg:w-1/2 md:w-1/2 sm:w-full flex justify-center items-center  group bg-gradient-to-r from-black via-purple-800 to-black  rounded-lg'>
                    <div className="text-6xl text-white">
                        <FaLinkedin />
                    </div></a>
                <a href="mailto:balajiking435@gmail.com" data-aos="fade-right" className='h-60 w-full lg:w-1/2 md:w-1/2 sm:w-full flex justify-center items-center group bg-gradient-to-r from-black via-purple-800 to-black rounded-lg'>
                    <div className="text-6xl text-white">
                        <FaEnvelope />
                    </div></a>
                <a href="https://wa.me/918825549901" target="_blank" rel="noopener noreferrer" data-aos="fade-left" className='h-60 w-full lg:w-1/2 md:w-1/2 sm:w-full flex justify-center items-center group bg-gradient-to-r from-black via-purple-800 to-black  rounded-lg'>
                    <div className="text-6xl  text-white">
                        <FaWhatsapp />
                    </div>
                </a>
                <style jsx>{`
    a.group:hover {
      background-image: linear-gradient(to right, #6b21a8, #000000,#6b21a8); /* reversed gradient */
    }
  `}</style>
            </div>

            {/* Contact Form */}

        </div>
    );
};

export default ContactPage;
