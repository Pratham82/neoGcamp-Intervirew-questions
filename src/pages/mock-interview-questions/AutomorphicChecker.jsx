import { useState } from "react";
import "./styles.css";

export default function AutomorphicChecker() {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");
  const checkIfAutomorphic = () => {
    const square = Math.pow(number, 2);
    const lastNumber = square % 10;
    Number(number) === lastNumber
      ? setMessage(`${number} is an automorphic number`)
      : setMessage(`${number} is not automorphic number`);
  };
  return (
    <div className="App">
      <h1>Automorphic Checker</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={checkIfAutomorphic}>Check</button>
      <h2>{message}</h2>
    </div>
  );
}
