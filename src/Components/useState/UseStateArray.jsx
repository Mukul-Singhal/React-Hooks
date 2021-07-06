import React, { useState } from "react";

function UseStateArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: "items.length",
        value: Math.floor(Math.random() * 100),
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a Item</button>
      {items.map((item) => (
        <li>{item.value}</li>
      ))}
    </div>
  );
}

export default UseStateArray;
