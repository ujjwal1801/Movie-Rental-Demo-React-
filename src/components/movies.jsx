import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
// import { deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    if (this.state.movies.length === 0)
      return (
        <span>
          <h4>There are no movies in the databse</h4>
        </span>
      );

    return (
      <React.Fragment>
        {/* <nav class="navbar navbar-dark primary-color">
          <a class="navbar-brand" href="#">Link</a>
        </nav>

        <br />


        <nav class="navbar navbar-light blue lighten-4">
          <span class="navbar-brand">Heading</span>
        </nav> */}
        <span>
          <h3>{this.numberOfMovies()}</h3>
        </span>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
      //   <p>{this.test()}</p>
    );
  }
  numberOfMovies = () => {
    let movieLength = this.state.movies.length;
    if (movieLength === 0) {
      return "There are no movies in the database";
    }
    return `Showing ${movieLength} movies from the database`;
  };

  deleteMovie = movie => {
    // console.log(movie);
    let index = this.state.movies.indexOf(movie);
    // console.log(this.state.movies.splice(index, 1));
    this.setState({
      movies: this.state.movies.filter(m => m._id !== movie._id)
    });
  };
}

export default Movies;
