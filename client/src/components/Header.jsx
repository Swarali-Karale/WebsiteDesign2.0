import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} px-4`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/landingPage">
          <img src={logo} alt="AscendU logo" style={{ height: '50px', marginRight: '8px' }} />
          AscendU
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/learning-tracks">Math</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/community-forum">Community Forum</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/mascot-home">Mascot Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/resources">Resources</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tutoring">Tutoring</Link></li>
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-outline-secondary"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
