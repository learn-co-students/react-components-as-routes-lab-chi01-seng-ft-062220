import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index)=>{
        return <div key={index}>
          <h2>Name: {actor.name}</h2>
          <h4>Movies:</h4>
          <ul>
          {actor.movies.map((movie, index2)=>{
            return <li key={index2}>{movie}</li>
          })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
