import './App.css'
import { useState } from 'react'

function App() {
  let [textSize, setTextSize] = useState(36)

  const changeFontSize = (edit) =>
    edit == 'dec' ? setTextSize((textSize -= 2)) : setTextSize((textSize += 2))

  return (
    <div className="App">
      <h1 style={{ fontSize: `${textSize}px` }}>This is a sample text</h1>
      <button onClick={(e) => changeFontSize('inc')}>
        <b>+</b>
      </button>
      <button onClick={(e) => changeFontSize('dec')}>
        <b>-</b>
      </button>
    </div>
  )
}

export default App
