import React, { useState } from 'react';
import Image from '../../assets/picOne.jpg';
import Photo from '../../assets/pic1.jpg';
import CV from "../../assets/CvEng.pdf";
import {
    LinkedInIcon,
    GitHubLogo,
    NextIcon,
    ReturnIcon
} from "../../assets/icons";

const AboutMeCard = ({ handleNextSlide}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <section className="flex items-start justify-center px-4 text-black dark:text-white relative">
            <div className="perspective w-full max-w-md relative">
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                    {/*Front Side*/}
                    <div className="flip-card-front bg-neutral-200 dark:bg-neutral-800 shadow-lg rounded-xl overflow-hidden p-4 h-[640px]">
                        {/*Image Container*/}
                        <div className="flex justify-center mb-4 p-4">
                            <div className="w-96 h-96 overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={Image}
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
                         <div className="flex flex-col items-center mb-4 px-4">
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
                                href="https://github.com/EnstromJohan" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="pointer-events-auto"
                            >
                                <img src={GitHubLogo} alt="GitHub" className="w-8 h-18 ml-14" />
                            </a>

                            <button
                                className="w-12 h-12 bg-neutral-600 dark:bg-neutral-400 text-white dark:text-neutral-800 rounded-full flex items-center justify-center pointer-events-auto"
                                onClick={handleFlip}
                            >
                                ▶
                            </button>
                            <a 
                                href="https://linkedin.com/in/enstromjohan" 
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

                    {/*Backside about me*/}
                    <div className="flip-card-back bg-neutral-200 dark:bg-neutral-700 shadow-2xl rounded-xl overflow-hidden p-4 h-[640px]">
                        <div className="text-center mb-4">
                            <h3 className="text-lg text-left font-bold text-neutral-700 dark:text-white">About Me</h3>
                            <p className="text-xs text-left text-neutral-700 dark:text-neutral-300">
                            Hi, I'm Johan Enström, a software developer who recently completed a two-year program in system development 
                            with a focus on .NET. 
                            From my studies and internship, I have built a solid foundation in C# and the .NET ecosystem, 
                            as well as frontend technologies. 
                            I also have good knowledge of version control and DevOps practices, including Git, 
                            Azure DevOps, and working with CI/CD pipelines.
                            <br/>
                            <br/>
                            During my internships, I worked on developing platforms using ASP.NET Core and Azure SQL, 
                            and I also specialized in web scraping and API integration. 
                            I gained hands-on experience in building efficient, well-tested backend solutions and working in agile environments.
                            <br/>
                            <br/>   
                            </p>  
                            <div className="flex items-center text-xs text-left text-neutral-700 dark:text-neutral-300">
                                <div className='w-1/2 pr-4'>
                                    <p>
                                    I enjoy working in teams, learning new things, and facing challenges.
                                    My positive attitude, loyalty, and strong communication skills have 
                                    helped me contribute effectively in different environments. 
                                    I'm now looking forward to applying my skills and continuing to grow as part of a supportive team.
                                    </p>
                                </div>
                                <div className='w-1/2 flex shadow-lg items-center justify-center'>
                                <img
                                    src={Photo} alt="Photo" className="rounded-md  shadow-lg w-64 h-56 object-cover"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-left mt-8 gap-4">
                            <button className="w-12 h-12 dark:text-neutral-800 rounded-full flex items-center justify-center" onClick={handleFlip}>
                                <img src={ReturnIcon} alt="Return" className="w-8 h-8 dark:invert" />
                            </button>
                            <a 
                                href={CV} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full h-10 text-center py-2 px-4 rounded-lg text-neutral-400 dark:text-neutral-300 dark:text-white-700 border-2 border-neutral-500 dark:border-neutral-400 font-semibold "
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeCard;
