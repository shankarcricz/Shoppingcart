import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ background: '#008080 ' }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-bold text-light" to={'/'}>OShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={'/products'}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Link to={'/check-out'}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg></Link>
                        <span className="position-absolute top-30 start-60 translate-middle badge rounded-pill bg-danger">
                            4
                        </span>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;