import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div className="navigation">
            <div className="navbar">
                <Link to="/" className="navItem">Contact</Link>
                <Link to="/projects" className="navItem">Portfolio</Link>
                <Link to="/about" className="navItem">About</Link>
            </div>
        </div>
    )
}

export default Navbar;