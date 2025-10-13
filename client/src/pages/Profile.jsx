import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

function Profile() {
  const user = {
    name: "Swarali",
    email: "swarali@example.com",
    progress: 65,
    badges: ["React Beginner", "Quiz Master", "Profile Completed"],
  };

  return (
    <div className="profile-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Avatar Home goes here</h1>
      </section>

      {/* Profile Card (Vertical Rectangle) */}
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/140"
          className="profile-avatar"
          alt="Profile"
        />
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <button className="btn btn-outline-light btn-edit">Edit Profile</button>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        <h3>About Me</h3>
        <p>
          Aluvio is a networking platform designed for high school students to
          connect with peers, explore volunteer opportunities, discover internships,
          and showcase their passions — all in one place.
        </p>

        <h5>Progress</h5>
        <div className="progress mb-3" style={{ height: "10px", maxWidth: "400px" }}>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: `${user.progress}%` }}
            aria-valuenow={user.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <h5>Badges</h5>
        <div className="badges">
          {user.badges.map((badge, idx) => (
            <span key={idx} className="badge">{badge}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
