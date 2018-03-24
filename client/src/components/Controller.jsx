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

  selectMovie(id,list) {
    let details = list.filter(movie => movie.id === id);
    this.setState({movieDetails: details, detailsLoaded: true });
  }

  addToFavorites(data, e) {
    e.preventDefault();
    fetch("/api/favorites", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
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
          selectMovie={this.selectMovie}
        />
        <MovieDetails details={this.state.movieDetails} detailsLoaded={this.state.detailsLoaded}/>
        </Container>
      </div>
    );
  }
}

export default Controller;
