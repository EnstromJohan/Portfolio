import React from "react";

const FlipButton = ({ onClick, src, alt, className, size = 8 }) => (
    <button className={`w-12 h-12 rounded-full flex items-center justify-center ${className}`} 
    onClick={onClick}>
        <img src={src} alt={alt} className={`w-${size} h-${size} dark:invert`} />
    </button>
)

export default FlipButton;