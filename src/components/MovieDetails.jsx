import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios  from 'axios';
import "../App.css";

function MovieDetails() {
    const {id} = useParams();
    const [movie,setMovie] =useState(null);

    useEffect(()=>{
         axios.get(`https://www.omdbapi.com/?i=${id}&apikey=3da2af95`)
      .then(res => setMovie(res.data))
      .catch(err => console.error("Error loading movie:", err));
  }, [id]);
    
  if(!movie) return <p className="loading">Loading..</p>

  return (
   <div className="movie-detail-container">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"} alt={movie.Title} className="detail-poster" />
      <div className="detail-info">
        <h2><u>{movie.Title}</u></h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
      </div>
    </div>
  )
}

export default MovieDetails