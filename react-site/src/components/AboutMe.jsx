import React, { useState } from "react";
import ExplorerWindow from "./ExplorerWindow";
import BrowserWindow from "./BrowserWindow";
import pdfIcon from "../assets/icons/pdf.png";
import cvFile from "../assets/pdf/CvEng.pdf"; // Path to CV
import "../styles/aboutme.css"; // Import specific styles

const AboutMe = ({ onClose }) => {
    const [openPdf, setOpenPdf] = useState(false);

    return (
        <>
            {/* About Me Window */}
            <ExplorerWindow title="About Me" onClose={onClose}>
                <div className="aboutme-content">
                    <div className="file-icon" onClick={() => setOpenPdf(true)}>
                        <img src={pdfIcon} alt="CV" />
                        <span>My_CV.pdf</span>
                    </div>
                </div>
            </ExplorerWindow>

            {/* Open PDF in a new BrowserWindow */}
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