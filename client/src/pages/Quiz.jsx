import { useState } from 'react';
import "./Quiz.css"; // optional custom styling

const questions = [
  {
    question: "Who is considered the 'father of algebra'?",
    options: ["Euclid", "Al-Khwarizmi", "Pythagoras", "Isaac Newton"],
    answer: 1,
  },
  {
    question: "Which civilization contributed significantly to early algebra?",
    options: ["Ancient Greece", "Ancient China", "Islamic Golden Age", "Medieval Europe"],
    answer: 2,
  },
  {
    question: "The word 'algebra' comes from an Arabic word meaning:",
    options: ["Numbers", "Equations", "Reunion of broken parts", "Unknown quantity"],
    answer: 2,
  },
  {
    question: "Algebra developed primarily to solve:",
    options: ["Geometric problems", "Philosophical questions", "Equations and mathematical problems", "Astronomical charts"],
    answer: 2,
  },
  {
    question: "Which famous mathematician wrote 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala'?",
    options: ["Euclid", "Al-Khwarizmi", "Omar Khayyam", "Diophantus"],
    answer: 1,
  },
  {
    question: "Which ancient civilization used symbols and methods resembling algebra for solving equations?",
    options: ["Babylonians", "Romans", "Egyptians", "Greeks"],
    answer: 0,
  },
  {
    question: "The method of balancing equations in algebra was introduced by:",
    options: ["Diophantus", "Al-Khwarizmi", "Pythagoras", "Euclid"],
    answer: 1,
  },
  {
    question: "Which branch of mathematics did algebra originally develop from?",
    options: ["Arithmetic", "Geometry", "Trigonometry", "Calculus"],
    answer: 0,
  },
  {
    question: "The use of letters to represent unknowns in equations was popularized by:",
    options: ["Rene Descartes", "Isaac Newton", "Leonhard Euler", "Blaise Pascal"],
    answer: 0,
  },
  {
    question: "In which century did algebra begin to be taught systematically in Europe?",
    options: ["12th century", "15th century", "17th century", "19th century"],
    answer: 1,
  },
  {
    question: "Which mathematician's work led to the modern symbolic notation of algebra?",
    options: ["Al-Khwarizmi", "François Viète", "Euclid", "Archimedes"],
    answer: 1,
  },
  {
    question: "Algebra can be defined as:",
    options: ["The study of numbers only", "The study of equations and symbols", "The study of shapes", "The study of calculus"],
    answer: 1,
  },
  {
    question: "The quadratic formula is used to solve:",
    options: ["Linear equations", "Quadratic equations", "Exponential equations", "Inequalities"],
    answer: 1,
  },
  {
    question: "Factoring is a method used to:",
    options: ["Simplify expressions", "Solve equations", "Both A and B", "Neither A nor B"],
    answer: 2,
  },
];

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const selectAnswer = (qIndex, optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[qIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const submitQuiz = () => {
    let calculatedScore = 0;
    userAnswers.forEach((ans, idx) => {
      if (ans === questions[idx].answer) calculatedScore++;
    });
    setScore(calculatedScore);
  };

  const resetQuiz = () => {
    setUserAnswers(Array(questions.length).fill(null));
    setScore(null);
  };

  return (
  <div className="quiz">
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Quiz: Overview & History of Algebra</h2>
      
      {questions.map((q, i) => (
        <div key={i} className="mb-4 p-3 border rounded">
          <p className="fw-bold">{i + 1}. {q.question}</p>
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

      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={submitQuiz}>Submit</button>
        <button className="btn btn-secondary" onClick={resetQuiz}>Reset</button>
      </div>

      {score !== null && (
        <div className="mt-4 alert alert-success">
          Your score: {score} / {questions.length} ({((score / questions.length) * 100).toFixed(0)}%)
        </div>
      )}
      {/* Footer */}
      
    </div>
    <footer className="footer text-center py-4 mt-auto" style={{ backgroundColor: "#0D3B66" }}>
        <p className="mb-0 text-light small">© 2025 Aluvio | Built for students, by students.</p>
      </footer>
    </div>
  );
}

export default Quiz;
