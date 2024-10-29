import React from "react";

const PlayButton = ({ onClick, className }) => (
    <button
        className={`w-12 h-12 bg-neutral-600 dark:bg-neutral-400 text-white dark:text-neutral-800 rounded-full flex items-center justify-center pointer-events-auto ${className}`}
        onClick={onClick}
    >
        ▶
    </button>
)

export default PlayButton;