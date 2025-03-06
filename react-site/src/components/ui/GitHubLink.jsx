import React from "react";
import { GitHubLogo } from "../../assets/icons";

const GitHubLink = () => {
    return (
    <a href="https://github.com/EnstromJohan" target="_blank" rel="noopener noreferrer">
        <img src={GitHubLogo} alt="GitHub" className="w-8 h-8" />
    </a>
    )
}

export default GitHubLink;
