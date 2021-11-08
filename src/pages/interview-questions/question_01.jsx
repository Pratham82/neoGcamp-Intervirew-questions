import React, { useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'

const Question1 = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [result, setResult] = useState()
  const questionText =
    'Q.1. Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.'

  const handleClick = (e, instructions) => {
    e.preventDefault()
    // eslint-disable-next-line
    const res = eval(
      `${input1} ${instructions === 'x' ? '*' : instructions} ${input2}`
    )
    setResult(res)
    resetValues()
  }

  const resetValues = () => {
    setInput1('')
    setInput2('')
  }

  return (
    <React.Fragment>
      <QuestionHeader questionText={questionText} />
      <label htmlFor="input1">Input1: </label>
      <input
        name="input1"
        type="number"
        value={input1}
        className="inputStyles"
        onChange={e => setInput1(Number(e.target.value))}
      />
      <br />
      <label htmlFor="input2">Input2: </label>
      <input
        name="input2"
        type="number"
        value={input2}
        className="inputStyles"
        onChange={e => setInput2(Number(e.target.value))}
      />

      <h2>Calculate: </h2>
      {['+', '-', 'x', '/'].map((val, i) => (
        <button
          className="calculateBtn"
          key={i}
          disabled={input1 && input2 ? false : true}
          onClick={e => handleClick(e, val)}
        >
          <b>{val}</b>
        </button>
      ))}
      <h3>{result}</h3>
    </React.Fragment>
  )
}

export default Question1
