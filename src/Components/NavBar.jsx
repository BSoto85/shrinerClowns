import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        {/* Navbar Brand on the Left */}
        <a className="navbar-brand" href="#">
          <img src="src/assets/klownlogo.png" alt="Klowns Logo" />
        </a>

        {/* Navbar Toggler Button for Mobile */}
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

        {/* Navbar Links Aligned to the Right */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#klowns">
                Klowns
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#carouselExampleAutoplaying">
                Gallery
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#form">
                Book the Klowns
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
