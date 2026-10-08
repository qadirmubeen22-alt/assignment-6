 import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(5);
  };

  return (
    <div className="app">
      <div className="counter-card">
        <div className="top-badge">React Counter</div>

        <h1>Counter App</h1>

        <div className="number-box">
          <span>{count}</span>
        </div>

        <div className="buttons">
          <button className="plus-btn" onClick={increase}>
            +
          </button>

          <button className="reset-btn" onClick={reset}>
            Reset
          </button>

          <button className="minus-btn" onClick={decrease}>
            −
          </button>
        </div>

        <p className="message">
          {count > 5
            ? "🚀 Count is increasing!"
            : count < 5
            ? "⬇️ Count is decreasing!"
            : "✨ Ready to count!"}
        </p>
      </div>
    </div>
  );
}

export default App;
