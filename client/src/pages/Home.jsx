import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const learningTracks = [
    { name: "Math", progress: 85, emoji: "🧮" },
    { name: "Reading", progress: 60, emoji: "📖" },
    { name: "Biology", progress: 40, emoji: "🧬" },
    { name: "Marketing", progress: 25, emoji: "💼" },
  ];

  const suggestions = [
    "Review your last Math quiz for better retention.",
    "Try reading the latest article on marketing trends.",
    "Check biology flashcards to prep for next test."
  ];

  const recentActivity = [
    "Completed Math: Algebra Basics Lesson",
    "Scored 78% on Reading Comprehension Quiz",
    "Joined Biology study session",
    "Uploaded notes for Marketing class"
  ];

  const quickAccess = ["Tutoring", "Learning Tracks", "Resource Hub", "Community Forum"];

  const leaderboard = [
    { rank: 1, name: "Alice", points: 128 },
    { rank: 2, name: "Ben", points: 102 },
    { rank: 3, name: "Chloe", points: 88 },
  ];

  const dailyMotivation = "Keep going! Small steps every day lead to big progress.";

  return (
    <div
      className="home-page d-flex flex-column"
      style={{ minHeight: "100vh", backgroundColor: "#FAFAFA", color: "#1E1B18" }}
    >
      {/* Top Blue Welcome Section */}
      <div className="card shadow-sm mb-4 p-3 d-flex align-items-center" style={{ backgroundColor: "#0D3B66", color: "#FFFAFF", width: "100%" }}>
        <div style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#EC4C5F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "1rem",
          fontWeight: "bold",
          fontSize: "1.5rem"
        }}>
          👤
        </div>
        <div>
          <h2 className="mb-0">Welcome back, Taylor!</h2>
          <p className="mb-0">{dailyMotivation}</p>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="container">
        <div className="row">
          {/* Left Column: Quick Access + Social Highlights */}
          <div className="col-md-3">
            <h4 style={{ color: "#0D3B66" }}>Quick Access</h4>
            <div className="d-flex flex-column gap-3 mb-4">
              {quickAccess.map((item, index) => (
                <div
                  key={index}
                  className="card p-3 shadow-sm text-center"
                  style={{ backgroundColor: "#FFFAFF", border: "1px solid #0D3B66" }}
                >
                  <span style={{ color: "#0D3B66", fontWeight: "600" }}>{item}</span>
                  <button
                    className="btn btn-sm mt-2"
                    style={{ backgroundColor: "#EC4C5F", color: "#FFFAFF", border: "none" }}
                  >
                    Go
                  </button>
                </div>
              ))}
            </div>

            <div className="card shadow-sm p-3">
              <h5 style={{ color: "#0D3B66" }}>Top Students</h5>
              <ul className="list-unstyled mb-0">
                {leaderboard.map((student) => (
                  <li key={student.rank} style={{ marginBottom: "0.5rem", color: "#1E1B18" }}>
                    #{student.rank} {student.name} — {student.points} pts
                  </li>
                ))}
              </ul>
              <h5 className="mt-3" style={{ color: "#0D3B66" }}>Trending Discussions</h5>
              <ul className="list-unstyled mb-0">
                <li style={{ marginBottom: "0.5rem", color: "#EC4C5F" }}>Best study habits for finals</li>
                <li style={{ marginBottom: "0.5rem", color: "#EC4C5F" }}>Top finance guides</li>
                <li style={{ marginBottom: "0.5rem", color: "#EC4C5F" }}>How to prep for SAT</li>
              </ul>
            </div>
          </div>

          {/* Middle Column: Learning Overview */}
          <div className="col-md-5 mx-4">
            <h4 style={{ color: "#0D3B66" }}>Learning Overview</h4>
            <div className="d-flex flex-column gap-3">
              {learningTracks.map((track, index) => (
                <div
                  key={index}
                  className="card p-3 shadow-sm"
                  style={{ backgroundColor: "#FFFAFF", border: "1px solid #0D3B66" }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontSize: "1.25rem" }}>{track.emoji}</span>
                      <h6 style={{ margin: 0, color: "#0D3B66" }}>{track.name}</h6>
                    </div>
                    <span style={{ fontWeight: "600", color: "#0D3B66" }}>{track.progress}%</span>
                  </div>

                  <div className="progress mb-2" style={{ height: "12px", width: "100%" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${track.progress}%`, backgroundColor: "#3CB371" }}
                      aria-valuenow={track.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>

                  <Link
                    to="/learning-tracks"
                    className="btn btn-sm w-100"
                    style={{ backgroundColor: "#EC4C5F", color: "#FFFAFF", border: "none" }}
                  >
                    Continue
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Suggestions + Recent Activity */}
          <div className="col">
            <h4 style={{ color: "#0D3B66" }}>Suggestions</h4>
            <div className="card shadow-sm p-3 mb-4" style={{ position: "sticky", top: "2rem", border: "1px solid #0D3B66" }}>
              <ul className="list-unstyled mb-0">
                {suggestions.map((s, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem", color: "#1E1B18" }}>
                    💡 {s}
                  </li>
                ))}
              </ul>
            </div>

            <h4 style={{ color: "#0D3B66" }}>Recent Activity</h4>
            <div className="card shadow-sm p-3" style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #0D3B66" }}>
              <ul className="list-unstyled mb-0">
                {recentActivity.map((item, index) => (
                  <li key={index} style={{ padding: "0.5rem 0", borderBottom: "1px solid #E0E0E0", color: "#1E1B18" }}>
                    ✅ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-center py-4" style={{ backgroundColor: "#0D3B66", color: "#FFFAFF" }}>
        <p className="mb-0 small">© 2025 Aluvio | Built for students, by students.</p>
      </footer>
    </div>
  );
}

export default Home;
