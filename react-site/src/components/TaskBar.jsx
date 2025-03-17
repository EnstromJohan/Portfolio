import React from "react";
import Clock from "./Clock";

const TaskBar = () => {
    return (
        <div className="taskbar">
            <button className="start-button">
                <img src="/w98logo.png" alt="Start" />
                    Start
            </button>
            <div className="taskbar-windows">
            </div>
            <Clock />
        </div>
    )
}

export default TaskBar;