import React from "react";
import { ReturnIcon } from "../../assets/icons";
import ResumeButton from './ResumeButton';

const ReturnResume = ({ onReturnClick, resumeLink }) => {
    return (
        <div className="flex items-center mt-8 gap-4">
            <button onClick={onReturnClick} className="w-8 h-8 dark:invert rounded-full">
                <img src={ReturnIcon} alt="Return" />
            </button>

            <ResumeButton 
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
            />
        </div>
    )
}

export default ReturnResume;