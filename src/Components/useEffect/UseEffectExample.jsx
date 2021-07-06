import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("rendereing");
    document.title = `window Click ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click ME</button>
    </div>
  );
}

export default UseEffectExample;

// we use useffect fot cleanup or as componentWillUnmount and useeffect is a good place to put it returns a function that gets called during unmounting
