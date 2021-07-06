import React, { useState } from "react";

function UseStateObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>{name.firstName}</h3>
      <h3>{name.lastName}</h3>
    </div>
  );
}

export default UseStateObject;
