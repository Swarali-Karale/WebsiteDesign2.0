import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LearningTracks.css"; // optional custom styling

function LearningTracks() {
  const [completedLessons, setCompletedLessons] = useState([]);

  const units = [
    {
      title: "Unit 1: Algebra foundations",
      lessons: [
        "Overview and history of algebra",
        "Introduction to variables",
        "Substitution and evaluating expressions",
        "Combining like terms",
        "Introduction to equivalent expressions",
        "Division by zero",
      ],
    },
    {
      title: "Unit 2: Solving equations & inequalities",
      lessons: [
        "Linear equations with variables on both sides",
        "Linear equations with parentheses",
        "Analyzing the number of solutions to linear equations",
        "Linear equations with unknown coefficients",
        "Multi-step inequalities",
        "Compound inequalities",
      ],
    },
    {
      title: "Unit 3: Working with units",
      lessons: ["Rate conversion", "Appropriate units", "Word problems with multiple units"],
    },
    {
      title: "Unit 4: Linear equations & graphs",
      lessons: [
        "Two-variable linear equations intro",
        "Slope",
        "Horizontal & vertical lines",
        "x-intercepts and y-intercepts",
        "Applying intercepts and slope",
        "Modeling with linear equations and inequalities",
      ],
    },
    {
      title: "Unit 5: Forms of linear equations",
      lessons: [
        "Intro to slope-intercept form",
        "Graphing slope-intercept equations",
        "Writing slope-intercept equations",
        "Point-slope form",
        "Standard form",
        "Summary: Forms of two-variable linear equations",
      ],
    },
    {
      title: "Unit 6: Systems of equations",
      mastery: 0,
      lessons: [
        "Introduction to systems of equations",
        "Solving systems of equations with substitution",
        "Solving systems of equations with elimination",
        "Equivalent systems of equations",
        "Number of solutions to systems of equations",
        "Systems of equations word problems",
      ],
    },
    {
      title: "Unit 7: Inequalities (systems & graphs)",
      mastery: 0,
      lessons: [
        "Checking solutions of two-variable inequalities",
        "Graphing two-variable inequalities",
        "Modeling with linear inequalities",
      ],
    },
    {
      title: "Unit 8: Functions",
      mastery: 11,
      lessons: [
        "Evaluating functions",
        "Inputs and outputs of a function",
        "Functions and equations",
        "Interpreting function notation",
        "Introduction to the domain and range of a function",
        "Determining the domain of a function",
        "Recognizing functions",
        "Maximum and minimum points",
        "Intervals where a function is positive, negative, increasing, or decreasing",
        "Interpreting features of graphs",
        "Average rate of change",
        "Average rate of change word problems",
        "Intro to inverse functions",
      ],
    },
    {
      title: "Unit 9: Sequences",
      mastery: 0,
      lessons: [
        "Introduction to arithmetic sequences",
        "Constructing arithmetic sequences",
        "Introduction to geometric sequences",
        "Constructing geometric sequences",
        "Modeling with sequences",
        "General sequences",
      ],
    },
    {
      title: "Unit 10: Absolute value & piecewise functions",
      mastery: 0,
      lessons: ["Graphs of absolute value functions", "Piecewise functions"],
    },
    {
      title: "Unit 11: Exponents & radicals",
      mastery: 0,
      lessons: ["Exponent properties review", "Radicals", "Simplifying square roots"],
    },
    {
      title: "Unit 12: Exponential growth & decay",
      mastery: 0,
      lessons: [
        "Exponential vs. linear growth",
        "Exponential expressions",
        "Graphs of exponential growth",
        "Exponential vs. linear growth over time",
        "Exponential growth & decay",
        "Exponential functions from tables & graphs",
        "Exponential vs. linear models",
      ],
    },
    {
      title: "Unit 13: Quadratics: Multiplying & factoring",
      mastery: 0,
      lessons: [
        "Multiplying monomials by polynomials",
        "Multiplying binomials",
        "Special products of binomials",
        "Introduction to factoring",
        "Factoring quadratics intro",
        "Factoring quadratics by grouping",
        "Factoring quadratics with difference of squares",
        "Factoring quadratics with perfect squares",
        "Strategy in factoring quadratics",
      ],
    },
    {
      title: "Unit 14: Quadratic functions & equations",
      mastery: 8,
      lessons: [
        "Intro to parabolas",
        "Solving and graphing with factored form",
        "Solving by taking the square root",
        "Vertex form",
        "Solving quadratics by factoring",
        "The quadratic formula",
        "Completing the square intro",
        "More on completing the square",
        "Strategizing to solve quadratic equations",
        "Quadratic standard form",
        "Features & forms of quadratic functions",
        "Comparing quadratic functions",
        "Transforming quadratic functions",
      ],
    },
    {
      title: "Unit 15: Irrational numbers",
      mastery: null,
      lessons: [
        "Irrational numbers",
        "Sums and products of rational and irrational numbers",
        "Proofs concerning irrational numbers",
      ],
    },
    {
      title: "Unit 16: Creativity in algebra",
      mastery: null,
      lessons: ["Creativity in algebra"],
    },
    {
      title: "Unit 17: Teacher resources",
      mastery: null,
      lessons: ["Welcome to teacher resources", "Course challenge", "Test your knowledge of the skills in this course"],
    },
  ];

  // Toggle lesson completion
  function toggleLesson(unitIndex, lessonIndex) {
    const key = `${unitIndex}-${lessonIndex}`;
    setCompletedLessons((prev) =>
      prev.includes(key) ? prev.filter((l) => l !== key) : [...prev, key]
    );
  }

  // Calculate mastery for each unit
  const calculateUnitMastery = (unitIndex, lessons) => {
    const completed = lessons.filter((_, lIndex) =>
      completedLessons.includes(`${unitIndex}-${lIndex}`)
    ).length;
    return Math.round((completed / lessons.length) * 100);
  };

  // Calculate overall course mastery
  const calculateCourseMastery = () => {
    let totalLessons = 0;
    let completedCount = 0;
    units.forEach((unit, uIndex) => {
      totalLessons += unit.lessons.length;
      completedCount += unit.lessons.filter((_, lIndex) =>
        completedLessons.includes(`${uIndex}-${lIndex}`)
      ).length;
    });
    return Math.round((completedCount / totalLessons) * 100);
  };

  const courseMastery = calculateCourseMastery();

  return (
    <div className="algebra-page d-flex flex-column min-vh-100" style={{ backgroundColor: "#FFFAFF" }}>
      <div className="container my-5 flex-grow-1">
        <h2 className="mb-2 text-primary">Algebra Course Timeline</h2>
        <div className="d-flex align-items-center mb-4">
          <p className="fw-bold mb-0 me-3">Course Mastery: {courseMastery}%</p>
          <div className="progress flex-grow-1" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${courseMastery}%` }}
              aria-valuenow={courseMastery}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <p className="mb-4 fw-bold">Course Mastery: {courseMastery}%</p>

        {units.map((unit, uIndex) => {
          const unitMastery = calculateUnitMastery(uIndex, unit.lessons);

          return (
            <div key={uIndex} className="unit mb-5">
              <h4>
                {unit.title} <span className="text-muted">- Mastery: {unitMastery}%</span>
              </h4>
              <ul className="list-group mt-2">
                {unit.lessons.map((lesson, lIndex) => {
                  const key = `${uIndex}-${lIndex}`;
                  const isCompleted = completedLessons.includes(key);
                  const isNext = lIndex === 0 || completedLessons.includes(`${uIndex}-${lIndex - 1}`);

                  return (
                    <li
                      key={lIndex}
                      className={`list-group-item d-flex justify-content-between align-items-center flex-column flex-md-row ${
                        isCompleted ? "bg-success text-white" : ""
                      }`}
                    >
                      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center w-100 justify-content-between gap-2">
                        <span>{lesson}</span>

                        <div className="d-flex gap-2 mt-2 mt-md-0">
                          <button className="btn btn-sm btn-outline-primary">Notes</button>
                          <button className="btn btn-sm btn-outline-info">Video Guide</button>
                          <button
                            className={`btn btn-sm ${isCompleted ? "btn-dark" : "btn-primary"}`}
                            disabled={!isNext}
                            onClick={() => toggleLesson(uIndex, lIndex)}
                          >
                            {isCompleted ? "Passed!" : "Take Quiz"}
                          </button>
                        </div>
                      </div>
                    </li>

                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="footer text-center py-4 mt-auto" style={{ backgroundColor: "#0D3B66" }}>
        <p className="mb-0 text-light small">© 2025 Aluvio | Built for students, by students.</p>
      </footer>
    </div>
  );
}

export default LearningTracks;
