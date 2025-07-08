import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import MovieCarousel from "./MovieCarousel";

function Movies({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : [];
  });
  const fetchMovies = async (query) => {
    try {
      const allMovies = [];
      for (let page = 1; page <= 3; page++) {
        const res = await axios.get(
          `https://www.omdbapi.com/?s=${encodeURIComponent(
            query
          )}&page=${page}&apikey=3da2af95`
        );
        if (res.data.Search) {
          allMovies.push(...res.data.Search);
        } else {
          break;
        }
      }
      setMovies(allMovies);
    } catch (error) {
      console.error("Fetch error:", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const addToWatchlist = (movie) => {
    const isAlreadyAdded = watchlist.some(
      (item) => item.imdbID === movie.imdbID
    );
    if (!isAlreadyAdded) {
      const updatedList = [...watchlist, movie];
      setWatchlist(updatedList);
      localStorage.setItem("watchlist", JSON.stringify(updatedList));
    }
  };
  return (
    <>
      <MovieCarousel movies={movies.slice(0, 8)} /> {/* top 8 for scroll */}
      <div className="movies-container">
        <h2 className="movies-title">Trending Movies</h2>
        <div className="Movies-box">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onAddToWatchlist={()=>addToWatchlist(movie)}
              />
            ))
           ) : (
            <p style={{ color: "white", textAlign: "center" }}>
              No movies found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Movies;
