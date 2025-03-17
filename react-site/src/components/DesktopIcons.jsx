import React from "react";
import "../styles/desktopIcons.css";

const DesktopIcon = ({ icon, label, onClick }) => {
    return (
        <div className="desktop-icon" onClick={onClick}>
            <img src={icon} alt={label} className="icon-image" />
            <span className="icon-label">{label}</span>
        </div>
    )
}

export default DesktopIcon;