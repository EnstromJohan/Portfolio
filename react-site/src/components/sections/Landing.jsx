import React from "react";
import { ReactComponent as LogoOne } from '../../assets/logo.svg';

const Landing = ( { darkMode }) => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen pt-5 px-4">
            <div className="w-48 sm:w-48 lg:w-72 mb-6">
            <LogoOne className={`w-full h-auto transition-all duration-1000 ease-in-out rotate-on-change ${darkMode ? 'rotate-180' : 'rotate-0'}`} />
            </div>
        </section>
        
    )
}

export default Landing;