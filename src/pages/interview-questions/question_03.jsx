import React, { useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'

const QuestionThree = () => {
  const [input, setInput] = useState('')
  const [fontSize, setFontSize] = useState(16)
  const [currentTag, setTag] = useState('')
  const questionText =
    'Q.3. Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.'

  const handleClick = (e, instructions) => {
    e.preventDefault()
    instructions === 'h1'
      ? setFontSize(32)
      : instructions === 'h2'
      ? setFontSize(24)
      : instructions === 'h3'
      ? setFontSize(20.8)
      : setFontSize(16)

    setTag(instructions)
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
      {['h1', 'h2', 'h3'].map((val, i) => (
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
        Current font-size: <b>{fontSize}px</b> Current tag: <b>{currentTag}</b>
      </p>
      <p style={{ fontSize: `${fontSize}px` }}>
        {currentTag && `<${currentTag && currentTag}>`}
        {input}
        {currentTag && `</${currentTag && currentTag}>`}
      </p>
    </React.Fragment>
  )
}

export default QuestionThree
