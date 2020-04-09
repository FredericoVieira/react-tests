import React from 'react';
import useCounter from '../hooks/useCounter.hook'

function Counter() {
  const { count, increment, decrement } = useCounter({ initialCount: 1 });

  return (
    <div>
      <button id="btn-decrement" onClick={decrement}>-</button>
      <span id="span-count" className="counter-value">{count}</span>
      <button id="btn-increment" onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
