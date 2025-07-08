import React from "react";
import Slider from "react-slick";

function MovieCarousel({ movies }) {
  const settings = {
   
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="carousel-slide">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/600x900"
              }
              alt={movie.Title}
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieCarousel;