import React from "react";
import "../styles/startMenu.css";

const StartMenu = ({ recentFiles, onOpenFile, onShutdown }) => {
    return (
        <div className="start-menu">
            <div className="start-menu-header">Windows 98</div>
            <div className="start-menu-section">
                <h4>Recent Files</h4>
                <ul>
                    {recentFiles.length > 0 ? (
                        recentFiles.map((file, index) => (
                            <li key={index} onClick={() => onOpenFile(file)}>
                                {file}
                            </li>
                        ))
                    ) : (
                        <li>No recent files</li>
                    )}
                </ul>
            </div>
            <button className="shutdown-button" onClick={onShutdown}>
                Shutdown
            </button>
        </div>
    );
};

export default StartMenu;