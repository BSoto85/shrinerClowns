import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import carouselImages from "../assets/carouselImages";

const Carousel = () => {
  return (
    <div
      className="carousel-container d-flex flex-column justify-content-center align-items-center"
      id="carousel"
    >
      <h2 className="text-center">Gallery</h2>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mx-auto gallery"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carouselImages[0].url}
              className="d-block w-100"
              alt={carouselImages[0].desc}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselImages[1].url}
              className="d-block w-100"
              alt={carouselImages[1].desc}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselImages[2].url}
              className="d-block w-100"
              alt={carouselImages[2].desc}
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
