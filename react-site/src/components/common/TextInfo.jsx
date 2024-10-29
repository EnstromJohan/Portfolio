import React from "react";

const TextInfo = ({ title, description }) => (
    <div className="text-left mb-4 ml-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
)

export default TextInfo;