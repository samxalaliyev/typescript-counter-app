import { CounterProps } from "./model";

const Counter = (props: CounterProps) => {
  return (
    <div>
      <h1>Count: {props.counter}</h1>
    </div>
  );
};

export default Counter;
