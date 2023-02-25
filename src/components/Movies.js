/** @format */

import React from 'react'
import { movies } from '../data'

function Movies() {
  const moviess = movies.map((movie, i) => (
    <div key={i}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre, i) => (
          <li key={i}>{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {moviess}
    </div>
  )
}

export default Movies
