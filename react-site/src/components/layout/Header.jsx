import React from "react";
import DarkModeToggle from "../ui/DarkModeToggle";

const Header = ({ toggleDarkMode, darkMode }) => {
    return (
        <header className={`w-full fixed top-0 left-0 flex justify-between items-center px-6 py-8 bg-transparent z-20`}>
            {/* Dark Mode toggle*/}
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </header>
    );
};

export default Header;