import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CsharpLogo from "../assets/icons/Csharp.svg";
import DotnetLogo from "../assets/icons/NET core.svg";
import NodejsLogo from "../assets/icons/Node.js.svg";
import HtmlLogo from "../assets/icons/HTML5.svg";
import CssLogo from "../assets/icons/CSS3.svg";
import JavascriptLogo from "../assets/icons/JavaScript.svg";
import ReactLogo from "../assets/icons/React.svg";

const Skills = () => {
  const skills = [
    { name: "C#", icon: CsharpLogo },
    { name: ".NET Core", icon: DotnetLogo },
    { name: "Node.js", icon: NodejsLogo },
    { name: "HTML", icon: HtmlLogo },
    { name: "CSS", icon: CssLogo },
    { name: "JavaScript", icon: JavascriptLogo },
    { name: "React", icon: ReactLogo },
  ];

  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 3, // Number of skills visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // For smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={skillsRef}
      className="min-h-screen flex flex-col items-center justify-start p-8 pt-20 opacity-0 fade-in transition-opacity duration-1000 ease-in-out text-black dark:text-white"
    >
      <div className="w-full max-w-4xl">
        <h3 className="text-3xl text-right mb-2 mt-10">Skills</h3>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-4">
              <div className="w-36 h-36 bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center justify-center rounded-lg shadow-md p-2 transition-all duration-300 ease-in-out hover:scale-105">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="h-12 w-12 mb-4"
                />
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;