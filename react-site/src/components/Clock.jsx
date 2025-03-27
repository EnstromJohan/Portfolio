import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="clock-time">
            {time.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" })}
        </span>
    );
};

export default Clock;