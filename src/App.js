// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import ErrorPage from './Components/ErrorPage';
import FeaturedImage from './Components/FeaturedImage';
import Footer from './Components/Footer';
import "./App.css"

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (searchQuery) {
      // Fetch movies based on searchQuery
      fetchMovies(searchQuery);
    } else {
      // Fetch top 10 movies on the homepage
      fetchTopMovies();
    }
  }, [searchQuery]);

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bb60c45ebdab59b7f986d08678222ff3&query=${query}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovies(data.results);
      console.log(movies)
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchTopMovies = async () => {
    // Fetch top 10 movies from TMDB API
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=bb60c45ebdab59b7f986d08678222ff3`)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setMovies(data.results);     
    })

    // Implement similar error handling as fetchMovies
  };

  return (
        <div className="container">
            <Router >
      <div className="App">
        <h1>Movie Discovery App</h1>
        <FeaturedImage setSearchQuery = {setSearchQuery}/>
        {loading && <p>App Loading...</p>}
        {error && <ErrorPage message={error} />}
        <Routes>
          <Route exact path="/" element={<MovieList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetails/>} />
        </Routes>
      </div>
    </Router>
      <Footer/>
        </div>
  );
}

export default App;
