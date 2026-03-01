import React, { useState, useCallback } from "react";



const Child = React.memo(({ onClick }) => {
  alert("Child Rendered");
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});


const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  );
};

export default App;