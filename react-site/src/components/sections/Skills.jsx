import React, { useRef } from "react";
import { ReactComponent as LogoOne } from '../../assets/logo.svg';
import {
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  JsIcon,
  ReactIcon,
  CsharpIcon,
  NetIcon,
  NodeIcon,
  SqlIcon,
  MongoDbIcon,
  GitIcon,
  GitHubIcon,
  PostmanIcon,
  JiraIcon,
  TrelloIcon,
  VSCodeIcon,
  VSIcon,
  FigmaIcon,
  PreviousIcon,
  NextIcon,
  DevOpsIcon,
  DockerIcon
} from "../../assets/icons";

const Skills = ({ handleNextSlide, handlePrevSlide }) => {
  const backendSkills = [
    { name: "C#", icon: CsharpIcon },
    { name: ".NET", icon: NetIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "SQL", icon: SqlIcon },
    { name: "MongoDB", icon: MongoDbIcon }
  ];
  const frontendSkills = [
    { name: "HTML", icon: HtmlIcon },
    { name: "CSS", icon: CssIcon },
    { name: "Tailwind", icon: TailwindIcon },
    { name: "JavaScript", icon: JsIcon },
    { name: "React", icon: ReactIcon }
  ];

  const otherSkills = [
    { name: "Git", icon: GitIcon },
    { name: "Azure DevOps", icon: DevOpsIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Jira", icon: JiraIcon },
    { name: "Trello", icon: TrelloIcon },
    { name: "VS Code", icon: VSCodeIcon },
    { name: "VS Studio", icon: VSIcon },
    { name: "Figma", icon: FigmaIcon }
  ];

  const skillsRef = useRef(null);
  return (
    <section
      ref={skillsRef}
      className=" flex items-start justify-center px-4 text-black dark:text-white relative"
    >
      <div className="perspective w-full max-w-md relative">
        <div className="bg-neutral-200 dark:bg-neutral-800 shadow-2xl rounded-xl overflow-hidden p-4 h-[640px]">
          <div className="flex justify-center items-center mb-4 p-4">
            <div className="w-96 h-96 overflow-hidden rounded-lg shadow-md bg-neutral-300 dark:bg-neutral-700 p-4">
              <div className="flex flex-wrap gap-2 justify-left text-left text-md font-semibold items-center mt-8 px-4">
                {/*Backend*/}
                <h4 className="w-full mt-4">Backend</h4>
                {backendSkills.map((skill, index) => (
                  <img key={index} src={skill.icon} alt={skill.name} className="w-8 h-8" />
                ))}

                {/*Frontend*/}
                <h4 className="w-full">Frontend</h4>
                {frontendSkills.map((skill, index) => (
                  <img key={index} src={skill.icon} alt={skill.name} className="w-8 h-8" />
                ))}


                {/*Version Control/tools*/}
                <h4 className="w-full mt-4">Version Control & Tools</h4>
                {otherSkills.map((skill, index) => (
                  <img
                    key={index}
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-8 h-8 ${skill.name === "GitHub" ? "dark:invert" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-left mb-4 px-4">
            <h3 className="text-lg font-bold text-black dark:text-white">Skills</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech stack overview</p>
          </div>

          <div className="flex flex-col items-center mb-4 px-4">
            <div className="w-full h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full overflow-hidden">
              <div className="bg-white h-full w-1/6 transition-all duration-500"></div>
            </div>
            <div className="flex justify-between w-full mt-1">
              <span className="text-xs text-neutral-600 dark:text-neutral-400">2:00</span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">-40:00</span>
            </div>
          </div>

          {/*Navigation and repo link*/}
          <div className="flex items-center justify-around px-6 relative">
            <button className="h-12" onClick={handlePrevSlide}>
              <img src={PreviousIcon} alt="Previous Slide" className="w-6 h-6 dark:invert" />
            </button>
            
            {/*Logo*/}
            <div className="w-10 h-10">
              <LogoOne />
            </div>

            <button className="h-12" onClick={handleNextSlide}>
              <img src={NextIcon} alt="Next Slide" className="w-6 h-6 dark:invert" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;