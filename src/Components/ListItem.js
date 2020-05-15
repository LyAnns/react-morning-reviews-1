import React from 'react'
import './listItem.css'

function ListItem(props) {
  const { movie } = props
  return (
    <div className="List-Item">
      <img alt={movie.title} className="movie-poster" src={movie.posterImg} />
      <div className="movie-info">
        <p>{movie.title}</p>
        <p>{movie.year}</p>
      </div>
      <p onClick={() => props.deleteMovie(movie.id)} className="delete-button">
        X
      </p>
    </div>
  )
}

export default ListItem
