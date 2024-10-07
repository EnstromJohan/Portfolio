import React from "react";

const Header = () => {
    return (
        <header className="w-full absolute top-0 left-0 p-6 z-20 flex items-center justify-between">
            {/* Portfolio Title */}
            <div className="text-2xl font-bold text-white ml-[10vw] px-40">
                Portfolio
            </div>

            {/* Navigation Links */}
            <nav className="mr-[10vw] font-bold text-white px-40">
                <ul className="flex space-x-8">
                    <li><a href="#about" className="hover:text-red-600">About</a></li>
                    <li><a href="#projects" className="hover:text-red-600">Projects</a></li>
                    <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;