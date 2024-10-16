import React from "react";
import { ReactComponent as LogoOne } from '../assets/logo.svg';

const Landing = ( { darkMode }) => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen pt-5 px-4">
            <div className="w-52 mb-6">
            <LogoOne key={darkMode} className="w-full h-auto transition-all duration-1000 ease-in-out rotate-on-change" />
            </div>
        </section>
        
    )
}

export default Landing;