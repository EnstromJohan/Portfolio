import React, { useState, useEffect } from "react";
import "../styles/explorerWindow.css";
import minimizeIcon from "../assets/icons/minimize.png";
import maximizeIcon from "../assets/icons/maximize.png";
import closeIcon from "../assets/icons/escape.png";

const Window = ({ title, onClose, children }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [position, setPosition] = useState({ 
        x: window.innerWidth / 2 - 300, 
        y: window.innerHeight / 2 - 200 });
    const [dragging, setDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!dragging) return;
            setPosition({ x: e.clientX - startPosition.x, y: e.clientY - startPosition.y });
        };

        const handleMouseUp = () => {
            setDragging(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging, startPosition]);

    const handleMouseDown = (e) => {
        e.preventDefault(); // Prevent text selection while dragging
        setDragging(true);
        setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    return (
        <div
            className={`window ${isMinimized ? "minimized" : ""}`}
            style={{
                top: isMinimized ? "calc(100% - 50px)" : position.y,
                left: isMinimized ? "20px" : position.x,
                width: isMinimized ? "200px" : "600px",
                height: isMinimized ? "50px" : "400px",
            }}
        >
            <div className="window-titlebar" onMouseDown={handleMouseDown}>
                <span className="window-title">{title}</span>
                <div className="window-controls">
                    <button onClick={() => setIsMinimized(!isMinimized)}>
                        <img src={minimizeIcon} alt="minimize" />
                    </button>
                    <button>
                        <img src={maximizeIcon} alt="maximize" />
                    </button>
                    <button onClick={onClose}>
                        <img src={closeIcon} alt="close" />
                    </button>
                </div>
            </div>
            {!isMinimized && <div className="window-content">{children}</div>}
        </div>
    );
};

export default Window;