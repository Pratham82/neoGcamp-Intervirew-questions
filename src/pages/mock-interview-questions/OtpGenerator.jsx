import { useState } from "react";
import "./styles.css";
const OTP_URL = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

export default function OtpGenerator() {
  const [otp, setOtp] = useState("");
  const [guess, setGuess] = useState("");
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const getOTP = () => {
    fetch(`${OTP_URL}${userName}`)
      .then((res) => res.json())
      .then((data) => setOtp(data.otp.split("-")[1]))
      .catch((err) => console.log(err));
  };
  const validateOTP = () => {
    const res = otp === guess ? "Success" : "Failure";
    setMessage(res);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button onClick={getOTP}>Get OTP</button>
      <h1>OTP: {otp}</h1>
      <input
        type="text"
        placeholder="Enter OTP"
        onChange={(e) => setGuess(e.target.value)}
      ></input>
      <button onClick={validateOTP}>Get OTP</button>
      <h1>{message}</h1>
    </div>
  );
}
