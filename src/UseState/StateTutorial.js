import React, { useState } from "react";

function StateTutorial() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h3>{counter}</h3>
      <button
        onClick={increment}
        style={{ padding: "10px", backgroundColor: "black", color: "white" }}
      >
        <b>Increment</b>
      </button>

      <button
        onClick={decrement}
        style={{ padding: "10px", backgroundColor: "white", color: "black" }}
      >
        <b>Decrement</b>
      </button>

      <button
        onClick={reset}
        style={{ padding: "10px", backgroundColor: "brown", color: "yellow" }}
      >
        <b>Reset</b>
      </button>
    </div>
  );
}

export default StateTutorial;
