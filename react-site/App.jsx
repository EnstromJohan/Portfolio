import React, { useState } from "react";
import TaskBar from "./src/components/TaskBar";
import AboutMe from "./src/components/AboutMe";
import BrowserWindow from "./src/components/BrowserWindow";
import DesktopIcon from "./src/components/DesktopIcons";

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
            <DesktopIcon icon={folderIcon} label="Projects" />
            <DesktopIcon icon={msnIcon} label="Contact Me" />

            <TaskBar />

            {/* Open Windows */}
            {openWindow === "Browser" && (
                <BrowserWindow
                    title="Internet Explorer"
                    initialUrl="https://enstromjohan.com"
                    onClose={() => setOpenWindow(null)}
                />
            )}

            {openWindow === "AboutMe" && <AboutMe onClose={() => setOpenWindow(null)} />}
        </div>
    );
};

export default App;