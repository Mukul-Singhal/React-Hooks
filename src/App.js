import "./App.css";
import React from "react";
import UseState from "./Components/useState/UseState";
import UsePrevState from "./Components/useState/UsePrevState";
import UseStateObject from "./Components/useState/useStateObject";
import UseStateArray from "./Components/useState/UseStateArray";
import DataFetching from "./Components/useEffect/DataFetching";
//
import UseEffectExample from "./Components/useEffect/UseEffectExample";

import ComponentA from "./Components/useReducer/ComponentA";

export const UserContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* Use state hook */}
      <UseState />
      <UsePrevState />
      <UseStateObject />
      <UseStateArray />
      <UseEffectExample />
      <DataFetching />

      <UserContext.Provider value={"Mukul"}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
