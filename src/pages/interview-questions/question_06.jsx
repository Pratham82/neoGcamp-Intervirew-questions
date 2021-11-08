import React, { useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'

const Question6 = () => {
  const [isLoading, setLoading] = useState(false)
  const questionText =
    '6. Create a web app with a button loaded. Show a text loading... on a web app. However, hide it if I click on the button loaded.'
  return (
    <React.Fragment>
      <QuestionHeader questionText={questionText} />
      {isLoading ? <h1>Loading....</h1> : <h1>Loaded</h1>}
      <button
        onClick={() => setLoading(!isLoading)}
        className={`${
          !isLoading ? 'loadingTemplate loading' : 'loadingTemplate loaded'
        }`}
      >
        {isLoading ? 'Stop loading' : 'Start loading'}
      </button>
    </React.Fragment>
  )
}

export default Question6
