import React from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  return (
    <div>
      <h1>I am ComponentA</h1>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
