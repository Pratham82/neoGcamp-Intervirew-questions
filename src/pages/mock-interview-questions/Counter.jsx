import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)
  console.log(number)
  const updateCount = action => {
    action === 'plus'
      ? setNumber(number + 1)
      : number > 0
      ? setNumber(number - 1)
      : setNumber(0)
  }

  return (
    <>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <h2>{number}</h2>
      <button onClick={() => updateCount('plus')}>+</button>
      <button onClick={() => updateCount('minus')}>-</button>
    </>
  )
}
