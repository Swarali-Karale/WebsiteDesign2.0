import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LearningTracks.css'; // optional for custom styling

function LearningTracks() {
  const [completedLessons, setCompletedLessons] = useState([]);

  // Algebra course timeline
  const lessons = [
    { id: 1, title: 'Introduction to Algebra', quizzes: ['Quiz 1'], description: 'Learn what algebra is and why it matters.' },
    { id: 2, title: 'Variables & Expressions', quizzes: ['Quiz 2'], description: 'Understand variables, constants, and expressions.' },
    { id: 3, title: 'Linear Equations', quizzes: ['Quiz 3', 'Quiz 4'], description: 'Solve one-variable linear equations.' },
    { id: 4, title: 'Inequalities', quizzes: ['Quiz 5'], description: 'Learn how to solve and graph inequalities.' },
    { id: 5, title: 'Quadratic Equations', quizzes: ['Quiz 6', 'Quiz 7'], description: 'Introduction to quadratic equations and factoring.' },
    { id: 6, title: 'Functions & Graphs', quizzes: ['Quiz 8'], description: 'Understand functions, domain, range, and graphing.' },
  ];

  function toggleLesson(id) {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(lessonId => lessonId !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
    }
  }

  return (
    <div className="algebra-page d-flex flex-column min-vh-100">
      <div className="container my-5 flex-grow-1">
        <h2 className="mb-4 text-primary">Algebra Course</h2>
        <p className="mb-4">
          Follow the timeline below to complete the Algebra course. Complete each lesson in order to unlock the next.
        </p>

        <div className="timeline">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isNext = index === 0 || completedLessons.includes(lessons[index - 1].id);
            const disabled = !isNext;

            return (
              <div key={lesson.id} className={`timeline-item mb-4 p-3 border rounded ${isCompleted ? 'bg-success text-white' : 'bg-light'}`}>
                <h4>
                  {lesson.title}{' '}
                  <button
                    className={`btn btn-sm ${isCompleted ? 'btn-dark' : 'btn-primary'}`}
                    onClick={() => toggleLesson(lesson.id)}
                    disabled={disabled}
                  >
                    {isCompleted ? 'Completed' : 'Mark Complete'}
                  </button>
                </h4>
                <p>{lesson.description}</p>
                {lesson.quizzes.length > 0 && (
                  <ul>
                    {lesson.quizzes.map((quiz, idx) => (
                      <li key={idx}>{quiz}</li>
                    ))}
                  </ul>
                )}
                {!isNext && <small className="text-muted">Complete previous lessons to unlock this one.</small>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-center py-4 mt-auto" style={{ backgroundColor: '#0D3B66' }}>
        <p className="mb-0 text-light small">
          © 2025 Aluvio | Built for students, by students.
        </p>
      </footer>
    </div>
  );

  
}

export default LearningTracks;
