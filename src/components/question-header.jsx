const QuestionHeader = ({ questionText }) => (
  <div style={{ padding: '25px 20px 10px 20px' }}>
    {Array.isArray(questionText) ? (
      questionText.map((question, i) => <h3 key={i}>{question}</h3>)
    ) : (
      <h3>{questionText}</h3>
    )}
  </div>
)
export default QuestionHeader
