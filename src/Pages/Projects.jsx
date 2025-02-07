import React from 'react'
import { FaDesktop, FaGithub } from 'react-icons/fa'
import { useState } from 'react';
import movie from '../assets/movie.png';
import perfumy from '../assets/perfumy.png';
import ecourses from '../assets/ecourses.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-in-out', // Animation easing
    once: true, // Animation only happens once
});
const Projects = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className='w-full min-h-screen'>
                <div className='flex justify-center pt-20' data-aos="fade-right">
                    <p className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 text-3xl '>Projects I have Worked On</p>
                </div>
                <div data-aos="fade-left" className='text-white flex pt-20 flex-col justify-center items-center w-full pr-8 pl-8 lg:pr-70 lg:pl-70 md:pr-40 md:pl-40 space-y-30'>
                    <div className=' shadow-sm  shadow-purple-800 rounded-sm'>
                        <h1 className='flex justify-center pt-8 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 text-2xl'> Vite-ECourse Website</h1>
                        <img src={ecourses} className=' w-full p-8 ' alt='Vite' />
                        <div className='pl-8 pr-8 pt-8  text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400'>
                            <p className={`${isExpanded ? "" : "line-clamp-3"}`}>Developed a dynamic Online Courses Platform using React.js, Tailwind CSS, and HTML5 with JSX for building an intuitive and responsive user interface. The project features: Routing , React Hooks: like useState, useEffect, and useContext. Custom JSON Data: Created and integrated sample JSON data to populate course and tutor details .Reusable Components: Designed modular components for headers, footers, and course cards to maintain consistency and scalability.In-Built React Functions:</p></div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className=" pl-8  cursor-pointer  text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400 ">
                            {isExpanded ? " ...Read Less" : "Read More..."}
                        </button>

                        <div className='flex bg-purple-800 p-4 mt-8 justify-between'>
                            <a href='https://github.com/BalajiM2003/e-courses' className='text-gray-300   hover:text-gray-900 font-semibold'><FaGithub className='text-4xl w-full ' />View Code</a>
                            <a href='https://balajim2003.github.io/e-courses/' className='text-gray-300   hover:text-gray-900 font-semibold'>< FaDesktop className='text-4xl   w-full' />View Project</a>
                        </div>

                    </div>
                    <div data-aos="fade-right" className=' shadow-sm  shadow-purple-800 rounded-sm'>
                        <h1 className='flex justify-center  pt-8 font-semibold  text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800'> MovieHunt-Movie  Website</h1>
                        <img src={movie} className=' w-full p-8 ' alt='Vite' />
                        <div className='pl-8 pr-8 pt-8  text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400 '>
                            <p className={`${isExpanded ? "" : "line-clamp-3"}`}> Developed a feature-rich Movie Search Application using React.js, Bootstrap 5, CSS, and HTML5 with JSX for an intuitive and responsive user interface. The project highlights include: Routing: Enabled smooth navigation between search results and detailed movie information . React Hooks , API Integration: Consumed a public movie API to fetch and display movie data, including titles, posters, descriptions, and ratings.Dynamic Linking: Integrated external links directing users to the IMDb page of selected movies.</p></div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className=" pl-8  cursor-pointer  text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400 ">
                            {isExpanded ? " ...Read Less" : "Read More..."}
                        </button>

                        <div className='flex bg-purple-800 p-4 mt-8 justify-between'>
                            <a href='https://github.com/BalajiM2003/movies-react' className='text-gray-300   hover:text-gray-900 font-semibold'><FaGithub className='text-4xl w-full ' />View Code</a>
                            <a href='https://balajim2003.github.io/movies-react/' className='text-gray-300   hover:text-gray-900 font-semibold'>< FaDesktop className='text-4xl   w-full' />View Project</a>
                        </div>

                    </div>
                    <div data-aos="fade-left" className=' shadow-sm  shadow-purple-800 rounded-sm'>
                        <h1 className='flex justify-center pt-8 font-semibold text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800'> Perfumy-Perfume Website</h1>
                        <img src={perfumy} className=' w-full p-8 ' alt='Vite' />
                        <div className='pl-8 pr-8 pt-8  text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400 '>
                            <p className={`${isExpanded ? "" : "line-clamp-3"}`}> Developed a sleek Perfume E-Commerce Application using React.js and Tailwind CSS, featuring a responsive and
                                visually appealing design. Implemented React Router for navigation, React Hooks for state management, and dynamic
                                rendering using sample JSON data for product details, ratings, and reviews. Designed interactive UI components for
                                seamless browsing of perfumes and detailed views, ensuring an intuitive user experience.</p></div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className=" pl-8  cursor-pointer  text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400 ">
                            {isExpanded ? " ...Read Less" : "Read More..."}
                        </button>

                        <div className='flex bg-purple-800 p-4 mt-8 justify-between'>
                            <a href='https://github.com/BalajiM2003/perfumy' className='text-gray-300   hover:text-gray-900 font-semibold'><FaGithub className='text-4xl w-full ' />View Code</a>
                            <a href='https://balajim2003.github.io/perfumy/' className='text-gray-300   hover:text-gray-900 font-semibold'>< FaDesktop className='text-4xl   w-full' />View Project</a>
                        </div>

                    </div >


                </div >
            </div >
        </>
    )
}

export default Projects