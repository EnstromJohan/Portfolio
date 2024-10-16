import React, { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import './index.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`relative w-full min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
            {/* Background Div */}
            <div
                className={`absolute top-0 left-0 z-[-2] w-full h-full transition-all duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-white'} bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
            ></div>

            {/* Header Component */}
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Landing darkMode={darkMode}/>
            <AboutMe darkMode={darkMode} />
        </div>
    );
};

export default App;