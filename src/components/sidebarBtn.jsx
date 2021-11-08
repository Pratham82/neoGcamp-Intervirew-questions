import React, { useState } from 'react'
import '../../src/index.css'
import questions from '../helper/questionsArray'
export default function Sidebar() {
  const [hide, setHide] = useState(true)
  return (
    <div className="sidebarContainer">
      <div>
        <button onClick={() => setHide(!hide)} className="hamburgerBtn">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
            alt="ham"
          />
        </button>
      </div>
      <div className={hide ? 'contentHidden' : 'contentVisible'}>
        <h2>Questions</h2>
        {questions.map((q, i) => (
          <h2 key={i}>{q}</h2>
        ))}
      </div>
    </div>
  )
}
