import { useState } from 'react';

function LearningTracks() {
  const [completedLessons, setCompletedLessons] = useState([]);

  const lessons = [
    {
      id: 1,
      title: 'React Basics',
      quizzes: ['Quiz 1', 'Quiz 2'],
    },
    {
      id: 2,
      title: 'State Management',
      quizzes: ['Quiz 3'],
    },
  ];

  function toggleLesson(id) {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(lessonId => lessonId !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
    }
  }

  return (
    <div className="container mt-5">
      <h2>Learning Tracks</h2>
      {lessons.map((lesson) => (
        <div key={lesson.id} className="mb-4 p-3 border rounded">
          <h4>
            {lesson.title}{' '}
            <button
              className={`btn btn-sm ${completedLessons.includes(lesson.id) ? 'btn-success' : 'btn-outline-secondary'}`}
              onClick={() => toggleLesson(lesson.id)}
            >
              {completedLessons.includes(lesson.id) ? 'Completed' : 'Mark Complete'}
            </button>
          </h4>
          <ul>
            {lesson.quizzes.map((quiz, idx) => (
              <li key={idx}>{quiz}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default LearningTracks;
