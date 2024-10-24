import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';
import { projects } from "./projectsData";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const swiperRef = useRef(null);

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