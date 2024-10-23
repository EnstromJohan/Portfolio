import React, { useEffect, useRef } from "react";
import HtmlLogo from "../assets/icons/HTML5.svg";
import CssLogo from "../assets/icons/CSS3.svg";
import TailwindLogo from "../assets/icons/Tailwind.svg";
import JsLogo from "../assets/icons/JavaScript.svg";
import ReactLogo from "../assets/icons/React.svg";
import CsharpLogo from "../assets/icons/Csharp.svg";
import NetLogo from "../assets/icons/Net.svg";
import NodeLogo from "../assets/icons/Node.js.svg";
import SqlLogo from "../assets/icons/Sql.svg";
import MongoDbLogo from "../assets/icons/MongoDB.svg";
import GitLogo from "../assets/icons/Git.svg";
import DevOpsLogo from "../assets/icons/DevOps.svg";
import GitHubLogo from "../assets/icons/icongithub.svg";
import PostmanLogo from "../assets/icons/Postman.svg";
import DockerLogo from "../assets/icons/Docker.svg";
import JiraLogo from "../assets/icons/Jira.svg";
import TrelloLogo from "../assets/icons/Trello.svg";
import VSCodeLogo from "../assets/icons/VisualStudioCode.svg";
import VSLogo from "../assets/icons/VisualStudio.svg";
import FigmaLogo from "../assets/icons/Figma.svg";
import PreviousIcon from "../assets/icons/previous.svg";
import { ReactComponent as LogoOne } from '../assets/logo.svg';
import NextIcon from "../assets/icons/next.svg"; 



const Skills = ( {handleNextSlide, handlePrevSlide} ) => {
  const frontendSkills = [
    { name: "HTML", icon: HtmlLogo},
    { name: "CSS", icon: CssLogo},
    { name: "Tailwind", icon: TailwindLogo},
    { name: "JavaScript", icon: JsLogo},
    { name: "React", icon: ReactLogo}
  ]

  const backendSkills = [
    { name: "C#", icon: CsharpLogo },
    { name: ".NET", icon: NetLogo },
    { name: "Node.js", icon: NodeLogo },
    { name: "SQL", icon: SqlLogo },
    { name: "MongoDB", icon: MongoDbLogo }

  ]

  const otherSkills = [
    { name: "Git", icon: GitLogo},
    { name: "Azure DevOps", icon: DevOpsLogo},
    { name: "GitHub", icon: GitHubLogo},
    { name: "Postman", icon: PostmanLogo},
    { name: "Docker", icon: DockerLogo},
    { name: "Jira", icon: JiraLogo},
    { name: "Trello", icon: TrelloLogo},
    { name: "VS Code", icon: VSCodeLogo},
    { name: "VS Studio", icon: VSLogo},
    { name: "Figma", icon: FigmaLogo},
  ]

  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
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
      className="min-h-screen flex items-start justify-center px-4 text-black dark:text-white mb-20 relative"
    >
      <div className="perspective w-full max-w-md relative">
        <div className="flip-card-front bg-neutral-200 dark:bg-neutral-800 shadow-2xl rounded-xl overflow-hidden p-4 h-[640px] ">

          <h3 className="text-3xl text-Lefter font-semibold mt-8">Skills</h3>
          <div className="w-full h-[1px] bg-neutral-400 dark:bg-neutral-600 relative top-4"></div>
          {/*Container för icons*/}
          <div className="h-96 overflow-hidden rounded-lg shadow-md px-4 mt-12">
            <p className="text-center text-s pt-4">Frontend</p>
            <div className="flex flex-wrap justify-center pt-2 gap-3">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  <img
                    src={skill.icon}
                    alt={`$skill.name} icon `}
                    className="h-10 w-10"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-s pt-6">Backend</p>
            <div className="flex flex-wrap justify-center pt-2 gap-3">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  <img
                    src={skill.icon}
                    alt={`$skill.name} icon `}
                    className="h-10 w-10"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-s pt-6">Version control & Tools</p>
            <div className="flex flex-wrap justify-center pt-2 gap-3">
              {otherSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  <img
                    src={skill.icon}
                    alt={`$skill.name} icon `}
                    className={`h-10 w-10 ${
                      skill.name == "GitHub" ? "dark:invert" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-neutral-400 dark:bg-neutral-600 relative"></div>
          <div className="flex items-center justify-between px-6 mt-12">

            {/*Previous*/}
            <button onClick={handlePrevSlide} className="flex items-center ">
              <img
                src={PreviousIcon}
                alt="Previous slide"
                className="w-6 h-6 ml-8 dark:invert"
              />
            </button>

            {/*Logo*/}
            <div className="w-10 h-10">
              <LogoOne />
            </div>

            {/*Next*/}
            <button onClick={handleNextSlide} className="flex items-center ">
              <img
                src={NextIcon}
                alt="Previous slide"
                className="w-6 h-6 mr-8 dark:invert"
              />
            </button>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;