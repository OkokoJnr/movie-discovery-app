import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  // Slice the first 10 movies to display on the home page
  const topMovies = movies.slice(0, 10);

  return (
    <div >
      <div className="row">
        <p style={{justifyContent:"space-between", display:"flex",alignItems:"", alignContent:"space-between", margin:"50px"}}>
        <h3 sty>Featured Movies</h3>
        <span>See More</span>
        </p> 
  
        {topMovies.map((movie) => (
          
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card" data-testid="movie-card">
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                  data-testid="movie-poster"
                />
                <div className="card-body">
                  <h5 className="card-title" data-testid="movie-title">{movie.title}</h5>
                  <p className="card-text" data-testid="movie-release-date">Release Date: {movie.release_date}</p>
                </div>
              </Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}



export default MovieList;
