import React, { useState } from "react";
import TaskBar from "./components/TaskBar";
import AboutMe from "./components/AboutMe";
import BrowserWindow from "./components/BrowserWindow";
import Projects from "./components/Projects";
import DesktopIcon from "./components/DesktopIcons";
import ContactMe from "./components/ContactMe";
import folderIcon from "./assets/icons/folder.png";
import internetIcon from "./assets/icons/internet.png";
import binIcon from "./assets/icons/recycle_bin_empty.png";
import msnIcon from "./assets/icons/msn.png";
import background from "./assets/background.jpg";

const App = () => {
  const [openWindow, setOpenWindow] = useState(null);
  const [recentFiles, setRecentFiles] = useState([]);

  const openFile = (fileName) => {
    setOpenWindow(fileName);

    // Update recent files
    setRecentFiles((prev) => {
      const updatedList = [
        fileName,
        ...prev.filter((file) => file !== fileName),
      ];
      return updatedList.slice(0, 5); // Store only last 5 files
    });
  };

  const handleShutdown = () => {
    window.close();
  };

  return (
    <div
      className="desktop"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <DesktopIcon icon={binIcon} label="Recycle Bin" />
      <DesktopIcon
        icon={internetIcon}
        label="Internet Explorer"
        onClick={() => openFile("browser")}
      />
      <DesktopIcon
        icon={folderIcon}
        label="About Me"
        onClick={() => openFile("aboutMe")}
      />
      <DesktopIcon
        icon={folderIcon}
        label="Projects"
        onClick={() => openFile("projects")}
      />
      <DesktopIcon
        icon={msnIcon}
        label="Contact Me"
        onClick={() => openFile("contactMe")}
      />

      {/* Open Windows */}
      {openWindow === "aboutMe" && (
        <AboutMe onClose={() => setOpenWindow(null)} />
      )}
      {openWindow === "projects" && (
        <Projects onClose={() => setOpenWindow(null)} />
      )}
      {openWindow === "contactMe" && (
        <ContactMe onClose={() => setOpenWindow(null)} />
      )}
      {openWindow === "browser" && (
        <BrowserWindow
          title="Internet Explorer"
          initialUrl="https://enstromjohan.com"
          onClose={() => setOpenWindow(null)}
        />
      )}

      <TaskBar
        recentFiles={recentFiles}
        onOpenFile={openFile}
        onShutdown={handleShutdown}
      />
    </div>
  );
};

export default App;
