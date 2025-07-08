import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import WatchList from "./components/WatchList";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("spider man");

  function handleSearch(){
    if (searchInput.trim() !== "") {
      setSearchTerm(searchInput);
    }
  };

  

  return (
    <>
      <NavBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={handleSearch}
      />
      <Routes>
        <Route path="/" element={<Movies searchTerm={searchTerm} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </>
  );
}

export default App;
