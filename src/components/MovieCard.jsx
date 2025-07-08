import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function MovieCard({ movie, onAddToWatchlist, isWatchlistPage }) {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/180x300?text=No+Image";

  return (
    <div className="movie-card">
      <button
        className="watchlist-btn"
        onClick={onAddToWatchlist}
        title={isWatchlistPage ? "Remove from Watchlist" : "Add to Watchlist"}
      >
        {isWatchlistPage ? "✖" : "💖"}
      </button>

      <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">
        <div
          className="movie-poster"
          style={{ backgroundImage: `url(${poster})` }}
        >
          <div className="movie-overlay">
            <strong>{movie.Title}</strong>
            <div>{movie.Year}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
