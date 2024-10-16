import React, { useEffect, useRef } from "react";

const AboutMe = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible')
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current)
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current)
            }
        };
    }, []);

    return (
        <section
            ref={aboutRef}
            className="min-h-screen flex flex-col items-start justify-start pt-10 opacity-0 fade-in transition-opacity duration-1000 ease-in-out px-4 text-black dark:text-white"
        >
            <h3 className="text-3xl text-left mb-2 mt-10">About me</h3>
            <p className="max-w-3xl text-left text-lg">
                Hello there! My name is Johan Enström and I am a recently graduated software developer specialized in .NET from Sweden. My journey
                into software development started with curiosity and grew into passion for creating solutions that make a difference.
                I studied at IT-Högskolan, where I worked on various projects that gave me practical experience in building applications
                and working in collaborative environments. 
                <br/>
                <br/>
                I love challenges and learning new things, and I value being part of a team where I can grow and contribute. My goal is to
                help create meaningful software that brings value to users while always striving to improve myself.
            </p>
            </section>
    )
}

export default AboutMe;