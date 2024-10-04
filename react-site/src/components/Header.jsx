import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
         <div className="text-2xl font-bold text-pink-600">Portfolio</div>  
         <nav>
            <ul className="flex space-x-8">
                <li><a href="#about" className="text-gray-700 hover:text-pink-600">About</a></li>
                <li><a href="#projects" className="text-gray-700 hover:text-pink-600">Projects</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-pink-600">Contact</a></li>
            </ul>
        </nav> 
    </header>
    );
};

export default Header;