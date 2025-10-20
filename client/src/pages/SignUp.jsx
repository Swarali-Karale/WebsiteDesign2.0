import React, { useState } from "react";
import "./SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [timezone, setTimezone] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState([]);

  const availableInterests = [
    "Math", "Science", "Art", "History", "English", "Music", "Coding", "Sports"
  ];

  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(`Account created for: ${displayName || username}\nSelected Interests: ${interests.join(", ")}`);
  };

  return (
    <div className="signin-page d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg p-4 border-0 rounded-4 signin-card">
              <div className="card-body">
                <h2 className="text-center mb-4 fw-bold text-primary-color">
                  Create an Account
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Display Name</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="Your display name"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="Choose a username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control rounded-3"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control rounded-3"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control rounded-3"
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Grade Level</label>
                    <select
                      className="form-select rounded-3"
                      value={gradeLevel}
                      onChange={(e) => setGradeLevel(e.target.value)}
                    >
                      <option value="">Select your grade</option>
                      <option value="6">6th</option>
                      <option value="7">7th</option>
                      <option value="8">8th</option>
                      <option value="9">9th</option>
                      <option value="10">10th</option>
                      <option value="11">11th</option>
                      <option value="12">12th</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Timezone</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="e.g., PST"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Preferred Study Time (Optional)</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="e.g., Evenings"
                      value={studyTime}
                      onChange={(e) => setStudyTime(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="Country, State/Region, (Optional School)"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Interests / Subjects (Click to select)</label>
                    <div className="d-flex flex-wrap gap-2">
                      {availableInterests.map((interest) => (
                        <span
                          key={interest}
                          className={`badge rounded-pill px-3 py-2 ${
                            interests.includes(interest)
                              ? "bg-primary text-light"
                              : "bg-light text-dark border"
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => toggleInterest(interest)}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 mb-3 signin-btn fw-semibold"
                  >
                    Sign Up
                  </button>

                  <div className="text-center text-muted my-3">or</div>

                  <button
                    type="button"
                    className="btn btn-outline-dark w-100 mb-2 rounded-3 social-btn"
                  >
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark w-100 rounded-3 social-btn"
                  >
                    Continue with Microsoft
                  </button>
                </form>

                <div className="text-center mt-3">
                  <small>
                    Already have an account?{" "}
                    <a href="/signin" className="text-primary-color">
                      Sign In
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer text-center py-3 mt-auto">
        <p className="mb-0 text-light small">
          © 2025 Aluvio | Privacy Policy | Terms of Service
        </p>
      </footer>
    </div>
  );
}

export default SignUp;
