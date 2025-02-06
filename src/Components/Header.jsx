import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For icons
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='pt-0  w-full z-50  text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400'>
            <div className='flex items-center p-5  shadow-md shadow-purple-900 '>
                {/* Logo */}
                <div className='text-3xl font-bold flex-grow pl-4'>
                    <h1>Portfolio</h1>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden md:hidden sm:hidden text-gray-400 focus:outline-none cursor-pointer"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Navigation */}
                <div className='space-x-10 text-xl font-medium  hidden lg:flex md:flex sm:flex justify-end pr-10'>
                    <button onClick={() => navigate("/")} className='hover:text-sky-100  cursor-pointer'>Home</button>
                    <button onClick={() => navigate("/about")} className='hover:text-sky-100  cursor-pointer'>About</button>
                    <button onClick={() => navigate("/projects")} className='hover:text-sky-100  cursor-pointer'>Projects</button>
                    <button onClick={() => navigate("/contact")} className='hover:text-sky-100  cursor-pointer'>Contact</button>

                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className=" lg:hidden md:hidden sm:hidden transition-all duration-300 ease-in-out  ">
                    <nav className="text-white bg-transparent shadow-sm shadow-purple-800  py-4 space-y-4   w-64 rounded-lg   right-10 mt-6 ml-auto mr-10  pl-25">
                        <button onClick={() => {
                            navigate("/");
                            setIsOpen(false);
                        }} className="block hover:text-purple-800  cursor-pointer">Home</button>
                        <button onClick={() => {
                            navigate("/about");
                            setIsOpen(false);
                        }
                        } className="block hover:text-purple-800  cursor-pointer">About</button>
                        <button onClick={() => {
                            navigate("/projects");
                            setIsOpen(false);
                        }
                        } className="block hover:text-purple-800  cursor-pointer">Projects</button>
                        <button onClick={() => {
                            navigate("/contact");
                            setIsOpen(false);
                        }
                        } className="block hover:text-purple-800 cursor-pointer">Contact</button>

                    </nav>
                </div>
            )}
        </div>
    );
};

export default Header;