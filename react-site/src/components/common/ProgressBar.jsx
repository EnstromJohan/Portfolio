import React from "react";

const ProgressBar = ({ progress, duration, remainingTime }) => (
    <div className="flex flex-col items-center mb-4 px-4">
        <div className="w-full h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full overflow-hidden">
            <div className="bg-white h-full" style={{ width: progress }}></div>
        </div>
        <div className="flex justify-between w-full mt-1">
            <span className="text-xs text-neutral-600 dark:text-neutral-400">{duration}</span>
            <span className="text-xs text-neutral-600 dark:text-neutral-400">{remainingTime}</span>
        </div>
    </div>
)

export default ProgressBar;