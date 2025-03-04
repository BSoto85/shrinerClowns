import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1741024689/fi5pjmts7psqo2qckna1.png"
            alt="Klowns Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#klowns">
                Klowns
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#carousel">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#form">
                Book the Klowns
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
