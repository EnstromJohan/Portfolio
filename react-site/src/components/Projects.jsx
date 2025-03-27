import React, { useState } from "react";
import ExplorerWindow from "./ExplorerWindow";
import ProjectWindow from "./ProjectWindow";
import "../styles/projects.css";
import projectIcon from "../assets/icons/project.png"; 
import projectsData from "../data/projectsData"; 

const Projects = ({ onClose }) => {
    const [openProject, setOpenProject] = useState(null);

    return (
        <>
            <ExplorerWindow title="Projects" onClose={onClose}>
                <div className="projects-content">
                    {projectsData.map((project) => (
                        <div key={project.id} className="file-icon" onClick={() => setOpenProject(project)}>
                            <img src={projectIcon} alt={project.name} />
                            <span>{project.name}</span>
                        </div>
                    ))}
                </div>
            </ExplorerWindow>

            {openProject && (
                <ProjectWindow 
                    project={openProject} 
                    onClose={() => setOpenProject(null)} 
                    onReturn={() => setOpenProject(null)}
                />
            )}
        </>
    );
};

export default Projects;