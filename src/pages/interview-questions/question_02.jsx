import React, { useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'

const Question2 = () => {
  const [input, setInput] = useState('')
  const [fontSize, setFontSize] = useState(16)
  const questionText =
    'Q.2. Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.'

  const handleClick = (e, instructions) => {
    e.preventDefault()
    instructions === '+' ? setFontSize(fontSize + 2) : setFontSize(fontSize - 2)
  }

  return (
    <React.Fragment>
      <QuestionHeader questionText={questionText} />
      <label htmlFor="input">Input: </label>
      <input
        name="input"
        type="text"
        value={input}
        placeholder="Enter your text here."
        className="inputStyles"
        onChange={e => setInput(e.target.value)}
      />
      <br />
      {['+', '-'].map((val, i) => (
        <button
          className="calculateBtn"
          key={i}
          disabled={input ? false : true}
          onClick={e => handleClick(e, val)}
        >
          <b>{val}</b>
        </button>
      ))}
      <p>
        Current font-size: <b>{fontSize}px</b>{' '}
      </p>
      <p style={{ fontSize: `${fontSize}px` }}>{input}</p>
    </React.Fragment>
  )
}

export default Question2
