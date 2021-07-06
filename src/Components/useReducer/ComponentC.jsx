import React, { useContext } from "react";
import { UserContext } from "../../App";

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>I am component C and {user}</h1>
    </div>
  );
}

export default ComponentC;
