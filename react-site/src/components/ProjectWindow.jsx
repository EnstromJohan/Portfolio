import React from "react";
import ExplorerWindow from "./ExplorerWindow";

const ProjectWindow = ({ project, onClose, onReturn }) => {
    const handleOpenRepo = () => {
        window.open(project.repoUrl, "_blank"); // Open repo in a new tab
    };

    return (
        <ExplorerWindow title={project.name} onClose={onClose}>
            <div className="project-window-content">
                <p>{project.description}</p>
                <button onClick={handleOpenRepo}>View on GitHub</button>
                <button onClick={onReturn}>Return to projects folder</button>
            </div>
        </ExplorerWindow>
    );
};

export default ProjectWindow;