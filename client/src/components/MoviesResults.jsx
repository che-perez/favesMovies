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

    let icon;
    if(this.state.displayList === this.props.searchList) {
      icon = <i className="far fa-heart" title="Add to Favorites"/>;
    } else {
      icon = <i className="far fa-trash-alt" title="Remove from Favorites"/>
    }


    const Container = Styled.div`
      width: 30vw;
      background: #EEEEEE;
      `;

    const List = Styled.div`
    overflow-y: scroll;
    height: auto;
    max-height: 1125px;
    
    `;

    const Button = Styled.div`
      display: inline-block;
      background: #CCCCCC;
      color: white;
      width: 15vw;
      text-align: center;
      padding: 10px 0px;
      cursor: pointer;

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

    const NumberItems = Styled.span`
    background: white;
    color: black;
    margin-left: 2px;
    padding: 2px 4px;
    border-radius: 5px;
    text-align: center;
    `;

    return (
      <Container>
        <Header>FILMS</Header>
        <Button onClick={() => this.displayList(this.props.searchList)}>
          ALL <NumberItems>{this.props.searchList.length}</NumberItems>
        </Button>
        <Button onClick={() => this.displayList(this.props.favesMovies)}>
          FAVES <NumberItems>{this.props.favesMovies.length}</NumberItems>
        </Button>
        <List>
        {this.state.displayList.map(movie => {
          return (
            <Movies
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              selectMovie={this.props.selectMovie}
              list={this.state.displayList}
              icon={icon}
            />
          );
        })}
        </List>
      </Container>
    );
  }
}

export default MovieResults;