import { useState } from 'react';

const questions = [
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "JavaScript and XHTML",
      "Java Source eXtension",
    ],
    answer: 0, // index of the correct answer
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useEffect", "useState", "useContext"],
    answer: 1,
  },
];

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  function selectAnswer(qIndex, optionIndex) {
    const newAnswers = [...userAnswers];
    newAnswers[qIndex] = optionIndex;
    setUserAnswers(newAnswers);
  }

  function submitQuiz() {
    let calculatedScore = 0;
    userAnswers.forEach((ans, idx) => {
      if (ans === questions[idx].answer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
  }

  return (
    <div className="container-fluid mt-5">
      <h2>Quiz</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-3">
          <p><strong>{q.question}</strong></p>
          {q.options.map((opt, idx) => (
            <div className="form-check" key={idx}>
              <input
                className="form-check-input"
                type="radio"
                name={`question-${i}`}
                id={`q${i}o${idx}`}
                checked={userAnswers[i] === idx}
                onChange={() => selectAnswer(i, idx)}
              />
              <label className="form-check-label" htmlFor={`q${i}o${idx}`}>
                {opt}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button className="btn btn-primary" onClick={submitQuiz}>Submit</button>

      {score !== null && (
        <div className="mt-3 alert alert-info">
          Your score: {score} / {questions.length}
        </div>
      )}
    </div>
  );
}

export default Quiz;
