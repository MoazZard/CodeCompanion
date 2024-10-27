import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5 shadow sticky-top">
            <div className="container-fluid">
                {/* Brand */}
                <Link to="/" className="navbar-brand fw-bold">
                    CODE-COMPANION
                </Link>
                
                {/* Toggler Button for Mobile View */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links and Dropdown */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tool">Tool</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about-me">About Me</NavLink>
                        </li>
                    </ul>

                    {/* Dropdown for Interactive Assistant */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="assistantDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Your Interactive Assistant
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="assistantDropdown">
                                <li><Link className="dropdown-item" to="/feature1">Feature 1</Link></li>
                                <li><Link className="dropdown-item" to="/feature2">Feature 2</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
