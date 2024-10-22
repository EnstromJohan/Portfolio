import React, { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './index.css';
// import Projects from "./components/Projects";

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
                className={`fixed top-0 left-0 z-[-2] w-full h-full transition-all duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-white'} bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
            ></div>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Landing />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;