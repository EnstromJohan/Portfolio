import React from "react";
import GithubIcon from "../assets/icons/icongithub.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg"; 

const TaskbarSocials = () => {
    return (
        <div className="taskbar-socials">
            <a href="https://github.com/EnstromJohan" target="_blank" rel="noopener noreferrer">
                <img src={GithubIcon} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/enstromjohan" target="_blank" rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
        </div>
    );
};

export default TaskbarSocials;