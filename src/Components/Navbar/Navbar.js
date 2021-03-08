import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navigation">
            <div className="navbar">
                <Link to="/contact" className="navItem">Contact</Link>
                <Link to="/projects" className="navItem">Portfolio</Link>
                <Link to="/about" className="navItem">About</Link>
            </div>
            <div className="nav-Connections">
                
                <a className="navLink" href="https://github.com/ConnerMcCabe" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a className="navLink" href="https://www.linkedin.com/in/conner-p-mccabe/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            </div>
        </div>
    )
}

export default Navbar;