import React, { useState } from "react";
import TaskBar from "./src/components/TaskBar";
import AboutMe from "./src/components/AboutMe";
import BrowserWindow from "./src/components/BrowserWindow";
import Projects from "./src/components/Projects";
import DesktopIcon from "./src/components/DesktopIcons";
import ContactMe from "./src/components/ContactMe";

import folderIcon from "./src/assets/icons/folder.png";
import internetIcon from "./src/assets/icons/internet.png";
import binIcon from "./src/assets/icons/recycle_bin_empty.png";
import msnIcon from "./src/assets/icons/msn.png";

const App = () => {
    const [openWindow, setOpenWindow] = useState(null);
    const [recentFiles, setRecentFiles] = useState([]);

    const openFile = (fileName) => {
        setOpenWindow(fileName);

        // Update Recent Files List
        setRecentFiles((prev) => {
            const updatedList = [fileName, ...prev.filter((file) => file !== fileName)];
            return updatedList.slice(0, 5); // Store only last 5 files
        });
    };

    const handleShutdown = () => {
        window.close(); // Attempt to close the window
    };

    return (
        <div className="desktop">
            <DesktopIcon icon={binIcon} label="Recycle Bin" />
            <DesktopIcon icon={internetIcon} label="Internet Explorer" onClick={() => openFile("browser")} />
            <DesktopIcon icon={folderIcon} label="About Me" onClick={() => openFile("aboutMe")} />
            <DesktopIcon icon={folderIcon} label="Projects" onClick={() => openFile("projects")} />
            <DesktopIcon icon={msnIcon} label="Contact Me" onClick={() => openFile("contactMe")}/>

            {/* Open Windows */}
            {openWindow === "aboutMe" && <AboutMe onClose={() => setOpenWindow(null)} />}
            {openWindow === "projects" && <Projects onClose={() => setOpenWindow(null)} />}
            {openWindow === "contactMe" && <ContactMe onClose={() => setOpenWindow(null)} />}
            {openWindow === "browser" && (
                <BrowserWindow title="Internet Explorer" initialUrl="https://enstromjohan.com" onClose={() => setOpenWindow(null)} />
            )}

            <TaskBar recentFiles={recentFiles} onOpenFile={openFile} onShutdown={handleShutdown} />
        </div>
    );
};

export default App;