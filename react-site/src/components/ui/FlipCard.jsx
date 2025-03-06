import React, { useState } from "react";

const FlipCard = ({ front, back }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="perspective w-full max-w-md relative">
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-card-front bg-neutral-200 dark:bg-neutral-800 shadow-lg rounded-xl overflow-hidden p-4 h-[640px]">
                    {front(setIsFlipped)}
                </div>
                <div className="flip-card-back bg-neutral-200 dark:bg-neutral-700 shadow-2xl rounded-xl overflow-hidden p-4 h-[640px]">
                    {back(setIsFlipped)}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;