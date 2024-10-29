import React, { useState } from 'react';
import Image from '../../assets/picOne.jpg';
import Photo from '../../assets/pic1.jpg';
import CV from "../../assets/CvEng.pdf";
import { LinkedInIcon, GitHubLogo, NextIcon, ReturnIcon } from "../../assets/icons";
import TextInfo from '../common/TextInfo';
import ProgressBar from '../common/ProgressBar';
import SocialLinks from './SocialLinks';
import FlipButton from './FlipButton';
import PlayButton from '../common/PlayButton';
import BackContent from './BackContent';
import PhotoCard from './PhotoCard';
import ResumeButton from './ResumeButton'

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
                        <TextInfo title="Johan Enström" description="Software developer" />
                        <ProgressBar progress="20%" duration="2:00" remainingTime="-40:00" />
                         

                        <div className="flex items-center justify-around pt-4 relative gap-10">
                            <SocialLinks href="https://github.com/EnstromJohan" src={GitHubLogo} alt="GitHub" className="ml-12"/>
                            <PlayButton onClick={handleFlip} />
                            <SocialLinks href="https://linkedin.com/in/enstromjohan" src={LinkedInIcon} alt="LinkedIn" className="mr-" />
                            <FlipButton onClick={handleNextSlide} src={NextIcon} alt="Next Slide" className="w-12 h-12" />
                        </div>
                    </div>

                    {/*Backside about me*/}
                    <div className="flip-card-back bg-neutral-200 dark:bg-neutral-700 shadow-2xl rounded-xl overflow-hidden p-4 h-[640px]">
                        <BackContent />
                        <div className="flex items-center mt-8 gap-4">
                        <FlipButton onClick={handleFlip} src={ReturnIcon} alt="Return" className="w-8 h-8 dark:text-neutral-800 rounded-full" size={10}/>
                        <ResumeButton href={CV} />
                        </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default AboutMeCard;
