import { useState } from "react";

export default function SwitchingTitles() {
  const [userInput, setUserInput] = useState("");
  const [modifiedValue, setModifiedValue] = useState("");
  const handleInput = (e) => {
    const responses = {
      Tanvi: "She is the best CEO ever!",
      Tanay: "He is our FUNNY mentor!",
      Swapnil: "He helps us CONQUER jobs!",
      Akanksha: "She is our CHEERFUL Interviewer!"
    };
    const { value } = e.target;
    setUserInput(value);
    if (Object.keys(responses).includes(value)) {
      setModifiedValue(responses[value]);
    } else if (value === "") {
      setModifiedValue("Enter the value");
    } else {
      setModifiedValue("Not found");
    }
  };

  return (
    <>
      <input
        type="text"
        name="userInput"
        onChange={handleInput}
        value={userInput}
      />
      <p>{modifiedValue}</p>
    </>
  );
}
