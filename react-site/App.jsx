import React from "react";
import TaskBar from "./src/components/TaskBar";
import DesktopIcon from "./src/components/DesktopIcons";
import folderIcon from "./src/assets/icons/folder.png";
import internetIcon from "./src/assets/icons/internet.png";
import binIcon from "./src/assets/icons/recycle_bin_empty.png"
import msnIcon from "./src/assets/icons/msn.png";


const App = () => {
  return (
    <div className="desktop">

        <DesktopIcon icon={binIcon} label="Recycle bin" />
        <DesktopIcon icon={internetIcon} label="Internet explorer" />
        <DesktopIcon icon={folderIcon} label="About Me" />
        <DesktopIcon icon={folderIcon} label="Projects" />
        <DesktopIcon icon={msnIcon} label="Contact me" />
        <TaskBar />
    </div>
  );
};

export default App;