
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Truth Engine</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/analysis">Analysis</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
