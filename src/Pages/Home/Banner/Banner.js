import React from "react";
import banner1 from '../../../Assets/banner-1.jpg';
import banner2 from '../../../Assets/banner-2.jpg';
import banner3 from '../../../Assets/banner-3.jpg';

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{height:"90vh"}} src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>We Provide These Services</h5>
              <p>
                Driving boat in NAkasi  LAk with your hubby!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{height:"90vh"}} src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h5>We Provide These Services</h5>
              <p>
                Driving boat in Amazon  LAk with your hubby!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{height:"90vh"}} src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <h5>We Provide These Services</h5>
              <p>
                Driving boat in Switch  LAk with your hubby!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
