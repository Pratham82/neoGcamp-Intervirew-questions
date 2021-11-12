import React, { useState } from 'react'
export default function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const handlePasswordChange = e => {
    setPassword(e.target.value)
    if (password.length <= 10) {
      setMessage('Password length should be more than 10')
    } else {
      setMessage('Success')
    }
    console.log(password.length)
  }
  return (
    <>
      <input
        type="text"
        value={password}
        onChange={e => handlePasswordChange(e)}
      />
      <button disabled={password.length >= 10 ? false : true}>Login</button>
      <h2>{message}</h2>
    </>
  )
}
