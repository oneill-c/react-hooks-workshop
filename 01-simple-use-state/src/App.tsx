import { useState } from "react";

import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);

  const updateCounter = (value: number) => {
    setCounter(counter + value);
  }

  return (
    <div>
      <h1 className="counter-title">Simple useState Example</h1>
      <h3 className="counter-subtitle">Increment and decrement counter</h3>

      <div className="counter-container">
        <div>
          <input
            className="counter-input"
            type="text"
            value={counter}
            disabled
          />
        </div>
        
        <div className="counter-buttons-container">
          <button
            onClick={() => updateCounter(+1)}
          >
            (+) Increment
          </button>
          <button
            onClick={() => updateCounter(-1)}
            disabled={counter === 0}
          >
            (-) Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
