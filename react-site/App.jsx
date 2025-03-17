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

    return (
        <div className="desktop">
            <DesktopIcon icon={binIcon} label="Recycle bin" />
            <DesktopIcon icon={internetIcon} label="Internet Explorer" onClick={() => setOpenWindow("Browser")} />
            <DesktopIcon icon={folderIcon} label="About Me" onClick={() => setOpenWindow("AboutMe")} />
            <DesktopIcon icon={folderIcon} label="Projects" onClick={() => setOpenWindow("Projects")} />
            <DesktopIcon icon={msnIcon} label="Contact Me" onClick={() => setOpenWindow("ContactMe")}/>

            <TaskBar />

            {openWindow === "Browser" && (
                <BrowserWindow
                    title="Internet Explorer"
                    initialUrl="https://enstromjohan.com"
                    onClose={() => setOpenWindow(null)}
                />
            )}

            {openWindow === "AboutMe" && <AboutMe onClose={() => setOpenWindow(null)} />}
            {openWindow === "Projects" && <Projects onClose={() => setOpenWindow(null)} />}
            {openWindow === "ContactMe" && <ContactMe onClose={() => setOpenWindow(null)} />}
        </div>
    );
};

export default App;