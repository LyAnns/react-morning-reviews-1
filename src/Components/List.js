import React, { Component } from 'react'
import ListItem from './ListItem'
import Form from './Form'
import movies from '../data/movies.json'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: movies,
    }

    this.addMovie = this.addMovie.bind(this)
  }

  addMovie(title, year, posterImg) {
    const newId = this.state.movies[this.state.movies.length - 1].id + 1

    const newMovie = { id: newId, title, year, posterImg }

    const updatedList = [...this.state.movies, newMovie]

    this.setState({
      movies: updatedList,
    })
  }

  deleteMovie(id) {}

  render() {
    const moviesMap = this.state.movies.map((movie) => {
      return <ListItem key={movie.id} movie={movie} />
    })
    return (
      <div className="List">
        <Form addMovie={this.addMovie} />
        {moviesMap}
      </div>
    )
  }
}
export default List
