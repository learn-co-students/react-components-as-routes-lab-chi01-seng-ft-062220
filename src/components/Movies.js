import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index)=>{
        return <div key={index}>
          <h2>Name: {movie.title}</h2>
          <h4>Time: {movie.time}</h4>
          <h4>Genres:</h4>
          <ul>
          {movie.genres.map((genre, index2)=>{
            return <li key={index2}>{genre}</li>
          })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
