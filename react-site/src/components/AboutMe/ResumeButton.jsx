import React from "react";

const ResumeButton = ({ href }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 text-center py-2 px-4 rounded-lg text-neutral-400 dark:text-neutral-300 dark:text-white-700 border-2 border-neutral-500 dark:border-neutral-400 font-semibold flex-grow"
    >
        View Resume
    </a>
)

export default ResumeButton;