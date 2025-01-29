import { Dispatch, FC, SetStateAction } from "react";

const Counter: FC<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}> = ({ count, setCount }) => (
  <div>
    <h2>Counter</h2>
    <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    <span className="px-4">{count}</span>
    <button onClick={() => setCount((prev) => prev + 1)}>+</button>
  </div>
);

export default Counter;
