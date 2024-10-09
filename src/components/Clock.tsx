import React, { useState, useEffect } from "react";

interface ClockProps {
  name: string;
  timezone: number;
  removeClock: () => void;
}

const Clock: React.FC<ClockProps> = ({ name, timezone, removeClock }) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getFormattedTime = (): string => {
    const localTime = new Date(time.getTime() + timezone * 60 * 60 * 1000);
    return localTime.toLocaleTimeString();
  };

  return (
    <div className="clock">
      <h2>{name}</h2>
      <p>{getFormattedTime()}</p>
      <button onClick={removeClock}>x</button>
    </div>
  );
};

export default Clock;
