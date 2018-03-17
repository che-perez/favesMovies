import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MoviesResults from  './MoviesResults';
import MovieDetails from './MoviesDetails';

class Controller extends Component {
    constructor() {
        super();
        this.state = {
            movieSearch: null,
            favesMovies: null,
            dataLoaded: false
        }
    }

    render() {
        return (
            <div>
            <SearchBar />
            <MoviesResults />
            <MovieDetails />
            </div>
        )
    }
}

export default Controller;