import React, { useState, useEffect } from "react";
import "../styles/browserWindow.css";
import closeIcon from "../assets/icons/escape.png";

const BrowserWindow = ({ title, initialUrl, onClose }) => {
  const [url, setUrl] = useState(initialUrl);
  const [inputUrl, setInputUrl] = useState(initialUrl);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Adjust window size dynamically
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const taskbarHeight = 40;

    setSize({
      width: screenWidth,
      height: screenHeight - taskbarHeight,
    });

    setPosition({
      x: 0,
      y: 0,
    });
  }, []);

  // Handle user input in address bar
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let formattedUrl = inputUrl.trim();
      if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
        formattedUrl = `https://www.${formattedUrl}`;
      }
      if ((formattedUrl.startsWith("https://") || formattedUrl.startsWith("http://")) && !formattedUrl.includes("www.")) {
        const parts = formattedUrl.split("//");
        formattedUrl = `${parts[0]}//www.${parts[1]}`;
      }
      setUrl(formattedUrl);
    }
  };

  return (
    <div
      className="window"
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
      }}
    >
      {/* Title_bar */}
      <div className="window-titlebar">
        <span className="window-title">{title}</span>
        <div className="window-controls">
          <button onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
      </div>

      {/* Address_bar */}
      <div className="browser-address-bar">
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={(e) => e.target.select()}
          className="browser-address-input"
        />
        <button onClick={() => setUrl(inputUrl)}>Go</button>
      </div>

      {/* Browser_content */}
      <div className="window-content">
        <iframe key={url} src={url} title={title}></iframe>
      </div>
    </div>
  );
};

export default BrowserWindow;