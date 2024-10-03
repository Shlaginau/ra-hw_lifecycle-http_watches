import { useState } from 'react';
import './App.css';

const hexToRgb = (hex: string): string | null => {
  const validHex = /^#([A-Fa-f0-9]{6})$/;
  if (!validHex.test(hex)) return null;

  const hexValue = parseInt(hex.slice(1), 16);
  const r = (hexValue >> 16) & 255;
  const g = (hexValue >> 8) & 255;
  const b = hexValue & 255;

  return `rgb(${r}, ${g}, ${b})`;
};

const App: React.FC = () => {
  const [hex, setHex] = useState<string>('#');
  const [rgb, setRgb] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (input.length <= 7 && (input.length === 1 ? input === '#' : input.startsWith('#'))) {
      setHex(input);

      if (input.length === 7) {
        const rgbColor = hexToRgb(input);
        if (rgbColor) {
          setRgb(rgbColor);
          setError(false);
        } else {
          setRgb(null);
          setError(true);
        }
      } else {
        setError(false);
        setRgb(null);
      }
    }
  };

  return (
    <div
      className="converter"
      style={{ backgroundColor: error ? 'red' : rgb ?? '#fff' }}
    >
      <div className="input-box">
        <input
          type="text"
          value={hex}
          onChange={handleChange}
          placeholder="#000000"
          maxLength={7}
        />
      </div>
      <div className="output-box">
        <p>{error ? 'Ошибка!' : rgb || ''}</p>
      </div>
    </div>
  );
};

export default App;
