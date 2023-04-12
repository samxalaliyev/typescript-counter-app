import Counter from "./Counter";
import { useState } from "react";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div>
        <Counter counter={counter} />

        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      </div>
      <Counter2 />
      <Counter3 />
    </div>
  );
}

export default App;
