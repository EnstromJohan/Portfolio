import React, { useEffect, useRef } from "react";
import image from '../assets/pic1.jpg';

const AboutMe = () => {
    const aboutSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                    } else {
                        entry.target.classList.remove('fade-in-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (aboutSectionRef.current) {
            const sectionChildren = aboutSectionRef.current.children;
            Array.from(sectionChildren).forEach((child) => observer.observe(child));
        }

        return () => {
            if (aboutSectionRef.current) {
                const sectionChildren = aboutSectionRef.current.children;
                Array.from(sectionChildren).forEach((child) => observer.unobserve(child));
            }
        };
    }, []);

    return (
        <section
            ref={aboutSectionRef}
            className="min-h-screen flex flex-col items-start justify-start pt-10 px-4 text-black dark:text-white"
        >
            <h3 className="text-3xl justify-start text-left mb-2 opacity-0 fade-in transition-opacity duration-1000 ease-in-out">
                About me
            </h3>
            <p className="max-w-3xl text-left text-lg opacity-0 fade-in transition-opacity duration-1000 ease-in-out">
                Hello there! My name is Johan Enström and I am a recently graduated software developer specialized in .NET from Sweden. My journey
                into software development started with curiosity and grew into passion for creating solutions that make a difference.
                I studied at IT-Högskolan, where I worked on various projects that gave me practical experience in building applications
                and working in collaborative environments. 
                <br/>
                <br/>
                I love challenges and learning new things, and I value being part of a team where I can grow and contribute. My goal is to
                help create meaningful software that brings value to users while always striving to improve myself.
            </p>
            <img
                src={image}
                alt="Photo"
                className="pt-20 w-4/5 h-auto rounded-e-full transition-opacity duration-1000 ease-in-out opacity-0 fade-in grayscale -ml-8"
            />
        </section>
    );
};

export default AboutMe;