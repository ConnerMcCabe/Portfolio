import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navigation">
            <div className="navbar">
                <Link to="/contact" className="navItem">Contact</Link>
                <Link to="/projects" className="navItem">Portfolio</Link>
                <Link to="/about" className="navItem">About</Link>
                
            </div>
        </div>
    )
}

export default Navbar;