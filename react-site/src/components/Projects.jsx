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
    {
        name: 'E-commerce Store',
        tools: ['React', 'Redux', 'Firebase'],
        description: 'An online store with user authentication and shopping cart features.',
    },
    {
        name: 'E-commerce Store',
        tools: ['React', 'Redux', 'Firebase'],
        description: 'An online store with user authentication and shopping cart features.',
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
            <h3 className="text-3xl text-left font-bold mb-4">Projects</h3>
            <div className="relative w-full max-4-xl">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className={`stack-card transition-all duration-700 ease-in-out p-4 border rounded-lg shadow-sm bg-neutral-100 dark:bg-neutral-800`}
                        style={{
                            position: 'sticky',
                            top: `${index * 40}px`, // overlapping effect when scrolling
                            zIndex: index,
                            marginBottom: '50px',
                        }}
                    >
                        <p className="text-sm mb-1 text-purple-500">{`const project = {`}</p>
                        <div className="pl-4">
                            <p className="text-sm text-red-400">
                                name: <span className="text-green-400 dark:text-white">"{project.name}",</span>
                            </p>
                            <p className="text-sm text-red-400">
                                tools: [
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="text-green-400 dark:text-white">
                                        "{tool}"{i < project.tools.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                                ],
                            </p>
                            <p className="text-sm text-red-400">
                                description: <span className="text-green-400 dark:text-white">"{project.description}"</span>
                            </p>
                        </div>
                        <p className="text-sm text-purple-500">{`}`}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
