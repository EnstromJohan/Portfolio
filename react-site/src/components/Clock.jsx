import React, {useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            console.log("Clock updated:", time.toLocaleTimeString("sv-SE")); 
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="taskbar-clock">
            {time.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit"})}
        </div>
    )
}

export default Clock;