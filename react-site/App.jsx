import React, { useState } from "react";
import TaskBar from "./src/components/TaskBar";
import Window from "./src/components/ExplorerWindow";
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
            <DesktopIcon icon={internetIcon} label="Internet Explorer" onClick={() => setOpenWindow("browser")} />
            <DesktopIcon icon={folderIcon} label="About Me" onClick={() => setOpenWindow("aboutMe")} />
            <DesktopIcon icon={folderIcon} label="Projects" />
            <DesktopIcon icon={msnIcon} label="Contact me" />

            {/* Open Windows */}
            {openWindow === "aboutMe" && (
                <Window title="About Me" onClose={() => setOpenWindow(null)}>
                    This is the About Me folder
                </Window>
            )}

            {openWindow === "browser" && (
                <BrowserWindow title="Internet Explorer" initialUrl="https://enstromjohan.com" onClose={() => setOpenWindow(null)} />
            )}

            <TaskBar />
        </div>
    );
};

export default App;