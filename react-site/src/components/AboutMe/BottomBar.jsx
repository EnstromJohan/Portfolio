import React from "react";
import SocialLinks from './SocialLinks';
import { GitHubLogo, LinkedInIcon, NextIcon } from "../../assets/icons";

const BottomBar = ({ onPlayClick, onNextClick }) => {
    return (
        <div className="flex items-center justify-around mt-4">
            <SocialLinks href="https://github.com/EnstromJohan" src={GitHubLogo} alt="Github" className="ml-16"/>
            
            <button onClick={onPlayClick} className="w-12 h-12 mx-auto bg-neutral-600 dark:bg-neutral-400 text-white dark:text-neutral-800 rounded-full flex items-center justify-center pointer-events-auto">
                ▶
            </button>
            
            <SocialLinks href="https://linkedin.com/in/enstromjohan" src={LinkedInIcon} alt="LinkedIn" className="mr-6" />

            <button onClick={onNextClick} className="mr-8">
                <img src={NextIcon} alt="Next slide" className="w-6 h-6 dark:invert" />
            </button>
        </div>
    )
}

export default BottomBar;