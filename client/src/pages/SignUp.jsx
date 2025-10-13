import React, { useState } from "react";
import "./SignIn.css"; // Reuse the same styling file for consistency
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

    alert(`Account created for: ${email}`);
  };

  return (
    <div className="signin-page d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg p-4 border-0 rounded-4 signin-card">
              <div className="card-body">
                <h2 className="text-center mb-4 fw-bold text-primary-color">
                  Create an Account
                </h2>

                <form onSubmit={handleSubmit}>
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

                  <div className="mb-4">
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
