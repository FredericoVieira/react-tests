import React from 'react';
import useCounter from '../hooks/useCounter.hook'

function Counter() {
  const { count, increment, decrement } = useCounter({ initialCount: 1 });

  return (
    <div>
      <button id="btn-decrement" className="neumorphic btn btn-counter" onClick={decrement}>-</button>
      <span id="span-count" className="margin-large">{count}</span>
      <button id="btn-increment" className="neumorphic btn btn-counter" onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
