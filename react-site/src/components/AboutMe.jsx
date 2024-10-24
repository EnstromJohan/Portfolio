import React, { useState } from 'react';
import image from '../assets/picOne.jpg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import GitHubIcon from '../assets/icons/github.svg';
import NextIcon from "../assets/icons/next.svg";

const AboutMeCard = ({ handleNextSlide}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <section className="min-h-screen flex items-start justify-center px-4 text-black dark:text-white mb-20 relative">
            <div className="perspective w-full max-w-md relative">
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                    {/*Front Side*/}
                    <div className="flip-card-front bg-neutral-200 dark:bg-neutral-800 shadow-2xl rounded-xl overflow-hidden p-4 h-[640px]">
                        {/*Image Container*/}
                        <div className="flex justify-center mb-4 p-4">
                            <div className="w-96 h-96 overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={image}
                                    alt="Photo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="text-left mb-4 ml-4">
                            <h3 className="text-lg text-left font-bold text-black dark:text-white">Johan Enström</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Software Developer</p>
                        </div>
                         {/*Bar*/}
                         <div className="flex flex-col items-center mb-4 px-4"> {/* Centered content */}
                            <div className="w-full h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full overflow-hidden">
                                <div className="bg-white h-full w-1/6 transition-all duration-500"></div>
                            </div>
                            <div className="flex justify-between w-full mt-1">
                                <span className="text-xs text-neutral-600 dark:text-neutral-400">2:00</span>
                                <span className="text-xs text-neutral-600 dark:text-neutral-400">-40:00</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-around pt-4 relative">
                            <a 
                                href="https://github.com/your-github" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="pointer-events-auto"
                            >
                                <img src={GitHubIcon} alt="GitHub" className="w-8 h-18 ml-14" />
                            </a>

                            <button
                                className="w-12 h-12 bg-neutral-800 dark:bg-white text-white dark:text-neutral-800 rounded-full flex items-center justify-center pointer-events-auto"
                                onClick={handleFlip}
                            >
                                ▶
                            </button>
                            <a 
                                href="https://www.linkedin.com/in/your-linkedin" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="pointer-events-auto"
                            >
                                <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
                            </a>
                            <button
                                className="w-12 h-12"
                                onClick={handleNextSlide}
                            >
                                <img
                                    src={NextIcon} alt="Next Slide" className="w-6 h-6 dark:invert" />
                            </button>
                        </div>
                    </div>

                    {/*Back Side*/}
                    <div className="flip-card-back bg-neutral-200 dark:bg-neutral-800 shadow-2xl rounded-xl overflow-hidden p-4">
                        <div className="text-center mb-4">
                            <h3 className="text-lg font-bold text-black dark:text-white">About Me</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Hi, I'm Johan Enström. A passionate software developer specialized in .NET, looking to create meaningful software and collaborate in an exciting team.
                            </p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg" onClick={handleFlip}>
                                View Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeCard;