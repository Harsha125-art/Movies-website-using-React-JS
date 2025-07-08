import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function WatchList() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem("watchlist");
    if (storedList) {
      setWatchlist(JSON.parse(storedList));
    }
  }, []);

  const removeFromWatchlist = (id) => {
    const updatedList = watchlist.filter((movie) => movie.imdbID !== id);
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  return (
    <div className="movies-container">
      <h2 className="movies-title">My Watchlist</h2>
      <div className="Movies-box">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onAddToWatchlist={() => removeFromWatchlist(movie.imdbID)}
              isWatchlistPage={true}
            />
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center" }}>
            Your watchlist is empty.
          </p>
        )}
      </div>
    </div>
  );
}

export default WatchList;
