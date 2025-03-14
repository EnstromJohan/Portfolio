import React from "react";

const Header = ({ toggleDarkMode, darkMode }) => {
    return (
        <header className={`w-full fixed top-0 left-0 flex justify-between items-center px-6 py-8 bg-transparent z-20`}>
            {/* Dark Mode toggle*/}
            <button
                onClick={toggleDarkMode}
                className={`w-12 h-6 rounded-full flex items-center transition-all duration-500 ${darkMode ? 'bg-red-400' : 'bg-gray-400'}`}
            >
                <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-500 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
                ></div>
            </button>
        </header>
    );
};

export default Header;