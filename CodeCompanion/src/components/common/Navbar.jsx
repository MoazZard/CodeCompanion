import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top">

            <div className="container-fluid">
                <Link to={"/"}>
                    <span className=""> CODE COMPANION </span>
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">Close</span>
                </button>

                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link" to="/tool">Tool</Link>  {/* Using Link instead of anchor tag */}
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Your interactive algorithm assistant
                    </span>
                </div>

            </div>

        </nav>
    )
}

export default Navbar