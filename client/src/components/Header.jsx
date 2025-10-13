import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} px-4`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyApp</Link>

        <div className="d-flex flex-grow-1 justify-content-between">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/learning-tracks">Learning Tracks</Link>
            <Link className="nav-link" to="/quiz">Quiz</Link>
            <Link className="nav-link" to="/signin">Sign In</Link>
            <Link className="nav-link" to="/signup">Sign Up</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
          </div>

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
