import { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar-container'>
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
          First Multiple
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li className='dropdown'><Link to="/about">About Us <MdOutlineArrowDropDown /></Link></li>
          <li className='dropdown'><Link to="#">Products <MdOutlineArrowDropDown /></Link></li>
          <li><Link to="#">Portfolio</Link></li>
          <li><Link to="#">E-Channel Services</Link></li>
          <li><Link to="#">News Feed</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
