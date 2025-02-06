import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useNavigate } from 'react-router-dom';
// Initialize AOS for animations
AOS.init();

const About = () => {
    const navigate = useNavigate();
    return (
        <div className=" text-white">
            <div className="max-w-6xl mx-auto px-4 py-20">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-montserrat  mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800" data-aos="fade-up">
                        About Me
                    </h2>
                    <p data-aos="fade-up" className="text-xl font-inter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-300 ">
                        Hi, I'm Balaji, a passionate front-end developer. I specialize in creating dynamic, user-friendly web applications using modern technologies like React, Tailwind CSS, and Redux. I'm always seeking opportunities to grow and build visually appealing web experiences.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mb-12">
                    <h3 data-aos="fade-up" className="text-3xl  text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800">My Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 pt-10">
                        <SkillCard title="React" />
                        <SkillCard title="Tailwind CSS" />
                        <SkillCard title="JavaScript" />
                        <SkillCard title="HTML/CSS" />

                        <SkillCard title=" GitHub" />
                        <SkillCard title="Bootstrap" />
                    </div>
                </div>

                {/* My Journey Section */}
                <div data-aos="fade-up" className="mb-12">
                    <h3 className="text-3xl  text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 ">My Journey</h3>
                    <p className="font-inter text-lg text-center">
                        After completing BCA, I dove deep into front end development. I became passionate about creating interactive, user-centered websites and have continuously learned new technologies. The web is my canvas, and I’m always looking for ways to make it more beautiful and efficient.
                    </p>
                </div>

                {/* Educational Details Section */}
                <div data-aos="fade-up" className="mb-12">
                    <h3 className="text-3xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800">Educational Details</h3>
                    <div className="space-y-8">
                        <EducationCard title="Bachelor of Computer Applications" year="2021 - 2024" institution="VELLORE INSTITUTE OF TECHNOLOGY" description="CGPA - 8.03 / 10.00" />
                        <EducationCard title="HSC" year="2020-2021" institution="SRMHSS Arcot" description="Percentage - 84.7 %" />
                        <EducationCard title="SSLC" year="2018-2019" institution="BRIGHT MINDS VIDYODAYA-CBSE" description="Percentage - 76 %" />
                    </div>
                </div>

                {/* Projects Highlight Section */}
                <div data-aos="fade-up" className="mb-12">
                    <h3 className="text-3xl  text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">Featured Projects</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <ProjectCard link="https://balajim2003.github.io/e-courses/" title="VITE" description="A dynamic Courses selling e-commerce site built using React and Tailwind css." />
                        <ProjectCard link="https://balajim2003.github.io/movies-react" title="MOVIE-HUNT" description="Developed a movie details website with external API's , React and Bootstrap " />
                        <ProjectCard link="https://balajim2003.github.io/perfumy/" title="PERFUMY" description="A best UX designed perfume website with React and Tailwind css." />
                    </div>
                </div>

                {/* Call to Action */}
                <div data-aos="fade-up" className="text-center pb-10">
                    <h3 className="text-3xl  mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">Let's Connect</h3>
                    <p className="font-inter text-lg mb-8 ">Feel free to explore my projects or contact me for potential collaborations. I’m always open to new opportunities!</p>
                    <button onClick={() => navigate("/contact")} className="bg-purple-800 text-white py-3 px-8 rounded-lg text-lg hover:bg-purple-600 transition duration-300 ease-in-out cursor-pointer">Contact Me</button>
                </div>

            </div>
        </div>
    );
};

// SkillCard Component for reusable design
const SkillCard = ({ title }) => (
    <div data-aos="fade-right" className="bg-transparent  p-6 rounded-xl shadow-md shadow-purple-600 hover:shadow-md transition transform hover:scale-105 duration-300 ease-in-out text-center cursor-auto">
        <h4 className="cursor-default font-poppins text-xl text-purple-200">{title}</h4>
    </div>
);

// EducationCard Component for reusable design
const EducationCard = ({ title, year, institution, description }) => (
    <div data-aos="zoom-in" className="bg-transparent   p-6 rounded-xl shadow-md shadow-purple-600 hover:shadow-md transition transform hover:scale-105 duration-300 ease-in-out cursor-default">
        <h4 className="font-poppins text-xl text-purple-600">{title}</h4>
        <p className="font-inter text-md text-purple-700">{institution} | {year}</p>
        <p className="font-inter text-sm mt-3">{description}</p>
    </div>
);

// ProjectCard Component for reusable design
const ProjectCard = ({ title, description, link }) => (
    <div data-aos="zoom-out" className="bg-transparent shadow-lg p-6 rounded-xl shadow-black hover:shadow-md transition transform hover:scale-105 duration-300 ease-in-out cursor-default">
        <h4 className="font-poppins text-xl text-purple-600">{title}</h4>
        <p className="font-inter text-sm mt-3">{description}</p>
        <a href={link} className="text-purple-300  border-2 rounded p-4 mt-4 hover:bg-purple-900  inline-block">View Project</a>
    </div>
);

export default About;
