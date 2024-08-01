import React from 'react'

const MovieDisplay = ({movieDetails}) => {
   
    console.log(movieDetails)
  return (
    <>
    <p>{movieDetails.genre}</p>
    </>
  )
}

export default MovieDisplay