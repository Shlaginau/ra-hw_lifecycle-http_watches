import React from "react";
import Clock from "./Clock";

interface ClockListProps {
  clocks: { id: number; name: string; timezone: number }[];
  removeClock: (id: number) => void;
}

const ClockList: React.FC<ClockListProps> = ({ clocks, removeClock }) => {
  return (
    <div className="clock-list">
      {clocks.map((clock) => (
        <Clock
          key={clock.id}
          name={clock.name}
          timezone={clock.timezone}
          removeClock={() => removeClock(clock.id)}
        />
      ))}
    </div>
  );
};

export default ClockList;
