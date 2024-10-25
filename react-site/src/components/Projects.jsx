import React from "react";
import {
    NextIcon,
    PreviousIcon
} from "../assets/icons";

const Projects = ({ project, handleNextSlide, handlePrevSlide }) => {
  return (
    <section className=" flex items-start justify-center px-4 text-black mb-20 dark:text-white relative">
      <div className="perspective w-full max-w-md relative">
        <div className="bg-neutral-200 dark:bg-neutral-800 shadow-2xl rounded-xl overflow-hidden p-4 h-[640px]">
          <div className="flex justify-center mb-4 p-4">
            <div className="w-96 h-96 overflow-hidden rounded-lg shadow-md bg-neutral-300 dark:bg-neutral-700 p-4">
                <div className="flex items-center space-x-1 pb-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full border-neutral-400"></span>
                    <span className="w-2 h-2 bg-yellow-500 rounded-full border-neutral-400"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full border-neutral-400"></span>
                </div>
              <p className="text-sm mb-1 text-purple-500">{`const project = {`}</p>
              <p className="text-sm text-red-400">
                name: <span className="text-blue-600 dark:text-white">"{project.name}",</span>
              </p>
              <p className="text-sm text-red-400">
                tools: [
                {project.tools.map((tool, i) => (
                  <span key={i} className="text-blue-600 dark:text-white">
                    "{tool}"{i < project.tools.length - 1 ? ', ' : ''}
                  </span>
                ))}
                ],
              </p>
              <p className="text-sm text-red-400">
                description: <span className="text-blue-600 dark:text-white">"{project.description}"</span>
              </p>
              <p className="text-sm text-purple-500">{`}`}</p>
            </div>
          </div>

          <div className="text-left mb-4 ml-4">
            <h3 className="text-lg text-left font-bold text-black dark:text-white">Projects</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Building and growing</p>
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
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-600 border-2 border-neutral-500 dark:border-neutral-500 dark:text-neutral-400 px-2 py-2 rounded-md pointer-events-auto"
            >
              View Repository
            </a>

            <button className="h-12" onClick={handleNextSlide}>
              <img src={NextIcon} alt="Next Slide" className="w-6 h-6 dark:invert" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
