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
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }

  componentDidMount() {
    this.props.searchList
      ? this.setState({ displayList: this.props.searchList })
      : this.setState({ displayList: [] });
  }

  displayList(list) {
    this.setState({ displayList: list });
  }

  addToFavorites(id) {
    let faveMovie = this.state.displayList.filter(movie => movie.id === id);

    let data = {
      title: faveMovie[0].title,
      overview: faveMovie[0].overview,
      poster_path: faveMovie[0].poster_path,
      backdrop_path: faveMovie[0].backdrop_path,
      movie_id: faveMovie[0].id,
      release_date: faveMovie[0].release_date
    };
    fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
  }

  removeFromFavorites(id) {
    fetch(`/api/favorites/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  render() {
    let icon;
    let addOrRemove;
    if (this.state.displayList === this.props.searchList) {
      icon = <i className="far fa-heart" title="Add to Favorites" />;
      addOrRemove = this.addToFavorites;
    } else {
      icon = <i className="far fa-trash-alt" title="Remove from Favorites" />;
      addOrRemove = this.removeFromFavorites;
    }

    const Container = Styled.div`
      width: 30vw;
      height: 98vh;
      background: #EEEEEE;
      `;

    const List = Styled.div`
    overflow-y: scroll;
    height: auto;
    max-height: 88vh;
    
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
                addOrRemove={addOrRemove}
              />
            );
          })}
        </List>
      </Container>
    );
  }
}

export default MovieResults;
