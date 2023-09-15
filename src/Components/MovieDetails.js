import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details by ID from the TMDB API
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bb60c45ebdab59b7f986d08678222ff3
    `)
    .then((response)=>{
      return response.json()
    })
    .then ((data)=>{
      setMovie(data)
      console.log(data)
    })
    
    // Set the movie data in the state
  }, [id]);


  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details">
        <h3>MOVIE DETAILS</h3>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      <h2 data-testid = "movie-title">{movie.title}</h2>
      <p data-testid = "movie-release-date">Release Date: {movie.release_date}</p>
      <p data-testid = "movie-runtime">Runtime: {movie.runtime} minutes</p>
      <p data-testid = "movie-overview">{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
