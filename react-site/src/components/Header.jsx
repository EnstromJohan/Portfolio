import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import headerLogo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 flex justify-between items-center px-60 py-4 bg-transparent z-20">

      <div className="w-24">
        <a href="#home">
            <img 
            src={headerLogo}
            alt="Logo"
            className="w-full h-auto"
            />
        </a>
      </div>
      
      <nav className="hidden md:flex space-x-8">
        <ul className="flex space-x-8">
          <li>
            <a href="#about" className="text-xl font-bold text-white hover:text-red-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-xl font-bold text-white hover:text-red-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-xl font-bold text-white hover:text-red-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="md:hidden">
        <button className="text-white">
          <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
};

export default Header;