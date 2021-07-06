import React, { useState } from "react";

export default function UsePrevState() {
  const initialState = 0;
  // const ans = 3;
  const [count, setCount] = useState(initialState);

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      {console.log("render")}
      {count}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementByFive}>Increment By 5</button>
    </div>
  );
}
