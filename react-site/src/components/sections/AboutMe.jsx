import React, { useState } from 'react';
import FlipCard from '../ui/FlipCard';
import ProgressBar from '../ui/ProgressBar';
import GitHubLink from '../ui/GitHubLink';
import LinkedInLink from '../ui/LinkedInLink';
import Image from '../../assets/picOne.jpg';
import Photo from '../../assets/pic1.jpg';
import CV from "../../assets/CvEng.pdf";
import { NextIcon, ReturnIcon } from "../../assets/icons";

const AboutMeCard = ({ handleNextSlide }) => {
    return (
      <section className="flex items-start justify-center px-4 text-black dark:text-white relative">
        <FlipCard
          front={(setIsFlipped) => (
              <>
              {/* Image */}
              <div className="flex justify-center mb-4 p-4">
                <div className="w-96 h-96 overflow-hidden rounded-lg shadow-md">
                  <img src={Image} alt="Photo" className="w-full h-full object-cover" />
                </div>
              </div>
  
              {/* Name and Title */}
              <div className="text-left mb-4 ml-4">
                <h3 className="text-lg font-bold text-black dark:text-white">Johan Enström</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Software Developer</p>
              </div>
  
              {/* Progress Bar */}
              <ProgressBar />
  
              {/* Social Links and Buttons */}
              <div className="relative flex items-center justify-center pl-10 mt-4 gap-x-6">
                <div className='mr-8'>
                    <GitHubLink />
                </div>

                    <button className="w-12 h-12 bg-neutral-600 dark:bg-neutral-400 text-white dark:text-neutral-800 rounded-full flex items-center justify-center "
                    onClick={() => setIsFlipped(true)}>
                    ▶
                    </button>

                <div className='ml-6'>
                    <LinkedInLink />
                </div>
                
                <button className="w-12 h-12 pl-6" onClick={handleNextSlide}>
                  <img src={NextIcon} alt="Next Slide" className="w-6 h-6 dark:invert" />
                </button>
              </div>
              </>
          )}
  
          back={(setIsFlipped) => (
            <>
              {/* About Me Text */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-neutral-700 dark:text-white">About Me</h3>
                <p className="text-xs text-left text-neutral-700 dark:text-neutral-300">
                Hi, I'm Johan Enström, a software developer who recently completed a two-year program in system development with a focus on .NET. 
                From my studies and internship, I have built a solid foundation in C# and the .NET ecosystem, as well as frontend technologies. 
                I also have good knowledge of version control and DevOps practices, including Git, Azure DevOps, and working with CI/CD pipelines.
                <br/>
                <br/>
                During my internships, I worked on developing platforms using ASP.NET Core and Azure SQL, and I also specialized in web scraping and API integration. 
                I gained hands-on experience in building efficient, well-tested backend solutions and working in agile environments.
                </p>
              </div>
  
              {/* Image and Resume */}
              <div className="flex items-center text-xs text-left text-neutral-700 dark:text-neutral-300">
                <div className="w-1/2 pr-4">
                  <p>
                  I enjoy working in teams, learning new things, and facing challenges. 
                  My positive attitude, loyalty, and strong communication skills have helped me contribute effectively in different environments. 
                  I'm now looking forward to applying my skills and continuing to grow as part of a supportive team.
                  </p>
                </div>
                <div className="w-1/2 flex shadow-lg items-center justify-center">
                  <img src={Photo} alt="Photo" className="rounded-md shadow-lg w-64 h-56 object-cover" />
                </div>
              </div>
  
              {/* Back Button & Resume */}
              <div className="flex justify-left mt-8 gap-4">
                <button className="w-12 h-12 dark:text-neutral-800 rounded-full flex items-center justify-center"
                  onClick={() => setIsFlipped(false)}>
                  <img src={ReturnIcon} alt="Return" className="w-8 h-8 dark:invert" />
                </button>
                <a href={CV} target="_blank" rel="noopener noreferrer"
                  className="w-full h-10 text-center py-2 px-4 rounded-lg text-neutral-400 dark:text-neutral-300 border-2 border-neutral-500 dark:border-neutral-400 font-semibold">
                  View Resume
                </a>
              </div>
            </>
          )}
        />
      </section>
    );
  };
  
  export default AboutMeCard;