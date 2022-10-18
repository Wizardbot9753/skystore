import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (props) => {
  const [movies, setMovies] = useState([]);
  const [limit, setLimit] = useState(36);
  const max = 100;

  const movieURL = "https://api.tvmaze.com/shows";
  console.log(movieURL)

  useEffect(() => {
    fetchMovies();
  }, [limit]);

  const fetchMovies = () => {
    fetch(movieURL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        setMovies(response);
        setTimeout(() => {}, 1500);
      });
  };

  const showMoreHandler = () => {
    if (limit <= max) {
      setLimit(limit + 12);
    }
  };

  const goToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div
        className={`container movie-cards-section no-mini-banners ${
          props.pathname ? "" : "no-banner"
        }`}
      >
        <h2 className={`thin-text ${props.pathname ? "no-head" : ""}`}>
          {props.title}
        </h2>
        <div className="main-box">
          {movies.slice(0, limit).map((movie, key) => {
            return (
              <div className="movie-details" key={key}>
                <div className="movie-box">
                  <Link to={`/details/${movie.id}`}>
                    <div className="image-container">
                      <img src={movie.image.medium} alt="" />
                    </div>
                  </Link>
                </div>
                <p className="movie-text">{movie.name}</p>
              </div>
            );
          })}
        </div>

        {/* Show More and Back to Top Button Container */}
        <div className="relative-container btn-containers">
          <div className="btn-area text-center">
            <button
              className="text-center show-more-btn btn-medium"
              id="show-more"
              onClick={showMoreHandler}
            >
              Show more
            </button>
            <Link
              to="/"
              className="back-to-top"
              id="back-to-top"
              onClick={goToTopHandler}
            >
              <i className="fa-solid fa-circle-chevron-up"></i> Back to top
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
