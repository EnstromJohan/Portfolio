import React from "react";
import backgroundImage from '../assets/modified_background_image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Landing = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative">
            {/* Overlay */}
            

            {/* Main Content container */}
            <div className="relative flex items-start gap-20 max-w-5xl mx-auto">
                {/* Text container */}
                <div className="bg-transparent bg-opacity-10 p-8 rounded-md text-left max-w-md -mt-10">                        
                    <h1 className="text-8xl font-semibold text-white mb-4">
                        Johan <span className="text-red-400">Enström</span>
                    </h1>
                    <p className="text-4xl font-semibold text-white">
                        Software engineer. Specialized in .NET. Driven to build scalable, high-quality applications.
                    </p>
                </div>

                {/* Image container */}               
                <img 
                    src={backgroundImage} 
                    alt="Profile" 
                    className="max-w-md max-h-[500px] rounded-md shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
                />
            </div>

            {/* Buttons and Icons Container */}
            <div className="flex justify-between items-center w-full max-w-5xl mt-8 px-8 gap-20">
                {/* Download Resume Button */}
                <a 
                    href="./CV_jeng.pdf" 
                    download 
                    className="flex items-center justify-center bg-transparent border-4 border-red-400 text-red-400 font-bold px-4 py-2 rounded hover:bg-red-400 hover:text-white transition max-w-md w-full h-12"
                >
                    Download Resume
                </a>
                
                {/* Social Icons */}
                <div className="flex-1 flex justify-center gap-6">
                    <a 
                        href="https://github.com/EnstromJohan" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center bg-transparent border-4 border-red-400 text-red-400 font-bold px-4 py-2 rounded hover:bg-purple-500 hover:border-purple-500 hover:text-white transition w-40 h-12"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" size="lg" />
                        Github
                    </a>
                    <a 
                        href="https://linkedin.com/in/EnstromJohan" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center bg-transparent border-4 border-red-400 text-red-400 font-bold px-4 py-2 rounded hover:bg-blue-500 hover:border-blue-500 hover:text-white transition w-40 h-12"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="lg" />
                        LinkedIn
                    </a>
                </div>                     
            </div>      
        </section>
    );
};

export default Landing;