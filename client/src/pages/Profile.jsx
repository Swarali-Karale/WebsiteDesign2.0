import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

function Profile() {
  const user = {
    name: "Swarali",
    username: "swarali_k",
    displayName: "Swarali",
    email: "swarali@example.com",
    joinedDate: "Joined: Jan 15, 2024",
    bio: "Love learning!",
    interests: "Math, Biology, Reading",
    school: "Central High School - Class of 2026",
    avatar: null,
    badges: ["React Beginner", "Quiz Master", "Profile Completed"],
    friends: ["Alice", "Ben", "Chloe"],
    groups: ["Math Study Group", "Biology Tutoring Session"],
    uploadedResources: ["Algebra Notes.pdf", "Biology Flashcards"],
    leaderboardRank: 42,
    milestones: [
      "Joined first study group",
      "Uploaded first resource",
      "Reached 100 points milestone"
    ]
  };

  const handleStudyAlert = (friendName) => {
    alert(`Time to study with ${friendName}! 📚`);
  };

  return (
    <div className="profile-page d-flex flex-column" style={{ minHeight: "100vh" }}>
      
      <div className="container my-4 flex-grow-1">
        {/* Hero Section */}
        <div className="card shadow-sm mb-4 p-3 d-flex align-items-center flex-row" style={{ backgroundColor: "#0D3B66", color: "#FFFAFF" }}>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#EC4C5F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            marginRight: "1rem"
          }}>
            {user.avatar || "👤"}
          </div>
          <div>
            <h2 className="mb-1">{user.displayName}</h2>
            <p className="mb-0">@{user.username}</p>
            <p className="mb-0 small">{user.joinedDate}</p>
          </div>
          <button className="btn btn-danger ms-auto">Delete Account</button>
        </div>

        {/* Core Info */}
        <div className="card shadow-sm p-3 mb-4 position-relative">
          <h4 style={{ color: "#0D3B66" }}>
            Core Info 
            <span 
              style={{ position: "absolute", top: "15px", right: "15px", cursor: "pointer", fontSize: "20px" }}
              onClick={() => alert("Edit Core Info")}
            >
              ✏️
            </span>
          </h4>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <p><strong>Interests:</strong> {user.interests}</p>
          <p><strong>School/Class:</strong> {user.school}</p>
          <p><strong>Badges:</strong> {user.badges.join(", ")}</p>
        </div>

        {/* Notifications */}
        <div className="card shadow-sm p-3 mb-4 position-relative">
          <h4 style={{ color: "#0D3B66" }}>
            Notifications 
            <span 
              style={{ position: "absolute", top: "15px", right: "15px", cursor: "pointer", fontSize: "20px" }}
              onClick={() => alert("Edit Notifications")}
            >
              ✏️
            </span>
          </h4>
          <p>Email reminders: On</p>
          <p>Study session alerts: On</p>
        </div>

        {/* Social / Community */}
        <h4 style={{ color: "#0D3B66" }}>👥 Social & Community</h4>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card shadow-sm p-3 h-100">
              <h5>Friends</h5>
              <div className="d-flex flex-column gap-2">
                {user.friends.map((friend, i) => (
                  <div key={i} className="d-flex align-items-center gap-2">
                    <span>{friend}</span>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleStudyAlert(friend)}
                    >
                      Study
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm p-3 h-100">
              <h5>Groups & Resources</h5>
              <p><strong>Groups/Sessions Joined:</strong> {user.groups.join(", ")}</p>
              <p><strong>Uploaded Resources:</strong> {user.uploadedResources.join(", ")}</p>
              <p><strong>Leaderboard Rank:</strong> #{user.leaderboardRank}</p>
            </div>
          </div>
        </div>

        {/* Milestones & AI Insights */}
        <div className="card shadow-sm p-3 mb-4">
          <h4 style={{ color: "#0D3B66" }}>🏆 Milestones & AI Insights</h4>
          <ul>
            {user.milestones.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
          <p>💡 AI Insight: You're most productive in the evenings. Try tackling Math at 7 pm!</p>
        </div>

        {/* Privacy Settings */}
        <div className="card shadow-sm p-3 mb-4">
          <h4 style={{ color: "#0D3B66" }}>🔒 Privacy Settings</h4>
          <p>Show/hide progress: Public</p>
          <p>Show/hide leaderboard rank: Friends only</p>
          <p>Shared resources visibility: Public</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-center py-4" style={{ backgroundColor: "#0D3B66", color: "#FFFAFF" }}>
        <p className="mb-0 small">© 2025 Aluvio | Built for students, by students.</p>
      </footer>

    </div>
  );
}

export default Profile;
