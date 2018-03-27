import React, { Component } from "react";
import Styled from "styled-components";
import Moment from "react-moment";

class Movies extends Component {
  constructor() {
    super();

    this.addToFavorites = this.addToFavorites.bind(this);
  }



addToFavorites(id) {
  let faveMovie = this.props.list.filter(movie => movie.id === id);

    let data = {
      title: faveMovie[0].title,
      overview: faveMovie[0].overview,
      poster_path: faveMovie[0].poster_path,
      backdrop_path: faveMovie[0].backdrop_path,
      movie_id: faveMovie[0].id,
      release_date: faveMovie[0].release_date
    };
    console.log('fave movie', data);
  fetch("/api/favorites", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
}

  render() {
    let poster;
    if (this.props.poster) {
      poster = (
        <img
          src={`https://image.tmdb.org/t/p/w200${this.props.poster}`}
          alt={this.props.title}
          width="150"
        />
      );
    } else {
      poster = (
        <img src="http://via.placeholder.com/150x225" alt={this.props.title} />
      );
    }

    const Box = Styled.div`
    display: flex;
    align-items: flex-start;
    background: white;
    margin: 4px 0px;
    border-right: 2px solid #EEEEEE;
    cursor: pointer;
    position: relative;
  `;

    const Fav = Styled.div`
    font-size: 20px;
    align-self: flex-end;
    margin: 0px 10px 0px 0px;
    position: absolute;
    right: 0;

    &:hover {
      color: red;
    }

  `;

    const Title = Styled.p`
    margin-left: 10px;
    font-size 1.5em;
  `;
    const Year = Styled.p`
    margin-left: 10px;
    font-weight: 100;
  `;

    return (
      <Box onClick={() => this.props.selectMovie(this.props.id, this.props.list)}>
        {poster}
        <div>
          <Title>{this.props.title}</Title>
          <Year>
            <Moment format="YYYY">{this.props.release_date}</Moment>
          </Year>
        </div>
        <Fav onClick={() => this.addToFavorites(this.props.id)}>
          {this.props.icon}
        </Fav>
      </Box>
    );
  }
}

export default Movies;
