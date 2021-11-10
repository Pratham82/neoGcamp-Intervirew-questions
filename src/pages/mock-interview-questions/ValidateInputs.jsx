import React, { useState } from "react";
export default function ValidateInputs() {
  const initalState = { userName: "", password: "" };
  const [form, setForm] = useState(initalState);
  const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const onClickHandler = () => {
    const { userName, password } = form;
    return password.includes(userName)
      ? setMessage("Password should not contain username")
      : setMessage("Everything looks good");
  };
  return (
    <>
      <label htmlFor="userName">Username </label>
      <input
        type="text"
        name="userName"
        value={form.userName}
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="text"
        name="password"
        value={form.password}
        onChange={(e) => onChangeHandler(e)}
      />
      <h2>Values:</h2>
      <h2>{message}</h2>
      <button onClick={onClickHandler}> Check</button>
    </>
  );
}
