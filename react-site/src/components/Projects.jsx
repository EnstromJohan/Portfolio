import React, { useEffect, useRef } from "react";

const projects = [
    {
        name: 'Portfolio site',
        tools: ['Html', 'Javascript', 'React', 'Node', 'Tailwind'],
        description: 'A portfolio site for my projects',
    },
    {
        name: 'Weather App',
        tools: ['JavaScript', 'React', 'API'],
        description: 'An application to display weather information based on location.',
    },
    {
        name: 'Task Manager',
        tools: ['React', 'Node', 'Express', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        name: 'E-commerce Store',
        tools: ['React', 'Redux', 'Firebase'],
        description: 'An online store with user authentication and shopping cart features.',
    },
];

const Projects = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('stacked-visible');
                    } else {
                        entry.target.classList.remove('stacked-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-start text-black dark:text-white">
            <h3 className="text-3xl text-left mb-8">Projects</h3>
            <div className="relative w-full max-w-4xl space-y-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className={`stack-card transition-all duration-700 ease-in-out rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-900`}
                        style={{
                            position: 'sticky',
                            top: `${index * 40}px`,
                            zIndex: index,
                            marginBottom: '20px',
                            padding: '0px', // Remove padding to align UI top flush
                        }}
                    >
                        {/* Mac UI-liknande topp direkt kopplat till stack-card */}
                        <div className="flex items-center justify-start w-full bg-neutral-200 dark:bg-neutral-700 rounded-t-lg">
                            <div className="flex space-x-2 p-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <h4 className="text-lg font-semibold ml-4">{project.name}</h4>
                        </div>

                        {/* Projektinformation */}
                        <div className="pt-4 pl-4 pr-4 pb-8">
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

                        {/* Knapp längst ner på kortet */}
                        <button
                            className="w-full mt-0 py-2 font-semibold bg-neutral-200 dark:bg-neutral-700 rounded-b-lg transition-all duration-300"
                        >
                            View Repository
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;