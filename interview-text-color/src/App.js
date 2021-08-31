import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('Enter Text')
  const [color, setColor] = useState('black')
  return (
    <div className="App">
      <h1
        style={{
          color: color,
        }}
      >
        {text}
      </h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <br />
      {['red', 'blue'].map((col) => (
        <button
          style={{ backgroundColor: col, color: 'white' }}
          onClick={() => setColor(col)}
        >
          {col[0].toUpperCase() + col.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default App
