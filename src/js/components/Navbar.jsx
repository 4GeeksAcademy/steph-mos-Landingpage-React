import React from "react";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Menu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse position-relative" id="navbarNavDropdown">
                    <div className="position-absolute end-0">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </nav >
    );
};


export default Navbar;