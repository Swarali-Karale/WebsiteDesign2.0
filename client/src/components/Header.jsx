import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} px-4`}>
      <div className="container-fluid">
        <img src={logo} alt="AscendU logo" style={{ height: '100px', marginRight: '0px' }} />
        <Link className="navbar-brand" to="/landingPage">AscendU</Link>

        {/* Hamburger toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto">
            <Link className="nav-link" to="/">Dashboard</Link>
            <Link className="nav-link" to="/learning-tracks">Math</Link>
            <Link className="nav-link" to="/quiz">Quiz</Link>
            <Link className="nav-link" to="/signin">Sign In</Link>
            <Link className="nav-link" to="/signup">Sign Up</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            <Link className="nav-link" to="/community-forum">Community Forum</Link>
            <Link className="nav-link" to="/mascot-home">Mascot Home</Link>
            <Link className="nav-link" to="/resources">Resources</Link>
            <Link className="nav-link" to="/tutoring">Tutoring</Link>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-outline-secondary mt-2 mt-lg-0"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
