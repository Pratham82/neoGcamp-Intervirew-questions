import React, { useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'

const questionText =
  '09. Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.'

const QuestionNine = () => {
  const [passwordVal, setPassword] = useState('')
  const [toolTip, setToolTip] = useState(false)
  const handleChange = e => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleClick = () => {
    alert('Submitted successfully')
  }

  const handleToolTip = () => setToolTip(!toolTip)

  return (
    <React.Fragment>
      <QuestionHeader questionText={questionText} />
      <label htmlFor="password">Enter Password*</label>
      <input
        type="text"
        className="inputStyles"
        type="password"
        onChange={handleChange}
        value={passwordVal}
      />
      <span
        className="password-toolTip"
        // onMouseEnter={() => handleHover(true)}
        // onMouseLeave={() => handleHover(false)}
        onClick={handleToolTip}
      >
        i
      </span>
      <div className="flex-center">
        <span
          className="tooltipMessage"
          style={{ display: toolTip ? 'block' : 'none' }}
        >
          {' '}
          Password Length should be more than 6 char
        </span>
      </div>

      <h3>Entered password:</h3>
      <p>{passwordVal}</p>
      <button
        className={`submit-btn${passwordVal.length >= 10 ? '' : '-disabled'}`}
        onClick={handleClick}
      >
        SUBMIT
      </button>
    </React.Fragment>
  )
}

export default QuestionNine
