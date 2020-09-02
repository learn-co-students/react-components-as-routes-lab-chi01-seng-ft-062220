import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index)=>{
        return <div key={index}>
          <h2>Name: {director.name}</h2>
          <h4>Movies:</h4>
          <ul>
          {director.movies.map((movie, index2)=>{
            return <li key={index2}>{movie}</li>
          })}
          </ul>
        </div>
      })}
    </div>
  );
}

export default Directors
