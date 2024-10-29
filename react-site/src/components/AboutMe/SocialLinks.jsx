import React from "react";

const SocialLinks = ({ href, src, alt, className }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <img src={src} alt={alt} className="w-8 h-8" />
    </a>
)

export default SocialLinks;