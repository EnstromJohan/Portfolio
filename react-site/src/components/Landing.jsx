import React from "react";
import imageFirstPage from '../assets/landingPic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'; // Import the file download icon

const Landing = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative pt-52">

            <div className="flex items-start justify-center gap-10 w-full max-w-5xl">
                {/* Text container */}
                <div className="flex flex-col justify-start max-w-md">
                    <h1 className="text-8xl font-semibold text-white mb-4">
                        Johan <span className="text-red-400">Enström</span>
                    </h1>
                    <p className="text-2xl font-semibold text-white">
                        Software engineer. Specialized in .NET. Driven to build scalable, high-quality applications.
                    </p>
                </div>

                {/* Image container */}
                <div className="relative max-w-md">
                    <img 
                        src={imageFirstPage} 
                        alt="Profile" 
                        className="w-full h-auto rounded-md shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-rotate-2"
                    />
                </div>  
            </div>   

            {/*buttons*/}
            <div className="flex justify-center items-center w-full max-w-5xl mt-12 gap-10">
                {/* Download button */}
                <div className="max-w-md w-full">
                    <a 
                        href="./CV_jeng.pdf"
                        download
                        className="flex items-center justify-center bg-transparent border-2 border-red-400 text-red-400 font-bold px-6 py-2 rounded hover:bg-red-400 hover:text-white transition w-full h-12"
                    >
                        <FontAwesomeIcon icon={faFileDownload} className="mr-2" size="lg" />
                        Download Resume
                    </a>
                </div>

                {/* Socials */}
                <div className="flex gap-10">
                    <a
                        href="https://github.com/EnstromJohan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-transparent border-2 border-red-400 text-red-400 font-bold px-6 py-2 rounded hover:border-purple-500 hover:bg-purple-500 hover:text-white transition w-48 h-12"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" size="lg" />
                        Github
                    </a>
                    <a 
                        href="https://linkedin.com/in/EnstromJohan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-transparent border-2 border-red-400 text-red-400 font-bold px-6 py-2 rounded hover:border-blue-500 hover:bg-blue-500 hover:text-white transition w-48 h-12"
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