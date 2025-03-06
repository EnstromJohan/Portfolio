import React from "react";
import { GitHubLogo, LinkedInIcon } from "../../assets/icons";

const SocialLinks = ({ position }) => {
  return (
    <div className="w-12 flex">
      {position === "left" && (
        <a href="https://github.com/EnstromJohan" target="_blank" rel="noopener noreferrer">
          <img src={GitHubLogo} alt="GitHub" className="w-8 h-8" />
        </a>
      )}
      {position === "right" && (
        <a href="https://linkedin.com/in/enstromjohan" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;