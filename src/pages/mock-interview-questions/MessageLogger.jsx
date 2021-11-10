import React, { useState } from "react";

export default function MessageLogger() {
  const [inputVal, setInputVal] = useState("");
  const [color, setColor] = useState("");
  const colors = {
    log: "black",
    warn: "yellow",
    error: "red"
  };
  return (
    <>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      {["log", "warn", "error"].map((type) => (
        <button onClick={(e) => setColor(colors[type])} key={type}>
          {type}
        </button>
      ))}
      <h2 style={{ color: `${color}` }}>{inputVal}</h2>
    </>
  );
}
