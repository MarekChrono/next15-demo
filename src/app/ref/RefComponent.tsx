"use client";

import { FC, Ref } from "react";

const RefComponent: FC<{ ref: Ref<HTMLInputElement> }> = ({ ref }) => {
  return <input type="text" ref={ref} />;
};

export default RefComponent;
