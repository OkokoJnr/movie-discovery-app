import React from 'react'
import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
function FeaturedImage({setSearchQuery}) {
    
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    // Function to fetch data about a random movie
    const fetchRandomMovie = async () => {
      try {
        // Use the TMDB API or any other movie API to fetch a random movie
        // For example:
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bb60c45ebdab59b7f986d08678222ff3'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Choose a random movie from the results
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setRandomMovie(data.results[randomIndex]);
      } catch (error) {
        console.error('Error fetching random movie:', error);
      }
    };

    // Fetch random movie data
    fetchRandomMovie();
  }, []);
  return (
    <div   style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${randomMovie?.poster_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:"150px"
      }}>    
      <div className="overlay">
        {randomMovie && (
          <div className="random-movie-info">
            <h1>{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
          </div>
        )}
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
    </div>
  )
}

export default FeaturedImage