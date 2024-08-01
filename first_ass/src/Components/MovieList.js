import React,{useState} from 'react';
import {movieData} from '../Data/data';

const MovieList = ({updateMovie}) => {
console.log(movieData)
  return (
    <div>
      {
        movieData.map(movie =>{
            return <h3 onClick={()=> updateMovie(movie)}>{movie.title}</h3>
        })
      }

    </div>
  )
}

export default MovieList