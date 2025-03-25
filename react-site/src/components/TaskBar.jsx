import React, { useState } from "react";
import Clock from "./Clock";
import StartMenu from "./StartMenu";
import githubIcon from "../assets/icons/icongithub.svg";

const TaskBar = ({ recentFiles, onOpenFile, onShutdown }) => {
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    return (
        <div className="taskbar">
            <button className="start-button" onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}>
                <img src="/w98logo.png" alt="Start" />
                Start
            </button>

            {isStartMenuOpen && (
                <StartMenu 
                    recentFiles={recentFiles} 
                    onOpenFile={onOpenFile} 
                    onShutdown={onShutdown} 
                />
            )}

            <div className="taskbar-windows">
                <div className="taskbar-socials">
                    <a href="https://github.com/EnstromJohan" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                </div>
            </div>
            <Clock />
        </div>
    );
};

export default TaskBar;