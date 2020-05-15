import React, { Component } from 'react'
import './form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      posterImg: '',
    }
  }

  handleAdd(e) {
    e.preventDefault()
    const { title, year, posterImg } = this.state
    this.props.addMovie(title, year, posterImg)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleAdd(e)} className="Form">
        <input
          onChange={(e) => this.handleChange(e)}
          name="title"
          placeholder="Title"
        />
        <input
          onChange={(e) => this.handleChange(e)}
          name="year"
          placeholder="Year"
        />
        <input
          onChange={(e) => this.handleChange(e)}
          name="posterImg"
          placeholder="Poster url"
        />
        <button type="submit">Add Movie</button>
      </form>
    )
  }
}
export default Form
