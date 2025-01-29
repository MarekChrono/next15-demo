"use client";
import { useMemo, useState } from "react";
import Counter from "./Counter";
import HeavyComponent from "./HeavyComponent";

const Page = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Compiler Example</h1>
      <Counter setCount={setCount} count={count} />
      <HeavyComponent
        size={{
          height: 200,
          width: 200,
        }}
      />
    </div>
  );
};

export default Page;
