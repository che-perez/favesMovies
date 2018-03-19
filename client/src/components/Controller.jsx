import React, { Component } from "react";
import Styled from 'styled-components';

import SearchBar from "./SearchBar";
import MoviesResults from "./MoviesResults";
import MovieDetails from "./MoviesDetails";

class Controller extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      searchList: [],
      favesMovies: [],
      isLoaded: false
    };
    this.searchMovie = this.searchMovie.bind(this);
  }

  componentDidMount() {
    this.getFavesMovies();
  }

  getFavesMovies() {
    fetch("/api/favorites")
      .then(res => res.json())
      .then(res => {
        this.setState({
          favesMovies: res.data.movies
        });
      })
      .catch(err => console.log(err));
  }

  searchMovie(title) {
    fetch(`/api/search/${title}`)
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            isLoaded: true,
            searchList: res.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const Container = Styled.div`
      display: flex;

    `;
    return (
      <div>
        <SearchBar searchMovie={this.searchMovie} />
        <Container>
        <MoviesResults
          favesMovies={this.state.favesMovies}
          searchList={this.state.searchList}
        />
        <MovieDetails />
        </Container>
      </div>
    );
  }
}

export default Controller;
