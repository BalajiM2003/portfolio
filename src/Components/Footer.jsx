// Footer Component
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="shadow-2xl shadow-purple-200 text-white py-6 mt-10">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Name or Brand */}
                    <div className="text-lg font-semibold mb-4 sm:mb-0">
                        <span>&copy; 2025 Balaji M</span>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6">
                        <a href="https://github.com/BalajiM2003" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i><FaGithub /></i>
                        </a>
                        <a href="https://www.linkedin.com/in/balaji-m-8a3765288" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i><FaLinkedin /></i>
                        </a>
                        <a href="mailto:balajiking435@gmail.com" className="hover:text-gray-400">
                            <i><FaEnvelope /></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
