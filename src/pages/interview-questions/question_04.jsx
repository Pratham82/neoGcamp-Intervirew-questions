
import React, { useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'

const QuestionFour = () => {
  const [input, setInput] = useState('')
  const [color, setColor] = useState(16)
  const questionText =
    'Q.4. Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.'

  const handleClick = (e, colorVal) => {
    e.preventDefault()
    colorVal === 'red'
      ? setColor('red')
      : colorVal === 'green'
      ? setColor('green')
      : colorVal === 'blue'
      ? setColor('blue')
      : setColor('black')

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
      {['red', 'green', 'blue'].map((val, i) => (
        <button
          className="colorBtn"
          key={i}
          style={{color: `${val}`}}
          disabled={input ? false : true}
          onClick={e => handleClick(e, val)}
        >
          <b>{val}</b>
        </button>
      ))}
      <p>
        Current color: <b>{}</b>
      </p>
      <p style={{ color: `${color}` }}>
        {input}
      </p>
    </React.Fragment>
  )
}

export default QuestionFour
