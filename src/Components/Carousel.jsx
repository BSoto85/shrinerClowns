import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide w-75 mx-auto"
      data-bs-ride="carousel"
      data-bs-interval="4000" // Slides every 3 seconds
    >
      <h2>Gallery</h2>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ height: "700px" }}>
          <img
            src="src/assets/klowns1.jpeg"
            className="d-block w-100 h-100"
            alt="..."
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item" style={{ height: "700px" }}>
          <img
            src="src/assets/klowns2.jpeg"
            className="d-block w-100 h-100"
            alt="..."
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item" style={{ height: "700px" }}>
          <img
            src="src/assets/klowns3.jpeg"
            className="d-block w-100 h-100"
            alt="..."
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
