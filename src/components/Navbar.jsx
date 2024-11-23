import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus, FaBook, FaHeart } from "react-icons/fa"; // Font Awesome Icons
import "/src/styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-name">
          <FaHome /> Period Tracker
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/signup"><FaUserPlus /> Sign Up</Link></li>
        <li><Link to="/login"><FaSignInAlt /> Log In</Link></li>
        <li><Link to="/dashboard"><FaHeart /> Dashboard</Link></li>
        <li><Link to="/message"><FaHeart /> Messages</Link></li>
        <li><Link to="/articles"><FaBook /> Articles</Link></li>
        <li><Link to="/periodPredictor"><FaHeart /> periodPredictor</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
