import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1 data-testid="app-title">React CI/CD Demo App</h1>

      <p>This is a simple React page.</p>

      <h2 data-testid="counter-value">Counter: {count}</h2>

      <button data-testid="increment-btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
