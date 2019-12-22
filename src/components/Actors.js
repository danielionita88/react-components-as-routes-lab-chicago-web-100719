import React from 'react';
import { actors } from '../data';


const renderActors=()=>{
  return actors.map((actor,index)=><div key={index}>
  <h3>Name: {actor.name}</h3>
  <ul>
    {actor.movies.map((movie,index)=> <li key={index}>
    {movie}
    </li>)}
  </ul>

  </div>)
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
