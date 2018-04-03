import React, { Component } from "react";
import Styled from "styled-components";

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
      isLoaded: false,
      movieDetails: [],
      detailsLoaded: false
    };
    this.searchMovie = this.searchMovie.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
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

  checkMovies() {
    let alreadyFave = this.state.searchList.map(movie => {
      if (this.state.favesMovies.some(fave => fave.movie_id === movie.id)) {
        movie.inFavorites = true;
      }
      return movie;
    });

    return alreadyFave;
  }

  selectMovie(id, list) {
    let details = list.filter(movie => movie.id === id);
    this.setState({ movieDetails: details, detailsLoaded: true });
  }

  render() {
    const Container = Styled.div`
      display: flex;

    `;
    let list = this.checkMovies();
    return (
      <div>
        <SearchBar searchMovie={this.searchMovie} />
        <Container>
          <MoviesResults
            favesMovies={this.state.favesMovies}
            searchList={list}
            selectMovie={this.selectMovie}
          />
          <MovieDetails
            details={this.state.movieDetails}
            detailsLoaded={this.state.detailsLoaded}
          />
        </Container>
      </div>
    );
  }
}

export default Controller;
