import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
    }


    this.addMovie = this.addMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
  }

  addMovie(title, year, posterImg) {
    const newId = this.state.movies[this.state.movies.length - 1].id + 1

    const newMovie = { id: newId, title, year, posterImg }

    const updatedList = [...this.state.movies, newMovie]

    this.setState({
      movies: updatedList,
    })
  }

  deleteMovie(id) {
    const index = this.state.movies.findIndex((e) => e.id === id)
    const movieCopy = [...this.state.movies]
    movieCopy.splice(index, 1)
    this.setState({
      movies: movieCopy,
    })
  }

  render() {
    const moviesMap = this.state.movies.map((movie) => {
      return (
        <ListItem deleteMovie={this.deleteMovie} key={movie.id} movie={movie} />
      )
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
