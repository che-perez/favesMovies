import React, { Component } from "react";
import Styled from "styled-components";
import Moment from "react-moment";

class Movies extends Component {
  constructor() {
    super();
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
    color: ${this.props.color};
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

      <Box
        onClick={() => this.props.selectMovie(this.props.id, this.props.list)}
      >
        {poster}
        <div>
          <Title>{this.props.title}</Title>
          <Year>
            <Moment format="YYYY">{this.props.release_date}</Moment>
          </Year>
        </div>
        {this.props.inFavorites ? (
        <Fav color='red' >
          <i className="fas fa-heart"></i>
        </Fav>
        ) : (
          <Fav onClick={() => this.props.addOrRemove(this.props.id)}>
          {this.props.icon}
        </Fav>
        )}
      </Box>
    );
  }
}

export default Movies;
