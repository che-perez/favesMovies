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
      width: 30vw;
      background: #EEEEEE;
        
        
        `;

    const Button = Styled.div`
      display: inline-block;
      background: #CCCCCC;
      color: white;
      width: 15vw;
      text-align: center;
      padding: 10px 0px;

      &:hover,:active {
        background: #21AAB2;
      }
        
        
        `;

    const Header = Styled.div`
        background: #777777;
        color: white;
        text-align: center;
        padding: 10px 0px;
        letter-spacing: 2px;
        font-weight: bold;
    `;

    return (
      <Container>
        <Header>FILMS</Header>
        <Button onClick={() => this.displayList(this.props.searchList)}>
          ALL {this.props.searchList.length}
        </Button>
        <Button onClick={() => this.displayList(this.props.favesMovies)}>
          FAVES {this.props.favesMovies.length}
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
