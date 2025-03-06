import React from "react";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <button
            onClick={toggleDarkMode}
            className={`w-12 h-6 rounded-full items-center transition-all duration-500 ${
                darkMode ? "bg-red-400" : "bg-gray-400"
            }`}
            >
                <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-1000 ${
                        darkMode ? "translate-x-6" : "translate-x-0"
                    }`}
                    ></div>
            </button>
    )
}

export default DarkModeToggle;