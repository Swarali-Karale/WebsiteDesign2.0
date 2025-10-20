import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light d-flex align-items-center justify-content-center">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="display-4 fw-bold mb-3">Welcome to Aluvio</h1>
            <p className="lead mb-4">
              Empowering students to connect, learn, and grow through meaningful opportunities.
            </p>
            <a href="/signup" className="btn btn-lg btn-hero">
              Get Started
            </a>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="about-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 text-primary-color">About Aluvio</h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Aluvio is a networking platform designed for high school students to connect with peers, explore volunteer opportunities, discover internships, and showcase their passions — all in one place.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5 text-primary-color">Testimonials</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
                <p className="fst-italic">
                  "Aluvio helped me find my first volunteer opportunity — I loved the experience!"
                </p>
                <h6 className="fw-bold text-end mt-3">– Student A</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
                <p className="fst-italic">
                  "Finally, a place for students to connect and grow professionally."
                </p>
                <h6 className="fw-bold text-end mt-3">– Teacher B</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
                <p className="fst-italic">
                  "The interface is sleek and easy to use. I can’t wait to see it grow!"
                </p>
                <h6 className="fw-bold text-end mt-3">– Student C</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-5 text-primary-color">Meet the Founders</h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-lg rounded-4 founder-card">
                <img
                  src="https://via.placeholder.com/200"
                  className="card-img-top rounded-top-4"
                  alt="Founder 1"
                />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">Swarali Karale</h5>
                  <p className="text-muted">Chief Executive Officer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg rounded-4 founder-card">
                <img
                  src="https://via.placeholder.com/200"
                  className="card-img-top rounded-top-4"
                  alt="Founder 2"
                />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">Yunhan Li</h5>
                  <p className="text-muted">Chief Technology Officer</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-4">
        <p className="mb-0 text-light small">
          © 2025 Aluvio | Built for students, by students.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
