import React, { useState, useEffect } from 'react';

function Counter({ onCountChange = () => {} }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCountChange(count)
  }, [onCountChange, count]);

  return (
    <div>
      <button id="btn-count" onClick={() => setCount(count + 1)}>Increment Count</button>
      <p id="p-count">Count: {count}</p>
    </div>
  );
}

export default Counter;
