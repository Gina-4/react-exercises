import React from 'react';
function Counter() {
  // TODO: Implement useState hook here
  const count = 0;

  // TODO: Implement increment function
  const increment = () => {
    console.log('Increment function not implemented yet');
  };

  // TODO: Implement decrement function
  const decrement = () => {
    console.log('Decrement function not implemented yet');
  };

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
