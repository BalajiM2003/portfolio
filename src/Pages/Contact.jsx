import React from 'react';
import contact from '../assets/contact.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert("Your message has been sent successfully!"); // Show alert message
        event.target.reset(); // Reset form fields
    };
    return (
        <div className="w-full min-h-screen flex flex-col justify-between items-center text-white  px-6 py-20">
            {/* Header */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
                    Get in Touch
                </h1>
                <img src={contact} className="h-12 mt-2" alt="Contact" />
                <p className="mt-4 text-lg text-gray-400">
                    Feel free to reach out via any of the platforms below.
                </p>
            </div>
            {/* Social Media Links */}
            <div className="flex flex-col pt-40  text-center justify-center items-center h-full gap-20  ">
                {[
                    { icon: <FaGithub />, link: "https://github.com/BalajiM2003", name: "GitHub" },
                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/balaji-m-8a3765288", name: "LinkedIn" },
                    { icon: <FaEnvelope />, link: "mailto:balajiking435@gmail.com", name: "Email" },
                    { icon: <FaWhatsapp />, link: "https://wa.me/918825549901", name: "WhatsApp" },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        className="group w-96   p-20 rounded-lg transition   bg-gradient-to-l from-purple-800 via-black to-purple-800 hover:from-black hover:via-purple-800 hover:to-black "
                    >
                        <div className='flex flex-col'>
                            <div className="text-5xl text-white pl-22">{item.icon}</div>
                            <p className="mt-2 text-gray-300 group-hover:text-white">{item.name}</p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Contact Form */}
            <div className="mt-36 w-full max-w-lg bg-purple-900 p-8 rounded-lg shadow-md shadow-purple-800" data-aos="fade-up">
                <h2 className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
                    Send Me a Message
                </h2>
                <form onSubmit={handleSubmit} method="POST" className="mt-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-purple-800 text-white focus:ring-2 focus:ring-purple-600 outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg bg-purple-800 text-white focus:ring-2 focus:ring-purple-600 outline-none"
                        required
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-lg bg-purple-800 text-white focus:ring-2 focus:ring-purple-600 outline-none"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full p-3 mt-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-900 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
