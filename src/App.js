import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const handleClick = () => {
    setCount((val) => {
      setCount(val + 1);
      setPrevCount(val);
      console.log(val);
    });
  };

  return (  
    <>
      <h1>Count: {count}</h1>
      <h1>Previous Count: {prevCount}</h1>
      <button onClick={handleClick}>+</button>
    </>  
   );
}


export default App;
