import { useState } from "react";

export default function MovieQuotes() {
  const [message, setMessage] = useState("");
  const URL = "https://mock-practice.prakhar10v.repl.co/bollywood?name=";
  const handleClick = (query) => {
    console.log(query);
    fetch(`${URL}${query}`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };
  return (
    <div className="App">
      <button onClick={() => handleClick("YJHD")}>YJHD</button>
      <button onClick={() => handleClick("ZNMD")}>ZNMD</button>
      <h2>{message}</h2>
    </div>
  );
}