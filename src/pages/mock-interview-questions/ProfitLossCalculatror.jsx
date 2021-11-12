import { useState } from "react";

export default function ProfitLossCalculator() {
  const initialState = { currentPrice: "", costPrice: "" };
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const convertToNum = (str) => Number(str);
  const onClickHandler = () => {
    const { costPrice, currentPrice } = form;
    const result =
      convertToNum(currentPrice) > convertToNum(costPrice) ? "profit" : "loss";
    console.log(form);
    const diff = convertToNum(currentPrice) - convertToNum(costPrice);
    setMessage(
      `${result} ${
        Math.abs(diff) === 0 ? "No profit no loss" : Math.abs(diff)
      } Rs`
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <p>currentPrice</p>
      <input
        type="text"
        name="currentPrice"
        value={form.currentPrice}
        onChange={onChangeHandler}
      ></input>
      <p>costPrice</p>
      <input
        type="text"
        name="costPrice"
        value={form.costPrice}
        onChange={onChangeHandler}
      ></input>
      <button onClick={onClickHandler}> calculate </button>
      <h1>{message}</h1>
    </div>
  );
}
