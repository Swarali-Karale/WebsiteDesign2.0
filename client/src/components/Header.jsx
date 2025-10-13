import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/learning-tracks">Learning Tracks</Link>
          <Link className="nav-link" to="/quiz">Quiz</Link>
          <Link className="nav-link" to="/signin">Sign In</Link>
          <Link className="nav-link" to="/signup">Sign Up</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/leaderboard">Leaderboard</Link>

        </div>
      </div>
    </nav>
  );
}

export default Header;
