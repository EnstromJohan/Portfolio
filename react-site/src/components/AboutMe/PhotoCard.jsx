import React from "react";

const PhotoCard = ({ src, alt, className }) => (
    <div className={`w-1/2 flex shadow-lg items-center justify-center ${className}`}>
        <img src={src} alt={alt} className="rounded-md shadow-lg w-64 h-56 object-cover" />
    </div>
)

export default PhotoCard;