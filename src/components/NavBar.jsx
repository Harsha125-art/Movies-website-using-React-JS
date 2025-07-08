import React from "react";
import Logo from './MovieLogo.png';
import Home from './HomeLogo.png';
import Love from './love.png';
import { Link } from "react-router-dom";

function NavBar({ searchInput, setSearchInput, onSearch }) {
  return (
    <div className="Navbar">
      <img src={Logo} alt="Movie Logo" className="nav-logo" />
      
      <div className="Home">
        <img src={Home} alt="Home Logo" className="nav-icon" />
        <Link to="/" className="navlink">Movies</Link>
      </div>

      <div className="Watchlist">
        <img src={Love} alt="Heart Logo" className="nav-icon" />
        <Link to="/watchlist" className="navlink">Watch List</Link>
      </div>

      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
        />
        <button onClick={onSearch} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
}

export default NavBar;
