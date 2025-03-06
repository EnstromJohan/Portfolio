import React, { useState, useRef, useEffect } from "react";
import { Landing, AboutMe, Skills, Projects, Contact } from "./components/sections";
import { Footer, Header } from "./components/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';
import { projects } from "./data/projectsData";
import { ReactComponent as LogoOne } from './assets/logo.svg';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleNextSlide = () => {
    if(swiperRef.current) {
        swiperRef.current.slideNext();
    }
  }

  const handlePrevSlide = () => {
    if (swiperRef.current) {
        swiperRef.current.slidePrev();
    }
  }

  if (!isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <LogoOne key={darkMode} className="w-96 h-96 mb-4 transition-all duration-1000 ease-in-out rotate-on-change" />
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
          This site is currently only available on mobile devices. <br/>
          Please check on a smaller screen as the desktop version is under construction.
        </h2>
      </div>
    )
  }

  return (
    <div className={`relative w-full min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/*Background Div*/}
      <div
        className={`fixed top-0 left-0 z-[-2] w-full h-full transition-all duration-500 ${darkMode ? 'bg-neutral-950' : 'bg-white'} bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
      ></div>
      
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Landing />

        <div className="flex items-center justify-center pt-8">
          <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="w-full max-w-md"
          >
            <SwiperSlide>
              <AboutMe handleNextSlide={handleNextSlide} />
            </SwiperSlide>
            <SwiperSlide>
              <Skills 
                handleNextSlide={handleNextSlide} 
                handlePrevSlide={handlePrevSlide} 
                />
            </SwiperSlide>
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <Projects 
                        project={project}
                        handleNextSlide={handleNextSlide}
                        handlePrevSlide={handlePrevSlide}
                     />
                </SwiperSlide>                
            ))}
          </Swiper>
        </div>
        <Contact />
      {/* Footer */}
        <Footer />

    </div>
  );
};

export default App;