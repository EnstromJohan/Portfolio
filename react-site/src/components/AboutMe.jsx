import React, { useState } from "react";
import ExplorerWindow from "./ExplorerWindow";
import BrowserWindow from "./BrowserWindow";
import pdfIcon from "../assets/icons/document.png";
import cvFile from "../assets/pdf/CvEng.pdf"; 
import "../styles/aboutMe.css"; 

const AboutMe = ({ onClose }) => {
    const [openPdf, setOpenPdf] = useState(false);

    return (
        <>
            {/* About_me Window */}
            <ExplorerWindow title="About Me" onClose={onClose}>
                <div className="aboutme-content">
                    <div className="file-icon" onClick={() => setOpenPdf(true)}>
                        <img src={pdfIcon} alt="CV" />
                        <span>CV</span>
                    </div>
                </div>
            </ExplorerWindow>

            {/* Open PDF in BrowserWindow */}
            {openPdf && (
                <BrowserWindow
                    title="CV - Johan Enström"
                    initialUrl={cvFile}
                    onClose={() => setOpenPdf(false)}
                />
            )}
        </>
    );
};

export default AboutMe;