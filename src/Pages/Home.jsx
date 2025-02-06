import React from 'react'

import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-in-out', // Animation easing
    once: true, // Animation only happens once
});
const Home = () => {
    const navigate = useNavigate();
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/BalajiMResume.pdf'; // Ensure resume.pdf is in the public folder
        link.download = 'BalajiMResume.pdf';
        link.click();
    };
    return (
        <div>
            <div className=' pt-20 ' >
                <div className='justify-items-center'  >
                    <div data-aos="zoom-in" >
                        <img src='./src/assets/balaji.png' className='h-80 bg-gradient-to-t from-purple-800 to-black rounded-full shadow-lg shadow-purple-900 ' />
                    </div>
                    <div className='' data-aos="fade-up">
                        <h1 className='text-5xl pt-16  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 font-bold '>Hi , I'm Balaji</h1>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-300 text-xl'>Front End Developer</p>
                    </div>
                    <div className='pt-14 ' data-aos="fade-up">
                        <p className='w-full pl-28 pr-20 lg:pl-72 lg:pr-60 text-purple-300 text-2xl '> Passionate Front-End Developer skilled in creating responsive and user-friendly web applications. Focused on building clean, dynamic, and impactful digital experiences. </p>

                    </div>
                </div>
                <div className='flex justify-center pt-10  items-center'>
                    <button className='bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 cursor-pointer' onClick={() => navigate("/projects")} data-aos="fade-up" >
                        Explore Projects
                    </button>
                </div>
                <div className='pt-20 justify-items-center'>
                    <p className=' text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800' data-aos="fade-up">Worked With</p>

                    <div data-aos="zoom-out" className=' grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-20 pt-14'>
                        <img src='./src/assets/html.png' className='h-20' />
                        <img src='./src/assets/css-3.png' className='h-20' />
                        <img src='./src/assets/js.png' className='h-20' />
                        <img src='./src/assets/react.png' className='h-20' />
                        <img src='./src/assets/Tailwind CSS.png' className='h-20' />
                        <img src='./src/assets/vite.js.png' className='h-20' />
                        <img src='./src/assets/bootstrap.png' className='h-20' />
                        <img src='./src/assets/vs.png' className='h-20' />
                        <img src='./src/assets/React router.png' className='h-20' />
                    </div>
                </div>
                <div className='pt-20 justify-center flex pb-20'>
                    <div className="flex gap-4">
                        {/* Download Button */}
                        <button data-aos="fade-up"
                            onClick={handleDownload}
                            className="bg-purple-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300"
                        >
                            Download Resume
                        </button>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home