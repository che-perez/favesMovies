import React, { Component } from "react";
import Styled from "styled-components";

import Movies from "./Movies";

class MovieResults extends Component {
  constructor() {
    super();
    this.state = {
      displayList: []
    };

    this.displayList = this.displayList.bind(this);
  }

  displayList(list) {
    this.setState({ displayList: list });
  }

  render() {
    const Container = Styled.div`
        
        
        `;

    const Button = Styled.button`
        
        
        `;

    return (
      <Container>
        <Button onClick={() => this.displayList(this.props.searchList)}>
          All {this.props.searchList.length}
        </Button>
        <Button onClick={() => this.displayList(this.props.favesMovies)}>
          Faves {this.props.favesMovies.length}
        </Button>
        {this.state.displayList.map(movie => {
          return (
            <Movies
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              release_date={movie.release_date}
            />
          );
        })}
      </Container>
    );
  }
}

export default MovieResults;
