import React, { useState, useEffect } from "react";
import CLogo from '../assets/logos/CSharp.png';
import NetLogo from '../assets/logos/.net.png';
import NodeLogo from '../assets/logos/node.png';
import SqlLogo from '../assets/logos/sql_server.png';
import MySqlLogo from '../assets/logos/mysql.png';
import MongoDbLogo from '../assets/logos/mongodb.png';
import HtmlLogo from '../assets/logos/html.png';
import CssLogo from '../assets/logos/css.png';
import JsLogo from '../assets/logos/js.png';
import ReactLogo from '../assets/logos/react.png';
import TailwindLogo from '../assets/logos/tailwind.png';
import GitLogo from '../assets/logos/git.png';
import GithubLogo from '../assets/logos/github.png';
import AzureLogo from '../assets/logos/azure.png';
import JiraLogo from '../assets/logos/jira.png';
import TrelloLogo from '../assets/logos/trello.png';
import VsLogo from '../assets/logos/vs.png';
import VsCodeLogo from '../assets/logos/vscode.png';
import DockerLogo from '../assets/logos/docker.png';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [visibleSkills, setVisibleSkills] = useState([]);
    const [currentSkillIndex, setCurrentSkillIndex] = useState(-1);

    // Define the skills
    const skills = {
        backend: [
            { icon: CLogo, name: 'C#' },
            { icon: NetLogo, name: '.NET Core' },
            { icon: NodeLogo, name: 'Node.js' },
            { icon: SqlLogo, name: 'SQL Server' },
            { icon: MySqlLogo, name: 'MySQL' },
            { icon: MongoDbLogo, name: 'MongoDB' },
        ],
        frontend: [
            { icon: HtmlLogo, name: 'HTML' },
            { icon: CssLogo, name: 'CSS' },
            { icon: JsLogo, name: 'JavaScript' },
            { icon: ReactLogo, name: 'React' },
            { icon: TailwindLogo, name: 'Tailwind' },
        ],
        tools: [
            { icon: GitLogo, name: 'Git' },
            { icon: GithubLogo, name: 'GitHub' },
            { icon: AzureLogo, name: 'Azure DevOps' },
            { icon: JiraLogo, name: 'Jira' },
            { icon: TrelloLogo, name: 'Trello' },
            { icon: VsLogo, name: 'Visual Studio' },
            { icon: VsCodeLogo, name: 'Visual Studio Code' },
            { icon: DockerLogo, name: 'Docker' },
        ],
    };

    const skillsList = skills[selectedSkill] || [];

    // fade-in sequence
    useEffect(() => {
        if (selectedSkill) {
            setCurrentSkillIndex(0);
            setVisibleSkills([]);
        }
    }, [selectedSkill]);

    useEffect(() => {
        if (currentSkillIndex >= 0 && currentSkillIndex < skillsList.length) {
            const timeout = setTimeout(() => {
                setVisibleSkills((prev) => [...prev, skillsList[currentSkillIndex]]);
                setCurrentSkillIndex((prev) => prev + 1);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [currentSkillIndex, skillsList]);

    const closeOverlay = () => {
        setCurrentSkillIndex(-1);
        setSelectedSkill(null);
        setVisibleSkills([]);
    };

    const renderLetters = (skillName) => {
        return skillName.split('').map((letter, index) => (
            <span
                key={index}
                className="inline-block transition-opacity duration-500"
                style={{
                    opacity: 1,
                    transitionDelay: `${index * 100}ms`,
                }}
            >
                {letter}
            </span>
        ));
    };

    return (
        <section className="min-h-screen py-20 relative">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-semibold text-white mb-4 pb-6">Skills</h2>
                <div className="w-1/4 h-0.5 mx-auto bg-red-400"></div>
            </div>

            {/* Buttons */}
            {!selectedSkill && (
                <div className="flex justify-center gap-10 px-8">
                    {['backend', 'frontend', 'tools'].map((category) => (
                        <button
                            key={category}
                            className="flex items-center justify-center bg-transparent border-2 border-red-400 text-red-400 font-bold px-6 py-2 rounded hover:border-red-400 hover:bg-red-400 hover:text-white transition w-48 h-12"
                            onClick={() => setSelectedSkill(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            )}

            {/* List */}
            {selectedSkill && (
                <div className="relative mt-10 flex flex-col items-start justify-start max-w-4xl mx-auto">
                    {visibleSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-4 text-white font-semibold text-2xl mb-4"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                            <span>{renderLetters(skill.name)}</span>
                        </div>
                    ))}

                    {visibleSkills.length === skillsList.length && (
                        <button
                            className="mt-8 bg-red-400 font-semibold text-white px-16 py-2 rounded hover:bg-purple-500 transition"
                            onClick={closeOverlay}
                        >
                            Return
                        </button>
                    )}
                </div>
            )}
        </section>
    );
};

export default Skills;