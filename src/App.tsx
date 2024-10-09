import { useState } from "react";
import ClockList from "./components/ClockList";
import "./App.css";

interface Clock {
  id: number;
  name: string;
  timezone: number;
}

function App() {
  const [clocks, setClocks] = useState<Clock[]>([]);
  const [name, setName] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  const addClock = () => {
    if (!name || !timezone) return;
    const newClock: Clock = {
      id: Date.now(),
      name: name,
      timezone: parseFloat(timezone),
    };
    setClocks([...clocks, newClock]);
    setName("");
    setTimezone("");
  };

  const removeClock = (id: number) => {
    setClocks(clocks.filter((clock) => clock.id !== id));
  };

  return (
    <div className="App">
      <h1>Мировые часы</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Временная зона (UTC)"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />
        <button onClick={addClock}>Добавить</button>
      </div>
      <ClockList clocks={clocks} removeClock={removeClock} />
    </div>
  );
}

export default App;
