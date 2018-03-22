import React from "react";
import Styled from 'styled-components';
import Moment from 'react-moment';

const Movies = function(props) {
  let poster;
  if (props.poster) {
    poster = (
      <img
        src={`https://image.tmdb.org/t/p/w200${props.poster}`}
        alt={props.title}
        width="150"
      />
    );
  } else {
    poster = <img src="http://via.placeholder.com/150x225" alt={props.title} />;
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
    <Box onClick={() => props.selectMovie(props.id,props.list)} >
      {poster}
      <div>
      <Title>{props.title}</Title>
      <Year><Moment format="YYYY">{props.release_date}</Moment></Year>
      </div>
      <Fav><i className="far fa-heart"></i></Fav>
    </Box>
  );
};

export default Movies;
