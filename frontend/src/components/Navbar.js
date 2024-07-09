import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className='homel1' to="/">Home</Link>
      <Link className='conv' to="/converter">Converter</Link>
    </nav>
  );
};

export default Navbar;
