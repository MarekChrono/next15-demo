import { forwardRef } from "react";

const RefComponent = forwardRef<HTMLInputElement, Record<never, never>>(
  (_props, ref) => {
    return <input type="text" ref={ref} />;
  }
);

export default RefComponent;
