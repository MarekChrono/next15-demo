"use client";
import { useRef } from "react";
import RefComponent from "./RefComponent";

const RefParent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <RefComponent ref={inputRef} />
      <button className="pl-4" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default RefParent;
