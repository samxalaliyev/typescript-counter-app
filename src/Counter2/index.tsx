import { useState } from "react";
import { CounterModel } from "./model";

function Counter2() {
  const [counter, setCounter] = useState<CounterModel>({ count: 0 });

  const increment = () => {
    setCounter({ count: counter.count + 1 });
  };

  const decrement = () => {
    setCounter({ count: counter.count - 1 });
  };

  return (
    <div>
      <h1>Count: {counter.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter2;
