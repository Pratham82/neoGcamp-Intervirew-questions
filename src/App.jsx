import SideBar from './components/sidebarBtn'
import './index.css'
import MiscQuestions from './pages/interview-questions/MiscQuestions'
import Question1 from './pages/interview-questions/question_01'
import Question2 from './pages/interview-questions/question_02'
import Question3 from './pages/interview-questions/question_03'
import Question4 from './pages/interview-questions/question_04'
import Question6 from './pages/interview-questions/question_06'
import Question7 from './pages/interview-questions/question_07'
import Question8 from './pages/interview-questions/question_08'
import Question9 from './pages/interview-questions/question_09'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/interview-questions/404'
import Counter from './pages/mock-interview-questions/Counter'
import ShowTitles from './pages/mock-interview-questions/ShowTitles'
import BorderSwitch from './pages/mock-interview-questions/BorderSwitch'
import PasswordChecker from './pages/mock-interview-questions/PasswordChecker'
import APILogger from './pages/mock-interview-questions/ApiLogger'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="topBar">
          <div>
            <h2 style={{ textAlign: 'right' }}>
              NeoG camp Interview Questions
            </h2>
          </div>
        </div>
        <div className="appContainer">
          <SideBar />
          <div>
            <Routes>
              <Route path="/question1" element={<Question1 />} />
              <Route path="/question2" element={<Question2 />} />
              <Route path="/question3" element={<Question3 />} />
              <Route path="/question4" element={<Question4 />} />
              <Route path="/question6" element={<Question6 />} />
              <Route path="/question7" element={<Question7 />} />
              <Route path="/question8" element={<Question8 />} />
              <Route path="/question9" element={<Question9 />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/titles" element={<ShowTitles />} />
              <Route path="/borders" element={<BorderSwitch />} />
              <Route path="/password-checker" element={<PasswordChecker />} />
              <Route path="/api-log" element={<APILogger />} />
              <Route path="/misc" element={<MiscQuestions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
