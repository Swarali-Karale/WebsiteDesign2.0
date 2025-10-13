import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">MyAppLogo</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
        </ul>

        <div className="d-flex align-items-center">
          <img 
            src="https://i.pravatar.cc/40" 
            alt="Profile" 
            className="rounded-circle me-2" 
          />
          <button className="btn btn-outline-danger btn-sm">Sign Out</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
